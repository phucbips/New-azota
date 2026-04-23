import React, { useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { orderService } from '../../services/order.service';
import { courseService } from '../../services/course.service';
import { voucherService } from '../../services/voucher.service';
import { BookOpen, CreditCard, Banknote, Tag, Loader2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export const Checkout: React.FC = () => {
  const { cartItems, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash'>('bank_transfer');
  const [voucher, setVoucher] = useState('');
  const [discount, setDiscount] = useState(0);
  const [appliedVoucherId, setAppliedVoucherId] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const applyVoucher = async () => {
      if (!voucher) return;
      try {
        const v = await voucherService.getVoucherByCode(voucher);
        if (!v) {
            toast.error("Mã giảm giá không hợp lệ hoặc đã hết hạn");
            setDiscount(0);
            setAppliedVoucherId(null);
            return;
        }

        if (v.minOrderValue && totalPrice < v.minOrderValue) {
            toast.error(`Đơn hàng tối thiểu để áp dụng mã này là ${new Intl.NumberFormat('vi-VN').format(v.minOrderValue)}đ`);
            return;
        }

        if (v.usageLimit && v.usageCount >= v.usageLimit) {
            toast.error("Mã giảm giá đã hết lượt sử dụng");
            return;
        }

        let calculatedDiscount = 0;
        if (v.type === 'percent') {
            calculatedDiscount = (totalPrice * v.value) / 100;
            if (v.maxDiscount) {
                calculatedDiscount = Math.min(calculatedDiscount, v.maxDiscount);
            }
        } else {
            calculatedDiscount = v.value;
        }

        setDiscount(calculatedDiscount);
        setAppliedVoucherId(v.id);
        toast.success(`Áp dụng mã thành công! Giảm ${new Intl.NumberFormat('vi-VN').format(calculatedDiscount)}đ`);
      } catch (e) {
        toast.error("Lỗi khi áp dụng mã giảm giá");
      }
  };

  const finalPrice = Math.max(0, totalPrice - discount);

  const handleCheckout = async () => {
      if (!user) return;
      setLoading(true);
      try {
          const items = cartItems.map(c => ({ courseId: c.id, courseTitle: c.title, price: c.price }));

          const orderId = await orderService.createOrder({
              userId: user.uid,
              userEmail: user.email,
              userName: user.displayName || 'Student',
              items: items,
              originalAmount: totalPrice,
              discount: discount,
              voucherCode: appliedVoucherId ? voucher : null,
              amount: finalPrice,
              status: finalPrice === 0 ? 'paid' : 'pending',
              paymentMethod: paymentMethod,
          });

          if (appliedVoucherId) {
              await voucherService.incrementUsage(appliedVoucherId);
          }

          if (finalPrice === 0) {
               // Update course enrollment counts for free orders directly
               /* Backend should update enrollment count */
               clearCart();
               toast.success("Nhận khóa học miễn phí thành công!");
               navigate('/student/courses');
               return;
          }

          clearCart();
          if (paymentMethod === 'bank_transfer') {
              navigate(`/student/payment?orderId=${orderId}`);
          } else {
              toast.success("Đã ghi nhận yêu cầu. Admin sẽ duyệt sau khi nhận tiền mặt.");
              navigate('/student/courses');
          }
      } catch (e: any) {
          console.error(e);
          toast.error(`Lỗi tạo đơn hàng: ${e.message}`);
      } finally {
          setLoading(false);
      }
  };

  if (cartItems.length === 0) {
      return (
          <div className="max-w-4xl mx-auto py-20 text-center">
              <h2 className="text-2xl font-bold mb-4">Giỏ hàng trống</h2>
              <button onClick={() => navigate('/student/courses')} className="px-6 py-2 bg-primary text-white rounded-xl">Khám phá khóa học</button>
          </div>
      );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground font-medium mb-6">
          <ArrowLeft className="w-4 h-4" /> Quay lại
      </button>

      <h1 className="text-3xl font-display font-extrabold mb-8 text-foreground">Thanh toán đơn hàng</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Order Items */}
          <div className="lg:col-span-2 space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2 border-b border-border pb-4">
                      <BookOpen className="w-5 h-5 text-primary" />
                      Chi tiết ({cartItems.length} khóa học)
                  </h3>
                  <div className="space-y-4">
                      {cartItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 p-3 rounded-xl hover:bg-muted/50 transition-colors border border-border">
                              {item.imageUrl ? (
                                  <img src={item.imageUrl} className="w-20 h-20 rounded-lg object-cover bg-muted" />
                              ) : (
                                  <div className="w-20 h-20 rounded-lg bg-muted flex items-center justify-center"><BookOpen className="w-6 h-6 text-muted-foreground/50" /></div>
                              )}
                              <div className="flex-1">
                                  <h4 className="font-bold text-foreground">{item.title}</h4>
                                  <p className="text-emerald-600 font-bold mt-1">
                                      {item.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price) : 'Miễn phí'}
                                  </p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>

              <div className="bg-card rounded-2xl border border-border shadow-sm p-6">
                  <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                      <Tag className="w-5 h-5 text-primary" />
                      Mã giảm giá
                  </h3>
                  <div className="flex gap-2">
                      <input
                          type="text"
                          value={voucher}
                          onChange={e => setVoucher(e.target.value)}
                          placeholder="Nhập mã (VD: NOVA20)"
                          className="flex-1 p-3 rounded-xl border border-input bg-background focus:ring-2 focus:ring-primary/20 font-mono"
                      />
                      <button onClick={applyVoucher} className="px-6 bg-secondary text-secondary-foreground font-bold rounded-xl hover:bg-secondary/80">
                          Áp dụng
                      </button>
                  </div>
              </div>
          </div>

          {/* Right Column - Summary & Payment */}
          <div className="space-y-6">
              <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden">
                  <div className="p-6 border-b border-border bg-muted/20">
                      <h3 className="font-bold text-lg">Phương thức thanh toán</h3>
                  </div>
                  <div className="p-6 space-y-3">
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
                  <div className="space-y-3 text-sm mb-4 border-b border-border pb-4">
                      <div className="flex justify-between">
                          <span className="text-muted-foreground">Tạm tính ({cartItems.length} sản phẩm)</span>
                          <span className="font-medium">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(totalPrice)}</span>
                      </div>
                      {discount > 0 && (
                          <div className="flex justify-between text-emerald-600">
                              <span>Giảm giá</span>
                              <span className="font-bold">-{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(discount)}</span>
                          </div>
                      )}
                  </div>
                  <div className="flex justify-between items-end mb-6">
                      <span className="font-bold text-foreground">Tổng cộng</span>
                      <div className="text-right">
                          <span className="text-2xl font-extrabold text-primary block">
                              {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(finalPrice)}
                          </span>
                      </div>
                  </div>
                  <button
                      onClick={handleCheckout}
                      disabled={loading}
                      className="w-full py-4 bg-primary text-white font-bold rounded-xl shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                      {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Hoàn tất Đặt hàng'}
                  </button>
              </div>
          </div>
      </div>
    </div>
  );
};
