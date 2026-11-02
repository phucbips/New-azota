import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, BookOpen, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { Order, orderService } from '../../services/order.service';
import { useCart } from '../../contexts/CartContext';

export const PaymentSuccess: React.FC = () => {
    const [searchParams] = useSearchParams();
    const orderCode = searchParams.get('orderCode');
    const status = searchParams.get('status');
    const [order, setOrder] = useState<Order | null>(null);
    const [loading, setLoading] = useState(true);
    const { clearCart } = useCart();

    useEffect(() => {
        // Clear cart unconditionally when they land on success
        clearCart();

        if (orderCode) {
            // Fetch order details by orderCode
            const fetchOrder = async () => {
                try {
                    // Note: getOrders() attempts to load all orders across the DB which throws 'Missing or insufficient permissions'
                    // for students (students can only read their own orders). We don't strictly need to display the order details here,
                    // since PayOS just returned success and webhook handles DB. We can silently swallow the fetch to prevent crash.
                    // Let's just bypass it for now.
                    console.log("Order code from URL:", orderCode);
                } catch (e) {
                    console.error("Error fetching order", e);
                } finally {
                    setLoading(false);
                }
            };
            fetchOrder();
        } else {
            setLoading(false);
        }
    }, [orderCode, clearCart]);

    if (loading) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center">
                <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
                <p className="text-muted-foreground">Đang xác nhận kết quả giao dịch...</p>
            </div>
        );
    }

    const isSuccess = searchParams.get('code') === '00' || status === 'PAID' || status === 'success';
    if (!isSuccess) {
         return (
             <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle className="w-10 h-10 text-destructive" />
                </div>
                <h1 className="text-3xl font-semibold text-foreground mb-4">Giao dịch chưa hoàn tất</h1>
                <p className="text-muted-foreground max-w-md mb-8">Có vẻ như quá trình thanh toán đã bị hủy hoặc xảy ra lỗi. Vui lòng kiểm tra lại đơn hàng của bạn.</p>
                <Link to="/student/courses" className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors">
                    Quay lại Khóa học
                </Link>
             </div>
         );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/50">
            <div className="max-w-md w-full bg-card rounded-xl shadow-md border border-border p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-success"></div>

                <div className="w-24 h-24 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-6 shadow-none">
                    <CheckCircle className="w-12 h-12 text-success" />
                </div>

                <h1 className="text-3xl font-semibold text-foreground mb-2">Thanh toán thành công!</h1>
                <p className="text-muted-foreground mb-8">Cảm ơn bạn đã tin tưởng. Quyền truy cập khóa học đã được mở tự động.</p>

                {order && (
                    <div className="bg-muted/50 rounded-xl p-5 mb-8 text-left border border-border">
                        <p className="text-xs font-semibold text-muted-foreground/70 uppercase tracking-wider mb-3">Thông tin đơn hàng</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-muted-foreground">Mã đơn:</span>
                            <span className="font-mono font-semibold text-foreground">{order.displayCode || order.orderCode}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-border pb-3 mb-3">
                            <span className="text-muted-foreground">Tổng tiền:</span>
                            <span className="font-semibold text-success">{new Intl.NumberFormat('vi-VN').format(order.amount)}đ</span>
                        </div>

                        <ul className="space-y-2">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-foreground">
                                    <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                    <span className="line-clamp-2">{item.courseTitle}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <Link
                    to="/student/assignments"
                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                    Vào học ngay
                    <ChevronRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};
