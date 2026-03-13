import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Order, orderService, OrderStatus } from '../../services/order.service';
import { courseService } from '../../services/course.service';
import { StatusBadge } from '../../components/ui/StatusBadge';
import { Search, ChevronDown, ChevronUp, Copy, CheckCircle, XCircle, CreditCard, Banknote, Calendar, Mail, User } from 'lucide-react';
import { toast } from 'sonner';
import { Loading } from '../../components/shared/Loading';
import { motion, AnimatePresence } from 'framer-motion';

export const AdminOrders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  useEffect(() => {
    const unsub = orderService.subscribeToOrders((data) => {
        setOrders(data);
        setLoading(false);
    });
    return () => unsub();
  }, []);

  const handleUpdateStatus = async (order: Order, newStatus: OrderStatus) => {
      try {
          await orderService.updateOrderStatus(order.id, newStatus);

          // Increment course enrollment count if moving to paid
          if (newStatus === 'paid' && order.status !== 'paid') {
              const items = order.items || [];
              if (items.length === 0 && order.courseId) {
                  items.push({ courseId: order.courseId, courseTitle: order.courseTitle || '', price: order.amount });
              }

              for (const item of items) {
                  // This is a naive increment for demo. A real app uses Firestore increment() in the service
                  const cInfo = await courseService.getCourses();
                  const target = cInfo.find(c => c.id === item.courseId);
                  if (target) {
                      await courseService.updateCourse(target.id, {
                          enrollmentCount: (target.enrollmentCount || 0) + 1
                      });
                  }
              }
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

      <div className="bg-card rounded-2xl border border-border shadow-sm p-4 flex items-center">
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
                                      <h3 className="font-bold text-foreground">{order.orderCode}</h3>
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
                                  <p className="text-xs text-muted-foreground mt-1">{order.paymentMethod === 'bank_transfer' ? 'Chuyển khoản' : 'Tiền mặt'}</p>
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
                                                          {order.paymentMethod === 'bank_transfer' ? 'Chuyển khoản (Cần duyệt)' : 'Thanh toán trực tiếp'}
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
    </div>
  );
};

export default AdminOrders;
