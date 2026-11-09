import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { CheckCircle, BookOpen, ChevronRight, Loader2, AlertCircle } from 'lucide-react';
import { Order, orderService, getOrderCourseIds } from '../../services/order.service';
import { useCart } from '../../contexts/CartContext';
import { useAuth } from '../../hooks/useAuth';

export const PaymentSuccess: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderIdParam = searchParams.get('orderId');
  const orderCode = searchParams.get('orderCode');
  const status = searchParams.get('status');
  const cancel = searchParams.get('cancel');
  const code = searchParams.get('code');

  const { user } = useAuth();
  const [order, setOrder] = useState<Order | null>(null);
  const [loading, setLoading] = useState(true);
  const { removeFromCart } = useCart();

  const isSuccess =
    cancel !== 'true' &&
    (code === '00' || status === 'PAID' || status === 'success');

  useEffect(() => {
    let isMounted = true;

    const verifyAndUnlockCourse = async () => {
      try {
        let matchedOrder: Order | null = null;

        // 1. Try direct lookup by orderId query param if present
        if (orderIdParam) {
          matchedOrder = await orderService.getOrder(orderIdParam).catch(() => null);
        }

        // 2. Otherwise find in `orders` collection by orderCode
        if (!matchedOrder && orderCode) {
          matchedOrder = await orderService
            .findOrderByOrderCode(orderCode, user?.role === 'admin' ? undefined : user?.uid)
            .catch(() => null);
        }

        if (matchedOrder && isMounted) {
          setOrder(matchedOrder);
        }

        // 3. Không tin tham số URL: luôn xác minh trực tiếp với PayOS trên Server trước khi duyệt đơn & mở khóa học
        if (isSuccess && matchedOrder) {
          const paid = await orderService.verifyOrderWithPayOS(matchedOrder);
          if (paid) {
            getOrderCourseIds(matchedOrder).forEach((id) => removeFromCart(id));
          }
        } else if (isSuccess && (orderIdParam || orderCode)) {
          // Trường hợp mở link trên trình duyệt điện thoại chưa đăng nhập (không đọc được Firestore từ client):
          // Gọi trực tiếp lên Server để Server tự đối chiếu PayOS và mở khóa học cho tài khoản đã đặt đơn
          const res = await fetch('/api/create-payment-link', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              action: 'check-status',
              orderId: orderIdParam,
              orderCode,
            }),
          });
          if (res.ok) {
            const data = await res.json();
            if (data?.orderSummary && isMounted) {
              setOrder(data.orderSummary as Order);
            }
          }
        }
      } catch (e) {
        console.error('Error verifying order on return:', e);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    verifyAndUnlockCourse();

    return () => {
      isMounted = false;
    };
  }, [orderIdParam, orderCode, isSuccess, user?.uid]);

  if (loading) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-10 h-10 animate-spin text-primary mb-4" />
        <p className="text-muted-foreground">
          Đang xác nhận giao dịch và kích hoạt khóa học...
        </p>
      </div>
    );
  }

  const returnPath = user?.role === 'admin' ? '/admin/orders' : '/student/courses';
  const successActionPath = user?.role === 'admin' ? '/admin/orders' : '/student/assignments';
  const successActionLabel = user?.role === 'admin' ? 'Quay lại Quản lý Đơn hàng' : 'Vào học ngay';

  if (!isSuccess) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-10 h-10 text-destructive" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-3">
          Giao dịch chưa hoàn tất
        </h1>
        <p className="text-muted-foreground max-w-md mb-8 text-sm">
          Quá trình thanh toán đã bị hủy hoặc chưa hoàn tất. Bạn có thể quay lại mục Khóa học hoặc Đơn hàng để tiếp tục thanh toán.
        </p>
        <Link
          to={returnPath}
          className="px-6 py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
        >
          Quay lại
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-muted/40">
      <div className="max-w-md w-full bg-card rounded-xl border border-border p-8 text-center relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1.5 bg-success" />

        <div className="w-20 h-20 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-10 h-10 text-success" />
        </div>

        <h1 className="text-2xl font-semibold text-foreground mb-2">
          Thanh toán thành công!
        </h1>
        <p className="text-sm text-muted-foreground mb-6">
          Cảm ơn bạn đã đăng ký. Quyền truy cập khóa học đã được kích hoạt tự động cho tài khoản{' '}
          {order?.userEmail ? <strong>{order.userEmail}</strong> : 'của bạn'}.
        </p>

        {order && (
          <div className="bg-muted/40 rounded-lg p-4 mb-6 text-left border border-border">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2.5">
              Thông tin đơn hàng
            </p>
            <div className="flex justify-between items-center mb-2 text-sm">
              <span className="text-muted-foreground">Mã đơn:</span>
              <span className="font-mono font-semibold text-foreground">
                {order.displayCode || order.orderCode}
              </span>
            </div>
            <div className="flex justify-between items-center border-b border-border pb-2.5 mb-2.5 text-sm">
              <span className="text-muted-foreground">Tổng tiền:</span>
              <span className="font-semibold text-success">
                {new Intl.NumberFormat('vi-VN').format(order.amount)}đ
              </span>
            </div>

            <ul className="space-y-1.5">
              {(order.items || []).map((item, idx) => (
                <li
                  key={idx}
                  className="flex items-start gap-2 text-sm text-foreground"
                >
                  <BookOpen className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="line-clamp-2">{item.courseTitle}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <Link
          to={successActionPath}
          className="w-full py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
        >
          {successActionLabel}
          <ChevronRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
