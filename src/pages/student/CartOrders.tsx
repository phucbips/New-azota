import React, { useState, useEffect, useRef } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { useCart } from '../../contexts/CartContext';
import { orderService, Order, getOrderCourseIds, hasPayOSAttempt } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { BookOpen, ShoppingCart, Clock, CheckCircle, Loader2, CreditCard, Banknote } from 'lucide-react';
import { toast } from 'sonner';

export const CartOrders: React.FC = () => {
    const { user } = useAuth();
    const navigate = useNavigate();
    const { cartItems, removeFromCart } = useCart();

    const [activeTab, setActiveTab] = useState<'cart' | 'pending' | 'paid'>('cart');
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    // Cart specific state
    const [selectedItems, setSelectedItems] = useState<string[]>([]);
    const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash'>('bank_transfer');
    const [isCheckingOut, setIsCheckingOut] = useState(false);
    const verifiedRef = useRef<Set<string>>(new Set());

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

    // Tự động đồng bộ (Auto-heal) enrolledCourses từ các đơn hàng đã thanh toán / trả sau
    useEffect(() => {
        if (!user?.uid || orders.length === 0) return;
        const currentEnrolled = new Set<string>(user.enrolledCourses || []);
        const missingIds: string[] = [];

        orders.forEach(o => {
            if (o.status === 'paid' || o.status === 'pay_later') {
                if (Array.isArray(o.items)) {
                    o.items.forEach(item => {
                        if (item.courseId && !currentEnrolled.has(item.courseId)) {
                            missingIds.push(item.courseId);
                        }
                    });
                } else if ((o as any).courseId && !currentEnrolled.has((o as any).courseId)) {
                    missingIds.push((o as any).courseId);
                }
            }
        });

        if (missingIds.length > 0) {
            const uniqueMissing = Array.from(new Set(missingIds));
            updateDoc(doc(db, 'users', user.uid), {
                enrolledCourses: arrayUnion(...uniqueMissing)
            }).catch(() => {});
        }

        // Tự động đối chiếu với cổng PayOS (chỉ đơn đã từng tạo QR, mỗi đơn 1 lần / phiên)
        const unpaid = orders.filter(o =>
            (o.status === 'pending' || o.status === 'pay_later') &&
            Number(o.amount || 0) > 0 &&
            hasPayOSAttempt(o) &&
            !verifiedRef.current.has(o.id)
        );
        unpaid.forEach(ord => {
            verifiedRef.current.add(ord.id);
            orderService.verifyOrderWithPayOS(ord).catch(() => {});
        });
    }, [user?.uid, user?.enrolledCourses, orders]);

    // Tự động bỏ khỏi giỏ các khóa học đã sở hữu
    useEffect(() => {
        if (!user || cartItems.length === 0) return;
        const owned = new Set<string>(user.enrolledCourses || []);
        orders.forEach(o => {
            if (o.status === 'paid' || o.status === 'pay_later') getOrderCourseIds(o).forEach(id => owned.add(id));
        });
        cartItems.filter(c => owned.has(c.id)).forEach(c => removeFromCart(c.id));
    }, [user?.enrolledCourses, orders, cartItems]);

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

        // Chống tạo đơn trùng: tách các khóa đã sở hữu / đã nằm trong đơn chờ thanh toán
        const ownedIds = new Set<string>(user.enrolledCourses || []);
        orders.forEach(o => {
            if (o.status === 'paid' || o.status === 'pay_later') {
                getOrderCourseIds(o).forEach(id => ownedIds.add(id));
            }
        });
        const pendingOrderByCourse = new Map<string, Order>();
        orders.forEach(o => {
            if (o.status === 'pending') {
                getOrderCourseIds(o).forEach(id => {
                    if (!pendingOrderByCourse.has(id)) pendingOrderByCourse.set(id, o);
                });
            }
        });

        const alreadyOwned = itemsToCheckout.filter(c => ownedIds.has(c.id));
        const alreadyPending = itemsToCheckout.filter(c => !ownedIds.has(c.id) && pendingOrderByCourse.has(c.id));
        const freshItems = itemsToCheckout.filter(c => !ownedIds.has(c.id) && !pendingOrderByCourse.has(c.id));

        [...alreadyOwned, ...alreadyPending].forEach(c => removeFromCart(c.id));
        if (alreadyOwned.length > 0) {
            toast.info(`Bạn đã sở hữu: ${alreadyOwned.map(c => c.title).join(', ')}`);
        }

        if (freshItems.length === 0) {
            if (alreadyPending.length > 0) {
                const existing = pendingOrderByCourse.get(alreadyPending[0].id)!;
                toast.info(`Khóa học đã nằm trong đơn ${existing.displayCode || existing.orderCode} đang chờ thanh toán. Tiếp tục thanh toán đơn cũ.`);
                if (paymentMethod === 'bank_transfer') {
                    navigate(`/student/payment?orderId=${existing.id}`);
                } else {
                    setActiveTab('pending');
                }
            }
            return;
        }

        if (alreadyPending.length > 0) {
            toast.info(`Đã bỏ qua khóa đang có trong đơn chờ thanh toán: ${alreadyPending.map(c => c.title).join(', ')}`);
        }

        setIsCheckingOut(true);
        try {
            const items = freshItems.map(c => ({ courseId: c.id, courseTitle: c.title, price: c.price }));
            const freshTotal = items.reduce((sum, i) => sum + (i.price || 0), 0);

            const orderId = await orderService.createOrder({
                userId: user.uid,
                userEmail: user.email,
                userName: user.displayName || 'Student',
                items: items,
                originalAmount: freshTotal,
                amount: freshTotal,
                status: freshTotal === 0 ? 'paid' : 'pending',
                paymentMethod: paymentMethod,
            });

            // Remove checked out items from cart
            freshItems.forEach(item => removeFromCart(item.id));

            if (freshTotal === 0) {
                const courseIds = items.map(i => i.courseId).filter(Boolean);
                if (courseIds.length > 0) {
                    await updateDoc(doc(db, 'users', user.uid), {
                        enrolledCourses: arrayUnion(...courseIds)
                    }).catch(() => {});
                }
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

    // Tiếp tục thanh toán an toàn:
    // - Nếu đơn đã có checkoutUrl hợp lệ, mở lại trang QR hiện tại (học sinh có thể bấm "Tạo mã QR mới" nếu link hết hạn).
    // - Nếu chưa có checkoutUrl, xoay mã orderCode mới nhưng vẫn giữ lại mã cũ trong previousOrderCodes để tránh mất đồng bộ.
    const handleContinuePayment = async (order: Order) => {
        setIsCheckingOut(true);
        try {
            if (!order.checkoutUrl) {
                await orderService.rotateOrderCode(order);
            }
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
            <h1 className="text-3xl font-semibold mb-8 text-foreground">Giỏ hàng & Đơn hàng</h1>

            {/* Tabs Navigation */}
            <div className="flex space-x-1 bg-muted/50 p-1 rounded-xl mb-8 w-fit">
                <button
                    onClick={() => setActiveTab('cart')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${activeTab === 'cart' ? 'bg-background shadow-sm text-primary' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <ShoppingCart className="w-5 h-5" /> Giỏ hàng ({cartItems.length})
                </button>
                <button
                    onClick={() => setActiveTab('pending')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${activeTab === 'pending' ? 'bg-background shadow-sm text-warning' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <Clock className="w-5 h-5" /> Chờ thanh toán ({pendingOrders.length})
                </button>
                <button
                    onClick={() => setActiveTab('paid')}
                    className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-semibold transition-all ${activeTab === 'paid' ? 'bg-background shadow-sm text-success' : 'text-muted-foreground hover:text-foreground'}`}
                >
                    <CheckCircle className="w-5 h-5" /> Lịch sử đã mua ({paidOrders.length})
                </button>
            </div>

            {/* Tab 1: Cart */}
            {activeTab === 'cart' && (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2 space-y-4">
                        {cartItems.length === 0 ? (
                            <div className="bg-card rounded-xl border border-border p-12 text-center flex flex-col items-center">
                                <ShoppingCart className="w-16 h-16 text-muted-foreground/30 mb-4" />
                                <h3 className="text-xl font-semibold mb-2">Giỏ hàng trống</h3>
                                <p className="text-muted-foreground mb-6">Bạn chưa có khóa học nào trong giỏ hàng.</p>
                                <button onClick={() => navigate('/student/courses')} className="px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-xl">Khám phá khóa học</button>
                            </div>
                        ) : (
                            <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
                                <div className="p-4 border-b border-border bg-muted/20 flex items-center gap-3">
                                    <input
                                        type="checkbox"
                                        checked={selectedItems.length === cartItems.length && cartItems.length > 0}
                                        onChange={handleSelectAll}
                                        className="w-5 h-5 rounded border-border text-primary focus:ring-primary"
                                    />
                                    <span className="font-semibold">Chọn tất cả ({cartItems.length} khóa)</span>
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
                                                <h4 className="font-semibold text-foreground line-clamp-1">{item.title}</h4>
                                                <p className="text-success font-semibold mt-1">
                                                    {item.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) : 'Miễn phí'}
                                                </p>
                                            </div>
                                            <button
                                                onClick={() => removeFromCart(item.id)}
                                                className="p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded-lg transition-colors"
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
                            <div className="bg-card rounded-xl border border-border shadow-sm p-6">
                                <h3 className="font-semibold text-lg mb-4">Phương thức thanh toán</h3>
                                <div className="space-y-3">
                                    <label
                                        className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'bank_transfer' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                                        onClick={() => setPaymentMethod('bank_transfer')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank_transfer' ? 'border-primary' : 'border-muted-foreground'}`}>
                                                {paymentMethod === 'bank_transfer' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                            </div>
                                            <span className="font-semibold text-foreground flex items-center gap-2"><CreditCard className="w-4 h-4"/> Chuyển khoản QR</span>
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
                                            <span className="font-semibold text-foreground flex items-center gap-2"><Banknote className="w-4 h-4"/> Tiền mặt (trả sau)</span>
                                        </div>
                                    </label>
                                </div>
                            </div>

                            <div className="bg-card rounded-xl border border-border shadow-sm p-6">
                                <div className="flex justify-between items-end mb-6">
                                    <span className="font-semibold text-foreground">Tổng cộng ({itemsToCheckout.length} món)</span>
                                    <span className="text-2xl font-semibold text-primary block">
                                        {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}
                                    </span>
                                </div>
                                <button
                                    onClick={handleCheckout}
                                    disabled={isCheckingOut || itemsToCheckout.length === 0}
                                    className="w-full py-4 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md hover:shadow-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
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
                        <div className="bg-card rounded-xl border border-border p-12 text-center flex flex-col items-center">
                            <Clock className="w-16 h-16 text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Không có đơn hàng chờ</h3>
                            <p className="text-muted-foreground">Tất cả đơn hàng của bạn đã được thanh toán.</p>
                        </div>
                    ) : (
                        pendingOrders.map(order => (
                            <div key={order.id} className="bg-card rounded-xl border border-border shadow-sm p-6">
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 mb-4 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Mã đơn: <span className="font-mono font-semibold text-foreground">{order.displayCode || order.orderCode}</span></p>
                                        <p className="text-sm text-muted-foreground">Ngày đặt: {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('vi-VN') : new Date(order.createdAt).toLocaleDateString('vi-VN')}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-warning/10 text-warning px-3 py-1 rounded-full text-sm font-semibold">Chờ thanh toán</span>
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
                                    <div className="text-xl font-semibold text-primary">
                                        Tổng: {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}
                                    </div>
                                    <button
                                        onClick={() => handleContinuePayment(order)}
                                        disabled={isCheckingOut}
                                        className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-xl shadow-md hover:shadow-md transition-all flex items-center justify-center gap-2"
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
                        <div className="bg-card rounded-xl border border-border p-12 text-center flex flex-col items-center">
                            <CheckCircle className="w-16 h-16 text-muted-foreground/30 mb-4" />
                            <h3 className="text-xl font-semibold mb-2">Chưa có lịch sử mua hàng</h3>
                            <p className="text-muted-foreground">Các đơn hàng đã thanh toán sẽ xuất hiện ở đây.</p>
                        </div>
                    ) : (
                        paidOrders.map(order => (
                            <div key={order.id} className="bg-card rounded-xl border border-border shadow-sm p-6 opacity-80 hover:opacity-100 transition-opacity">
                                <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-border pb-4 mb-4 gap-4">
                                    <div>
                                        <p className="text-sm text-muted-foreground">Mã đơn: <span className="font-mono font-semibold text-foreground">{order.displayCode || order.orderCode}</span></p>
                                        <p className="text-sm text-muted-foreground">Ngày đặt: {order.createdAt?.toDate ? order.createdAt.toDate().toLocaleDateString('vi-VN') : new Date(order.createdAt).toLocaleDateString('vi-VN')}</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
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
                                        Phương thức: {order.paymentMethod === 'cash' ? 'Tiền mặt (trả sau)' : 'Chuyển khoản'}
                                    </span>
                                    <div className="text-lg font-semibold text-foreground">
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
