import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, Star, PlayCircle, Users, Tag } from "lucide-react";
import { Link } from "react-router-dom";
import { Course, courseService } from "../../services/course.service";

export const MenuSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  const [hasEnoughSales, setHasEnoughSales] = useState(false);

  useEffect(() => {
      courseService.getActiveCourses().then(data => {
          // Sort by enrollmentCount (descending) to find top courses
          const sorted = data.sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0));

          // Check if at least 4 courses have been sold (enrollmentCount > 0)
          const coursesWithSales = sorted.filter(c => (c.enrollmentCount || 0) > 0);

          if (coursesWithSales.length >= 4) {
              setHasEnoughSales(true);
              setCourses(sorted.slice(0, 4));
          } else {
              setHasEnoughSales(false);
          }
      });
  }, []);

  if (courses.length === 0) return null;

  return (
    <section className="bg-muted/10 py-20 md:py-32" id="courses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-20 md:flex-row"
        >
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
              Khóa Học Phổ Biến
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Lựa chọn khóa học phù hợp với mục tiêu của bạn từ thư viện khóa học đa dạng của chúng tôi.
            </p>
          </div>
          <Link
            to="/courses"
            className="group flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Xem tất cả
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                {course.imageUrl ? (
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                ) : (
                    <div className="w-full h-full flex items-center justify-center text-muted-foreground"><BookOpen className="w-12 h-12 opacity-20" /></div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <Link to="/courses" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <PlayCircle className="h-16 w-16 fill-primary text-white" />
                </Link>
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-md">
                  Mới
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">4.9</span>
                  </div>
                </div>

                <h3 className="mb-4 font-display text-xl font-bold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to="/courses">{course.title}</Link>
                </h3>

                <div className="mt-auto flex flex-col gap-3 border-t border-border pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Users className="h-4 w-4" />
                        <span>{course.enrollmentCount || 0} học viên</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4" />
                        <span>{course.assignmentIds?.length || 0} bài giảng</span>
                      </div>
                  </div>
                  <div className="font-bold text-emerald-600 flex items-center gap-1.5 text-base">
                      <Tag className="w-4 h-4" />
                      {course.price > 0 ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(course.price) : 'Miễn phí'}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
