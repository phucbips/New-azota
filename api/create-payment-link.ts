import { VercelRequest, VercelResponse } from '@vercel/node';
import { PayOS } from '@payos/node';
import admin from 'firebase-admin';

const initAdmin = () => {
  if (!admin.apps?.length) {
    try {
      if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        try {
          const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.trim();
          const parsedStr = serviceAccountStr.replace(/\\\\n/g, '\\n');
          const serviceAccount = JSON.parse(parsedStr);
          admin.initializeApp({
            credential: admin.credential.cert(serviceAccount),
          });
        } catch (parseError) {
          console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY as JSON', parseError);
        }
      } else if (
        process.env.FIREBASE_PROJECT_ID &&
        process.env.FIREBASE_CLIENT_EMAIL &&
        process.env.FIREBASE_PRIVATE_KEY
      ) {
        admin.initializeApp({
          credential: admin.credential.cert({
            projectId: process.env.FIREBASE_PROJECT_ID,
            clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
            privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\\\n/g, '\\n'),
          }),
        });
      }
    } catch (e) {
      console.error('Firebase Admin init error in create-payment-link:', e);
    }
  }
};

/**
 * Completes a paid order on the server using Firebase Admin SDK:
 * - Updates order status to 'paid'
 * - Unlocks courses in users/{userId}.enrolledCourses
 * - Increments course enrollmentCount (if not already paid and not 0đ free non-voucher)
 * - Records financial transaction in active sales batch
 * - Cancels duplicate unpaid orders for the same user & courses
 */
