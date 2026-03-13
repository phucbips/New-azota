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

    try {
        // Attempt to read PayOS keys from Firestore Database (Admin UI settings)
        let clientId = process.env.PAYOS_CLIENT_ID || '';
        let apiKey = process.env.PAYOS_API_KEY || '';
        let checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

        if (admin.apps.length) {
            try {
                const db = admin.firestore();
                const settingsDoc = await db.collection('app_settings').doc('general').get();
                if (settingsDoc.exists) {
                    const data = settingsDoc.data();
                    if (data?.integrations) {
                        if (data.integrations.payosClientId) clientId = data.integrations.payosClientId;
                        if (data.integrations.payosApiKey) apiKey = data.integrations.payosApiKey;
                        if (data.integrations.payosChecksumKey) checksumKey = data.integrations.payosChecksumKey;
                    }
                }
            } catch (dbErr) {
                console.warn('Could not read PayOS keys from database, falling back to process.env', dbErr);
            }
        }

        if (!clientId || !apiKey || !checksumKey) {
            console.error('Missing PayOS Configuration. Checksum Key is required for webhooks.');
            return res.status(200).json({ success: false, message: 'Server missing config but returning 200' });
        }

        const payOS = new PayOS({
            clientId,
            apiKey,
            checksumKey
        });

        // PayOS Dashboard often sends a test webhook to verify the URL
        // It might not have the full structure. We should wrap verification in a try/catch
        // but ALWAYS return 200 OK so PayOS accepts our URL.
        let webhookData;
        try {
            webhookData = await payOS.webhooks.verify(req.body);
        } catch (verifyError: any) {
            console.error('PayOS Signature Verification Failed (might be a test ping):', verifyError.message || String(verifyError));
            // Return 200 OK anyway so the Webhook can be successfully added in the PayOS dashboard
            return res.status(200).json({ success: true, message: 'Webhook URL verified (signature check failed but accepted)' });
        }

        // WebhookData in @payos/node v2 contains the nested properties directly
        // code / desc are at the top level in the req.body, but the SDK returns the data object
        if (webhookData && webhookData.orderCode) {
            const orderCode = webhookData.orderCode;

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

                // Update course enrollments & user access
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

                    // Automatically add the courses to the user's enrolledCourses array
                    if (orderData.userId && courseIds.length > 0) {
                        const userRef = db.collection('users').doc(orderData.userId);
                        await userRef.update({
                            enrolledCourses: admin.firestore.FieldValue.arrayUnion(...courseIds)
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
