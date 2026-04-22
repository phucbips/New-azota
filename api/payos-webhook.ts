import { VercelRequest, VercelResponse } from '@vercel/node';
import * as admin from 'firebase-admin';
import { PayOS } from '@payos/node';

// Initialize Firebase Admin
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
    // 1. Phản hồi giao thức (Protocol Response Layer)
    // Luôn ưu tiên phản hồi nhanh để đáp ứng Timeout Budget của PayOS
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    try {
        // Khởi tạo PayOS SDK
        const clientId = process.env.PAYOS_CLIENT_ID || '';
        const apiKey = process.env.PAYOS_API_KEY || '';
        const checksumKey = process.env.PAYOS_CHECKSUM_KEY || '';

        if (!clientId || !apiKey || !checksumKey) {
            console.error('Missing PayOS config in Webhook');
            // Vẫn trả về 200 để tránh PayOS block Webhook endpoint
            return res.status(200).json({ success: true, message: 'Missing config but ok' });
        }

        const payOS = new PayOS({ clientId, apiKey, checksumKey });
        const webhookDataRaw = req.body;

        // Xử lý gói tin Handshake (bắt tay / confirm webhook)
        // Khi PayOS gửi test payload, webhookDataRaw.data có thể null hoặc không có
        if (!webhookDataRaw.data || !webhookDataRaw.signature) {
            return res.status(200).json({ success: true, message: 'Webhook URL verified' });
        }

        // 2. Lớp Ràng buộc Mật mã (Cryptographic Layer)
        // Sử dụng phương thức verifyPaymentWebhookData từ SDK để phân tích cú pháp (serialization)
        // chính xác theo chuẩn của PayOS, tránh lỗi "Phần mềm trung gian làm đột biến khối dữ liệu"
        let verifiedData;
        try {
            verifiedData = payOS.webhooks.verify(webhookDataRaw);
        } catch (error) {
            console.error('PayOS Invalid Signature:', error);
            // Phản hồi 200 OK để kháng lỗi timeout, nhưng không thực hiện logic cập nhật
            return res.status(200).json({ success: true, message: 'Invalid Signature ignored' });
        }

        // 3. Cơ chế Idempotency & Cập nhật hệ thống (Database Transaction & Idempotency)
        if (webhookDataRaw.code === '00' && verifiedData && verifiedData.orderCode) {
            const orderCode = verifiedData.orderCode;

            if (!admin.apps.length) {
                console.error('Firebase Admin not initialized.');
                return res.status(200).json({ success: true, message: 'App not ready' });
            }

            const db = admin.firestore();

            // Tìm kiếm đơn hàng
            let snapshot = await db.collection('orders').where('orderCode', '==', Number(orderCode)).limit(1).get();
            if (snapshot.empty) {
                snapshot = await db.collection('orders').where('orderCode', '==', String(orderCode)).limit(1).get();
            }

            if (!snapshot.empty) {
                const orderDoc = snapshot.docs[0];
                const orderData = orderDoc.data();

                // Tính Lũy Đẳng (Idempotency Check)
                // Nếu đơn hàng đã được đánh dấu thanh toán (bởi webhook trước đó hoặc check thủ công),
                // ta bỏ qua việc cộng dồn thông tin khóa học / số lượng học viên
                if (orderData.status === 'paid') {
                    console.log(`Order ${orderCode} already marked as paid. Idempotency constraint hit.`);
                    return res.status(200).json({ success: true, message: 'Order already processed' });
                }

                // Cập nhật trạng thái đơn hàng an toàn
                await orderDoc.ref.update({
                    status: 'paid',
                    paidAt: admin.firestore.FieldValue.serverTimestamp()
                });

                // Cấp quyền và cộng dồn học viên
                if (orderData.items && Array.isArray(orderData.items)) {
                    const courseIds: string[] = [];
                    for (const item of orderData.items) {
                        courseIds.push(item.courseId);

                        // Transaction cộng dồn số lượng học viên an toàn
                        const cRef = db.collection('courses').doc(item.courseId);
                        await db.runTransaction(async (t) => {
                            const cDoc = await t.get(cRef);
                            if (cDoc.exists) {
                                t.update(cRef, { enrollmentCount: admin.firestore.FieldValue.increment(1) });
                            }
                        });
                    }

                    // Tự động cấp quyền (Array Union là phép toán lũy đẳng tự nhiên trong Firestore)
                    if (orderData.userId && courseIds.length > 0) {
                        const userRef = db.collection('users').doc(orderData.userId);
                        await userRef.update({
                            enrolledCourses: admin.firestore.FieldValue.arrayUnion(...courseIds)
                        });
                    }
                }
            } else {
                console.warn(`Webhook validated but orderCode ${orderCode} not found in database.`);
            }
        }

        // Hoàn tất chu trình nhanh gọn
        return res.status(200).json({ success: true });

    } catch (error: any) {
        console.error('PayOS Webhook Internal Server Error:', error);
        // Luôn trả về 200 để kháng lỗi retry bão (Webhook Storm)
        return res.status(200).json({ success: true, message: 'Error handled gracefully' });
    }
}
