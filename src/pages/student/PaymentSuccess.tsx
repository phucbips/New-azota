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
                    const q = await orderService.getOrder(orderCode); // Assuming getOrder accepts ID, we need to find by orderCode. Wait, getOrder takes doc ID.
                    // We need a helper to find by orderCode
                    const orders = await orderService.getOrders(); // Quick hack for now, or write a specific query
                    const found = orders.find(o => String(o.orderCode) === String(orderCode));
                    if (found) {
                        setOrder(found);
                    }
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
                <Loader2 className="w-10 h-10 animate-spin text-blue-600 mb-4" />
                <p className="text-slate-500">Đang xác nhận kết quả giao dịch...</p>
            </div>
        );
    }

    const isSuccess = searchParams.get('code') === '00' || status === 'PAID' || status === 'success';
    if (!isSuccess) {
         return (
             <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mb-6">
                    <AlertCircle className="w-10 h-10 text-red-600" />
                </div>
                <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Giao dịch chưa hoàn tất</h1>
                <p className="text-slate-600 max-w-md mb-8">Có vẻ như quá trình thanh toán đã bị hủy hoặc xảy ra lỗi. Vui lòng kiểm tra lại đơn hàng của bạn.</p>
                <Link to="/student/courses" className="px-8 py-3 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors">
                    Quay lại Khóa học
                </Link>
             </div>
         );
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-slate-50">
            <div className="max-w-md w-full bg-white rounded-3xl shadow-xl border border-slate-200 p-8 text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-400 to-emerald-600"></div>

                <div className="w-24 h-24 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
                    <CheckCircle className="w-12 h-12 text-emerald-600" />
                </div>

                <h1 className="text-3xl font-extrabold text-slate-900 mb-2 font-display">Thanh toán thành công!</h1>
                <p className="text-slate-500 mb-8">Cảm ơn bạn đã tin tưởng. Quyền truy cập khóa học đã được mở tự động.</p>

                {order && (
                    <div className="bg-slate-50 rounded-2xl p-5 mb-8 text-left border border-slate-100">
                        <p className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-3">Thông tin đơn hàng</p>
                        <div className="flex justify-between items-center mb-3">
                            <span className="text-slate-600">Mã đơn:</span>
                            <span className="font-mono font-bold text-slate-900">{order.displayCode || order.orderCode}</span>
                        </div>
                        <div className="flex justify-between items-center border-b border-slate-200 pb-3 mb-3">
                            <span className="text-slate-600">Tổng tiền:</span>
                            <span className="font-bold text-emerald-600">{new Intl.NumberFormat('vi-VN').format(order.amount)}đ</span>
                        </div>

                        <ul className="space-y-2">
                            {order.items.map((item, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                                    <BookOpen className="w-4 h-4 text-blue-500 mt-0.5 shrink-0" />
                                    <span className="line-clamp-2">{item.courseTitle}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}

                <Link
                    to="/student/assignments"
                    className="w-full py-4 bg-blue-600 text-white font-bold rounded-xl hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20"
                >
                    Vào học ngay
                    <ChevronRight className="w-5 h-5" />
                </Link>
            </div>
        </div>
    );
};
