import React, { useEffect, useState } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Order, orderService } from '../../services/order.service';
import { Loader2, CheckCircle, Clock } from 'lucide-react';

// Giả lập giao diện PayOS
export const PaymentQR: React.FC = () => {
    const [searchParams] = useSearchParams();
    const orderId = searchParams.get('orderId');
    const navigate = useNavigate();
    const [order, setOrder] = useState<Order | null>(null);
    const [timeLeft, setTimeLeft] = useState(600); // 10 minutes

    useEffect(() => {
        if (!orderId) {
            navigate('/student/courses');
            return;
        }

        // Listen to order changes to detect when admin/webhook marks it as paid
        const unsub = orderService.subscribeToUserOrders('temp', () => {}); // We actually just want to poll or listen to one order.

        const fetchOrder = async () => {
            const o = await orderService.getOrder(orderId);
            if (o) setOrder(o);
        };
        fetchOrder();

        const timer = setInterval(() => {
            setTimeLeft(prev => {
                if (prev <= 1) {
                    clearInterval(timer);
                    // Cancel order
                    orderService.updateOrderStatus(orderId, 'cancelled');
                    navigate('/student/courses');
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [orderId, navigate]);

    if (!order) return <div className="flex justify-center items-center h-screen"><Loader2 className="w-8 h-8 animate-spin" /></div>;

    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    return (
        <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
            <div className="bg-background max-w-md w-full rounded-3xl shadow-xl border border-border overflow-hidden">
                <div className="bg-primary p-6 text-white text-center">
                    <h2 className="text-2xl font-bold font-display">Thanh toán Đơn hàng</h2>
                    <p className="opacity-80 text-sm mt-1">{order.orderCode}</p>
                </div>

                <div className="p-8 flex flex-col items-center">
                    <div className="bg-muted p-4 rounded-2xl mb-6">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=PAYOS-${order.orderCode}`} alt="QR Code" className="w-48 h-48 rounded-lg" />
                    </div>

                    <h3 className="text-xl font-bold text-foreground mb-2">{order.courseTitle}</h3>
                    <p className="text-3xl font-extrabold text-emerald-600 mb-6">
                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}
                    </p>

                    <div className="w-full bg-red-50 text-red-600 p-4 rounded-xl flex items-center justify-center gap-3 font-mono text-lg font-bold border border-red-100">
                        <Clock className="w-6 h-6" />
                        {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                    </div>

                    <p className="text-sm text-muted-foreground text-center mt-4">
                        Mở ứng dụng ngân hàng và quét mã QR. Hệ thống sẽ tự động duyệt sau khi nhận được tiền.
                    </p>

                    {/* Nút giả lập (Dành cho Demo) */}
                    <button
                        onClick={() => {
                            orderService.updateOrderStatus(order.id, 'paid');
                            navigate('/student/courses');
                        }}
                        className="mt-6 text-xs text-primary underline"
                    >
                        (Dev) Bấm vào đây để giả lập đã thanh toán thành công
                    </button>
                </div>
            </div>
        </div>
    );
}
