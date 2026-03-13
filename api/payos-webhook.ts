import { VercelRequest, VercelResponse } from '@vercel/node';
const { PayOS } = require('@payos/node');
import * as admin from 'firebase-admin';
import { createHmac } from 'crypto';

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
        const checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

        if (!checksumKey) {
            console.error('Missing PayOS Checksum Key.');
            return res.status(200).json({ success: false, message: 'Server missing config' });
        }

        // --- Custom Manual Signature Verification (from PayOS documentation) ---
        const webhookDataRaw = req.body;

        // If it's just a test ping to add webhook URL
        if (!webhookDataRaw.data || !webhookDataRaw.signature) {
            return res.status(200).json({ success: true, message: 'Webhook URL verified' });
        }

        function sortObjDataByKey(object: any) {
            return Object.keys(object)
                .sort()
                .reduce((obj: any, key: string) => {
                    obj[key] = object[key];
                    return obj;
                }, {});
        }

        function convertObjToQueryStr(object: any) {
            return Object.keys(object)
                .filter((key) => object[key] !== undefined)
                .map((key) => {
                    let value = object[key];
                    if (value && Array.isArray(value)) {
                        value = JSON.stringify(value.map((val) => sortObjDataByKey(val)));
                    }
                    if ([null, undefined, 'undefined', 'null'].includes(value)) {
                        value = '';
                    }
                    return `${key}=${value}`;
                })
                .join('&');
        }

        const sortedDataByKey = sortObjDataByKey(webhookDataRaw.data);
        const dataQueryStr = convertObjToQueryStr(sortedDataByKey);
        const expectedSignature = createHmac('sha256', checksumKey).update(dataQueryStr).digest('hex');

        if (expectedSignature !== webhookDataRaw.signature) {
            console.error('PayOS Invalid Signature:', {
                expected: expectedSignature,
                received: webhookDataRaw.signature
            });
            // Still return 200 to satisfy webhook tests, but do NOT process order
            return res.status(200).json({ success: false, message: 'Invalid Signature' });
        }

        if (webhookDataRaw.code === '00' && webhookDataRaw.data && webhookDataRaw.data.orderCode) {
            const orderCode = webhookDataRaw.data.orderCode;

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
