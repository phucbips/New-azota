import React, { useState, useEffect } from 'react';
import { Course, courseService } from '../../services/course.service';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { BookOpen, ShoppingCart, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { useCart } from '../../contexts/CartContext';
import { toast } from 'sonner';
import { Button } from '../../components/ui/button';

export const PublicCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const { user } = useAuth();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  useEffect(() => {
    courseService.getActiveCourses().then((data) => {
      setCourses(data);
      setLoading(false);
    });
  }, []);

  const handlePurchaseClick = (course: Course) => {
    if (course.price === 0 && user) {
      navigate('/student/courses');
    } else {
      addToCart(course);
      toast.success('Đã thêm vào giỏ hàng');
      if (user) {
        navigate('/student/cart');
      } else {
        navigate('/login');
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1 py-12 md:py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-10 border-b border-border pb-6">
            <p className="eyebrow mb-1.5">Danh mục</p>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Tất cả khóa học
            </h1>
            <p className="mt-1.5 max-w-2xl text-sm text-muted-foreground">
              Chọn khóa học phù hợp với mục tiêu học tập của bạn.
            </p>
          </div>

          {loading ? (
            <div className="flex h-64 items-center justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-muted-foreground" />
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
              {courses.map((course) => (
                <div
                  key={course.id}
                  className="flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20"
                >
                  <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-border bg-muted">
                    {course.imageUrl ? (
                      <img src={course.imageUrl} alt={course.title} className="h-full w-full object-cover" />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                        <BookOpen className="h-10 w-10 opacity-30" />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="line-clamp-2 text-base font-semibold text-foreground">{course.title}</h3>
                    <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{course.description}</p>

                    <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <BookOpen className="h-3.5 w-3.5" /> {course.assignmentIds.length} bài học
                      </span>
                      <span className="text-sm font-semibold text-foreground tabular-nums">
                        {course.price > 0
                          ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price)
                          : 'Miễn phí'}
                      </span>
                    </div>

                    <div className="mt-4">
                      <Button onClick={() => handlePurchaseClick(course)} className="w-full">
                        <ShoppingCart />
                        {course.price === 0 ? 'Vào học ngay' : 'Thêm vào giỏ'}
                      </Button>
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
