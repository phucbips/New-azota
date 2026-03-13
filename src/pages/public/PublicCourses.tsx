import React, { useState, useEffect } from 'react';
import { Course, courseService } from '../../services/course.service';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BookOpen, Tag, ShoppingCart, Loader2 } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner';

export const PublicCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
      courseService.getActiveCourses().then(data => {
          setCourses(data);
          setLoading(false);
      });
  }, []);

  const handlePurchaseClick = (course: Course) => {
      addToCart(course);
      toast.success("Đã thêm vào giỏ hàng");
      if (user) {
          navigate('/student/courses');
      } else {
          navigate('/login');
      }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 pt-32 pb-20">
          <div className="container mx-auto px-4 max-w-7xl">
              <div className="text-center mb-16">
                  <h1 className="font-display text-4xl font-extrabold text-foreground md:text-5xl mb-4">Khóa Học Của Chúng Tôi</h1>
                  <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Chọn từ hàng ngàn khóa học trực tuyến được cập nhật liên tục mỗi tháng với chất lượng tốt nhất.</p>
              </div>

              {loading ? (
                  <div className="flex justify-center h-64 items-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {courses.map(course => (
                        <div key={course.id} className="bg-card rounded-3xl border border-border shadow-sm overflow-hidden hover:shadow-xl transition-all group flex flex-col hover:-translate-y-2">
                            <div className="aspect-[4/3] w-full bg-muted relative overflow-hidden">
                                {course.imageUrl ? (
                                    <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground"><BookOpen className="w-12 h-12 opacity-20" /></div>
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                            </div>
                            <div className="p-6 flex-1 flex flex-col">
                                <h3 className="font-display font-bold text-xl text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">{course.title}</h3>
                                <p className="text-sm text-muted-foreground mt-2 line-clamp-2">{course.description}</p>

                                <div className="mt-4 flex items-center justify-between text-sm font-medium text-muted-foreground bg-muted/30 p-3 rounded-xl">
                                    <div className="flex items-center gap-1.5">
                                        <BookOpen className="w-4 h-4 text-primary" /> {course.assignmentIds.length} Bài học
                                    </div>
                                    <div className="flex items-center gap-1.5 font-bold text-emerald-600">
                                        {course.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 'Miễn phí'}
                                    </div>
                                </div>

                                <div className="mt-6">
                                    <button
                                        onClick={() => handlePurchaseClick(course)}
                                        className="w-full py-3.5 bg-background border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-xl font-bold transition-all shadow-sm flex items-center justify-center gap-2"
                                    >
                                        <ShoppingCart className="w-5 h-5" />
                                        {course.price === 0 ? 'Vào học ngay' : 'Thêm vào giỏ'}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                  </div>
              )}
          </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicCourses;
