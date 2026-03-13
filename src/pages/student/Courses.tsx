import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Course, courseService } from '../../services/course.service';
import { Order, orderService } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { BookOpen, Tag, ShoppingCart, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

export const StudentCourses: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);

  useEffect(() => {
      const unsubCourses = courseService.subscribeToCourses((data) => {
          // Students only see active courses
          setCourses(data.filter(c => c.isActive));
          setLoading(false);
      });

      let unsubOrders = () => {};
      if (user?.uid) {
          unsubOrders = orderService.subscribeToUserOrders(user.uid, (data) => {
              setOrders(data);
          });
      }

      return () => {
          unsubCourses();
          unsubOrders();
      };
  }, [user]);

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash'>('bank_transfer');

  const handlePurchaseClick = (course: Course) => {
      if (course.price === 0) {
          handleConfirmPurchase(course, 'bank_transfer', 'paid');
      } else {
          setSelectedCourse(course);
          setPaymentMethod('bank_transfer');
      }
  };

  const handleConfirmPurchase = async (course: Course, method: 'bank_transfer' | 'cash', initialStatus: 'pending' | 'paid' = 'pending') => {
      if (!user) return;
      setPurchasing(course.id);
      try {
          const orderId = await orderService.createOrder({
              userId: user!.uid,
              userEmail: user!.email,
              userName: user!.displayName || 'Student',
              courseId: course.id,
              courseTitle: course.title,
              amount: course.price,
              status: initialStatus,
              paymentMethod: method,
          });
          setSelectedCourse(null);

          if (initialStatus === 'paid') {
              toast.success("Đăng ký khóa học thành công!");
          } else {
              if (method === 'bank_transfer') {
                  navigate(`/student/payment?orderId=${orderId}`);
              } else {
                  toast.success("Đã ghi nhận yêu cầu. Admin sẽ liên hệ và duyệt sau khi bạn thanh toán tiền mặt.");
              }
          }
      } catch (err) {
          toast.error("Có lỗi xảy ra khi đặt mua.");
          console.error(err);
      } finally {
          setPurchasing(null);
      }
  };

  const getCourseStatus = (courseId: string) => {
      const order = orders.find(o => o.courseId === courseId);
      if (!order) return 'unpurchased';
      return order.status; // 'pending' | 'paid' | 'cancelled'
  };

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        title="Danh sách Khóa học"
        subtitle="Khám phá và đăng ký các khóa học mới nhất."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map(course => {
            const status = getCourseStatus(course.id);

            return (
                <div key={course.id} className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow group flex flex-col">
                    <div className="aspect-video w-full bg-muted relative">
                        {course.imageUrl ? (
                            <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground"><BookOpen className="w-12 h-12 opacity-20" /></div>
                        )}
                        {status === 'paid' && (
                            <div className="absolute top-3 left-3 bg-emerald-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" /> Đã Mua
                            </div>
                        )}
                        {status === 'pending' && (
                            <div className="absolute top-3 left-3 bg-yellow-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-md">
                                Đang chờ Duyệt
                            </div>
                        )}
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                        <h3 className="font-display font-bold text-xl text-card-foreground line-clamp-2">{course.title}</h3>
                        <p className="text-sm text-muted-foreground mt-2 line-clamp-3">{course.description}</p>

                        <div className="mt-4 flex items-center gap-4 text-sm font-medium text-muted-foreground bg-muted/30 p-3 rounded-xl">
                            <div className="flex items-center gap-1.5">
                                <BookOpen className="w-4 h-4 text-primary" /> {course.assignmentIds.length} Bài học
                            </div>
                            <div className="flex items-center gap-1.5">
                                <Tag className="w-4 h-4 text-emerald-500" />
                                {course.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 'Miễn phí'}
                            </div>
                        </div>

                        <div className="mt-auto pt-6">
                            {status === 'unpurchased' || status === 'cancelled' ? (
                                <button
                                    onClick={() => handlePurchaseClick(course)}
                                    disabled={purchasing === course.id}
                                    className="w-full py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
                                >
                                    {purchasing === course.id ? <Loader2 className="w-5 h-5 animate-spin" /> : <ShoppingCart className="w-5 h-5" />}
                                    {course.price === 0 ? 'Nhận khóa học' : 'Đăng ký mua'}
                                </button>
                            ) : status === 'pending' ? (
                                <button disabled className="w-full py-3 bg-muted text-muted-foreground rounded-xl font-bold cursor-not-allowed">
                                    Đang chờ thanh toán
                                </button>
                            ) : (
                                <Link to="/student/assignments" className="w-full py-3 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl font-bold hover:bg-emerald-100 transition-colors flex items-center justify-center">
                                    Vào học ngay
                                </Link>
                            )}
                        </div>
                    </div>
                </div>
            )
        })}
        {courses.length === 0 && (
            <div className="col-span-full py-20 text-center bg-card rounded-2xl border border-border border-dashed">
                <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
                <p className="text-lg font-medium text-foreground">Hiện tại chưa có khóa học nào.</p>
                <p className="text-muted-foreground">Vui lòng quay lại sau.</p>
            </div>
        )}
      </div>

      {/* Checkout Modal */}
      {selectedCourse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
              <div className="bg-background rounded-3xl w-full max-w-md shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                  <div className="p-6 border-b border-border bg-muted/30">
                      <h3 className="text-xl font-bold text-foreground font-display">Xác nhận Đăng ký</h3>
                      <p className="text-sm text-muted-foreground mt-1">Chọn phương thức thanh toán</p>
                  </div>

                  <div className="p-6 space-y-6">
                      <div className="bg-card border border-border rounded-xl p-4 flex gap-4 items-center">
                          {selectedCourse.imageUrl ? (
                              <img src={selectedCourse.imageUrl} className="w-16 h-16 rounded-lg object-cover" />
                          ) : (
                              <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center"><BookOpen className="w-8 h-8 opacity-20" /></div>
                          )}
                          <div>
                              <h4 className="font-bold text-foreground line-clamp-1">{selectedCourse.title}</h4>
                              <p className="font-bold text-emerald-600 mt-1">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(selectedCourse.price)}</p>
                          </div>
                      </div>

                      <div className="space-y-3">
                          <label
                              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'bank_transfer' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                              onClick={() => setPaymentMethod('bank_transfer')}
                          >
                              <div className="flex items-center gap-3">
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'bank_transfer' ? 'border-primary' : 'border-muted-foreground'}`}>
                                      {paymentMethod === 'bank_transfer' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                  </div>
                                  <span className="font-bold text-foreground">Chuyển khoản / Quét mã QR</span>
                              </div>
                              <span className="text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-md font-bold">Tự động duyệt</span>
                          </label>

                          <label
                              className={`flex items-center justify-between p-4 rounded-xl border-2 cursor-pointer transition-all ${paymentMethod === 'cash' ? 'border-primary bg-primary/5' : 'border-border hover:border-primary/50'}`}
                              onClick={() => setPaymentMethod('cash')}
                          >
                              <div className="flex items-center gap-3">
                                  <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${paymentMethod === 'cash' ? 'border-primary' : 'border-muted-foreground'}`}>
                                      {paymentMethod === 'cash' && <div className="w-2.5 h-2.5 bg-primary rounded-full" />}
                                  </div>
                                  <span className="font-bold text-foreground">Tiền mặt</span>
                              </div>
                              <span className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded-md font-bold">Thủ công</span>
                          </label>
                      </div>

                      <div className="flex items-center gap-3 pt-4">
                          <button
                              onClick={() => setSelectedCourse(null)}
                              className="flex-1 py-3 text-sm font-bold text-muted-foreground hover:bg-muted rounded-xl transition-colors"
                          >
                              Hủy
                          </button>
                          <button
                              onClick={() => handleConfirmPurchase(selectedCourse, paymentMethod)}
                              disabled={purchasing === selectedCourse.id}
                              className="flex-[2] py-3 text-sm font-bold bg-primary text-white hover:bg-primary/90 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                          >
                              {purchasing === selectedCourse.id ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Xác nhận Đặt hàng'}
                          </button>
                      </div>
                  </div>
              </div>
          </div>
      )}
    </div>
  );
};

export default StudentCourses;
