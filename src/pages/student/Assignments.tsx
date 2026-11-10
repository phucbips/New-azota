import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { assignmentService } from '../../services/assignment.service';
import { Course, courseService } from '../../services/course.service';
import { Order, orderService } from '../../services/order.service';
import { Assignment } from '../../types';
import {
  BookOpen,
  ChevronRight,
  AlertCircle,
  Clock,
  ArrowLeft,
  Maximize,
  Minimize,
  RectangleHorizontal,
  Square,
  Search,
  Filter,
  GraduationCap,
  X,
  ArrowUpDown,
} from 'lucide-react';
import { formatDate, safeString } from '../../lib/formatters';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { SmartExamPlayer } from '../../components/student/SmartExamPlayer';
import { Skeleton } from '../../components/shared/Skeleton';

export const StudentAssignments: React.FC = () => {
  const { user } = useAuth();
  const [searchParams, setSearchParams] = useSearchParams();
  const urlSearchQuery = searchParams.get('q') || '';
  const urlCourseId = searchParams.get('courseId') || 'all';
  const urlAssignmentId = searchParams.get('assignmentId') || '';

  const [allAssignments, setAllAssignments] = useState<Assignment[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);
  const [userOrders, setUserOrders] = useState<Order[]>([]);
  const [selectedAssignment, setSelectedAssignment] = useState<Assignment | null>(null);
  const [isFetchingAssignments, setIsFetchingAssignments] = useState(true);
  const [isFetchingCourses, setIsFetchingCourses] = useState(true);

  // Filter States
  const [localSearch, setLocalSearch] = useState(urlSearchQuery);
  const [selectedCourseId, setSelectedCourseId] = useState<string>(urlCourseId);
  const [selectedSubject, setSelectedSubject] = useState<string>('all');
  const [selectedGrade, setSelectedGrade] = useState<'all' | '10' | '11' | '12'>('all');
  const [sortOrder, setSortOrder] = useState<'newest' | 'oldest' | 'title'>('newest');

  // Sync URL query params if changed externally
  useEffect(() => {
    if (urlSearchQuery) setLocalSearch(urlSearchQuery);
  }, [urlSearchQuery]);

  useEffect(() => {
    if (urlCourseId && urlCourseId !== 'all') {
      setSelectedCourseId(urlCourseId);
    }
  }, [urlCourseId]);

  const [isFullscreen, setIsFullscreen] = useState(false);
  const fullscreenContainerRef = React.useRef<HTMLDivElement>(null);

  // Chế độ rạp (Theater mode) trên PC: khung bài tập phủ kín vùng nội dung giống YouTube.
  // Ghi nhớ lựa chọn của học viên; mặc định BẬT.
  const [theaterMode, setTheaterMode] = useState<boolean>(() => {
    try {
      return localStorage.getItem('assignment_theater_mode') !== '0';
    } catch {
      return true;
    }
  });
  const [isDesktop, setIsDesktop] = useState<boolean>(() =>
    typeof window !== 'undefined' ? window.matchMedia('(min-width: 768px)').matches : false
  );

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 768px)');
    const onChange = () => setIsDesktop(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  const toggleTheaterMode = () => {
    setTheaterMode((prev) => {
      const next = !prev;
      try {
        localStorage.setItem('assignment_theater_mode', next ? '1' : '0');
      } catch {
        /* ignore */
      }
      return next;
    });
  };

  // Sync state if user presses ESC to exit fullscreen
  useEffect(() => {
    const onFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullscreen(false);
      }
    };
    document.addEventListener('fullscreenchange', onFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', onFullscreenChange);
  }, []);

  useEffect(() => {
    if (!user) {
      setIsFetchingCourses(false);
      return;
    }
    const unsubCourses = courseService.subscribeToCourses((data) => {
      setCourses(data);
      setIsFetchingCourses(false);
    });
    const unsubOrders = orderService.subscribeToUserOrders(user.uid, (data) => {
      setUserOrders(data);
    });
    return () => {
      unsubCourses();
      unsubOrders();
    };
  }, [user]);

  useEffect(() => {
    if (!user) {
      setIsFetchingAssignments(false);
      return;
    }
    const unsubAssignments = assignmentService.subscribeToAllAssignments((data) => {
      setAllAssignments(data);
      setIsFetchingAssignments(false);
    });
    return () => unsubAssignments();
  }, [user]);

  const isLoading = isFetchingAssignments || isFetchingCourses;

  // Danh sách các khóa học mà học sinh đang sở hữu
  const activeEnrolledCourses = useMemo(() => {
    if (!user) return [];
    const enrolledSet = new Set<string>(user.enrolledCourses || []);
    userOrders
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
  }, [user, courses, userOrders]);

  // Danh sách toàn bộ bài tập thuộc các khóa học đã sở hữu
  const assignments = useMemo(() => {
    const allowedAssignmentIds = new Set<string>();
    activeEnrolledCourses.forEach((c) => {
      if (c.assignmentIds) {
        c.assignmentIds.forEach((id) => allowedAssignmentIds.add(id));
      }
    });
    return allAssignments.filter((a) => a.id && allowedAssignmentIds.has(a.id));
  }, [activeEnrolledCourses, allAssignments]);

  // Nếu URL có ?assignmentId=... thì tự động mở bài tập đó
  useEffect(() => {
    if (urlAssignmentId && assignments.length > 0 && !selectedAssignment) {
      const target = assignments.find((a) => a.id === urlAssignmentId);
      if (target) {
        setSelectedAssignment(target);
      }
    }
  }, [urlAssignmentId, assignments, selectedAssignment]);

  // Bài tập sau khi lọc theo Khóa học đang chọn (để tính số lượng cho Môn & Khối)
  const courseScopedAssignments = useMemo(() => {
    if (selectedCourseId === 'all') return assignments;
    const targetCourse = activeEnrolledCourses.find((c) => c.id === selectedCourseId);
    if (!targetCourse) return assignments;
    const courseAssignSet = new Set(targetCourse.assignmentIds || []);
    return assignments.filter((a) => a.id && courseAssignSet.has(a.id));
  }, [assignments, selectedCourseId, activeEnrolledCourses]);

  // Danh sách các môn học kèm số lượng
  const subjectStats = useMemo(() => {
    const map = new Map<string, number>();
    courseScopedAssignments.forEach((a) => {
      const subj = (a.subject || 'Chung').trim();
      map.set(subj, (map.get(subj) || 0) + 1);
    });
    return Array.from(map.entries()).sort((a, b) => a[0].localeCompare(b[0], 'vi'));
  }, [courseScopedAssignments]);

  // Số lượng theo Khối lớp (10, 11, 12)
  const gradeCounts = useMemo(() => {
    const counts = { all: courseScopedAssignments.length, '10': 0, '11': 0, '12': 0 };
    courseScopedAssignments.forEach((a) => {
      const g = String(a.gradeLevel || '').trim();
      if (g === '10') counts['10']++;
      else if (g === '11') counts['11']++;
      else if (g === '12') counts['12']++;
    });
    return counts;
  }, [courseScopedAssignments]);

  // Kết quả bài tập sau khi áp dụng toàn bộ bộ lọc & sắp xếp
  const filteredAndSortedAssignments = useMemo(() => {
    const q = localSearch.toLowerCase().trim();

    const list = courseScopedAssignments.filter((assignment) => {
      // 1. Lọc theo Môn học
      if (selectedSubject !== 'all') {
        const subj = (assignment.subject || 'Chung').trim();
        if (subj !== selectedSubject) return false;
      }

      // 2. Lọc theo Khối lớp
      if (selectedGrade !== 'all') {
        if (String(assignment.gradeLevel || '').trim() !== selectedGrade) return false;
      }

      // 3. Lọc theo từ khóa tìm kiếm
      if (q) {
        const haystack = [
          assignment.title,
          assignment.topic,
          assignment.subject,
          assignment.description,
        ]
          .filter(Boolean)
          .join(' ')
          .toLowerCase();
        if (!haystack.includes(q)) return false;
      }

      return true;
    });

    // Sắp xếp
    return [...list].sort((a, b) => {
      if (sortOrder === 'title') {
        return safeString(a.title).localeCompare(safeString(b.title), 'vi');
      }
      const timeA = a.createdAt?.toMillis ? a.createdAt.toMillis() : 0;
      const timeB = b.createdAt?.toMillis ? b.createdAt.toMillis() : 0;
      return sortOrder === 'newest' ? timeB - timeA : timeA - timeB;
    });
  }, [
    courseScopedAssignments,
    selectedSubject,
    selectedGrade,
    localSearch,
    sortOrder,
  ]);

  const hasActiveFilters =
    localSearch.trim() !== '' ||
    selectedCourseId !== 'all' ||
    selectedSubject !== 'all' ||
    selectedGrade !== 'all';

  const resetFilters = () => {
    setLocalSearch('');
    setSelectedCourseId('all');
    setSelectedSubject('all');
    setSelectedGrade('all');
    if (searchParams.has('q') || searchParams.has('courseId') || searchParams.has('assignmentId')) {
      setSearchParams({});
    }
  };

  const embedHtml = useMemo(() => {
    if (!selectedAssignment) return '';
    const embed = safeString(selectedAssignment.embedUrl);

    if (selectedAssignment.type === 'native_code') {
      if (embed.toLowerCase().includes('<html')) {
        if (!embed.toLowerCase().includes('name="viewport"')) {
          return embed.replace(
            /<head>/i,
            '<head>\n<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">'
          );
        }
        return embed;
      } else {
        return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0, user-scalable=yes">
    <style>
        body { font-family: system-ui, -apple-system, sans-serif; line-height: 1.5; padding: 1rem; margin: 0; color: #1e293b; }
        img { max-width: 100%; height: auto; }
        @media (max-width: 640px) { body { font-size: 16px; padding: 0.75rem; } }
        @media (min-width: 1024px) { body { font-size: 17px; padding: 1.5rem 2rem; } }
    </style>
</head>
<body>
${embed}
</body>
</html>`;
      }
    }

    if (!embed.startsWith('<iframe')) return embed;

    try {
      const parser = new DOMParser();
      const doc = parser.parseFromString(embed, 'text/html');
      const iframe = doc.querySelector('iframe');

      if (!iframe) return embed;

      iframe.setAttribute('allowfullscreen', 'true');
      iframe.setAttribute('webkitallowfullscreen', 'true');
      iframe.setAttribute('mozallowfullscreen', 'true');

      const existingAllow = iframe.getAttribute('allow') || '';
      const allowTokens = new Set(
        existingAllow
          .split(';')
          .map((token) => token.trim())
          .filter(Boolean)
      );
      allowTokens.add('fullscreen');
      iframe.setAttribute('allow', Array.from(allowTokens).join('; '));

      iframe.removeAttribute('width');
      iframe.removeAttribute('height');
      iframe.classList.add('w-full', 'h-full');

      return iframe.outerHTML;
    } catch (error) {
      console.error('Failed to normalize embed iframe', error);
      return embed;
    }
  }, [selectedAssignment]);

  // Handle Detail View
  if (selectedAssignment) {
    const embed = embedHtml;
    const title = safeString(selectedAssignment.title);
    const topic = safeString(selectedAssignment.topic);
    const description = safeString(selectedAssignment.description || selectedAssignment.topic);
    const targetGrade = String(selectedAssignment.gradeLevel);
    const subjectTitle = safeString(selectedAssignment.subject || 'Chung');

    const isSmartExam = selectedAssignment.type === 'smart_exam';
    const theaterActive = theaterMode && isDesktop && !isSmartExam;

    const handleBackToList = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch(() => {});
      }
      setSelectedAssignment(null);
      if (searchParams.has('assignmentId')) {
        const next = new URLSearchParams(searchParams);
        next.delete('assignmentId');
        setSearchParams(next);
      }
    };

    const handleEnterFullscreen = () => {
      const el = fullscreenContainerRef.current;
      if (!el || !el.requestFullscreen) return;
      setIsFullscreen(true);
      el.requestFullscreen().catch((err) => {
        console.log('Error attempting to enable fullscreen:', err.message);
        setIsFullscreen(false);
      });
    };

    const handleExitFullscreen = () => {
      if (document.fullscreenElement) {
        document.exitFullscreen().catch((err) => console.log(err));
      }
      setIsFullscreen(false);
    };

    const toolbarBtn =
      'inline-flex items-center gap-1.5 rounded-lg border border-border bg-background px-2.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors';

    // Lưu ý: giữ nguyên cấu trúc cây phần tử khi bật/tắt chế độ rạp (chỉ đổi className)
    // để iframe KHÔNG bị tải lại -> học viên không bị mất bài đang làm.
    return (
      <>
        {!theaterActive && (
          <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
            <button
              onClick={handleBackToList}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary font-medium transition-colors text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Quay lại danh sách • {subjectTitle} (Khối {targetGrade}) {topic ? `• ${topic}` : ''}
            </button>
          </div>
        )}

        {!theaterActive && (
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-4 md:mb-5">
            <h1 className="text-2xl md:text-3xl font-semibold text-foreground tracking-tight">
              {title}
            </h1>
          </div>
        )}

        <div
          className={
            theaterActive
              ? 'fixed inset-x-0 bottom-0 top-14 lg:left-60 z-10 flex flex-col bg-background animate-in fade-in duration-200'
              : isSmartExam
                ? 'bg-card rounded-xl shadow-sm border border-border p-6 min-h-[600px] flex flex-col relative'
                : 'bg-card rounded-xl shadow-sm border border-border p-4 md:p-5 min-h-[600px] md:min-h-[560px] md:h-[calc(100dvh-13rem)] flex flex-col relative'
          }
        >
          {!isSmartExam && (
            <div
              className={
                theaterActive
                  ? 'flex items-center gap-3 h-12 shrink-0 px-4 border-b border-border bg-background'
                  : 'flex items-center justify-end gap-2 mb-3'
              }
            >
              {theaterActive && (
                <button
                  onClick={handleBackToList}
                  className="p-1.5 rounded-lg text-muted-foreground hover:text-primary hover:bg-muted transition-colors"
                  title="Quay lại danh sách"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>
              )}
              {theaterActive && (
                <div className="min-w-0 flex-1 flex items-baseline gap-2">
                  <h1 className="truncate text-sm font-semibold text-foreground" title={title}>
                    {title}
                  </h1>
                  <span className="hidden lg:inline truncate text-xs text-muted-foreground">
                    {subjectTitle} • Khối {targetGrade}
                    {topic ? ` • ${topic}` : ''}
                  </span>
                </div>
              )}
              {isDesktop && (
                <button
                  onClick={toggleTheaterMode}
                  className={toolbarBtn}
                  title={theaterActive ? 'Thu về khung thường' : 'Chế độ rạp (mở rộng khung bài tập)'}
                >
                  {theaterActive ? (
                    <>
                      <Square className="w-3.5 h-3.5" />
                      Khung thường
                    </>
                  ) : (
                    <>
                      <RectangleHorizontal className="w-3.5 h-3.5" />
                      Chế độ rạp
                    </>
                  )}
                </button>
              )}
              <button
                onClick={handleEnterFullscreen}
                className={toolbarBtn}
                title="Toàn màn hình"
              >
                <Maximize className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Toàn màn hình</span>
              </button>
            </div>
          )}

          {!theaterActive && description && description !== topic && (
            <div className="mb-4">
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>
          )}

          {isSmartExam ? (
            <SmartExamPlayer
              title={title}
              questions={selectedAssignment.questions || []}
              durationMin={Number(
                selectedAssignment.duration || selectedAssignment.timeLimit || 45
              )}
              shuffleQuestions={Boolean(selectedAssignment.shuffleQuestions)}
              shuffleOptions={Boolean(selectedAssignment.shuffleOptions)}
            />
          ) : (
            <div
              ref={fullscreenContainerRef}
              className={`flex-1 w-full relative overflow-hidden bg-card ${
                theaterActive || isFullscreen ? '' : 'rounded-lg border border-border'
              }`}
            >
              {isFullscreen && (
                <button
                  onClick={handleExitFullscreen}
                  className="absolute top-3 right-3 z-20 bg-foreground/80 hover:bg-foreground/90 text-white px-3 py-2 rounded-full shadow-md backdrop-blur-sm transition-all flex items-center gap-2 text-sm font-medium"
                >
                  <Minimize className="w-4 h-4" />
                  Thu nhỏ
                </button>
              )}
              {selectedAssignment.type === 'native_code' ? (
                <iframe
                  key={`inline-${selectedAssignment.id}`}
                  srcDoc={embed}
                  className="w-full h-full border-none absolute inset-0"
                  title={title}
                  sandbox="allow-scripts allow-modals allow-forms allow-popups allow-same-origin"
                />
              ) : selectedAssignment.type === 'video' ? (
                <div className="w-full h-full flex items-center justify-center bg-black absolute inset-0">
                  <iframe
                    src={selectedAssignment.embedUrl
                      .replace('watch?v=', 'embed/')
                      .replace('youtu.be/', 'youtube.com/embed/')}
                    className={
                      theaterActive || isFullscreen
                        ? 'w-full h-full'
                        : 'w-full h-full max-w-4xl max-h-[600px] aspect-video'
                    }
                    title={title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              ) : embed.startsWith('<iframe') ? (
                <div
                  dangerouslySetInnerHTML={{ __html: embed }}
                  className="w-full h-full absolute inset-0 [&>iframe]:w-full [&>iframe]:h-full [&>iframe]:border-0"
                />
              ) : (
                <iframe
                  src={embed}
                  className="w-full h-full absolute inset-0 border-0"
                  title={title}
                  allow="fullscreen"
                  allowFullScreen
                />
              )}
            </div>
          )}
        </div>

        {!theaterActive && !isFullscreen && <StudentSupportWidget />}
      </>
    );
  }

  // Handle Missing Grade Level
  if (!user?.grade) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center">
        <div className="p-4 bg-destructive/10 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-destructive" />
        </div>
        <h2 className="text-xl font-semibold text-foreground mb-2">Chưa cập nhật Khối lớp</h2>
        <p className="text-muted-foreground max-w-md">
          Vui lòng cập nhật khối lớp của bạn trong phần Hồ sơ hoặc liên hệ Admin để tiếp tục.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 relative">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1.5">
          <h1 className="text-3xl font-semibold text-foreground tracking-tight">
            Bài tập của tôi
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Theo dõi tiến độ và luyện tập các bài học thuộc khóa học bạn đã đăng ký.
          </p>
        </div>
      </div>

      {/* Multi-dimensional Student Filter Panel */}
      {assignments.length > 0 && (
        <div className="bg-card border border-border rounded-xl p-4 space-y-4 shadow-sm">
          {/* Row 1: Search Input + Course Selector + Sort + Reset */}
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                value={localSearch}
                onChange={(e) => setLocalSearch(e.target.value)}
                placeholder="Tìm bài tập theo tên, chủ đề, môn học..."
                className="w-full pl-10 pr-9 py-2 bg-background border border-input rounded-lg text-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
              />
              {localSearch && (
                <button
                  type="button"
                  onClick={() => setLocalSearch('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            <div className="flex flex-wrap items-center gap-2.5">
              {/* Filter by Owned Course */}
              {activeEnrolledCourses.length > 1 && (
                <div className="flex items-center gap-2 bg-background border border-input rounded-lg px-3 py-1.5">
                  <BookOpen className="w-4 h-4 text-primary shrink-0" />
                  <select
                    value={selectedCourseId}
                    onChange={(e) => setSelectedCourseId(e.target.value)}
                    className="bg-transparent text-sm text-foreground font-medium outline-none cursor-pointer max-w-[220px] truncate"
                  >
                    <option value="all">
                      Tất cả khóa học ({activeEnrolledCourses.length})
                    </option>
                    {activeEnrolledCourses.map((c) => (
                      <option key={c.id} value={c.id}>
                        {c.title}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              {/* Sort Order */}
              <div className="flex items-center gap-1.5 bg-background border border-input rounded-lg px-3 py-1.5">
                <ArrowUpDown className="w-3.5 h-3.5 text-muted-foreground shrink-0" />
                <select
                  value={sortOrder}
                  onChange={(e) => setSortOrder(e.target.value as any)}
                  className="bg-transparent text-sm text-foreground font-medium outline-none cursor-pointer"
                >
                  <option value="newest">Mới nhất</option>
                  <option value="oldest">Cũ nhất</option>
                  <option value="title">Tên A → Z</option>
                </select>
              </div>

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={resetFilters}
                  className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-destructive bg-destructive/10 hover:bg-destructive/15 transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Xóa lọc
                </button>
              )}
            </div>
          </div>

          {/* Row 2: Subject Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/70">
            <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Môn học:
            </span>
            <button
              type="button"
              onClick={() => setSelectedSubject('all')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedSubject === 'all'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
              }`}
            >
              <span>Tất cả môn</span>
              <span
                className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                  selectedSubject === 'all'
                    ? 'bg-primary-foreground/20 text-primary-foreground'
                    : 'bg-background text-muted-foreground'
                }`}
              >
                {courseScopedAssignments.length}
              </span>
            </button>

            {subjectStats.map(([subj, count]) => {
              const active = selectedSubject === subj;
              return (
                <button
                  key={subj}
                  type="button"
                  onClick={() => setSelectedSubject(subj)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span>{subj}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-background text-muted-foreground'
                    }`}
                  >
                    {count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Row 3: Grade Filter */}
          <div className="flex flex-wrap items-center gap-1.5 pt-3 border-t border-border/70">
            <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> Khối lớp:
            </span>
            {(
              [
                { id: 'all', label: 'Tất cả khối', count: gradeCounts.all },
                { id: '10', label: 'Khối 10', count: gradeCounts['10'] },
                { id: '11', label: 'Khối 11', count: gradeCounts['11'] },
                { id: '12', label: 'Khối 12', count: gradeCounts['12'] },
              ] as const
            ).map((g) => {
              const active = selectedGrade === g.id;
              return (
                <button
                  key={g.id}
                  type="button"
                  onClick={() => setSelectedGrade(g.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-muted/50 text-muted-foreground hover:text-foreground hover:bg-muted'
                  }`}
                >
                  <span>{g.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-background text-muted-foreground'
                    }`}
                  >
                    {g.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {isLoading ? (
        <div className="bg-card rounded-xl border border-border p-6 space-y-4">
          <Skeleton className="h-6 w-1/3" />
          <Skeleton className="h-40 w-full" />
          <Skeleton className="h-40 w-full" />
        </div>
      ) : filteredAndSortedAssignments.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-20">
          {filteredAndSortedAssignments.map((assignment, index) => (
            <div
              key={assignment.id}
              onClick={() => setSelectedAssignment(assignment)}
              className="group flex flex-col rounded-xl bg-card shadow-sm border border-border overflow-hidden hover:shadow-md hover:border-primary/30 transition-all duration-300 cursor-pointer"
            >
              <div className="h-44 bg-muted relative overflow-hidden">
                <img
                  src={
                    assignment.coverImageUrl ||
                    `https://source.unsplash.com/random/800x600?education,book,${index}`
                  }
                  alt="Course cover"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 from-black/60 to-transparent"></div>
                <div className="absolute top-3 right-3">
                  <span className="px-2.5 py-1 rounded-md bg-background/95 text-foreground text-xs font-semibold shadow-sm backdrop-blur-sm flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-warning" />
                    {formatDate(assignment.createdAt)}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="text-white text-xs font-medium bg-black/40 px-2.5 py-1 rounded backdrop-blur-md">
                    Khối {assignment.gradeLevel}
                  </p>
                </div>
              </div>

              <div className="p-5 flex flex-col gap-3 flex-1">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-semibold px-2 py-0.5 rounded bg-primary/10 text-primary uppercase tracking-wide">
                      {assignment.subject || 'Chung'}
                    </span>
                    {assignment.type === 'smart_exam' && (
                      <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-muted text-muted-foreground">
                        Đề thi thông minh
                      </span>
                    )}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
                    {safeString(assignment.title)}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1 line-clamp-2 font-medium">
                    {safeString(assignment.topic)}
                  </p>
                  {assignment.description && (
                    <p className="text-xs text-muted-foreground/70 mt-1 line-clamp-1">
                      {safeString(assignment.description)}
                    </p>
                  )}
                </div>

                <button className="w-full mt-auto pt-0 h-10 flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:bg-primary/90 transition-colors group-hover:shadow-md">
                  Vào làm bài
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : assignments.length > 0 ? (
        <div className="flex flex-col items-center justify-center py-16 text-center bg-card rounded-xl border border-border shadow-sm p-6">
          <Search className="w-12 h-12 text-muted-foreground/40 mb-3" />
          <h3 className="text-lg font-semibold text-foreground mb-1">
            Không tìm thấy bài tập phù hợp
          </h3>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-4">
            Không có bài tập nào khớp với bộ lọc hiện tại của bạn.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-4 py-2 bg-primary text-primary-foreground text-sm font-semibold rounded-lg hover:bg-primary/90 transition-colors"
          >
            Xóa bộ lọc để xem tất cả
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-20 text-center bg-card rounded-xl border border-border shadow-sm p-6">
          <div className="bg-primary/5 rounded-full p-6 mb-6">
            <BookOpen className="w-16 h-16 text-primary" />
          </div>
          <h3 className="text-xl font-semibold text-foreground mb-2">Bạn chưa có bài tập nào</h3>
          <p className="text-muted-foreground max-w-sm mx-auto mb-6">
            Bạn chưa được cấp quyền truy cập khóa học nào. Vui lòng đăng ký khóa học hoặc liên hệ
            Admin để được hỗ trợ nhé.
          </p>
        </div>
      )}

      <StudentSupportWidget />
    </div>
  );
};
