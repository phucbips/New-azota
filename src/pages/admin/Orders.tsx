import React, { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Order, orderService, OrderStatus, isFreeNonVoucherOrder, getOrderCourseIds, hasPayOSAttempt } from '../../services/order.service';
import { User as UserType } from '../../types';
import { Course, courseService } from '../../services/course.service';
import { userService } from '../../services/user.service';
import { financeService } from '../../services/finance.service';
import { voucherService } from '../../services/voucher.service';
import {
  Search,
  ChevronDown,
  ChevronUp,
  CheckCircle,
  XCircle,
  CreditCard,
  Banknote,
  Calendar,
  Mail,
  User,
  Plus,
  X,
  Trash2,
  Eye,
  EyeOff,
  Tag,
  RefreshCw,
  QrCode,
} from 'lucide-react';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showFreeOrders, setShowFreeOrders] = useState(false);
  const [syncingPayOS, setSyncingPayOS] = useState(false);
  const autoCheckedIdsRef = useRef<Set<string>>(new Set());

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [newOrder, setNewOrder] = useState({
    userId: '',
    courseIds: [] as string[],
    status: 'pay_later' as OrderStatus,
    voucherCode: '',
  });
  const [isCreating, setIsCreating] = useState(false);

  const [isValidatingVoucher, setIsValidatingVoucher] = useState(false);
  const [validatedVoucher, setValidatedVoucher] = useState<any>(null);

  useEffect(() => {
    if (showCreateModal) {
      const unsubUsers = userService.subscribeToAllUsers((data) => setUsers(data));
      courseService.getCourses().then(setCourses);
      return () => unsubUsers();
    }
  }, [showCreateModal]);

  useEffect(() => {
    const unsub = orderService.subscribeToOrders((data) => {
      setOrders(data);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  // Tự động kiểm tra với cổng PayOS cho các đơn đang chờ thanh toán / trả sau
  useEffect(() => {
    if (orders.length === 0) return;

    const unpaidOrders = orders.filter(
      (o) =>
        (o.status === 'pending' || o.status === 'pay_later') &&
        hasPayOSAttempt(o) &&
        !autoCheckedIdsRef.current.has(o.id) &&
        Number(o.amount || 0) > 0
    );

    if (unpaidOrders.length === 0) return;

    unpaidOrders.forEach((o) => autoCheckedIdsRef.current.add(o.id));

    (async () => {
      for (const ord of unpaidOrders) {
        const paid = await orderService.verifyOrderWithPayOS(ord);
        if (paid) {
          toast.success(
            `Đã tự động xác nhận chuyển khoản thành công cho đơn ${ord.userEmail} (${ord.displayCode || ord.orderCode})!`
          );
        }
      }
    })();
  }, [orders]);

  // Khi Admin đang mở chi tiết 1 đơn chưa thanh toán (đặc biệt sau khi bấm Tạo mã QR), tự động poll PayOS mỗi 5 giây
  useEffect(() => {
    if (!expandedId) return;
    const targetOrder = orders.find((o) => o.id === expandedId);
    if (!targetOrder || targetOrder.status === 'paid' || targetOrder.status === 'cancelled') {
      return;
    }

    const timer = setInterval(async () => {
      const paid = await orderService.verifyOrderWithPayOS(targetOrder);
      if (paid) {
        clearInterval(timer);
        toast.success(
          `Đã nhận thanh toán chuyển khoản từ ${targetOrder.userEmail}! Khóa học đã được kích hoạt.`
        );
      }
    }, 5000);

    return () => clearInterval(timer);
  }, [expandedId, orders]);

  const handleSyncAllPayOS = useCallback(async () => {
    const unpaid = orders.filter(
      (o) => (o.status === 'pending' || o.status === 'pay_later') && Number(o.amount || 0) > 0
    );
    if (unpaid.length === 0) {
      toast.info('Không có đơn hàng nào đang chờ thanh toán để kiểm tra.');
      return;
    }

    setSyncingPayOS(true);
    let updatedCount = 0;
    try {
      for (const ord of unpaid) {
        const paid = await orderService.verifyOrderWithPayOS(ord);
        if (paid) updatedCount++;
      }
      if (updatedCount > 0) {
        toast.success(`Đã xác nhận thanh toán thành công cho ${updatedCount} đơn hàng!`);
      } else {
        toast.info('Đã kiểm tra với cổng PayOS: chưa có giao dịch mới nào hoàn tất.');
      }
    } catch (e) {
      toast.error('Lỗi khi đồng bộ trạng thái với PayOS.');
    } finally {
      setSyncingPayOS(false);
    }
  }, [orders]);

  const handleValidateVoucher = async () => {
    if (!newOrder.voucherCode.trim()) {
      toast.error('Vui lòng nhập mã giảm giá');
      return;
    }
    setIsValidatingVoucher(true);
    try {
      const v = await voucherService.getVoucherByCode(newOrder.voucherCode);
      if (!v) {
        toast.error('Mã giảm giá không hợp lệ hoặc đã hết hạn');
        setValidatedVoucher(null);
        return;
      }
      if (v.expiresAt && v.expiresAt.toDate() < new Date()) {
        toast.error('Mã giảm giá đã hết hạn');
        setValidatedVoucher(null);
        return;
      }
      if (v.usageLimit && v.usageCount >= v.usageLimit) {
        toast.error('Mã giảm giá đã hết lượt sử dụng');
        setValidatedVoucher(null);
        return;
      }

      let amount = 0;
      const selectedCourses = courses.filter((c) => newOrder.courseIds.includes(c.id));
      selectedCourses.forEach((c) => (amount += c.price));

      if (v.minOrderValue && amount < v.minOrderValue) {
        toast.error(
          `Đơn hàng chưa đạt giá trị tối thiểu (${new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
          }).format(v.minOrderValue)})`
        );
        setValidatedVoucher(null);
        return;
      }

      toast.success('Áp dụng mã giảm giá thành công');
      setValidatedVoucher(v);
    } catch (err) {
      toast.error('Lỗi khi kiểm tra mã giảm giá');
      setValidatedVoucher(null);
    } finally {
      setIsValidatingVoucher(false);
    }
  };

  const handleCreateOrder = async () => {
    if (!newOrder.userId || newOrder.courseIds.length === 0) {
      toast.error('Vui lòng chọn khách hàng và ít nhất 1 khóa học');
      return;
    }

    setIsCreating(true);
    try {
      const selectedUser = users.find((u) => u.uid === newOrder.userId);
      const selectedCourses = courses.filter((c) => newOrder.courseIds.includes(c.id));

      if (!selectedUser) throw new Error('Không tìm thấy người dùng');

      let amount = 0;
      const items = selectedCourses.map((c) => {
        amount += c.price;
        return { courseId: c.id, courseTitle: c.title, price: c.price };
      });

      let finalAmount = amount;
      let discountAmount = 0;

      if (validatedVoucher && newOrder.voucherCode === validatedVoucher.code) {
        if (validatedVoucher.type === 'percent') {
          discountAmount = Math.floor(amount * (validatedVoucher.value / 100));
          if (validatedVoucher.maxDiscount) {
            discountAmount = Math.min(discountAmount, validatedVoucher.maxDiscount);
          }
        } else {
          discountAmount = validatedVoucher.value;
        }
        finalAmount = Math.max(0, amount - discountAmount);
      }

      const initialStatus: OrderStatus = newOrder.status || 'pay_later';

      const createdOrderId = await orderService.createOrder({
        userId: selectedUser.uid,
        userEmail: selectedUser.email,
        userName: selectedUser.displayName || 'Unknown',
        items,
        amount: finalAmount,
        originalAmount: amount,
        discount: discountAmount,
        status: initialStatus,
        paymentMethod: initialStatus === 'pending' ? 'bank_transfer' : 'cash',
        voucherCode: validatedVoucher ? validatedVoucher.code : null,
      });

      if (validatedVoucher && newOrder.voucherCode === validatedVoucher.code) {
        await voucherService.incrementUsage(validatedVoucher.id);
      }

      // Cấp khóa học ngay nếu trạng thái là trả sau (pay_later) hoặc đã thanh toán (paid)
      if (initialStatus === 'pay_later' || initialStatus === 'paid') {
        const newEnrolled = new Set([
          ...(selectedUser.enrolledCourses || []),
          ...newOrder.courseIds,
        ]);
        await userService.updateUser(selectedUser.uid, {
          enrolledCourses: Array.from(newEnrolled),
        });

        // Chỉ tăng lượt mua hàng nếu đơn không phải là miễn phí 0đ không voucher
        const isFree = finalAmount === 0 && !validatedVoucher;
        if (!isFree) {
          for (const c of selectedCourses) {
            await courseService.updateCourse(c.id, {
              enrollmentCount: (c.enrollmentCount || 0) + 1,
            });
          }
        }
      }

      // Nếu tạo đơn ở trạng thái đã thu tiền ('paid'), ghi nhận luôn vào sổ thu chi & đợt bán hàng
      if (initialStatus === 'paid' && finalAmount > 0) {
        const titlesStr = selectedCourses.map((c) => c.title).join(', ');
        const desc = `${selectedUser.email} - ${titlesStr}${
          validatedVoucher ? ` - ${validatedVoucher.code}` : ''
        }`.trim();
        await financeService.addTransaction({
          orderId: createdOrderId,
          type: 'income',
          category: 'Bán khóa học',
          amount: finalAmount,
          description: desc,
          createdBy: 'admin',
        });
      }

      toast.success('Tạo đơn hàng thành công');
      setShowCreateModal(false);
      setExpandedId(createdOrderId);
      setNewOrder({ userId: '', courseIds: [], status: 'pay_later', voucherCode: '' });
    } catch (e: any) {
      toast.error(`Lỗi: ${e.message}`);
    } finally {
      setIsCreating(false);
    }
  };

  const handleDeleteOrder = async (orderId: string) => {
    if (
      window.confirm(
        'Bạn có chắc chắn muốn xóa đơn hàng này? Thao tác này không thể hoàn tác.'
      )
    ) {
      try {
        await orderService.deleteOrder(orderId);
        toast.success('Xóa đơn hàng thành công');
      } catch (e: any) {
        toast.error('Lỗi khi xóa: ' + e.message);
      }
    }
  };

  const handleCreateQR = async (order: Order, forceNewQR = false) => {
    try {
      // Trước tiên kiểm tra xem đơn này đã được thanh toán trên PayOS chưa
      const alreadyPaid = await orderService.verifyOrderWithPayOS(order);
      if (alreadyPaid) {
        toast.success(
          `Đơn hàng của ${order.userEmail} đã được thanh toán trên PayOS! Đã tự động duyệt.`
        );
        return;
      }

      if (order.checkoutUrl && !forceNewQR) {
        window.open(order.checkoutUrl, '_blank');
        return;
      }

      let activeOrderCode = order.orderCode;
      let activeDisplayCode = order.displayCode;

      if (forceNewQR) {
        const rotated = await orderService.rotateOrderCode(order);
        activeOrderCode = rotated.orderCode;
        activeDisplayCode = rotated.displayCode;
      }

      const baseUrl = window.location.origin;
      const emailStr = order.userEmail || '';
      let prefix = emailStr.split('@')[0].replace(/[^a-zA-Z0-9 ]/g, '');
      if (!prefix) prefix = activeDisplayCode || `${activeOrderCode}`;

      let response = await fetch('/api/create-payment-link', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: order.id,
          orderCode: activeOrderCode,
          amount: order.amount,
          description: prefix.substring(0, 25),
          returnUrl: `${baseUrl}/student/payment/success?orderId=${order.id}`,
          cancelUrl: `${baseUrl}/student/payment/success?orderId=${order.id}&cancel=true`,
        }),
      });

      // Nếu mã orderCode cũ bị trùng trên PayOS, tự động xoay mã mới và tạo lại ngay!
      if (!response.ok && !forceNewQR) {
        const rotated = await orderService.rotateOrderCode(order);
        activeOrderCode = rotated.orderCode;
        activeDisplayCode = rotated.displayCode;
        if (!prefix) prefix = activeDisplayCode || `${activeOrderCode}`;

        response = await fetch('/api/create-payment-link', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            orderId: order.id,
            orderCode: activeOrderCode,
            amount: order.amount,
            description: prefix.substring(0, 25),
            returnUrl: `${baseUrl}/student/payment/success?orderId=${order.id}`,
            cancelUrl: `${baseUrl}/student/payment/success?orderId=${order.id}&cancel=true`,
          }),
        });
      }

      if (!response.ok) {
        const errData = await response.json().catch(() => ({}));
        throw new Error(errData.message || 'Lỗi server khi tạo link');
      }

      const result = await response.json();
      await orderService.updateCheckoutUrl(order.id, result.checkoutUrl);
      toast.success('Đã tạo mã QR thành công! Hệ thống sẽ tự động duyệt ngay khi khách chuyển khoản.');
      window.open(result.checkoutUrl, '_blank');
    } catch (err: any) {
      console.error('Lỗi tạo PayOS link:', err);
      toast.error(err.message || 'Không thể tạo link thanh toán tự động.');
    }
  };

  const handleUpdateStatus = async (order: Order, newStatus: OrderStatus) => {
    try {
      if (newStatus === 'paid') {
        await orderService.completePaidOrder(order);
        toast.success('Đã cập nhật trạng thái thành Đã Thanh toán và kích hoạt khóa học!');
        setExpandedId(null);
        return;
      }

      if (newStatus === 'pay_later') {
        await orderService.approveOrderPayLater(order);
        toast.success('Đã duyệt Trả sau và cấp khóa học ngay cho học viên!');
        setExpandedId(null);
        return;
      }

      await orderService.updateOrderStatus(order.id, newStatus);

      toast.success(
        `Đã cập nhật trạng thái thành ${
          newStatus === 'cancelled' ? 'Đã Hủy' : 'Trả sau / Chờ QR'
        }`
      );
      setExpandedId(null);
    } catch (e) {
      toast.error('Lỗi khi cập nhật trạng thái');
    }
  };

  // Đơn chưa thanh toán bị trùng: toàn bộ khóa học đã nằm trong 1 đơn 'paid' khác của cùng học viên
  const duplicateUnpaidIds = useMemo(() => {
    const paidByUser = new Map<string, Set<string>>();
    orders.forEach((o) => {
      if (o.status !== 'paid' || !o.userId) return;
      const set = paidByUser.get(o.userId) || new Set<string>();
      getOrderCourseIds(o).forEach((id) => set.add(id));
      paidByUser.set(o.userId, set);
    });
    const ids = new Set<string>();
    orders.forEach((o) => {
      if (o.status !== 'pending' && o.status !== 'pay_later') return;
      const paid = paidByUser.get(o.userId);
      const cids = getOrderCourseIds(o);
      if (paid && cids.length > 0 && cids.every((id) => paid.has(id))) ids.add(o.id);
    });
    return ids;
  }, [orders]);

  const handleCancelDuplicates = async () => {
    if (duplicateUnpaidIds.size === 0) return;
    if (!window.confirm(`Hủy ${duplicateUnpaidIds.size} đơn chưa thanh toán bị trùng với đơn đã thanh toán?`)) return;
    try {
      for (const id of duplicateUnpaidIds) {
        await orderService.updateOrderStatus(id, 'cancelled');
      }
      toast.success(`Đã hủy ${duplicateUnpaidIds.size} đơn trùng`);
    } catch (e: any) {
      toast.error('Lỗi khi hủy đơn trùng: ' + e.message);
    }
  };

  // Separate commercial/voucher orders from pure 0đ free orders (without voucher)
  const freeNonVoucherCount = useMemo(
    () => orders.filter((o) => isFreeNonVoucherOrder(o)).length,
    [orders]
  );

  const visibleOrders = useMemo(
    () => (showFreeOrders ? orders : orders.filter((o) => !isFreeNonVoucherOrder(o))),
    [orders, showFreeOrders]
  );

  const filteredOrders = useMemo(
    () =>
      visibleOrders.filter(
        (o) =>
          (o.orderCode || '').toLowerCase().includes(search.toLowerCase()) ||
          (o.displayCode || '').toLowerCase().includes(search.toLowerCase()) ||
          (o.userEmail || '').toLowerCase().includes(search.toLowerCase()) ||
          (o.userName || '').toLowerCase().includes(search.toLowerCase())
      ),
    [visibleOrders, search]
  );

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
      <PageHeader
        title="Quản lý Đơn hàng"
        subtitle="Theo dõi và tự động duyệt đơn chuyển khoản QR qua cổng PayOS."
      />

      <div className="bg-card rounded-xl border border-border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div className="relative w-full md:w-96 group">
          <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
            <Search className="w-4 h-4 text-muted-foreground group-focus-within:text-primary transition-colors" />
          </div>
          <input
            type="text"
            placeholder="Tìm mã đơn, tên, email..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-muted/50 border border-border rounded-lg text-sm outline-none focus:ring-2 focus:ring-primary/20 transition-all"
          />
        </div>

        <div className="flex items-center gap-2.5 flex-wrap">
          <button
            type="button"
            onClick={handleSyncAllPayOS}
            disabled={syncingPayOS}
            className="px-3.5 py-2.5 rounded-lg text-xs font-semibold border border-border bg-background hover:bg-muted text-foreground transition-colors flex items-center gap-1.5 disabled:opacity-50"
            title="Kiểm tra toàn bộ đơn chờ thanh toán với cổng PayOS"
          >
            <RefreshCw className={`w-3.5 h-3.5 text-primary ${syncingPayOS ? 'animate-spin' : ''}`} />
            {syncingPayOS ? 'Đang kiểm tra PayOS...' : 'Đồng bộ giao dịch QR'}
          </button>

          {duplicateUnpaidIds.size > 0 && (
            <button
              type="button"
              onClick={handleCancelDuplicates}
              className="px-3.5 py-2.5 rounded-lg text-xs font-semibold border border-destructive/30 bg-destructive/5 text-destructive hover:bg-destructive/10 transition-colors flex items-center gap-1.5"
              title="Hủy các đơn chờ thanh toán mà khóa học đã được thanh toán ở đơn khác"
            >
              <XCircle className="w-3.5 h-3.5" />
              Dọn đơn trùng ({duplicateUnpaidIds.size})
            </button>
          )}

          {freeNonVoucherCount > 0 && (
            <button
              type="button"
              onClick={() => setShowFreeOrders(!showFreeOrders)}
              className={`px-3.5 py-2.5 rounded-lg text-xs font-semibold border transition-colors flex items-center gap-1.5 ${
                showFreeOrders
                  ? 'bg-primary/10 text-primary border-primary/30'
                  : 'bg-background text-muted-foreground border-border hover:text-foreground'
              }`}
            >
              {showFreeOrders ? (
                <>
                  <EyeOff className="w-3.5 h-3.5" />
                  Ẩn đơn 0đ miễn phí ({freeNonVoucherCount})
                </>
              ) : (
                <>
                  <Eye className="w-3.5 h-3.5" />
                  Hiện đơn 0đ miễn phí ({freeNonVoucherCount})
                </>
              )}
            </button>
          )}

          <button
            onClick={() => setShowCreateModal(true)}
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 whitespace-nowrap"
          >
            <Plus className="w-4 h-4" />
            Tạo đơn hàng
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        {filteredOrders.map((order) => {
          const isExpanded = expandedId === order.id;
          const isPending = order.status === 'pending';

          return (
            <motion.div
              key={order.id}
              layout
              className="bg-card rounded-xl border border-border overflow-hidden"
            >
              {/* Header Row */}
              <div
                className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                onClick={() => setExpandedId(isExpanded ? null : order.id)}
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      order.status === 'paid'
                        ? 'bg-success/10 text-success'
                        : order.status === 'cancelled'
                          ? 'bg-destructive/10 text-destructive'
                          : 'bg-warning/10 text-warning'
                    }`}
                  >
                    {order.status === 'paid' ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : order.status === 'cancelled' ? (
                      <XCircle className="w-5 h-5" />
                    ) : (
                      <Banknote className="w-5 h-5" />
                    )}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <h3 className="font-semibold text-foreground text-sm">
                        {order.userEmail} - {order.displayCode || order.orderCode}
                      </h3>
                      {order.status === 'paid' ? (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-success/10 text-success border border-success/20">
                          Đã thanh toán
                        </span>
                      ) : order.status === 'cancelled' ? (
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-destructive/10 text-destructive border border-destructive/20">
                          Đã hủy
                        </span>
                      ) : (
                        <>
                          <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-warning/10 text-warning border border-warning/20">
                            Trả sau / Chờ QR
                          </span>
                          {order.status === 'pay_later' ? (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-success/10 text-success border border-success/20">
                              Đã cấp khóa
                            </span>
                          ) : (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-medium bg-muted text-muted-foreground border border-border">
                              Chưa cấp khóa
                            </span>
                          )}
                          {duplicateUnpaidIds.has(order.id) && (
                            <span className="px-2 py-0.5 rounded-full text-[11px] font-semibold bg-destructive/10 text-destructive border border-destructive/20">
                              Trùng đơn đã thanh toán
                            </span>
                          )}
                        </>
                      )}
                      {order.voucherCode && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium bg-primary/10 text-primary">
                          <Tag className="w-3 h-3" />
                          {order.voucherCode}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {order.items?.length
                        ? `${order.items.length} khóa học: ${order.items
                            .map((i) => i.courseTitle)
                            .join(', ')}`
                        : order.courseTitle}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                  <div className="text-left md:text-right">
                    <p className="font-semibold text-primary text-sm">
                      {new Intl.NumberFormat('vi-VN', {
                        style: 'currency',
                        currency: 'VND',
                      }).format(order.amount)}
                    </p>
                    <p className="text-xs text-muted-foreground mt-0.5">
                      {order.status === 'paid'
                        ? 'Đã thanh toán'
                        : order.status === 'cancelled'
                          ? 'Đã hủy'
                          : order.status === 'pay_later'
                            ? 'Đã duyệt khóa học (Chờ thanh toán)'
                            : 'Chờ duyệt / Chờ thanh toán'}
                    </p>
                  </div>
                  {isExpanded ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </div>
              </div>

              {/* Expandable Content */}
              <AnimatePresence>
                {isExpanded && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="border-t border-border"
                  >
                    <div className="p-6 bg-muted/10">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Info */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Thông tin Học viên
                          </h4>
                          <div className="space-y-3 bg-card p-4 rounded-xl border border-border">
                            <div className="flex items-center gap-3 text-sm text-foreground">
                              <User className="w-4 h-4 text-muted-foreground" />
                              <span className="font-medium">{order.userName}</span>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-foreground">
                              <Mail className="w-4 h-4 text-muted-foreground" />
                              <a
                                href={`mailto:${order.userEmail}`}
                                className="text-primary hover:underline"
                              >
                                {order.userEmail}
                              </a>
                            </div>
                            <div className="flex items-center gap-3 text-sm text-foreground">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span>
                                {order.createdAt?.toDate
                                  ? order.createdAt.toDate().toLocaleString('vi-VN')
                                  : 'N/A'}
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Actions / Payment */}
                        <div className="space-y-4">
                          <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                            Thanh toán & Duyệt
                          </h4>
                          <div className="bg-card p-4 rounded-xl border border-border space-y-4">
                            <div className="flex justify-between items-center text-sm">
                              <span className="text-muted-foreground">Trạng thái:</span>
                              <span className="font-semibold flex items-center gap-1">
                                {order.checkoutUrl ? (
                                  <CreditCard className="w-4 h-4 text-primary" />
                                ) : (
                                  <Banknote className="w-4 h-4 text-primary" />
                                )}
                                {order.status === 'paid'
                                  ? 'Đã thanh toán'
                                  : order.status === 'pay_later'
                                    ? 'Đã cấp khóa học (Chờ thanh toán QR / Tiền mặt)'
                                    : order.checkoutUrl
                                      ? 'Chờ quét QR hoặc Duyệt trả sau'
                                      : 'Chờ thanh toán'}
                              </span>
                            </div>

                            {(isPending || order.status === 'pay_later') && (
                              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                                <button
                                  onClick={() => handleCreateQR(order, false)}
                                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-2.5 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                                >
                                  <QrCode className="w-4 h-4" />
                                  {order.checkoutUrl
                                    ? 'Mở mã QR Chuyển khoản'
                                    : 'Tạo mã QR Chuyển khoản'}
                                </button>

                                {order.checkoutUrl && (
                                  <div className="grid grid-cols-2 gap-2">
                                    <button
                                      type="button"
                                      onClick={async () => {
                                        const paid = await orderService.verifyOrderWithPayOS(order);
                                        if (paid) {
                                          toast.success(
                                            `Đã xác nhận thanh toán thành công cho ${order.userEmail}!`
                                          );
                                        } else {
                                          toast.info(
                                            'PayOS báo đơn này chưa hoàn tất thanh toán.'
                                          );
                                        }
                                      }}
                                      className="py-2 px-3 bg-muted hover:bg-muted/80 text-foreground rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                                    >
                                      <RefreshCw className="w-3.5 h-3.5 text-primary" />
                                      Kiểm tra giao dịch
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => handleCreateQR(order, true)}
                                      className="py-2 px-3 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-lg text-xs font-semibold transition-colors flex items-center justify-center gap-1.5"
                                    >
                                      <QrCode className="w-3.5 h-3.5" />
                                      Đổi mã QR mới
                                    </button>
                                  </div>
                                )}

                                <button
                                  onClick={() => handleUpdateStatus(order, 'paid')}
                                  className="w-full bg-success hover:bg-success/90 text-success-foreground py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                >
                                  Xác nhận Đã nhận tiền (Duyệt ngay)
                                </button>

                                {isPending ? (
                                  <button
                                    onClick={() =>
                                      handleUpdateStatus(order, 'pay_later')
                                    }
                                    className="w-full bg-warning hover:bg-warning/90 text-warning-foreground py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                  >
                                    Duyệt (Cấp khóa học - Trả sau)
                                  </button>
                                ) : (
                                  <div className="w-full px-3 py-2 rounded-lg text-xs font-medium bg-success/10 text-success border border-success/20 text-center">
                                    Đã duyệt cấp khóa học (Học viên có thể thanh toán QR hoặc tiền mặt sau)
                                  </div>
                                )}
                                <button
                                  onClick={() => handleUpdateStatus(order, 'cancelled')}
                                  className="w-full bg-muted hover:bg-destructive/10 text-destructive border border-input hover:border-destructive/20 py-2.5 rounded-lg text-sm font-semibold transition-colors"
                                >
                                  Hủy đơn
                                </button>
                              </div>
                            )}
                            <div className="pt-4 border-t border-border mt-4">
                              <button
                                onClick={() => handleDeleteOrder(order.id)}
                                className="w-full bg-destructive/5 hover:bg-destructive/15 text-destructive border border-destructive/20 py-2 rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                              >
                                <Trash2 className="w-4 h-4" />
                                Xóa đơn hàng
                              </button>
                            </div>
                            {!isPending && order.status !== 'pay_later' && (
                              <div className="pt-2 text-center text-sm font-medium text-muted-foreground">
                                Đơn hàng này đã đóng ({order.status === 'paid' ? 'Đã thanh toán' : 'Đã hủy'}).
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
        {filteredOrders.length === 0 && (
          <div className="py-12 text-center text-muted-foreground bg-card rounded-xl border border-border border-dashed text-sm">
            Không có đơn hàng có phí hoặc áp dụng voucher nào khớp tìm kiếm.
          </div>
        )}
      </div>

      {/* Create Order Modal */}
      <AnimatePresence>
        {showCreateModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-card w-full max-w-2xl rounded-xl border border-border overflow-hidden flex flex-col max-h-[90vh]"
            >
              <div className="flex justify-between items-center p-6 border-b border-border bg-muted/30">
                <h2 className="text-lg font-semibold text-foreground">
                  Tạo Đơn Hàng Mới
                </h2>
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="p-6 overflow-y-auto flex-1 space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Người mua
                  </label>
                  <select
                    value={newOrder.userId}
                    onChange={(e) =>
                      setNewOrder({ ...newOrder, userId: e.target.value })
                    }
                    className="w-full p-3 rounded-xl border border-input bg-card text-foreground text-sm"
                  >
                    <option value="">-- Chọn khách hàng --</option>
                    {users.map((u) => (
                      <option key={u.uid} value={u.uid}>
                        {u.email} {u.displayName ? `(${u.displayName})` : ''}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Khóa học
                  </label>
                  <div className="space-y-2 border border-input rounded-xl p-4 max-h-60 overflow-y-auto">
                    {courses.map((c) => (
                      <label
                        key={c.id}
                        className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors"
                      >
                        <input
                          type="checkbox"
                          checked={newOrder.courseIds.includes(c.id)}
                          onChange={(e) => {
                            const ids = e.target.checked
                              ? [...newOrder.courseIds, c.id]
                              : newOrder.courseIds.filter((id) => id !== c.id);
                            setNewOrder({ ...newOrder, courseIds: ids });
                          }}
                          className="w-4 h-4 text-primary rounded border-input"
                        />
                        <div className="flex-1">
                          <p className="font-medium text-foreground text-sm">
                            {c.title}
                          </p>
                          <p className="text-xs text-primary">
                            {new Intl.NumberFormat('vi-VN', {
                              style: 'currency',
                              currency: 'VND',
                            }).format(c.price)}
                          </p>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Hình thức / Trạng thái ban đầu
                    </label>
                    <select
                      value={newOrder.status}
                      onChange={(e) =>
                        setNewOrder({
                          ...newOrder,
                          status: e.target.value as OrderStatus,
                        })
                      }
                      className="w-full p-3 rounded-xl border border-input bg-card text-foreground text-sm"
                    >
                      <option value="pay_later">
                        Cấp khóa trước & Chờ tạo QR / Trả sau
                      </option>
                      <option value="pending">
                        Chờ khách quét QR (Tự mở khóa khi thanh toán)
                      </option>
                      <option value="paid">
                        Đã thu tiền (Mở khóa & Cộng doanh thu ngay)
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Mã giảm giá (Tùy chọn)
                    </label>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newOrder.voucherCode}
                        onChange={(e) => {
                          setNewOrder({
                            ...newOrder,
                            voucherCode: e.target.value.toUpperCase(),
                          });
                          if (
                            validatedVoucher &&
                            e.target.value.toUpperCase() !== validatedVoucher.code
                          ) {
                            setValidatedVoucher(null);
                          }
                        }}
                        placeholder="Nhập mã (nếu có)"
                        className="flex-1 p-3 rounded-xl border border-input bg-card text-foreground text-sm"
                      />
                      <button
                        onClick={handleValidateVoucher}
                        disabled={isValidatingVoucher || !newOrder.voucherCode}
                        className="px-4 py-2 bg-primary/10 text-primary text-sm font-semibold rounded-xl hover:bg-primary/20 transition-colors disabled:opacity-50 whitespace-nowrap"
                      >
                        {isValidatingVoucher ? 'Đang kiểm tra...' : 'Kiểm tra'}
                      </button>
                    </div>
                    {validatedVoucher &&
                      newOrder.voucherCode === validatedVoucher.code && (
                        <p className="text-sm text-success mt-2 font-medium flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Giảm{' '}
                          {validatedVoucher.type === 'percent'
                            ? `${validatedVoucher.value}%`
                            : new Intl.NumberFormat('vi-VN', {
                                style: 'currency',
                                currency: 'VND',
                              }).format(validatedVoucher.value)}
                        </p>
                      )}
                  </div>
                </div>
              </div>

              <div className="p-6 border-t border-border bg-muted/30 flex justify-end gap-3">
                <button
                  onClick={() => setShowCreateModal(false)}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold text-muted-foreground hover:bg-muted transition-colors"
                >
                  Hủy
                </button>
                <button
                  onClick={handleCreateOrder}
                  disabled={isCreating}
                  className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors disabled:opacity-50"
                >
                  {isCreating ? 'Đang tạo...' : 'Tạo đơn hàng'}
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AdminOrders;
