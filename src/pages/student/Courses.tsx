import React, { useState, useEffect, useMemo } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Course, courseService } from '../../services/course.service';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Order, orderService } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../contexts/CartContext';
import { BookOpen, Tag, ShoppingCart, Loader2, CheckCircle, Search, Filter, X } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

export const StudentCourses: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [courseFilter, setCourseFilter] = useState<'all' | 'owned' | 'unowned' | 'free'>('all');

  useEffect(() => {
    const unsubCourses = courseService.subscribeToCourses((data) => {
      setCourses(data.filter((c) => c.isActive));
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
  }, [user?.uid]);

  // Auto-heal: if user has any paid/pay_later order whose courses are not yet in user.enrolledCourses, sync them
  useEffect(() => {
    if (!user?.uid || orders.length === 0) return;
    const currentEnrolled = new Set(user.enrolledCourses || []);
    const missingCourseIds: string[] = [];

    orders
      .filter((o) => o.status === 'paid' || o.status === 'pay_later')
      .forEach((o) => {
        if (o.courseId && !currentEnrolled.has(o.courseId)) {
          missingCourseIds.push(o.courseId);
        }
        if (Array.isArray(o.items)) {
          o.items.forEach((item) => {
            if (item.courseId && !currentEnrolled.has(item.courseId)) {
              missingCourseIds.push(item.courseId);
            }
          });
        }
      });

    if (missingCourseIds.length > 0) {
      const uniqueMissing = Array.from(new Set(missingCourseIds));
      updateDoc(doc(db, 'users', user.uid), {
        enrolledCourses: arrayUnion(...uniqueMissing),
      }).catch((err) => console.warn('Could not auto-sync enrolledCourses:', err));
    }
  }, [user?.uid, user?.enrolledCourses, orders]);

  const { addToCart, cartItems } = useCart();

  const handlePurchaseClick = (course: Course) => {
    if (course.price === 0) {
      handleConfirmPurchase(course, 'bank_transfer', 'paid');
    } else {
      addToCart(course);
      toast.success('Đã thêm khóa học vào giỏ hàng!');
    }
  };

  const handleConfirmPurchase = async (
    course: Course,
    method: 'bank_transfer' | 'cash',
    initialStatus: 'pending' | 'paid' = 'pending'
  ) => {
    if (!user) return;
    setPurchasing(course.id);
    try {
      const items = [
        { courseId: course.id, courseTitle: course.title, price: course.price },
      ];

      const orderId = await orderService.createOrder({
        userId: user.uid,
        userEmail: user.email,
        userName: user.displayName || 'Student',
        items,
        amount: course.price,
        originalAmount: course.price,
        status: initialStatus,
        paymentMethod: method,
      });

      if (initialStatus === 'paid') {
        const userRef = doc(db, 'users', user.uid);
        await updateDoc(userRef, {
          enrolledCourses: arrayUnion(course.id),
        });
      }

      if (initialStatus === 'paid') {
        toast.success('Đăng ký khóa học thành công!');
      } else {
        if (method === 'bank_transfer') {
          navigate(`/student/payment?orderId=${orderId}`);
        } else {
          toast.success(
            'Đã ghi nhận yêu cầu. Admin sẽ liên hệ và duyệt sau khi bạn thanh toán tiền mặt.'
          );
        }
      }
    } catch (err) {
      toast.error('Có lỗi xảy ra khi đặt mua.');
      console.error(err);
    } finally {
      setPurchasing(null);
    }
  };

  const enrolledSet = useMemo(
    () => new Set(user?.enrolledCourses || []),
    [user?.enrolledCourses]
  );

  /**
   * Determines course ownership status by checking BOTH:
   * 1. `user.enrolledCourses` (granted directly by Admin or unlocked after purchase)
   * 2. User's orders (`paid` / `pay_later` -> owned; `pending` -> awaiting payment)
   */
  const getCourseStatus = (courseId: string): 'paid' | 'pending' | 'unpurchased' => {
    if (enrolledSet.has(courseId)) {
      return 'paid';
    }

    const matchingOrders = orders.filter(
      (o) =>
        o.courseId === courseId ||
        (Array.isArray(o.items) && o.items.some((i) => i.courseId === courseId))
    );

    if (matchingOrders.some((o) => o.status === 'paid' || o.status === 'pay_later')) {
      return 'paid';
    }

    if (matchingOrders.some((o) => o.status === 'pending')) {
      return 'pending';
    }

    return 'unpurchased';
  };

  const filterCounts = useMemo(() => {
    let owned = 0;
    let unowned = 0;
    let free = 0;

    courses.forEach((c) => {
      const st = getCourseStatus(c.id);
      if (st === 'paid') owned++;
      else unowned++;
      if (c.price === 0) free++;
    });

    return { all: courses.length, owned, unowned, free };
  }, [courses, enrolledSet, orders]);

  const filteredCourses = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();
    return courses.filter((c) => {
      const st = getCourseStatus(c.id);
      if (courseFilter === 'owned' && st !== 'paid') return false;
      if (courseFilter === 'unowned' && st === 'paid') return false;
      if (courseFilter === 'free' && c.price !== 0) return false;

      if (q) {
        const hay = `${c.title || ''} ${c.description || ''}`.toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });
  }, [courses, courseFilter, searchQuery, enrolledSet, orders]);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <PageHeader
        title="Danh sách Khóa học"
        subtitle="Khám phá, lọc nhanh khóa học đã sở hữu hoặc đăng ký khóa học mới."
      />

      {/* Course Filter Bar */}
      {courses.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-4 flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 shadow-sm">
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Bộ lọc:
            </span>
            {(
              [
                { id: 'all', label: 'Tất cả khóa học', count: filterCounts.all },
                { id: 'owned', label: 'Đã sở hữu', count: filterCounts.owned },
                { id: 'unowned', label: 'Chưa đăng ký', count: filterCounts.unowned },
                { id: 'free', label: 'Miễn phí', count: filterCounts.free },
              ] as const
            ).map((tab) => {
              const active = courseFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setCourseFilter(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-background text-muted-foreground'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm tên khóa học..."
              className="w-full pl-9 pr-8 py-1.5 bg-background border border-input rounded-lg text-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => {
          const status = getCourseStatus(course.id);
          const pendingOrder = orders.find(
            (o) =>
              o.status === 'pending' &&
              (o.courseId === course.id ||
                (Array.isArray(o.items) &&
                  o.items.some((i) => i.courseId === course.id)))
          );

          return (
            <div
              key={course.id}
              className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/40 transition-colors group flex flex-col"
            >
              <div className="aspect-video w-full bg-muted relative">
                {course.imageUrl ? (
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-muted-foreground">
                    <BookOpen className="w-12 h-12 opacity-20" />
                  </div>
                )}
                {status === 'paid' && (
                  <div className="absolute top-3 left-3 bg-success text-success-foreground px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Đã sở hữu
                  </div>
                )}
                {status === 'pending' && (
                  <div className="absolute top-3 left-3 bg-warning text-warning-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Chờ thanh toán
                  </div>
                )}
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-semibold text-lg text-card-foreground line-clamp-2">
                  {course.title}
                </h3>
                <p className="text-sm text-muted-foreground mt-2 line-clamp-3">
                  {course.description}
                </p>

                <div className="mt-4 flex items-center gap-4 text-sm font-medium text-muted-foreground bg-muted/40 p-3 rounded-lg">
                  <div className="flex items-center gap-1.5">
                    <BookOpen className="w-4 h-4 text-primary" />{' '}
                    {(course.assignmentIds || []).length} Bài học
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Tag className="w-4 h-4 text-success" />
                    {course.price > 0
                      ? new Intl.NumberFormat('vi-VN', {
                          style: 'currency',
                          currency: 'VND',
                        }).format(course.price)
                      : 'Miễn phí'}
                  </div>
                </div>

                <div className="mt-auto pt-5">
                  {status === 'paid' ? (
                    <Link
                      to={`/student/assignments?courseId=${course.id}`}
                      className="w-full py-2.5 bg-success/10 text-success border border-success/20 rounded-lg text-sm font-semibold hover:bg-success/15 transition-colors flex items-center justify-center gap-1.5"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Vào học ngay
                    </Link>
                  ) : status === 'pending' && pendingOrder ? (
                    <Link
                      to={`/student/payment?orderId=${pendingOrder.id}`}
                      className="w-full py-2.5 bg-warning hover:bg-warning/90 text-warning-foreground rounded-lg text-sm font-semibold transition-colors flex items-center justify-center"
                    >
                      Tiếp tục thanh toán
                    </Link>
                  ) : (
                    <button
                      onClick={() => handlePurchaseClick(course)}
                      disabled={purchasing === course.id}
                      className="w-full py-2.5 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg text-sm font-semibold transition-colors flex items-center justify-center gap-2"
                    >
                      {purchasing === course.id ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : (
                        <ShoppingCart className="w-4 h-4" />
                      )}
                      {course.price === 0
                        ? 'Nhận khóa học'
                        : cartItems.find((c) => c.id === course.id)
                          ? 'Đã thêm vào giỏ'
                          : 'Thêm vào giỏ hàng'}
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        {filteredCourses.length === 0 && (
          <div className="col-span-full py-16 text-center bg-card rounded-xl border border-border border-dashed">
            <BookOpen className="w-12 h-12 text-muted-foreground/30 mx-auto mb-3" />
            <p className="text-base font-semibold text-foreground">
              {courses.length === 0
                ? 'Hiện tại chưa có khóa học nào.'
                : 'Không tìm thấy khóa học phù hợp với bộ lọc.'}
            </p>
            {courses.length > 0 && (
              <button
                type="button"
                onClick={() => {
                  setCourseFilter('all');
                  setSearchQuery('');
                }}
                className="mt-3 px-4 py-2 text-xs font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Xem tất cả khóa học
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentCourses;
