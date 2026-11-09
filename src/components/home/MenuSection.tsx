import { useState, useEffect } from "react";
import { BookOpen, Users, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Course, courseService } from "../../services/course.service";
import { orderService, isFreeNonVoucherOrder } from "../../services/order.service";
import { Button } from "../ui/button";

export const MenuSection = () => {
  const [courses, setCourses] = useState<(Course & { paidCount: number })[]>([]);

  useEffect(() => {
    Promise.all([
      courseService.getActiveCourses(),
      orderService.getOrders().catch(() => []),
    ]).then(([activeCourses, orders]) => {
      // Tính lượt mua thực tế từ các đơn có phí / voucher (nếu là Admin), hoặc lấy từ enrollmentCount đã đồng bộ
      const purchaseCountMap = new Map<string, number>();
      const paidOrders = orders.filter(
        (o) => (o.status === 'paid' || o.status === 'pay_later') && !isFreeNonVoucherOrder(o)
      );

      paidOrders.forEach((o) => {
        if (Array.isArray(o.items) && o.items.length > 0) {
          o.items.forEach((item) => {
            if (item.courseId) {
              purchaseCountMap.set(item.courseId, (purchaseCountMap.get(item.courseId) || 0) + 1);
            }
          });
        } else if (o.courseId) {
          purchaseCountMap.set(o.courseId, (purchaseCountMap.get(o.courseId) || 0) + 1);
        }
      });

      const coursesWithCount = activeCourses.map((c) => ({
        ...c,
        paidCount:
          orders.length > 0
            ? purchaseCountMap.get(c.id) || 0
            : c.enrollmentCount || 0,
      }));

      const sorted = coursesWithCount.sort((a, b) => b.paidCount - a.paidCount);
      const coursesWithSales = sorted.filter((c) => c.paidCount > 0);
      if (coursesWithSales.length >= 4) {
        setCourses(sorted.slice(0, 4));
      } else {
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
                      {course.paidCount || 0} học viên
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
