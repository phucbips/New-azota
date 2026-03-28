import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Order, orderService } from '../../services/order.service';
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

  const handleUpdateStatus = async (id: string, status: 'paid' | 'cancelled') => {
      try {
          await orderService.updateOrderStatus(id, status);
          toast.success(`Đã cập nhật trạng thái thành ${status === 'paid' ? 'Đã Thanh toán' : 'Đã Hủy'}`);
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
                                      <StatusBadge status={order.status === 'paid' ? 'Active' : order.status === 'cancelled' ? 'Inactive' : 'Pending'} />
                                  </div>
                                  <p className="text-sm text-muted-foreground mt-1 line-clamp-1">{order.courseTitle}</p>
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

                                                  {isPending && (
                                                      <div className="flex gap-2 pt-4 border-t border-border">
                                                          <button
                                                            onClick={() => handleUpdateStatus(order.id, 'paid')}
                                                            className="flex-1 bg-emerald-500 hover:bg-emerald-600 text-white py-2.5 rounded-lg text-sm font-bold transition-colors shadow-sm"
                                                          >
                                                              Duyệt (Đã thu tiền)
                                                          </button>
                                                          <button
                                                            onClick={() => handleUpdateStatus(order.id, 'cancelled')}
                                                            className="flex-1 bg-muted hover:bg-red-50 text-red-600 border border-input hover:border-red-200 py-2.5 rounded-lg text-sm font-bold transition-colors"
                                                          >
                                                              Hủy đơn
                                                          </button>
                                                      </div>
                                                  )}
                                                  {!isPending && (
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
