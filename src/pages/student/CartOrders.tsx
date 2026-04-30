import React, { useState, useEffect } from 'react';
import { useCart } from '../../contexts/CartContext';
import { orderService, Order } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate, Link } from 'react-router-dom';
import { BookOpen, ShoppingCart, Clock, CheckCircle, ArrowLeft, Loader2, CreditCard, Banknote, Tag } from 'lucide-react';
import { toast } from 'sonner';

export const CartOrders: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { cartItems, removeFromCart, clearCart } = useCart();

    const [activeTab, setActiveTab] = useState<'cart' | 'pending' | 'paid'>('cart');
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    // Cart specific state
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash'>('bank_transfer');
    const [isCheckingOut, setIsCheckingOut] = useState(false);

    useEffect(() => {
        // By default, select all items in cart
        setSelectedItems(cartItems.map(item => item.id));
    }, [cartItems]);

    useEffect(() => {
        let unsub = () => {};
        if (user?.uid) {
            unsub = orderService.subscribeToUserOrders(user.uid, (data) => {
                setOrders(data);
                setLoading(false);
            });
        }
        return () => unsub();
    }, [user]);

    const handleSelectAll = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
            setSelectedItems(cartItems.map(item => item.id));
        } else {
            setSelectedItems([]);
        }
    };

    const handleSelectItem = (id: string) => {
        setSelectedItems(prev => {
            if (prev.includes(id)) return prev.filter(i => i !== id);
            return [...prev, id];
        });
    };

    const itemsToCheckout = cartItems.filter(item => selectedItems.includes(item.id));
    const totalPrice = itemsToCheckout.reduce((sum, item) => sum + item.price, 0);

    const handleCheckout = async () => {
        if (!user || itemsToCheckout.length === 0) return;
        setIsCheckingOut(true);
        try {
            const items = itemsToCheckout.map(c => ({ courseId: c.id, courseTitle: c.title, price: c.price }));

            const orderId = await orderService.createOrder({
                userId: user.uid,
                userEmail: user.email,
                userName: user.displayName || 'Student',
                items: items,
                originalAmount: totalPrice,
                amount: totalPrice,
                status: totalPrice === 0 ? 'paid' : 'pending',
                paymentMethod: paymentMethod,
            });

            // Remove checked out items from cart
            itemsToCheckout.forEach(item => removeFromCart(item.id));

            if (totalPrice === 0) {
                toast.success("Nhận khóa học miễn phí thành công!");
                setActiveTab('paid');
                return;
            }

            if (paymentMethod === 'bank_transfer') {
                navigate(`/student/payment?orderId=${orderId}`);
            } else {
                toast.success("Đã ghi nhận yêu cầu. Admin sẽ duyệt sau khi nhận tiền mặt.");
                setActiveTab('pending');
            }
        } catch (e: any) {
            console.error(e);
            toast.error(`Lỗi tạo đơn hàng: ${e.message}`);
        } finally {
            setIsCheckingOut(false);
        }
    };

    // Khởi tạo thanh toán lại cho đơn hàng cũ
    // Tạo orderCode mới để PayOS chấp nhận (không bị trùng)
    const handleContinuePayment = async (order: Order) => {
        setIsCheckingOut(true);
        try {
            // Because PayOS throws error on duplicate orderCode, we just generate a brand new order
            // with the same items and cancel the old one, OR we could just update the orderCode.
            // But Firestore document ID is not orderCode. We can just update orderCode in the document.
            const newOrderCodeNum = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9000);
            const newOrderCode = String(newOrderCodeNum);
            const userSuffix = order.userId ? order.userId.substring(0, 4).toUpperCase() : 'GUst';
            const displayCode = `DH${String(newOrderCodeNum).slice(-4)} KH${userSuffix}`;

            // We update the existing order with the new orderCode so PayOS thinks it's a new request
            // And we clear the checkoutUrl so it generates a new one.
            const { doc, updateDoc } = await import('firebase/firestore');
            const { db } = await import('../../config/firebase');
            await updateDoc(doc(db, 'orders', order.id), {
                orderCode: newOrderCode,
                displayCode: displayCode,
                checkoutUrl: null // clear old URL
            });

            navigate(`/student/payment?orderId=${order.id}`);
        } catch (err) {
            console.error(err);
            toast.error("Không thể khởi tạo lại thanh toán.");
        } finally {
            setIsCheckingOut(false);
        }
    };

    const pendingOrders = orders.filter(o => o.status === 'pending' || o.status === 'pay_later');
    const paidOrders = orders.filter(o => o.status === 'paid');

    return (
        <div className="max-w-5xl mx-auto pb-20">
            <h1 className="text-3xl font-display font-extrabold mb-8 text-foreground">Giỏ hàng & Đơn hàng</h1>

            {/* Tabs Navigation */}
            <div className="flex space-x-1 bg-muted/50 p-1 rounded-xl mb-8 w-fit">
                <button
                    onClick={() => setActiveTab('cart')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${activeTab === 'cart' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <ShoppingCart className="w-5 h-5" /> Giỏ hàng ({cartItems.length})
                </button>
                <button
                    onClick={() => setActiveTab('pending')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${activeTab === 'pending' ? 'bg-background shadow-sm text-yellow-600' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Clock className="w-5 h-5" /> Chờ thanh toán ({pendingOrders.length})
                </button>
                <button
                    onClick={() => setActiveTab('paid')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-bold transition-all ${activeTab === 'paid' ? 'bg-background shadow-sm text-emerald-600' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <CheckCircle className="w-5 h-5" /> Lịch sử đã mua ({paidOrders.length})
                </button>
            </div>

            {/* Tab 1: Cart */}
            {activeTab === 'cart' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="bg-card rounded-2xl border border-border p-12 text-center flex flex-col items-center">
                                <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Giỏ hàng trống</h3>
                                <p className="text-muted-foreground mb-6">Bạn chưa có khóa học nào trong giỏ hàng.</p>
                                <button onClick={() => navigate('/student/courses')} className="px-6 py-3 bg-primary text-white font-bold rounded-xl">Khám phá khóa học</button>
                            </div>
                        ) : (
                            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                                <div className="p-4 border-b border-border bg-muted/20 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                                        onChange={handleSelectAll}
                                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                    />
                                    <span className="font-bold">Chọn tất cả ({cartItems.length} khóa)</span>
                                </div>
                                <div className="divide-y divide-border">
                                    {cartItems.map((item) => (
                                        <div key={item.id} className="p-4 flex items-center gap-4 hover:bg-muted/50 transition-colors">
                                            <input
                                                type="checkbox"
                                                checked={selectedItems.includes(item.id)}
                                                onChange={() => handleSelectItem(item.id)}
                                                className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                            />
                                            {item.imageUrl ? (
                                                <img src={item.imageUrl} className="w-20 h-20 rounded-lg object-cover bg-muted" />
                                            ) : (
                                                <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center"><BookOpen className="w-6 h-6 text-muted-foreground/50" /></div>
                                            )}
                                            <div className="flex-1">
                                                <h4 className="font-bold text-foreground line-clamp-1">{item.title}</h4>
                                                <p className="text-emerald-600 font-bold mt-1">
                                                    {item.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) : 'Miễn phí'}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-muted-foreground hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                            >
                                                Xóa
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Summary Sidebar */}
                    {cartItems.length > 0 && (
                        <div className="space-y-6">
                            <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                                <h3 className="font-bold text-lg mb-4">Phương thức thanh toán</h3>
                                <div className="space-y-3">
                                    <label
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'bank_transfer' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                                        onClick={() => setPaymentMethod('bank_transfer')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank_transfer' ? 'border-primary' : 'border-muted-foreground'}`}>
                                                {paymentMethod === 'bank_transfer' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                            </div>
                                            <span className="font-bold text-foreground flex items-center gap-2"><CreditCard className="w-4 h-4"/> Chuyển khoản QR</span>
                                        </div>
                                    </label>
                                    <label
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                                        onClick={() => setPaymentMethod('cash')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-primary' : 'border-muted-foreground'}`}>
                                                {paymentMethod === 'cash' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                            </div>
                                            <span className="font-bold text-foreground flex items-center gap-2"><Banknote className="w-4 h-4"/> Tiền mặt</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="font-bold text-foreground">Tổng cộng ({itemsToCheckout.length} món)</span>
                                    <span className="text-2xl font-extrabold text-primary block">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                                    </span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut || itemsToCheckout.length === 0}
                                    className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                                >
                                    {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Mua hàng'}
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            )}

            {/* Tab 2: Pending Orders */}
            {activeTab === 'pending' && (
                <div className="space-y-4">
                    {loading ? (
                        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
                    ) : pendingOrders.length === 0 ? (
                        <div className="bg-card rounded-2xl border border-border p-12 text-center flex flex-col items-center">
                            <Clock className="w-16 h-16 text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Không có đơn hàng chờ</h3>
                            <p className="text-muted-foreground">Tất cả đơn hàng của bạn đã được thanh toán.</p>
                        </div>
                    ) : (
                        pendingOrders.map(order => (
                            <div key={order.id} className="bg-card rounded-2xl border border-border shadow-sm p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 mb-4 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Mã đơn: <span className="font-mono font-bold text-foreground">{order.displayCode || order.orderCode}</span></p>
                                        <p className="text-sm text-muted-foreground">Ngày đặt: {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('vi-VN') : new Date(order.createdAt).toLocaleDateString('vi-VN')}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-sm font-bold">Chờ thanh toán</span>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between">
                                            <span className="font-medium">{item.courseTitle}</span>
                                            <span className="text-muted-foreground">{new Intl.NumberFormat('vi-VN').format(item.price)}đ</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex flex-col md:flex-row items-center justify-between pt-4 border-t border-border gap-4">
                                    <div className="text-xl font-extrabold text-primary">
                                        Tổng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}
                                    </div>
                                    <button
                                        onClick={() => handleContinuePayment(order)}
                                        disabled={isCheckingOut}
                                        className="w-full md:w-auto px-8 py-3 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                                    >
                                        {isCheckingOut ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Thanh toán tiếp'}
                                    </button>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}

            {/* Tab 3: Paid Orders */}
            {activeTab === 'paid' && (
                <div className="space-y-4">
                    {loading ? (
                        <div className="flex justify-center py-20"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
                    ) : paidOrders.length === 0 ? (
                        <div className="bg-card rounded-2xl border border-border p-12 text-center flex flex-col items-center">
                            <CheckCircle className="w-16 h-16 text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-bold mb-2">Chưa có lịch sử mua hàng</h3>
                            <p className="text-muted-foreground">Các đơn hàng đã thanh toán sẽ xuất hiện ở đây.</p>
                        </div>
                    ) : (
                        paidOrders.map(order => (
                            <div key={order.id} className="bg-card rounded-2xl border border-border shadow-sm p-6 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 mb-4 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Mã đơn: <span className="font-mono font-bold text-foreground">{order.displayCode || order.orderCode}</span></p>
                                        <p className="text-sm text-muted-foreground">Ngày đặt: {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('vi-VN') : new Date(order.createdAt).toLocaleDateString('vi-VN')}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                                            <CheckCircle className="w-4 h-4" /> Đã thanh toán
                                        </span>
                                    </div>
                                </div>
                                <div className="space-y-3 mb-6">
                                    {order.items.map((item, idx) => (
                                        <div key={idx} className="flex justify-between">
                                            <span className="font-medium text-muted-foreground">{item.courseTitle}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-border">
                                    <span className="text-muted-foreground text-sm">
                                        Phương thức: {order.paymentMethod === 'cash' ? 'Tiền mặt' : 'Chuyển khoản'}
                                    </span>
                                    <div className="text-lg font-bold text-foreground">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default CartOrders;
