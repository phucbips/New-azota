import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Order, orderService, OrderStatus } from '../../services/order.service';
import { User as UserType } from '../../types';
import { Course } from '../../services/course.service';
import { courseService } from '../../services/course.service';
import { userService } from '../../services/user.service';
import { financeService } from '../../services/finance.service';
import { voucherService } from '../../services/voucher.service';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Search, ChevronDown, ChevronUp, Copy, CheckCircle, XCircle, CreditCard, Banknote, Calendar, Mail, User, Plus, X } from 'lucide-react';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const [showCreateModal, setShowCreateModal] = useState(false);
  const [users, setUsers] = useState<UserType[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [newOrder, setNewOrder] = useState({
      userId: '',
      courseIds: [] as string[],
      status: 'paid' as OrderStatus,
      voucherCode: ''
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



  const handleValidateVoucher = async () => {
      if (!newOrder.voucherCode.trim()) {
          toast.error("Vui lòng nhập mã giảm giá");
          return;
      }
      setIsValidatingVoucher(true);
      try {
          const v = await voucherService.getVoucherByCode(newOrder.voucherCode);
          if (!v) {
              toast.error("Mã giảm giá không hợp lệ hoặc đã hết hạn");
              setValidatedVoucher(null);
              return;
          }
          if (v.expiresAt && v.expiresAt.toDate() < new Date()) {
              toast.error("Mã giảm giá đã hết hạn");
              setValidatedVoucher(null);
              return;
          }
          if (v.usageLimit && v.usageCount >= v.usageLimit) {
              toast.error("Mã giảm giá đã hết lượt sử dụng");
              setValidatedVoucher(null);
              return;
          }

          let amount = 0;
          const selectedCourses = courses.filter(c => newOrder.courseIds.includes(c.id));
          selectedCourses.forEach(c => amount += c.price);

          if (v.minOrderValue && amount < v.minOrderValue) {
              toast.error(`Đơn hàng chưa đạt giá trị tối thiểu (${new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(v.minOrderValue)})`);
              setValidatedVoucher(null);
              return;
          }

          toast.success("Áp dụng mã giảm giá thành công");
          setValidatedVoucher(v);
      } catch (err) {
          toast.error("Lỗi khi kiểm tra mã giảm giá");
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
          const selectedUser = users.find(u => u.uid === newOrder.userId);
          const selectedCourses = courses.filter(c => newOrder.courseIds.includes(c.id));

          if (!selectedUser) throw new Error('Không tìm thấy người dùng');

          let amount = 0;
          const items = selectedCourses.map(c => {
              amount += c.price;
              return { courseId: c.id, courseTitle: c.title, price: c.price };
          });

          // Generate an order ID to potentially use for finance logging immediately
          const orderCodeNum = Math.floor(Date.now() / 1000) + Math.floor(Math.random() * 9000);
          const orderCode = String(orderCodeNum);

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

          const orderId = await orderService.createOrder({
              userId: selectedUser.uid,
              userEmail: selectedUser.email,
              userName: selectedUser.displayName || 'Unknown',
              items,
              amount: finalAmount,
              originalAmount: amount,
              discount: discountAmount,
              status: newOrder.status,
              paymentMethod: newOrder.status === 'paid' ? 'cash' : 'cash', // Cash since it's manual
              voucherCode: validatedVoucher ? validatedVoucher.code : null
          });

          if (validatedVoucher && newOrder.voucherCode === validatedVoucher.code) {
              await voucherService.incrementUsage(validatedVoucher.id);
          }

          if (newOrder.status === 'paid' || newOrder.status === 'pay_later') {
              // Add to enrolled courses in both paid and pay_later cases
              const newEnrolled = new Set([...(selectedUser.enrolledCourses || []), ...newOrder.courseIds]);
              await userService.updateUser(selectedUser.uid, { enrolledCourses: Array.from(newEnrolled) });

              // Increment course enrollment count
              for (const c of selectedCourses) {
                  await courseService.updateCourse(c.id, { enrollmentCount: (c.enrollmentCount || 0) + 1 });
              }

              // Only record finance transaction if actually paid
              if (newOrder.status === 'paid') {
                  const courseTitles = selectedCourses.map(c => c.title).join(', ');
                  const desc = `${selectedUser.email} - ${courseTitles} ${newOrder.voucherCode ? `- ${newOrder.voucherCode}` : ''}`.trim();

                  await financeService.addTransaction({
                      type: 'income',
                      category: 'Bán khóa học',
                      amount: amount,
                      description: desc,
                      createdBy: 'admin' // or use current user auth id if available
                  });
              }
          }

          toast.success('Tạo đơn hàng thành công');
          setShowCreateModal(false);
          setNewOrder({ userId: '', courseIds: [], status: 'paid', voucherCode: '' });
      } catch (e: any) {
          toast.error(`Lỗi: ${e.message}`);
      } finally {
          setIsCreating(false);
      }
  };

  const handleUpdateStatus = async (order: Order, newStatus: OrderStatus) => {
      try {
          await orderService.updateOrderStatus(order.id, newStatus);

          // Increment course enrollment count if moving to paid
          if (newStatus === 'paid' && order.status !== 'paid') {
              const items = order.items || [];
              if (items.length === 0 && order.courseId) {
                  items.push({ courseId: order.courseId, courseTitle: order.courseTitle || '', price: order.amount });
              }

              const courseIds: string[] = [];
              const courseTitles: string[] = [];
              for (const item of items) {
                  courseIds.push(item.courseId);
                  courseTitles.push(item.courseTitle);
                  // This is a naive increment for demo. A real app uses Firestore increment() in the service
                  const cInfo = await courseService.getCourses();
                  const target = cInfo.find(c => c.id === item.courseId);
                  if (target) {
                      await courseService.updateCourse(target.id, {
                          enrollmentCount: (target.enrollmentCount || 0) + 1
                      });
                  }
              }

              // Automatically add courses to the user's enrolledCourses array
              if (order.userId && courseIds.length > 0) {
                  import('../../services/user.service').then(({ userService }) => {
                      userService.getUser(order.userId).then(u => {
                          if (u) {
                              const newEnrolled = new Set([...(u.enrolledCourses || []), ...courseIds]);
                              userService.updateUser(u.uid, { enrolledCourses: Array.from(newEnrolled) });
                          }
                      });
                  });
              }

              // Record finance transaction
              const titlesStr = courseTitles.join(', ');
              const desc = `${order.userEmail} - ${titlesStr} ${order.voucherCode ? `- ${order.voucherCode}` : ''}`.trim();
              await financeService.addTransaction({
                  type: 'income',
                  category: 'Bán khóa học',
                  amount: order.amount,
                  description: desc,
                  createdBy: 'admin'
              });
          }

          toast.success(`Đã cập nhật trạng thái thành ${newStatus === 'paid' ? 'Đã Thanh toán' : newStatus === 'cancelled' ? 'Đã Hủy' : 'Ghi nợ'}`);
          setExpandedId(null);
      } catch (e) {
          toast.error('Lỗi khi cập nhật trạng thái');
      }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Đã sao chép mã đơn hàng");
  };

  const filteredOrders = orders.filter(o =>
      o.orderCode.toLowerCase().includes(search.toLowerCase()) ||
      o.userEmail.toLowerCase().includes(search.toLowerCase()) ||
      o.userName.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-6 max-w-5xl mx-auto pb-10">
      <PageHeader
        title="Quản lý Đơn hàng"
        subtitle="Theo dõi và duyệt đăng ký khóa học của học viên."
      />

      <div className="bg-card rounded-2xl border border-border shadow-sm p-4 flex items-center justify-between gap-4">
          <div className="relative w-full md:w-96 group">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                <Search className="w-5 h-5 text-muted-foreground group-focus-within:text-primary transition-colors" />
            </div>
            <input
                type="text"
                placeholder="Tìm mã đơn, tên, email..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-3 bg-muted/50 border-none rounded-xl focus:ring-2 focus:ring-primary/20 outline-none transition-all"
            />
          </div>
          <button
              onClick={() => setShowCreateModal(true)}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-3 rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 whitespace-nowrap"
          >
              <Plus className="w-5 h-5" />
              Tạo đơn hàng
          </button>
      </div>

      <div className="flex flex-col gap-4">
          {filteredOrders.map(order => {
              const isExpanded = expandedId === order.id;
              const isPending = order.status === 'pending';

              return (
                  <motion.div
                      key={order.id}
                      layout
                      className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden"
                  >
                      {/* Header Row */}
                      <div
                        className="p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 cursor-pointer hover:bg-muted/30 transition-colors"
                        onClick={() => setExpandedId(isExpanded ? null : order.id)}
                      >
                          <div className="flex items-center gap-4">
                              <div className={`p-3 rounded-xl ${order.status === 'paid' ? 'bg-emerald-500/10 text-emerald-600' : order.status === 'cancelled' ? 'bg-red-500/10 text-red-600' : 'bg-yellow-500/10 text-yellow-600'}`}>
                                  {order.status === 'paid' ? <CheckCircle className="w-6 h-6" /> : order.status === 'cancelled' ? <XCircle className="w-6 h-6" /> : <Banknote className="w-6 h-6" />}
                              </div>
                              <div>
                                  <div className="flex items-center gap-2">
                                      <h3 className="font-bold text-foreground">{order.userEmail} - {order.orderCode}</h3>
                                      {order.status === 'pay_later' ? (
                                          <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-yellow-100 text-yellow-800">Trả sau</span>
                                      ) : (
                                          <StatusBadge status={order.status === 'paid' ? 'Active' : order.status === 'cancelled' ? 'Inactive' : 'Pending'} />
                                      )}
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">
                                      {order.items?.length ? `${order.items.length} khóa học: ${order.items.map(i => i.courseTitle).join(', ')}` : order.courseTitle}
                                  </p>
                              </div>
                          </div>

                          <div className="flex items-center justify-between md:justify-end gap-6 w-full md:w-auto">
                              <div className="text-left md:text-right">
                                  <p className="font-bold text-primary">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.amount)}</p>
                                  <p className="text-xs text-muted-foreground mt-1">{order.paymentMethod === 'bank_transfer' ? 'Chuyển khoản' : 'Tiền mặt (trả sau)'}</p>
                              </div>
                              {isExpanded ? <ChevronUp className="w-5 h-5 text-muted-foreground" /> : <ChevronDown className="w-5 h-5 text-muted-foreground" />}
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
                                              <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Thông tin Học viên</h4>
                                              <div className="space-y-3 bg-card p-4 rounded-xl border border-border shadow-sm">
                                                  <div className="flex items-center gap-3 text-sm text-foreground">
                                                      <User className="w-4 h-4 text-muted-foreground" />
                                                      <span className="font-medium">{order.userName}</span>
                                                  </div>
                                                  <div className="flex items-center gap-3 text-sm text-foreground">
                                                      <Mail className="w-4 h-4 text-muted-foreground" />
                                                      <a href={`mailto:${order.userEmail}`} className="text-primary hover:underline">{order.userEmail}</a>
                                                  </div>
                                                  <div className="flex items-center gap-3 text-sm text-foreground">
                                                      <Calendar className="w-4 h-4 text-muted-foreground" />
                                                      <span>{order.createdAt?.toDate ? order.createdAt.toDate().toLocaleString('vi-VN') : 'N/A'}</span>
                                                  </div>
                                              </div>
                                          </div>

                                          {/* Actions / Payment */}
                                          <div className="space-y-4">
                                              <h4 className="text-xs font-bold uppercase tracking-wide text-muted-foreground">Thanh toán & Duyệt</h4>
                                              <div className="bg-card p-4 rounded-xl border border-border shadow-sm space-y-4">
                                                  <div className="flex justify-between items-center text-sm">
                                                      <span className="text-muted-foreground">Phương thức:</span>
                                                      <span className="font-bold flex items-center gap-1">
                                                          {order.paymentMethod === 'bank_transfer' ? <CreditCard className="w-4 h-4 text-primary" /> : <Banknote className="w-4 h-4 text-primary" />}
                                                          {order.paymentMethod === 'bank_transfer' ? (order.status === 'paid' ? 'Đã chuyển khoản' : 'Chưa chuyển khoản') : 'Tiền mặt (trả sau)'}
                                                      </span>
                                                  </div>

                                                  {(isPending || order.status === 'pay_later') && (
                                                      <div className="flex flex-col gap-2 pt-4 border-t border-border">
                                                          <button
                                                            onClick={() => handleUpdateStatus(order, 'paid')}
                                                            className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                                                          >
                                                              Duyệt (Đã thu tiền)
                                                          </button>
                                                          {isPending && order.paymentMethod === 'cash' && (
                                                              <button
                                                                onClick={() => handleUpdateStatus(order, 'pay_later')}
                                                                className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                                                              >
                                                                  Duyệt (Ghi nợ / Trả sau)
                                                              </button>
                                                          )}
                                                          <button
                                                            onClick={() => handleUpdateStatus(order, 'cancelled')}
                                                            className="w-full bg-muted hover:bg-red-50 text-red-600 border border-input hover:border-red-200 py-2.5 rounded-lg text-sm font-bold transition-colors"
                                                          >
                                                              Hủy đơn
                                                          </button>
                                                      </div>
                                                  )}
                                                  {!isPending && order.status !== 'pay_later' && (
                                                      <div className="pt-2 text-center text-sm font-medium text-muted-foreground">
                                                          Đơn hàng này đã đóng ({order.status}).
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
              )
          })}
          {filteredOrders.length === 0 && (
              <div className="py-12 text-center text-muted-foreground bg-card rounded-2xl border border-border border-dashed">
                  Không tìm thấy đơn hàng nào.
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
                      className="bg-card w-full max-w-2xl rounded-2xl shadow-xl border border-border overflow-hidden flex flex-col max-h-[90vh]"
                  >
                      <div className="flex justify-between items-center p-6 border-b border-border bg-muted/30">
                          <h2 className="text-xl font-bold text-foreground">Tạo Đơn Hàng Mới</h2>
                          <button onClick={() => setShowCreateModal(false)} className="text-muted-foreground hover:text-foreground transition-colors p-2 hover:bg-muted rounded-full">
                              <X className="w-5 h-5" />
                          </button>
                      </div>

                      <div className="p-6 overflow-y-auto flex-1 space-y-6">
                          <div>
                              <label className="block text-sm font-bold text-foreground mb-2">Người mua</label>
                              <select
                                  value={newOrder.userId}
                                  onChange={e => setNewOrder({...newOrder, userId: e.target.value})}
                                  className="w-full p-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                              >
                                  <option value="">-- Chọn khách hàng --</option>
                                  {users.map(u => (
                                      <option key={u.uid} value={u.uid}>{u.email} {u.displayName ? `(${u.displayName})` : ''}</option>
                                  ))}
                              </select>
                          </div>

                          <div>
                              <label className="block text-sm font-bold text-foreground mb-2">Khóa học</label>
                              <div className="space-y-2 border border-input rounded-xl p-4 max-h-60 overflow-y-auto">
                                  {courses.map(c => (
                                      <label key={c.id} className="flex items-center gap-3 p-2 hover:bg-muted rounded-lg cursor-pointer transition-colors">
                                          <input
                                              type="checkbox"
                                              checked={newOrder.courseIds.includes(c.id)}
                                              onChange={(e) => {
                                                  const ids = e.target.checked
                                                      ? [...newOrder.courseIds, c.id]
                                                      : newOrder.courseIds.filter(id => id !== c.id);
                                                  setNewOrder({...newOrder, courseIds: ids});
                                              }}
                                              className="w-4 h-4 text-primary rounded border-input focus:ring-primary"
                                          />
                                          <div className="flex-1">
                                              <p className="font-medium text-foreground">{c.title}</p>
                                              <p className="text-sm text-primary">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(c.price)}</p>
                                          </div>
                                      </label>
                                  ))}
                              </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              <div>
                                  <label className="block text-sm font-bold text-foreground mb-2">Trạng thái</label>
                                  <select
                                      value={newOrder.status}
                                      onChange={e => setNewOrder({...newOrder, status: e.target.value as OrderStatus})}
                                      className="w-full p-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                                  >
                                      <option value="paid">Đã trả (Thành công)</option>
                                      <option value="pay_later">Trả sau (Ghi nợ)</option>
                                  </select>
                              </div>
                              <div>
                                  <label className="block text-sm font-bold text-foreground mb-2">Mã giảm giá (Tùy chọn)</label>
                                  <div className="flex gap-2">
                                      <input
                                          type="text"
                                          value={newOrder.voucherCode}
                                          onChange={e => {
                                              setNewOrder({...newOrder, voucherCode: e.target.value.toUpperCase()});
                                              if (validatedVoucher && e.target.value.toUpperCase() !== validatedVoucher.code) {
                                                  setValidatedVoucher(null);
                                              }
                                          }}
                                          placeholder="Nhập mã (nếu có)"
                                          className="flex-1 p-3 rounded-xl border border-input bg-card text-foreground focus:ring-2 focus:ring-primary focus:border-transparent"
                                      />
                                      <button
                                          onClick={handleValidateVoucher}
                                          disabled={isValidatingVoucher || !newOrder.voucherCode}
                                          className="px-4 py-2 bg-primary/10 text-primary font-bold rounded-xl hover:bg-primary/20 transition-colors disabled:opacity-50 whitespace-nowrap"
                                      >
                                          {isValidatingVoucher ? 'Đang kiểm tra...' : 'Kiểm tra'}
                                      </button>
                                  </div>
                                  {validatedVoucher && newOrder.voucherCode === validatedVoucher.code && (
                                      <p className="text-sm text-emerald-600 mt-2 font-medium flex items-center gap-1">
                                          <CheckCircle className="w-4 h-4" />
                                          Giảm {validatedVoucher.type === 'percent' ? `${validatedVoucher.value}%` : new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(validatedVoucher.value)}
                                      </p>
                                  )}
                              </div>
                          </div>
                      </div>

                      <div className="p-6 border-t border-border bg-muted/30 flex justify-end gap-3">
                          <button
                              onClick={() => setShowCreateModal(false)}
                              className="px-6 py-2.5 rounded-xl font-bold text-muted-foreground hover:bg-muted transition-colors"
                          >
                              Hủy
                          </button>
                          <button
                              onClick={handleCreateOrder}
                              disabled={isCreating}
                              className="px-6 py-2.5 rounded-xl font-bold bg-primary text-primary-foreground hover:bg-primary/90 transition-colors shadow-md disabled:opacity-50"
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
