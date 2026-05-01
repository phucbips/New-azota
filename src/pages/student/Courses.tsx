import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { Course, courseService } from '../../services/course.service';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { Order, orderService } from '../../services/order.service';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../contexts/CartContext';
import { BookOpen, ShoppingCart, Loader2, CheckCircle } from 'lucide-react';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';

export const StudentCourses: React.FC = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [purchasing, setPurchasing] = useState<string | null>(null);

  useEffect(() => {
      const unsubCourses = courseService.subscribeToCourses((data) => {
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

  const { addToCart, cartItems } = useCart();
  const [paymentMethod, setPaymentMethod] = useState<'bank_transfer' | 'cash'>('bank_transfer');

  const handlePurchaseClick = (course: Course) => {
      if (course.price === 0) {
          handleConfirmPurchase(course, 'bank_transfer', 'paid');
      } else {
          addToCart(course);
          toast.success("Added to cart!");
      }
  };

  const handleConfirmPurchase = async (course: Course, method: 'bank_transfer' | 'cash', initialStatus: 'pending' | 'paid' = 'pending') => {
      if (!user) return;
      setPurchasing(course.id);
      try {
          const items = [{ courseId: course.id, courseTitle: course.title, price: course.price }];

          const orderId = await orderService.createOrder({
              userId: user!.uid,
              userEmail: user!.email,
              userName: user!.displayName || 'Student',
              items: items,
              amount: course.price,
              originalAmount: course.price,
              status: initialStatus,
              paymentMethod: method,
          });

          if (initialStatus === 'paid') {
              const userRef = doc(db, 'users', user!.uid);
              await updateDoc(userRef, {
                  enrolledCourses: arrayUnion(course.id)
              });
          }

          if (initialStatus === 'paid') {
              toast.success("Successfully enrolled!");
          } else {
              if (method === 'bank_transfer') {
                  navigate(`/student/payment?orderId=${orderId}`);
              } else {
                  toast.success("Request recorded. Admin will process it shortly.");
              }
          }
      } catch (err) {
          toast.error("An error occurred during purchase.");
          console.error(err);
      } finally {
          setPurchasing(null);
      }
  };

  const getCourseStatus = (courseId: string) => {
      const order = orders.find(o => o.courseId === courseId || (o.items && o.items.some(i => i.courseId === courseId)));
      if (!order) return 'unpurchased';
      return order.status;
  };

  if (loading) return <div className="flex items-center justify-center h-[200px]"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>;

  return (
    <div className="flex flex-col gap-[24px]">
      <div className="mb-[16px]">
        <h1 className="text-[32px] font-bold font-display tracking-tight text-foreground">Course Catalog</h1>
        <p className="text-[15px] text-muted-foreground mt-[8px]">Discover and enroll in new courses to expand your knowledge.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
        {courses.map(course => {
            const status = getCourseStatus(course.id);

            return (
                <Card key={course.id} className="group flex flex-col p-0">
                    <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden h-[200px] shrink-0 border-b border-border">
                        {course.imageUrl ? (
                            <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent"><BookOpen className="w-8 h-8 opacity-20" /></div>
                        )}
                        {status === 'paid' && (
                            <div className="absolute top-[12px] left-[12px]">
                                <Badge variant="success" className="bg-white text-success border-none shadow-sm"><CheckCircle className="w-3 h-3 mr-1" /> Enrolled</Badge>
                            </div>
                        )}
                        {status === 'pending' && (
                            <div className="absolute top-[12px] left-[12px]">
                                <Badge variant="warning" className="bg-white text-warning border-none shadow-sm">Pending Payment</Badge>
                            </div>
                        )}
                    </div>
                    <CardContent className="p-[20px] flex-1 flex flex-col">
                        <h3 className="font-bold text-[18px] text-foreground line-clamp-2 leading-snug">{course.title}</h3>
                        <p className="text-[14px] text-muted-foreground mt-[8px] line-clamp-2 leading-relaxed">{course.description}</p>

                        <div className="mt-auto pt-[20px] flex items-center justify-between text-[14px]">
                            <div className="flex items-center gap-[6px] text-muted-foreground">
                                <BookOpen className="w-[14px] h-[14px]" /> {course.assignmentIds.length} lessons
                            </div>
                            <div className="font-bold text-foreground">
                                {course.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 'Free'}
                            </div>
                        </div>

                        <div className="mt-[20px]">
                            {status === 'unpurchased' || status === 'cancelled' ? (
                                <Button
                                    variant="secondary"
                                    onClick={() => handlePurchaseClick(course)}
                                    disabled={purchasing === course.id}
                                    className="w-full"
                                >
                                    {purchasing === course.id ? <Loader2 className="w-4 h-4 mr-2 animate-spin" /> : <ShoppingCart className="w-4 h-4 mr-2" />}
                                    {course.price === 0 ? 'Enroll Now' : (cartItems.find(c => c.id === course.id) ? 'Added to Cart' : 'Add to Cart')}
                                </Button>
                            ) : status === 'pending' ? (
                                <Button asChild variant="secondary" className="w-full">
                                  <Link to={`/student/payment?orderId=${orders.find(o => o.courseId === course.id || (o.items && o.items.some(i => i.courseId === course.id)))?.id}`}>
                                      Complete Payment
                                  </Link>
                                </Button>
                            ) : (
                                <Button asChild className="w-full bg-success/10 text-success hover:bg-success/20 hover:shadow-none border-none">
                                  <Link to="/student/assignments">
                                      Go to Learning
                                  </Link>
                                </Button>
                            )}
                        </div>
                    </CardContent>
                </Card>
            )
        })}
        {courses.length === 0 && (
            <div className="col-span-full py-[80px] text-center rounded-[12px] border border-border border-dashed bg-surface">
                <BookOpen className="w-[48px] h-[48px] text-muted-foreground/30 mx-auto mb-[16px]" />
                <p className="text-[16px] font-bold text-foreground">No courses available.</p>
                <p className="text-[14px] text-muted-foreground">Please check back later.</p>
            </div>
        )}
      </div>
    </div>
  );
};

export default StudentCourses;
