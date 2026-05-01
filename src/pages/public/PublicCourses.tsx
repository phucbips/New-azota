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
import { Card, CardContent } from '../../components/ui/card';

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
      if (course.price === 0 && user) {
          navigate('/student/courses');
      } else {
          addToCart(course);
          toast.success("Added to cart");
          if (user) {
              navigate('/student/cart');
          } else {
              navigate('/login');
          }
      }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col pt-[56px]">
      <Navbar />
      <main className="flex-1 py-[64px]">
          <div className="container mx-auto px-[24px] max-w-[1280px]">
              <div className="text-center mb-[48px]">
                  <h1 className="font-display text-[40px] font-bold text-foreground md:text-[48px] mb-[16px] tracking-tight">Catalog</h1>
                  <p className="text-[16px] text-muted-foreground max-w-[600px] mx-auto">Choose from thousands of carefully curated courses.</p>
              </div>

              {loading ? (
                  <div className="flex justify-center h-[200px] items-center"><Loader2 className="w-8 h-8 animate-spin text-primary" /></div>
              ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
                    {courses.map(course => (
                        <Card key={course.id} className="group flex flex-col p-0">
                            <div className="aspect-[16/9] w-full bg-muted relative overflow-hidden h-[200px] shrink-0 border-b border-border">
                                {course.imageUrl ? (
                                    <img src={course.imageUrl} alt={course.title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                                ) : (
                                    <div className="w-full h-full flex items-center justify-center text-muted-foreground bg-accent"><BookOpen className="w-8 h-8 opacity-20" /></div>
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
                                    <Button
                                        variant="secondary"
                                        onClick={() => handlePurchaseClick(course)}
                                        className="w-full"
                                    >
                                        <ShoppingCart className="w-4 h-4" />
                                        {course.price === 0 ? 'Start Learning' : 'Add to Cart'}
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
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
