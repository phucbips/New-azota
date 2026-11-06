import { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import crypto from 'crypto';

const initAdmin = () => {
    if (!admin.apps?.length) {
        try {
            if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
                try {
                    const serviceAccountStr = process.env.FIREBASE_SERVICE_ACCOUNT_KEY.trim();
                    const parsedStr = serviceAccountStr.replace(/\\\\n/g, '\\n');
                    const serviceAccount = JSON.parse(parsedStr);
                    admin.initializeApp({
                        credential: admin.credential.cert(serviceAccount)
                    });
                } catch (parseError) {
                    console.error('Failed to parse FIREBASE_SERVICE_ACCOUNT_KEY as JSON', parseError);
                }
            } else if (process.env.FIREBASE_PROJECT_ID && process.env.FIREBASE_CLIENT_EMAIL && process.env.FIREBASE_PRIVATE_KEY) {
                admin.initializeApp({
                    credential: admin.credential.cert({
                        projectId: process.env.FIREBASE_PROJECT_ID,
                        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
                        privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\\\n/g, '\\n'),
                    })
                });
            } else {
                admin.initializeApp({
                    credential: admin.credential.applicationDefault()
                });
            }
        } catch (e) {
            console.error('Firebase Admin init error', e);
        }
    }
};

function sortObjDataByKey(object: Record<string, any>): Record<string, any> {
    const orderedObject: Record<string, any> = {};
    Object.keys(object)
        .sort()
        .forEach((key) => {
            orderedObject[key] = object[key];
        });
    return orderedObject;
}

/**
 * Matches @payos/node's official convertObjToQueryStr implementation:
 * - Sorts keys alphabetically
 * - Converts [null, undefined, 'undefined', 'null'] to '' (empty string)
 * - Serializes nested arrays with sorted keys
 */
function buildPayOSSignData(data: Record<string, any>): string {
    const sorted = sortObjDataByKey(data);
    return Object.keys(sorted)
        .filter((key) => sorted[key] !== undefined)
        .map((key) => {
            let value = sorted[key];
            if (value && Array.isArray(value)) {
                value = JSON.stringify(value.map((val) => (val && typeof val === 'object' ? sortObjDataByKey(val) : val)));
            }
            if ([null, undefined, 'undefined', 'null'].includes(value)) {
                value = '';
            }
            return `${key}=${value}`;
        })
        .join('&');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
    res.setHeader('Access-Control-Allow-Headers', '*');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    if (req.method === 'GET') {
        return res.status(200).json({ success: true, message: "Webhook endpoint is active. Ready to receive POST requests." });
    }

    try {
        let body: any = req.body;
        if (typeof body === 'string') {
            try {
                body = JSON.parse(body);
            } catch (e) {
                return res.status(200).json({ success: true });
            }
        }

        const code = body?.code;
        const data = body?.data;
        const signature = body?.signature;

        const checksumKey = process.env.PAYOS_CHECKSUM_KEY;

        if (checksumKey && data && signature) {
            const signData = buildPayOSSignData(data);

            const generatedSignature = crypto
                .createHmac('sha256', checksumKey)
                .update(signData)
                .digest('hex');

            if (generatedSignature !== signature) {
                console.error('Invalid signature on PayOS webhook.');
                return res.status(200).json({ success: false, message: 'Invalid signature' });
            }
        }

        if (!data || !data.orderCode) {
            return res.status(200).json({ success: true });
        }

        initAdmin();

        if (!admin.apps?.length) {
            console.error('Missing Firebase Env vars');
            return res.status(200).json({ success: true });
        }

        const db = admin.firestore();
        const orderCode = String(data.orderCode);
        const paymentStatus = code === '00' ? 'paid' : 'cancelled';

        // Find payment by current orderCode (number or string) OR in previousOrderCodes array (for resumed payments)
        let snapshot = await db.collection('orders').where('orderCode', '==', Number(orderCode)).limit(1).get();
        if (snapshot.empty) {
            snapshot = await db.collection('orders').where('orderCode', '==', String(orderCode)).limit(1).get();
        }
        if (snapshot.empty) {
            snapshot = await db.collection('orders').where('previousOrderCodes', 'array-contains', String(orderCode)).limit(1).get();
        }

        if (snapshot.empty) {
            console.log('Payment not found for orderCode:', orderCode);
            return res.status(200).json({ success: true });
        }

        const orderDoc = snapshot.docs[0];
        const orderData = orderDoc.data();

        if (orderData.status === 'paid') {
            return res.status(200).json({ success: true });
        }

        if (paymentStatus === 'paid') {
            await orderDoc.ref.update({
                status: 'paid',
                paidAt: admin.firestore.FieldValue.serverTimestamp(),
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                paymentMethod: 'bank_transfer'
            });

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

            // Increment enrollmentCount for each course
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

            // Grant courses to student immediately
            if (orderData.userId && courseIds.length > 0) {
                try {
                    const userRef = db.collection('users').doc(orderData.userId);
                    await userRef.set({
                        enrolledCourses: admin.firestore.FieldValue.arrayUnion(...courseIds)
                    }, { merge: true });
                } catch (uErr) {
                    console.error('Could not update user enrolledCourses:', uErr);
                }
            }

            // Increment voucher usage safely by querying code
            if (orderData.voucherCode) {
                try {
                    const vSnap = await db.collection('vouchers').where('code', '==', orderData.voucherCode).limit(1).get();
                    if (!vSnap.empty) {
                        await vSnap.docs[0].ref.update({
                            usageCount: admin.firestore.FieldValue.increment(1)
                        });
                    }
                } catch (vErr) {
                    console.warn('Could not increment voucher usage:', vErr);
                }
            }

            // Automatically record financial transaction and assign to active sales batch
            const paidAmount = Number(orderData.amount ?? data.amount ?? 0);
            if (paidAmount > 0) {
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
                    console.warn('Could not read active batch in webhook:', batchErr);
                }

                const titlesStr = courseTitles.length > 0 ? courseTitles.join(', ') : (orderData.courseTitle || 'Khóa học');
                const desc = `${orderData.userEmail || orderData.userName || orderCode} - ${titlesStr}${orderData.voucherCode ? ` - ${orderData.voucherCode}` : ''}`.trim();
                const txId = `order_${orderDoc.id}`;

                await db.collection('financial_transactions').doc(txId).set({
                    id: txId,
                    orderId: orderDoc.id,
                    type: 'income',
                    category: 'Bán khóa học',
                    amount: paidAmount,
                    description: desc,
                    batchId: activeBatchId,
                    createdBy: 'payos_webhook',
                    createdAt: admin.firestore.FieldValue.serverTimestamp(),
                }, { merge: true });
            }
        }

        return res.status(200).json({ success: true });

    } catch (error: unknown) {
        console.error('Webhook error:', error);
        return res.status(200).json({ success: true });
    }
}
