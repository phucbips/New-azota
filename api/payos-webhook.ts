import { VercelRequest, VercelResponse } from '@vercel/node';
import admin from 'firebase-admin';
import crypto from 'crypto';

// Initialize Firebase Admin dynamically inside handler to avoid top level crashes
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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // CORS Configuration
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
                console.log('Non-JSON request received, returning success');
                return res.status(200).json({ success: true });
            }
        }

        console.log('Webhook received:', JSON.stringify(body));

        const code = body?.code;
        const data = body?.data;
        const signature = body?.signature;

        // BẢO MẬT: Xác minh chữ ký (Signature Checksum) HMAC-SHA256
        const checksumKey = process.env.PAYOS_CHECKSUM_KEY;

        if (checksumKey && data && signature) {
            const sortedDataKeys = Object.keys(data).sort();
            const signData = sortedDataKeys
                .map((key) => `${key}=${data[key]}`)
                .join('&');

            const generatedSignature = crypto
                .createHmac('sha256', checksumKey)
                .update(signData)
                .digest('hex');

            if (generatedSignature !== signature) {
                console.error('Invalid signature. Potential spoofing attack detected!');
                return res.status(200).json({ success: false, message: 'Invalid signature' });
            }
        }

        if (!data || !data.orderCode) {
            console.log('No orderCode in webhook data - test request or invalid payload');
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

        // Find payment
        let snapshot = await db.collection('orders').where('orderCode', '==', Number(orderCode)).limit(1).get();
        if (snapshot.empty) {
            snapshot = await db.collection('orders').where('orderCode', '==', String(orderCode)).limit(1).get();
        }

        if (snapshot.empty) {
            console.log('Payment not found for orderCode:', orderCode);
            return res.status(200).json({ success: true });
        }

        const orderDoc = snapshot.docs[0];
        const orderData = orderDoc.data();

        if (orderData.status === 'paid') {
            console.log(`Order ${orderCode} already paid. Skipping.`);
            return res.status(200).json({ success: true });
        }

        if (paymentStatus === 'paid') {
            await orderDoc.ref.update({
                status: 'paid',
                paidAt: admin.firestore.FieldValue.serverTimestamp(),
                updatedAt: admin.firestore.FieldValue.serverTimestamp(),
                paymentMethod: 'bank_transfer'
            });

            const courseTitles: string[] = [];

            if (orderData.items && Array.isArray(orderData.items)) {
                const courseIds: string[] = [];
                for (const item of orderData.items) {
                    courseIds.push(item.courseId);
                    if (item.courseTitle) courseTitles.push(item.courseTitle);

                    const cRef = db.collection('courses').doc(item.courseId);
                    await db.runTransaction(async (t) => {
                        const cDoc = await t.get(cRef);
                        if (cDoc.exists) {
                            t.update(cRef, { enrollmentCount: admin.firestore.FieldValue.increment(1) });
                        }
                    });
                }

                if (orderData.userId && courseIds.length > 0) {
                    const userRef = db.collection('users').doc(orderData.userId);
                    await userRef.update({
                        enrolledCourses: admin.firestore.FieldValue.arrayUnion(...courseIds)
                    });
                }

                if (orderData.voucherCode) {
                    const voucherRef = db.collection('vouchers').doc(orderData.voucherCode);
                    await db.runTransaction(async (t) => {
                        const vDoc = await t.get(voucherRef);
                        if (vDoc.exists) {
                            t.update(voucherRef, { usedCount: admin.firestore.FieldValue.increment(1) });
                        }
                    });
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
