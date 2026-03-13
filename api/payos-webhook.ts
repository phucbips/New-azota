import { VercelRequest, VercelResponse } from '@vercel/node';
import PayOS from '@payos/node';
import * as admin from 'firebase-admin';

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

export default async function handler(req: VercelRequest, res: VercelResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        const payOS = new PayOS(
            process.env.PAYOS_CLIENT_ID || '',
            process.env.PAYOS_API_KEY || '',
            process.env.PAYOS_CHECKSUM_KEY || ''
        );

        // PayOS Dashboard often sends a test webhook to verify the URL
        // It might not have the full structure. We should wrap verification in a try/catch
        // but ALWAYS return 200 OK so PayOS accepts our URL.
        let webhookData;
        try {
            webhookData = payOS.verifyPaymentWebhookData(req.body);
        } catch (verifyError: any) {
            console.error('PayOS Signature Verification Failed (might be a test ping):', verifyError.message);
            // Return 200 OK anyway so the Webhook can be successfully added in the PayOS dashboard
            return res.status(200).json({ success: true, message: 'Webhook URL verified (signature check failed but accepted)' });
        }

        if (webhookData.code === '00' && webhookData.success) {
            const orderCode = webhookData.data.orderCode;

            // Check if Firebase Admin is initialized
            if (!admin.apps.length) {
                console.error('Firebase Admin not initialized, cannot update Firestore.');
                return res.status(200).json({ success: true, message: 'Received but Firebase Admin not ready' });
            }

            const db = admin.firestore();

            // Search order by orderCode (number or string)
            let snapshot = await db.collection('orders').where('orderCode', '==', Number(orderCode)).limit(1).get();
            if (snapshot.empty) {
                snapshot = await db.collection('orders').where('orderCode', '==', String(orderCode)).limit(1).get();
            }

            if (!snapshot.empty) {
                const orderDoc = snapshot.docs[0];
                const orderData = orderDoc.data();

                // Update order status
                await orderDoc.ref.update({
                    status: 'paid',
                    paidAt: admin.firestore.FieldValue.serverTimestamp()
                });

                // Update course enrollments
                if (orderData.items && Array.isArray(orderData.items)) {
                    for (const item of orderData.items) {
                        const cRef = db.collection('courses').doc(item.courseId);
                        await db.runTransaction(async (t) => {
                            const cDoc = await t.get(cRef);
                            if (cDoc.exists) {
                                t.update(cRef, { enrollmentCount: admin.firestore.FieldValue.increment(1) });
                            }
                        });
                    }
                }
            } else {
                console.error(`Webhook matched signature but order ${orderCode} not found in DB.`);
            }
        }

        return res.status(200).json({ success: true });
    } catch (error: any) {
        console.error('PayOS Webhook Execution Error:', error);
        // Always return 200 to prevent PayOS from disabling the webhook
        return res.status(200).json({ success: false, message: 'Internal error occurred but webhook accepted' });
    }
}
