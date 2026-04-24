import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Order, orderService } from '../../services/order.service';
import { Loader2, CheckCircle, Clock, AlertTriangle } from 'lucide-react';

export const PaymentQR: React.FC = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId');
    const navigate = useNavigate();
    const [order, setOrder] = useState<Order | null>(null);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes
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

            try {
                // Determine base URL dynamically depending on environment
                const baseUrl = window.location.origin;

                const response = await fetch('/api/create-payment-link', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        orderCode: o.orderCode,
                        amount: o.amount,
                        description: `${o.orderCode}`,
                        returnUrl: `${baseUrl}/student/courses`,
                        cancelUrl: `${baseUrl}/student/courses`,
                    })
                });

                if (!response.ok) {
                    const errData = await response.json();
                    throw new Error(errData.message || 'Lỗi server');
                }

                const result = await response.json();
                setCheckoutUrl(result.checkoutUrl);
            } catch (err: any) {
                console.error("Lỗi tạo PayOS link:", err);
                // Display the specific error message from the server if available
                setError(err.message || "Không thể tạo link thanh toán tự động lúc này. Vui lòng chuyển khoản thủ công.");
            }
        };

        fetchOrderAndGenerateLink();
    }, [orderId, navigate]);



    // Timer logic
    useEffect(() => {
        if (!order || order.status === 'paid' || order.status === 'cancelled') return;

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Cancel order

                    navigate('/student/courses');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [order, navigate]);

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
                    <p className="mb-4">Bạn có thể chuyển khoản thủ công với nội dung: <strong>{order.orderCode}</strong></p>
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

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
            <div className="bg-background max-w-4xl w-full rounded-3xl shadow-xl border border-border overflow-hidden flex flex-col lg:flex-row min-h-[100dvh] md:min-h-[600px] md:h-[80vh]">

                {/* Left Side - Details & Timer */}
                <div className="lg:w-1/3 p-8 border-b lg:border-b-0 lg:border-r border-border bg-card flex flex-col">
                    <h2 className="text-2xl font-bold font-display mb-1 text-foreground">Thanh toán</h2>
                    <p className="text-sm text-muted-foreground mb-6">Mã đơn hàng: {order.orderCode}</p>

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

                            <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center justify-center gap-3 font-mono text-xl font-bold border border-red-100 mb-4">
                                <Clock className="w-5 h-5" />
                                {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                            </div>
                            <p className="text-xs text-center text-muted-foreground">Vui lòng hoàn tất thanh toán trong thời gian này. Đơn hàng sẽ tự động hủy nếu quá hạn.</p>
                        </div>
                    </div>
                </div>

                {/* Right Side - PayOS Iframe */}
                <div className="lg:w-2/3 bg-white w-full flex-1 md:h-full min-h-[500px] relative" id="embeded-payment-container">
                     {checkoutUrl ? (
                        <iframe
                            src={checkoutUrl}
                            title="Thanh toán PayOS"
                            className="w-full h-full border-0"
                            allow="payment"
                        />
                     ) : (
                         <div className="flex items-center justify-center h-full">
                            <Loader2 className="w-8 h-8 animate-spin text-primary" />
                         </div>
                     )}
                </div>
            </div>
        </div>
    );
}

export default PaymentQR;
