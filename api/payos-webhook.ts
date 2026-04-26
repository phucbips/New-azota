import { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin dynamically inside handler to avoid top level crashes
const initAdmin = () => {
    if (!admin.apps.length) {
        try {
            let credential;
            if (process.env.FIREBASE_SERVICE_ACCOUNT_KEY) {
                const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);
                credential = admin.credential.cert(serviceAccount);
            } else {
                credential = admin.credential.applicationDefault();
            }
            admin.initializeApp({ credential });
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

        // Handle missing/invalid data gracefully
        if (!data || !data.orderCode) {
            console.log('No orderCode in webhook data - test request or invalid payload');
            return res.status(200).json({ success: true });
        }

        initAdmin();

        if (!admin.apps.length) {
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
                paidAt: admin.firestore.FieldValue.serverTimestamp()
            });

            if (orderData.items && Array.isArray(orderData.items)) {
                const courseIds: string[] = [];
                for (const item of orderData.items) {
                    courseIds.push(item.courseId);

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
            }
        }

        return res.status(200).json({ success: true });

    } catch (error: unknown) {
        console.error('Webhook error:', error);
        // Always return success to PayOS to prevent retry loops
        return res.status(200).json({ success: true });
    }
}
