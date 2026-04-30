import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Order, orderService } from '../../services/order.service';
import { Loader2, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const PaymentQR: React.FC = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId');
    const navigate = useNavigate();
    const [order, setOrder] = useState<Order | null>(null);
     // 10 minutes
    const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (!orderId) {
            navigate('/student/courses');
            return;
        }

        const fetchOrderAndGenerateLink = async () => {
            const o = await orderService.getOrder(orderId);
            if (!o) {
                setError("Không tìm thấy đơn hàng.");
                return;
            }
            setOrder(o);

            if (o.status === 'paid') {
                navigate('/student/courses');
                return;
            }

            if (o.checkoutUrl) {
                setCheckoutUrl(o.checkoutUrl);
                window.location.href = o.checkoutUrl;
                return;
            }

            try {
                // Determine base URL dynamically depending on environment
                const baseUrl = window.location.origin;

                const response = await fetch('/api/create-payment-link', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderCode: o.orderCode,
                        amount: o.amount,
                        description: (() => {
                            // Extract name from email (before @)
                            const emailStr = o.userEmail || '';
                            let prefix = emailStr.split('@')[0];
                            // Remove special chars to comply with PayOS
                            prefix = prefix.replace(/[^a-zA-Z0-9 ]/g, '');
                            if (!prefix) prefix = o.displayCode || `${o.orderCode}`;
                            return prefix.substring(0, 25);
                        })(),
                        returnUrl: `${baseUrl}/student/payment/success`,
                        cancelUrl: `${baseUrl}/student/payment/success`,
                    })
                });

                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Lỗi server');
                }

                const result = await response.json();
                setCheckoutUrl(result.checkoutUrl);
                // Save checkoutUrl to prevent PayOS Error 231 on resume
                await orderService.updateCheckoutUrl(orderId, result.checkoutUrl);
                // Automatically redirect to PayOS checkout page
                window.location.href = result.checkoutUrl;
            } catch (err: any) {
                console.error("Lỗi tạo PayOS link:", err);
                // Display the specific error message from the server if available
                setError(err.message || "Không thể tạo link thanh toán tự động lúc này. Vui lòng chuyển khoản thủ công.");
            }
        };

        fetchOrderAndGenerateLink();
    }, [orderId, navigate]);



    // Timer logic removed: Orders now wait indefinitely.

    // Polling order status logic to detect webhook/admin approval
    useEffect(() => {
        if (!order || order.status === 'paid') return;

        const pollTimer = setInterval(async () => {
            const currentOrder = await orderService.getOrder(order.id);
            if (currentOrder && currentOrder.status === 'paid') {
                 clearInterval(pollTimer);
                 navigate('/student/courses');
            }
        }, 5000); // Poll every 5s

        return () => clearInterval(pollTimer);
    }, [order, navigate]);

    if (error && order) {
         return (
            <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
                <div className="bg-background max-w-md w-full rounded-3xl shadow-xl border border-border p-8 text-center">
                    <AlertTriangle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
                    <h2 className="text-xl font-bold mb-2">Lỗi kết nối Cổng Thanh Toán</h2>
                    <p className="text-muted-foreground mb-6">{error}</p>
                    <p className="mb-4">Bạn có thể chuyển khoản thủ công với nội dung: <strong>{order.displayCode || order.orderCode}</strong></p>
                    <p className="text-xl font-bold text-primary mb-6">{new Intl.NumberFormat('vi-VN').format(order.amount)}đ</p>
                    <button onClick={() => navigate('/student/courses')} className="w-full py-3 bg-primary text-white font-bold rounded-xl">Quay lại Khóa học</button>
                </div>
            </div>
         );
    }

    if (!order || !checkoutUrl) {
         return (
             <div className="min-h-screen flex flex-col items-center justify-center">
                 <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
                 <p className="text-muted-foreground">Đang khởi tạo thanh toán bảo mật...</p>
             </div>
         );
    }



    return (
        <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
            <div className="bg-background max-w-4xl w-full rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col lg:flex-row min-h-[100dvh] md:min-h-[600px] md:h-[80vh]">

                {/* Left Side - Details & Timer */}
                <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-border bg-card flex flex-col">
                    <h2 className="text-2xl font-bold font-display mb-1 text-foreground">Thanh toán</h2>
                    <p className="text-sm text-muted-foreground mb-6">Mã đơn hàng: {order.displayCode || order.orderCode}</p>

                    <div className="flex-1">
                        <h3 className="text-lg font-bold text-foreground mb-4">Sản phẩm:</h3>
                        <ul className="space-y-3 mb-6">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="flex justify-between items-start">
                                    <span className="text-sm line-clamp-2 pr-4">{item.courseTitle}</span>
                                    <span className="font-medium text-sm whitespace-nowrap">{new Intl.NumberFormat('vi-VN').format(item.price)}đ</span>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t border-border pt-4 mt-auto">
                            <div className="flex justify-between items-center mb-6">
                                <span className="font-bold text-foreground">Tổng cộng</span>
                                <span className="text-2xl font-extrabold text-primary">
                                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}
                                </span>
                            </div>

                            <div className="bg-blue-50 text-blue-600 p-4 rounded-xl flex items-center justify-center gap-3 font-mono text-xl font-bold border border-blue-100 mb-4">
                                Đơn hàng đang chờ thanh toán
                            </div>
                            <p className="text-xs text-center text-muted-foreground">Vui lòng hoàn tất thanh toán. Đơn hàng không bị giới hạn thời gian.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - Redirecting */}
                <div className="lg:w-2/3 bg-white w-full flex-1 md:h-full min-h-[500px] relative flex flex-col items-center justify-center p-8 text-center" id="embeded-payment-container">
                     {checkoutUrl ? (
                         <div className="space-y-6">
                            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                                <CheckCircle className="w-10 h-10 text-green-600" />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900">Đơn hàng đã được tạo!</h3>
                            <p className="text-slate-500 max-w-md mx-auto">
                                Hệ thống đang chuyển hướng bạn đến cổng thanh toán an toàn của PayOS...
                            </p>
                            <a href={checkoutUrl} className="inline-block mt-4 px-8 py-3 bg-blue-600 text-white font-bold rounded-xl shadow-lg hover:bg-blue-700 transition-colors">
                                Đi đến trang thanh toán ngay
                            </a>
                         </div>
                     ) : (
                         <div className="flex flex-col items-center justify-center h-full space-y-4">
                            <Loader2 className="w-10 h-10 animate-spin text-blue-600" />
                            <p className="text-slate-500">Đang khởi tạo kết nối bảo mật...</p>
                         </div>
                     )}
                </div>
            </div>
        </div>
    );
}

export default PaymentQR;
