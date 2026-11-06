import React, { useEffect, useState, useMemo } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { BookOpen, GraduationCap, FileText, ArrowRight, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { AnnouncementFeed } from '../../components/student/AnnouncementFeed';
import { courseService, Course } from '../../services/course.service';
import { orderService, Order } from '../../services/order.service';
import { assignmentService } from '../../services/assignment.service';
import { Assignment } from '../../types';
import { formatDate, safeString } from '../../lib/formatters';

export const StudentHome: React.FC = () => {
  const { user } = useAuth();
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [allAssignments, setAllAssignments] = useState<Assignment[]>([]);

  useEffect(() => {
    if (!user?.uid) return;
    const unsubCourses = courseService.subscribeToCourses(setCourses);
    const unsubOrders = orderService.subscribeToUserOrders(user.uid, setOrders);
    const unsubAssignments = assignmentService.subscribeToAllAssignments(setAllAssignments);
    return () => {
      unsubCourses();
      unsubOrders();
      unsubAssignments();
    };
  }, [user?.uid]);

  const ownedCourses = useMemo(() => {
    if (!user) return [];
    const enrolledSet = new Set<string>(user.enrolledCourses || []);
    orders
      .filter((o) => o.status === 'paid' || o.status === 'pay_later')
      .forEach((o) => {
        if (o.courseId) enrolledSet.add(o.courseId);
        if (Array.isArray(o.items)) {
          o.items.forEach((i) => {
            if (i.courseId) enrolledSet.add(i.courseId);
          });
        }
      });
    return courses.filter((c) => enrolledSet.has(c.id));
  }, [user, courses, orders]);

  const studentAssignments = useMemo(() => {
    const allowedIds = new Set<string>();
    ownedCourses.forEach((c) => {
      (c.assignmentIds || []).forEach((id) => allowedIds.add(id));
    });
    return allAssignments.filter((a) => a.id && allowedIds.has(a.id));
  }, [ownedCourses, allAssignments]);

  const recentAssignments = useMemo(() => {
    return [...studentAssignments]
      .sort((a, b) => {
        const tA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
        const tB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
        return tB - tA;
      })
      .slice(0, 3);
  }, [studentAssignments]);

  const firstName = user?.displayName?.split(' ')[0] || 'Học sinh';

  return (
    <div className="space-y-6 relative min-h-[80vh]">
      <PageHeader
        title={`Xin chào, ${firstName}!`}
        description="Theo dõi tiến độ học tập, khóa học đã đăng ký và thông báo mới nhất."
      />

      {/* Real Student Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <StatCard
          title="Khối lớp hiện tại"
          value={user?.grade ? `Khối ${user.grade}` : 'Chưa chọn'}
          icon={<GraduationCap className="w-5 h-5 text-primary" />}
          trend="Đang theo học"
        />
        <StatCard
          title="Khóa học đã sở hữu"
          value={`${ownedCourses.length} khóa`}
          icon={<BookOpen className="w-5 h-5 text-success" />}
          trend={ownedCourses.length > 0 ? 'Đã kích hoạt' : 'Khám phá khóa học mới'}
        />
        <StatCard
          title="Bài tập của tôi"
          value={`${studentAssignments.length} bài`}
          icon={<FileText className="w-5 h-5 text-primary" />}
          trend="Sẵn sàng luyện tập"
        />
      </div>

      {/* Clean Minimal Call-to-Action Banner */}
      <div className="bg-primary text-primary-foreground rounded-xl p-6 relative overflow-hidden shadow-sm">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider bg-primary-foreground/15 px-2.5 py-1 rounded-full mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Góc học tập Khối {user?.grade || '--'}
            </div>
            <h3 className="text-xl font-semibold mb-1">
              Sẵn sàng bứt phá điểm số hôm nay?
            </h3>
            <p className="text-primary-foreground/85 text-sm max-w-xl">
              {studentAssignments.length > 0
                ? `Bạn đang có ${studentAssignments.length} bài tập và đề luyện thuộc ${ownedCourses.length} khóa học. Hãy chọn môn học để bắt đầu làm bài ngay.`
                : 'Đăng ký các khóa học chất lượng hoặc liên hệ giáo viên để nhận lộ trình bài tập phù hợp nhất.'}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <Link
              to="/student/assignments"
              className="inline-flex items-center gap-2 bg-background text-primary px-5 py-2.5 rounded-lg font-semibold text-sm hover:bg-background/90 transition-colors shadow-sm"
            >
              <BookOpen className="w-4 h-4" />
              Vào làm bài tập
            </Link>
            <Link
              to="/student/courses"
              className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/25 px-4 py-2.5 rounded-lg font-semibold text-sm hover:bg-primary-foreground/25 transition-colors"
            >
              Xem khóa học
            </Link>
          </div>
        </div>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
          <GraduationCap className="w-56 h-56" />
        </div>
      </div>

      {/* Quick Access: Recent Assignments */}
      {recentAssignments.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-base font-semibold text-foreground">
                Bài tập mới nhất của bạn
              </h3>
              <p className="text-xs text-muted-foreground">
                Bấm vào bài tập bất kỳ để vào học ngay lập tức
              </p>
            </div>
            <Link
              to="/student/assignments"
              className="inline-flex items-center gap-1 text-xs font-semibold text-primary hover:underline"
            >
              Xem tất cả ({studentAssignments.length})
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {recentAssignments.map((a) => (
              <Link
                key={a.id}
                to={`/student/assignments?assignmentId=${a.id}`}
                className="group p-4 rounded-xl border border-border bg-background hover:border-primary/40 hover:shadow-sm transition-all flex flex-col justify-between gap-3"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase">
                      {a.subject || 'Chung'}
                    </span>
                    <span className="text-[11px] text-muted-foreground flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {formatDate(a.createdAt)}
                    </span>
                  </div>
                  <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {safeString(a.title)}
                  </h4>
                  {a.topic && (
                    <p className="text-xs text-muted-foreground mt-1 line-clamp-1">
                      {safeString(a.topic)}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-between pt-2 border-t border-border/60 text-xs font-semibold text-primary">
                  <span>Khối {a.gradeLevel}</span>
                  <span className="inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                    Làm bài ngay <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      <AnnouncementFeed />

      <StudentSupportWidget />
    </div>
  );
};
