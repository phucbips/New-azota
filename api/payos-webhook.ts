import { VercelRequest, VercelResponse } from '@vercel/node';
import { PayOS } from '@payos/node';
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

    // Special case for PayOS confirm-webhook test payload
    if (req.body && req.body.webhookUrl && !req.body.signature) {
        return res.status(200).json({ success: true, message: 'Webhook URL test received.' });
    }

    try {
        const payOS = new PayOS({
            clientId: process.env.PAYOS_CLIENT_ID || '',
            apiKey: process.env.PAYOS_API_KEY || '',
            checksumKey: process.env.PAYOS_CHECKSUM_KEY || ''
        });

        // This verifies the signature and throws an error if invalid
        // In v2, webhooks.verify() returns the inner `WebhookData` object directly.
        // It throws an error if the signature is invalid.
        const webhookData = await payOS.webhooks.verify(req.body);

        if (webhookData && webhookData.code === '00') {
            const orderCode = webhookData.orderCode;
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
        console.error('PayOS Webhook Error:', error);

        // Handle webhook validation/verification specific errors gracefully.
        // Important: PayOS dashboard URL verification requires a 200 OK response even if the dummy payload
        // signature is missing or mismatched (e.g., when the user hasn't synced the Checksum Key yet).
        // Returning 400 or 500 will cause the PayOS dashboard to say "Webhook URL is not working".
        if (
            error.name === 'WebhookError' ||
            error.message?.includes('integrity') ||
            error.message?.includes('signature') ||
            error.message?.includes('Invalid')
        ) {
            return res.status(200).json({
                success: true,
                message: 'Webhook received but signature validation failed. Ignored.'
            });
        }

        // Only return 500 for actual server/database crashes, though even here returning 200 with an error object
        // is often safer for webhooks to prevent automatic retries from flooding the server.
        return res.status(200).json({
            success: false,
            message: 'Internal processing error',
            error: error.message
        });
    }
}