async function completeOrderServerSide(
  db: admin.firestore.Firestore,
  orderDoc: admin.firestore.DocumentSnapshot,
  paidOrderCode: string,
  payosPaidAmount: number
): Promise<boolean> {
  const orderData = orderDoc.data();
  if (!orderData) return false;

  const expectedAmount = Number(orderData.amount ?? 0);
  if (expectedAmount > 0 && payosPaidAmount > 0 && payosPaidAmount < expectedAmount) {
    console.warn(
      `PayOS amountPaid (${payosPaidAmount}) is less than order amount (${expectedAmount}) for order ${orderDoc.id}`
    );
    return false;
  }

  const wasAlreadyPaid = orderData.status === 'paid';

  if (!wasAlreadyPaid) {
    await orderDoc.ref.update({
      status: 'paid',
      paidAt: admin.firestore.FieldValue.serverTimestamp(),
      updatedAt: admin.firestore.FieldValue.serverTimestamp(),
      paymentMethod: 'bank_transfer',
    });
  }

  const courseIds: string[] = [];
  const courseTitles: string[] = [];

  if (orderData.items && Array.isArray(orderData.items)) {
    for (const item of orderData.items) {
      if (item.courseId) courseIds.push(item.courseId);
      if (item.courseTitle) courseTitles.push(item.courseTitle);
    }
  } else if (orderData.courseId) {
    courseIds.push(orderData.courseId);
    if (orderData.courseTitle) courseTitles.push(orderData.courseTitle);
  }

  // Increment enrollmentCount only when transitioning to 'paid'
  const isFree = expectedAmount === 0 && !orderData.voucherCode;
  if (!wasAlreadyPaid && !isFree) {
    for (const cid of courseIds) {
      try {
        const cRef = db.collection('courses').doc(cid);
        await db.runTransaction(async (t) => {
          const cDoc = await t.get(cRef);
          if (cDoc.exists) {
            t.update(cRef, { enrollmentCount: admin.firestore.FieldValue.increment(1) });
          }
        });
      } catch (cErr) {
        console.warn('Could not increment course enrollmentCount:', cErr);
      }
    }
  }

  // Unlock courses in users/{userId}.enrolledCourses
  if (orderData.userId && courseIds.length > 0) {
    try {
      const userRef = db.collection('users').doc(orderData.userId);
      await userRef.set(
        {
          enrolledCourses: admin.firestore.FieldValue.arrayUnion(...courseIds),
        },
        { merge: true }
      );
    } catch (uErr) {
      console.error('Could not update user enrolledCourses:', uErr);
    }
  }

  // Auto-cancel duplicate unpaid orders of the same student covering the same courses
  if (orderData.userId && courseIds.length > 0) {
    try {
      const paidSet = new Set(courseIds);
      const userOrders = await db
        .collection('orders')
        .where('userId', '==', orderData.userId)
        .get();
      for (const d of userOrders.docs) {
        if (d.id === orderDoc.id) continue;
        const o = d.data();
        if (o.status !== 'pending' && o.status !== 'pay_later') continue;
        const ids: string[] = [];
        if (Array.isArray(o.items)) {
          o.items.forEach((it: any) => it?.courseId && ids.push(it.courseId));
        } else if (o.courseId) {
          ids.push(o.courseId);
        }
        if (ids.length === 0 || !ids.every((id) => paidSet.has(id))) continue;
        await d.ref.update({
          status: 'cancelled',
          notes: `Tự động hủy: trùng khóa học với đơn ${orderData.displayCode || paidOrderCode} đã thanh toán`,
          updatedAt: admin.firestore.FieldValue.serverTimestamp(),
        });
      }
    } catch (dupErr) {
      console.warn('Could not cancel duplicate unpaid orders:', dupErr);
    }
  }

  // Increment voucher usage when transitioning to 'paid'
  if (!wasAlreadyPaid && orderData.voucherCode) {
    try {
      const vSnap = await db
        .collection('vouchers')
        .where('code', '==', orderData.voucherCode)
        .limit(1)
        .get();
      if (!vSnap.empty) {
        await vSnap.docs[0].ref.update({
          usageCount: admin.firestore.FieldValue.increment(1),
        });
      }
    } catch (vErr) {
      console.warn('Could not increment voucher usage:', vErr);
    }
  }

  // Record financial transaction idempotently using deterministic ID `order_{orderDoc.id}`
  const finalPaidAmount = expectedAmount > 0 ? expectedAmount : payosPaidAmount;
  if (finalPaidAmount > 0) {
    let activeBatchId: string | null = null;
    try {
      const batchesSnap = await db.collection('app_settings').doc('finance_batches').get();
      if (batchesSnap.exists) {
        const batchesList = batchesSnap.data()?.batches;
        if (Array.isArray(batchesList)) {
          const active = batchesList.find((b: any) => b.status === 'active');
          if (active?.id) activeBatchId = active.id;
        }
      }
    } catch (batchErr) {
      console.warn('Could not read active batch:', batchErr);
    }

    const titlesStr =
      courseTitles.length > 0 ? courseTitles.join(', ') : orderData.courseTitle || 'Khóa học';
    const desc = `${orderData.userEmail || orderData.userName || paidOrderCode} - ${titlesStr}${
      orderData.voucherCode ? ` - ${orderData.voucherCode}` : ''
    }`.trim();
    const txId = `order_${orderDoc.id}`;

    await db
      .collection('financial_transactions')
      .doc(txId)
      .set(
        {
          id: txId,
          orderId: orderDoc.id,
          type: 'income',
          category: 'Bán khóa học',
          amount: finalPaidAmount,
          description: desc,
          batchId: activeBatchId,
          createdBy: 'payos_verified',
          createdAt: admin.firestore.FieldValue.serverTimestamp(),
        },
        { merge: true }
      );
  }

  return true;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS configuration
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const clientId = process.env.PAYOS_CLIENT_ID || '';
    const apiKey = process.env.PAYOS_API_KEY || '';
    const checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

    if (!clientId || !apiKey || !checksumKey) {
      return res.status(500).json({
        error: 'Missing PayOS Configuration',
        message:
          'Client ID, API Key, or Checksum Key is not configured. Please check Admin Settings or Environment Variables.',
      });
    }

    const payOS = new PayOS({
      clientId,
      apiKey,
      checksumKey,
    });

    initAdmin();
    const db = admin.apps?.length ? admin.firestore() : null;

    const { action, orderId, orderCode, orderCodes, amount, description, returnUrl, cancelUrl } =
      req.body || {};

    // Action 1: Check real-time payment status directly from PayOS API & complete order on server
    if (action === 'check-status') {
      let prefetchedOrderDoc: admin.firestore.DocumentSnapshot | null = null;
      const codesToCheck: string[] = Array.isArray(orderCodes)
        ? orderCodes.map(String)
        : orderCode
          ? [String(orderCode)]
          : [];

      if (db && orderId) {
        try {
          const snap = await db.collection('orders').doc(String(orderId)).get();
          if (snap.exists) {
            prefetchedOrderDoc = snap;
            const d = snap.data() || {};
            if (d.orderCode) codesToCheck.push(String(d.orderCode));
            if (Array.isArray(d.previousOrderCodes)) {
              d.previousOrderCodes.forEach((c: any) => c && codesToCheck.push(String(c)));
            }
          }
        } catch (err) {
          console.warn('Could not prefetch order by orderId:', err);
        }
      }

      const validCodes = Array.from(
        new Set(
          codesToCheck
            .map((c) => c.trim())
            .filter((c) => c && !isNaN(Number(c)) && Number(c) > 0)
        )
      );

      if (validCodes.length === 0) {
        return res.status(200).json({ anyPaid: false, results: {} });
      }

      const results: Record<string, any> = {};
      let anyPaid = false;
      let paidOrderCode: string | null = null;
      let paidAmountOnPayOS = 0;

      await Promise.all(
        validCodes.map(async (codeStr) => {
          try {
            const info: any = await payOS.paymentRequests.get(Number(codeStr));
            if (info) {
              const st = String(info.status || '').toUpperCase();
              const amt = Number(info.amount || 0);
              const amtPaid = Number(info.amountPaid || 0);
              const isPaid = st === 'PAID' || (amt > 0 && amtPaid >= amt);

              results[codeStr] = {
                status: st,
                amount: amt,
                amountPaid: amtPaid,
                isPaid,
              };

              if (isPaid) {
                anyPaid = true;
                paidOrderCode = codeStr;
                paidAmountOnPayOS = Math.max(amtPaid, amt);
              }
            }
          } catch (err: any) {
            results[codeStr] = { status: 'NOT_FOUND', isPaid: false };
          }
        })
      );

      let serverCompleted = false;
      let orderSummary: Record<string, any> | null = null;

      if (db) {
        try {
          let orderDoc: admin.firestore.DocumentSnapshot | null = prefetchedOrderDoc;
          const lookupCode = paidOrderCode || validCodes[0];
          if (!orderDoc && lookupCode) {
            let qSnap = await db
              .collection('orders')
              .where('orderCode', '==', String(lookupCode))
              .limit(1)
              .get();
            if (qSnap.empty) {
              qSnap = await db
                .collection('orders')
                .where('orderCode', '==', Number(lookupCode))
                .limit(1)
                .get();
            }
            if (qSnap.empty) {
              qSnap = await db
                .collection('orders')
                .where('previousOrderCodes', 'array-contains', String(lookupCode))
                .limit(1)
                .get();
            }
            if (!qSnap.empty) orderDoc = qSnap.docs[0];
          }

          if (orderDoc && orderDoc.exists) {
            const od = orderDoc.data() || {};
            if (anyPaid && paidOrderCode) {
              serverCompleted = await completeOrderServerSide(
                db,
                orderDoc,
                paidOrderCode,
                paidAmountOnPayOS
              );
            }
            orderSummary = {
              id: orderDoc.id,
              orderCode: od.orderCode,
              displayCode: od.displayCode,
              userEmail: od.userEmail,
              amount: od.amount,
              items: od.items || [],
              status: serverCompleted ? 'paid' : od.status,
            };
          }
        } catch (completeErr) {
          console.error('Server-side order completion error:', completeErr);
        }
      }

      return res.status(200).json({
        anyPaid,
        paidOrderCode,
        serverCompleted,
        orderSummary,
        results,
      });
    }

    // Action 2: Create payment link (default)
    if (!amount || !description || !orderCode || !returnUrl || !cancelUrl) {
      return res.status(400).json({ error: 'Missing required parameters' });
    }

    const parsedOrderCode = Number(orderCode);
    if (isNaN(parsedOrderCode)) {
      return res.status(400).json({
        error: 'Invalid Order Code format',
        message:
          'Đơn hàng cũ có chứa chữ cái (VD: EDU-...) không được hỗ trợ thanh toán tự động qua cổng PayOS. Vui lòng tạo đơn hàng mới hoặc chuyển khoản thủ công.',
      });
    }

    // Verify authoritative order amount from Firestore when possible to prevent client-side amount tampering
    let verifiedAmount = Number(amount);
    if (db && orderId) {
      try {
        const orderSnap = await db.collection('orders').doc(String(orderId)).get();
        if (orderSnap.exists) {
          const orderData = orderSnap.data()!;
          let dbAmount = Number(orderData.amount || 0);

          // If student order has no voucher, verify against actual course prices in Firestore
          if (!orderData.voucherCode && Array.isArray(orderData.items) && orderData.items.length > 0) {
            let sumCoursePrices = 0;
            for (const item of orderData.items) {
              if (item?.courseId) {
                const cSnap = await db.collection('courses').doc(String(item.courseId)).get();
                if (cSnap.exists) {
                  sumCoursePrices += Number(cSnap.data()?.price || 0);
                }
              }
            }
            if (sumCoursePrices > 0 && dbAmount !== sumCoursePrices) {
              dbAmount = sumCoursePrices;
              await orderSnap.ref.update({
                amount: sumCoursePrices,
                originalAmount: sumCoursePrices,
              });
            }
          }

          if (dbAmount > 0) {
            verifiedAmount = dbAmount;
          }
        }
      } catch (verifyErr) {
        console.warn('Could not verify order amount from Firestore:', verifyErr);
      }
    }

    const body = {
      orderCode: parsedOrderCode,
      amount: verifiedAmount,
      description: String(description).substring(0, 25),
      returnUrl,
      cancelUrl,
    };

    const paymentLinkResponse = await payOS.paymentRequests.create(body);
    const checkoutUrl = paymentLinkResponse.checkoutUrl;
    const paymentLinkId = paymentLinkResponse.paymentLinkId;

    return res.status(200).json({
      checkoutUrl,
      paymentLinkId,
    });
  } catch (error: any) {
    console.error('PayOS Error:', error);
    return res.status(500).json({
      error: 'Failed to process PayOS request',
      message: error.message || String(error),
    });
  }
}
