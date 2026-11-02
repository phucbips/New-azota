import { useState, useEffect } from "react";
import { BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Course, courseService } from "../../services/course.service";
import { Button } from "../ui/button";

export const MenuSection = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    courseService.getActiveCourses().then((data) => {
      const sorted = data.sort((a, b) => (b.enrollmentCount || 0) - (a.enrollmentCount || 0));
      const coursesWithSales = sorted.filter((c) => (c.enrollmentCount || 0) > 0);
      if (coursesWithSales.length >= 4) {
        setCourses(sorted.slice(0, 4));
      }
    });
  }, []);

  if (courses.length === 0) return null;

  return (
    <section className="border-b border-border bg-background py-16 md:py-24" id="courses">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-1.5">Thư viện</p>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Khóa học phổ biến
            </h2>
            <p className="mt-1.5 max-w-xl text-sm text-muted-foreground">
              Lựa chọn khóa học phù hợp với mục tiêu học tập của bạn.
            </p>
          </div>
          <Button asChild variant="outline" size="sm">
            <Link to="/courses">
              Xem tất cả
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <Link
              key={course.id}
              to="/courses"
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors hover:border-foreground/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden border-b border-border bg-muted">
                {course.imageUrl ? (
                  <img src={course.imageUrl} alt={course.title} className="h-full w-full object-cover" />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-muted-foreground">
                    <BookOpen className="h-8 w-8 opacity-40" />
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-4">
                <h3 className="line-clamp-2 text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                  {course.title}
                </h3>

                <div className="mt-auto pt-4">
                  <div className="flex items-center justify-between border-t border-border pt-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {course.enrollmentCount || 0} học viên
                    </span>
                    <span className="flex items-center gap-1.5">
                      <BookOpen className="h-3.5 w-3.5" />
                      {course.assignmentIds?.length || 0} bài
                    </span>
                  </div>
                  <p className="mt-2.5 text-sm font-semibold text-foreground tabular-nums">
                    {course.price > 0
                      ? new Intl.NumberFormat("vi-VN", { style: "currency", currency: "VND" }).format(course.price)
                      : "Miễn phí"}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
