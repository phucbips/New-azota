import React, { useEffect, useState, useCallback } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Order, orderService } from '../../services/order.service';
import { Loader2, CheckCircle, AlertTriangle, RefreshCw, ExternalLink } from 'lucide-react';

export const PaymentQR: React.FC = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId');
  const navigate = useNavigate();
  const [order, setOrder] = useState<Order | null>(null);
  const [checkoutUrl, setCheckoutUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [regenerating, setRegenerating] = useState(false);

  const createPayOSLink = useCallback(
    async (targetOrder: Order, forceNewCode = false) => {
      setError(null);
      let activeOrderCode = targetOrder.orderCode;
      let activeDisplayCode = targetOrder.displayCode;

      if (forceNewCode) {
        const rotated = await orderService.rotateOrderCode(targetOrder);
        activeOrderCode = rotated.orderCode;
        activeDisplayCode = rotated.displayCode;
        setOrder((prev) =>
          prev
            ? {
                ...prev,
                orderCode: activeOrderCode,
                displayCode: activeDisplayCode,
                checkoutUrl: null,
              }
            : prev
        );
      }

      const baseUrl = window.location.origin;
      const emailStr = targetOrder.userEmail || '';
      let prefix = emailStr.split('@')[0].replace(/[^a-zA-Z0-9 ]/g, '');
      if (!prefix) prefix = activeDisplayCode || `${activeOrderCode}`;

      const response = await fetch('/api/create-payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: targetOrder.id,
          orderCode: activeOrderCode,
          amount: targetOrder.amount,
          description: prefix.substring(0, 25),
          returnUrl: `${baseUrl}/student/payment/success?orderId=${targetOrder.id}`,
          cancelUrl: `${baseUrl}/student/payment/success?orderId=${targetOrder.id}&cancel=true`,
        }),
      });

      if (!response.ok) {
        // If PayOS complains about duplicate orderCode (e.g. Error 231), automatically rotate orderCode once and retry!
        if (!forceNewCode) {
          return createPayOSLink(targetOrder, true);
        }
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || 'Lỗi kết nối cổng thanh toán');
      }

      const result = await response.json();
      setCheckoutUrl(result.checkoutUrl);
      await orderService.updateCheckoutUrl(targetOrder.id, result.checkoutUrl);
      window.location.href = result.checkoutUrl;
    },
    []
  );

  useEffect(() => {
    if (!orderId) {
      navigate('/student/courses');
      return;
    }

    const fetchOrderAndGenerateLink = async () => {
      const o = await orderService.getOrder(orderId);
      if (!o) {
        setError('Không tìm thấy đơn hàng.');
        return;
      }
      setOrder(o);

      if (o.status === 'paid') {
        navigate('/student/courses');
        return;
      }

      // First check if PayOS already marked an existing orderCode as PAID
      const alreadyPaidOnPayOS = await orderService.verifyOrderWithPayOS(o);
      if (alreadyPaidOnPayOS) {
        navigate('/student/courses');
        return;
      }

      if (o.checkoutUrl) {
        setCheckoutUrl(o.checkoutUrl);
        return;
      }

      try {
        await createPayOSLink(o, false);
      } catch (err: any) {
        console.error('Lỗi tạo PayOS link:', err);
        setError(
          err.message ||
            'Không thể tạo link thanh toán tự động lúc này. Vui lòng thử tạo mã QR mới hoặc chuyển khoản thủ công.'
        );
      }
    };

    fetchOrderAndGenerateLink();
  }, [orderId, navigate, createPayOSLink]);

  const handleRegenerateQR = async () => {
    if (!order) return;
    setRegenerating(true);
    try {
      await createPayOSLink(order, true);
    } catch (err: any) {
      setError(err.message || 'Không thể tạo lại mã QR.');
    } finally {
      setRegenerating(false);
    }
  };

  // Real-time polling to detect payment completion (both Firestore & PayOS API) and unlock course immediately
  useEffect(() => {
    if (!order || order.status === 'paid') return;

    const pollTimer = setInterval(async () => {
      const currentOrder = await orderService.getOrder(order.id);
      if (!currentOrder) return;

      if (currentOrder.status === 'paid') {
        clearInterval(pollTimer);
        navigate('/student/courses');
        return;
      }

      const isPaidOnPayOS = await orderService.verifyOrderWithPayOS(currentOrder);
      if (isPaidOnPayOS) {
        clearInterval(pollTimer);
        navigate('/student/courses');
      }
    }, 4000);

    return () => clearInterval(pollTimer);
  }, [order, navigate]);

  if (error && order) {
    return (
      <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
        <div className="bg-card max-w-md w-full rounded-xl border border-border p-8 text-center space-y-4">
          <AlertTriangle className="w-12 h-12 text-warning mx-auto" />
          <h2 className="text-lg font-semibold">Lỗi kết nối Cổng Thanh Toán</h2>
          <p className="text-sm text-muted-foreground">{error}</p>
          <p className="text-sm">
            Nội dung chuyển khoản:{' '}
            <strong className="font-mono">{order.displayCode || order.orderCode}</strong>
          </p>
          <p className="text-xl font-semibold text-primary">
            {new Intl.NumberFormat('vi-VN').format(order.amount)}đ
          </p>
          <div className="flex flex-col gap-2 pt-2">
            <button
              onClick={handleRegenerateQR}
              disabled={regenerating}
              className="w-full py-2.5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg flex items-center justify-center gap-2"
            >
              <RefreshCw className={`w-4 h-4 ${regenerating ? 'animate-spin' : ''}`} />
              Thử tạo mã QR mới
            </button>
            <button
              onClick={() => navigate('/student/courses')}
              className="w-full py-2.5 bg-muted text-foreground text-sm font-semibold rounded-lg"
            >
              Quay lại Khóa học
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!order || !checkoutUrl) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary mb-4" />
        <p className="text-sm text-muted-foreground">
          Đang khởi tạo thanh toán bảo mật...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 flex flex-col items-center justify-center p-4">
      <div className="bg-card max-w-3xl w-full rounded-xl border border-border overflow-hidden flex flex-col lg:flex-row">
        {/* Left Side - Order Details */}
        <div className="lg:w-5/12 p-6 border-b lg:border-b-0 lg:border-r border-border flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold text-foreground">
              Thông tin Thanh toán
            </h2>
            <p className="text-xs text-muted-foreground mt-1 mb-5 font-mono">
              Mã đơn: {order.displayCode || order.orderCode}
            </p>

            <h3 className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
              Khóa học đăng ký
            </h3>
            <ul className="space-y-2.5 mb-6">
              {(order.items || []).map((item, idx) => (
                <li key={idx} className="flex justify-between items-start text-sm">
                  <span className="line-clamp-2 pr-3 text-foreground">
                    {item.courseTitle}
                  </span>
                  <span className="font-semibold whitespace-nowrap font-mono">
                    {new Intl.NumberFormat('vi-VN').format(item.price)}đ
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="border-t border-border pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm font-semibold text-foreground">Tổng cộng</span>
              <span className="text-xl font-semibold text-primary">
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                }).format(order.amount)}
              </span>
            </div>
            <button
              onClick={() => navigate('/student/courses')}
              className="w-full py-2 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Quay lại danh sách khóa học
            </button>
          </div>
        </div>

        {/* Right Side - Actions */}
        <div className="lg:w-7/12 p-8 flex flex-col items-center justify-center text-center space-y-5">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center">
            <CheckCircle className="w-8 h-8 text-success" />
          </div>
          <div className="space-y-1.5">
            <h3 className="text-lg font-semibold text-foreground">
              Sẵn sàng thanh toán qua PayOS
            </h3>
            <p className="text-xs text-muted-foreground max-w-sm">
              Bấm nút bên dưới để mở trang quét mã QR chuyển khoản tự động. Nếu link cũ đã hết hạn, bạn có thể bấm tạo mã QR mới.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full max-w-xs pt-2">
            <a
              href={checkoutUrl}
              className="w-full py-2.5 px-5 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              Mở trang quét QR
            </a>
          </div>

          <button
            type="button"
            onClick={handleRegenerateQR}
            disabled={regenerating}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-primary transition-colors"
          >
            <RefreshCw className={`w-3.5 h-3.5 ${regenerating ? 'animate-spin' : ''}`} />
            {regenerating ? 'Đang tạo mã QR mới...' : 'Link hết hạn? Tạo mã QR mới'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentQR;
