import { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';

if (!admin.apps.length) {
    let credential;
    try {
      if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
        credential = admin.credential.cert(serviceAccount);
      } else {
         credential = admin.credential.applicationDefault();
      }
      admin.initializeApp({ credential });
    } catch (error) {
       console.error("Firebase Admin Init Error:", error);
    }
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
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { userId, userEmail, userName, items, paymentMethod, voucherCode } = req.body;

  if (!userId || !items || !Array.isArray(items) || items.length === 0) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const db = admin.firestore();
    let calculatedTotal = 0;
    const verifiedItems = [];

    // 1. Verify all courses exist and calculate authentic total price
    for (const item of items) {
       const courseRef = db.collection('courses').doc(item.courseId);
       const courseDoc = await courseRef.get();

       if (!courseDoc.exists) {
           return res.status(404).json({ error: `Course ${item.courseId} not found` });
       }

       const courseData = courseDoc.data();
       const price = courseData?.price || 0;

       calculatedTotal += price;
       verifiedItems.push({
           courseId: item.courseId,
           courseTitle: courseData?.title || 'Unknown Course',
           price: price
       });
    }

    let calculatedDiscount = 0;
    let appliedVoucherId = null;

    // 2. Verify Voucher securely if provided
    if (voucherCode) {
        const voucherQuery = await db.collection('vouchers')
             .where('code', '==', voucherCode.toUpperCase())
             .where('isActive', '==', true)
             .limit(1)
             .get();

        if (!voucherQuery.empty) {
             const voucherDoc = voucherQuery.docs[0];
             const v = voucherDoc.data();

             // Check min order
             if (!v.minOrderValue || calculatedTotal >= v.minOrderValue) {
                  // Check usage limits
                  if (!v.usageLimit || v.usageCount < v.usageLimit) {
                       if (v.type === 'percent') {
                           calculatedDiscount = (calculatedTotal * v.value) / 100;
                           if (v.maxDiscount) {
                               calculatedDiscount = Math.min(calculatedDiscount, v.maxDiscount);
                           }
                       } else {
                           calculatedDiscount = v.value;
                       }
                       appliedVoucherId = voucherDoc.id;
                  }
             }
        }
    }

    const finalPrice = Math.max(0, calculatedTotal - calculatedDiscount);
    const orderCode = Number(String(Date.now()).slice(-6) + Math.floor(Math.random() * 1000));
    const status = finalPrice === 0 ? 'paid' : 'pending';

    // 3. Create the order document securely as an Admin
    const orderRef = db.collection('orders').doc();

    await db.runTransaction(async (t) => {
        // Increment voucher count if used
        if (appliedVoucherId) {
            const vRef = db.collection('vouchers').doc(appliedVoucherId);
            t.update(vRef, { usageCount: admin.firestore.FieldValue.increment(1) });
        }

        // Save order
        t.set(orderRef, {
            userId,
            userEmail,
            userName,
            items: verifiedItems,
            originalAmount: calculatedTotal,
            discount: calculatedDiscount,
            amount: finalPrice,
            voucherCode: appliedVoucherId ? voucherCode.toUpperCase() : null,
            paymentMethod,
            status,
            orderCode,
            createdAt: admin.firestore.FieldValue.serverTimestamp()
        });
    });

    return res.status(200).json({
        success: true,
        orderId: orderRef.id,
        finalPrice,
        status
    });

  } catch (error: any) {
    console.error('Checkout Error:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: error.message });
  }
}
