import React, { useState, useEffect, useMemo } from 'react';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db } from '../../config/firebase';
import { userService } from '../../services/user.service';
import { User, UserRole } from '../../types';
import {
  Trash2,
  UserPlus,
  Loader2,
  Edit2,
  Plus,
  Smartphone,
  Monitor,
  Database,
  BookOpen,
  Search,
  Filter,
  X,
  GraduationCap,
  CheckCircle2,
} from 'lucide-react';
import { toast } from 'sonner';
import { formatDate } from '../../lib/formatters';
import { formatDistanceToNow } from 'date-fns';
import { vi } from 'date-fns/locale';
import { DataTable } from '../../components/ui/DataTable';
import { ColumnDef } from '@tanstack/react-table';
import { useForm } from 'react-hook-form';
import { Course, courseService } from '../../services/course.service';
import { orderService, Order } from '../../services/order.service';

type CreateUserForm = {
  email: string;
  role: UserRole;
  grade?: string;
};

export const UserManagement: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);
  const { register, handleSubmit, watch, reset } = useForm<CreateUserForm>({
    defaultValues: { role: 'student', grade: '10' },
  });

  const [loading, setLoading] = useState(false);
  const [isFetching, setIsFetching] = useState(true);
  const [isAddMode, setIsAddMode] = useState(false);
  const [migrationLoading, setMigrationLoading] = useState(false);

  // Edit Mode State
  const [editingUser, setEditingUser] = useState<User | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [courses, setCourses] = useState<Course[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);

  // Bulk Grant Modal State
  const [bulkGrantUsers, setBulkGrantUsers] = useState<User[]>([]);
  const [isBulkGrantOpen, setIsBulkGrantOpen] = useState(false);

  // Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [roleFilter, setRoleFilter] = useState<'all' | UserRole>('all');
  const [gradeFilter, setGradeFilter] = useState<'all' | '10' | '11' | '12' | 'unassigned'>('all');
  const [courseStatusFilter, setCourseStatusFilter] = useState<'all' | 'has_course' | 'no_course' | string>('all');

  const selectedRole = watch('role');

  useEffect(() => {
    const unsubCourses = courseService.subscribeToCourses(setCourses);
    const unsubOrders = orderService.subscribeToOrders(setOrders);

    const unsubscribe = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
      setIsFetching(false);
    });
    return () => {
      unsubCourses();
      unsubOrders();
      unsubscribe();
    };
  }, []);

  // Bản đồ các khóa học đã sở hữu (hợp nhất từ enrolledCourses + đơn paid/pay_later) của từng user
  const userOwnedCourseIdsMap = useMemo(() => {
    const map = new Map<string, string[]>();
    const validCourseIds = new Set(courses.map((c) => c.id));

    users.forEach((u) => {
      const set = new Set<string>();
      (u.enrolledCourses || []).forEach((cid) => {
        if (validCourseIds.size === 0 || validCourseIds.has(cid)) {
          set.add(cid);
        }
      });
      map.set(u.uid, Array.from(set));
    });

    orders.forEach((o) => {
      if ((o.status === 'paid' || o.status === 'pay_later') && o.userId) {
        const existing = new Set<string>(map.get(o.userId) || []);
        if (Array.isArray(o.items)) {
          o.items.forEach((item) => {
            if (item.courseId && (validCourseIds.size === 0 || validCourseIds.has(item.courseId))) {
              existing.add(item.courseId);
            }
          });
        } else if ((o as any).courseId) {
          existing.add((o as any).courseId);
        }
        map.set(o.userId, Array.from(existing));
      }
    });

    return map;
  }, [users, orders, courses]);

  const courseTitleMap = useMemo(() => {
    const m = new Map<string, string>();
    courses.forEach((c) => m.set(c.id, c.title));
    return m;
  }, [courses]);

  // Thống kê số lượng cho từng bộ lọc
  const filterCounts = useMemo(() => {
    const roleCounts = {
      all: users.length,
      student: 0,
      teacher: 0,
      admin: 0,
    };
    const gradeCounts = {
      all: 0,
      '10': 0,
      '11': 0,
      '12': 0,
      unassigned: 0,
    };
    const courseCounts = {
      has_course: 0,
      no_course: 0,
    };

    users.forEach((u) => {
      if (u.role === 'student') roleCounts.student++;
      else if (u.role === 'teacher') roleCounts.teacher++;
      else if (u.role === 'admin') roleCounts.admin++;

      // Grade counts (áp dụng trên tập role đang chọn hoặc toàn bộ học sinh)
      if (roleFilter === 'all' || u.role === roleFilter) {
        gradeCounts.all++;
        const g = String(u.grade || '').trim();
        if (g === '10') gradeCounts['10']++;
        else if (g === '11') gradeCounts['11']++;
        else if (g === '12') gradeCounts['12']++;
        else gradeCounts.unassigned++;

        const owned = userOwnedCourseIdsMap.get(u.uid) || [];
        if (owned.length > 0) courseCounts.has_course++;
        else courseCounts.no_course++;
      }
    });

    return { roleCounts, gradeCounts, courseCounts };
  }, [users, roleFilter, userOwnedCourseIdsMap]);

  // Dữ liệu sau khi áp dụng toàn bộ Filter
  const filteredUsers = useMemo(() => {
    const q = searchQuery.toLowerCase().trim();

    return users.filter((u) => {
      // 1. Lọc theo từ khóa (Email hoặc Tên hiển thị)
      if (q) {
        const emailMatch = (u.email || '').toLowerCase().includes(q);
        const nameMatch = (u.displayName || '').toLowerCase().includes(q);
        if (!emailMatch && !nameMatch) return false;
      }

      // 2. Lọc theo Vai trò
      if (roleFilter !== 'all' && u.role !== roleFilter) {
        return false;
      }

      // 3. Lọc theo Khối lớp
      if (gradeFilter !== 'all') {
        const g = String(u.grade || '').trim();
        if (gradeFilter === 'unassigned') {
          if (g === '10' || g === '11' || g === '12') return false;
        } else if (g !== gradeFilter) {
          return false;
        }
      }

      // 4. Lọc theo Khóa học / Trạng thái cấp khóa
      if (courseStatusFilter !== 'all') {
        const owned = userOwnedCourseIdsMap.get(u.uid) || [];
        if (courseStatusFilter === 'has_course') {
          if (owned.length === 0) return false;
        } else if (courseStatusFilter === 'no_course') {
          if (owned.length > 0) return false;
        } else {
          // Lọc theo ID khóa học cụ thể
          if (!owned.includes(courseStatusFilter)) return false;
        }
      }

      return true;
    });
  }, [users, searchQuery, roleFilter, gradeFilter, courseStatusFilter, userOwnedCourseIdsMap]);

  const hasActiveFilter =
    searchQuery.trim() !== '' ||
    roleFilter !== 'all' ||
    gradeFilter !== 'all' ||
    courseStatusFilter !== 'all';

  const resetAllFilters = () => {
    setSearchQuery('');
    setRoleFilter('all');
    setGradeFilter('all');
    setCourseStatusFilter('all');
  };

  const onSubmit = async (data: CreateUserForm) => {
    setLoading(true);
    try {
      if (data.role === 'student' && !data.grade) {
        toast.error('Vui lòng chọn Khối cho học sinh');
        return;
      }

      await userService.createInvitation(
        data.email,
        data.role,
        data.role === 'student' ? data.grade || null : null
      );
      toast.success(`Đã mời ${data.email} thành công!`);
      reset({ role: 'student', grade: '10', email: '' });
      setIsAddMode(false);
    } catch (error: any) {
      toast.error(error.message || 'Có lỗi xảy ra khi tạo tài khoản');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (uid: string) => {
    if (!confirm('Bạn có chắc chắn muốn xóa người dùng này?')) return;
    try {
      await userService.deleteUser(uid);
      toast.success('Đã xóa người dùng');
    } catch (error) {
      toast.error('Lỗi khi xóa người dùng');
    }
  };

  const handleBulkDelete = async (selectedUsers: User[]) => {
    if (!confirm(`Bạn có chắc chắn muốn xóa ${selectedUsers.length} người dùng đã chọn?`)) return;
    try {
      await Promise.all(selectedUsers.map((u) => userService.deleteUser(u.uid)));
      toast.success(`Đã xóa ${selectedUsers.length} người dùng`);
    } catch (error) {
      toast.error('Lỗi khi xóa người dùng');
    }
  };

  const handleEdit = (user: User) => {
    setEditingUser(user);
    setIsEditModalOpen(true);
  };

  const handleRunMigration = async () => {
    if (
      !confirm(
        'Hành động này sẽ cập nhật dữ liệu cho các user cũ (thêm joinedAt nếu thiếu). Bạn có chắc chắn?'
      )
    )
      return;
    setMigrationLoading(true);
    try {
      await userService.runMigration();
      toast.success('Migration hoàn tất!');
    } catch (error) {
      console.error(error);
      toast.error('Có lỗi xảy ra khi migration.');
    } finally {
      setMigrationLoading(false);
    }
  };

  const formatLastActive = (user: User) => {
    const device = user.lastDevice || 'Unknown';
    const timeAgo = user.lastLoginAt
      ? formatDistanceToNow(user.lastLoginAt.toDate(), { addSuffix: true, locale: vi })
      : '';

    if (!user.lastLoginAt) return '--';

    return (
      <div className="flex flex-col">
        <span className="text-foreground">{timeAgo}</span>
        <span className="text-xs text-muted-foreground flex items-center gap-1">
          {device === 'PC' ? <Monitor className="w-3 h-3" /> : <Smartphone className="w-3 h-3" />}
          {device}
        </span>
      </div>
    );
  };

  // Define Columns for DataTable
  const columns: ColumnDef<User>[] = useMemo(
    () => [
      {
        id: 'select',
        header: ({ table }) => (
          <input
            type="checkbox"
            className="rounded border-input text-primary w-4 h-4"
            checked={table.getIsAllPageRowsSelected()}
            onChange={(e) => table.toggleAllPageRowsSelected(!!e.target.checked)}
          />
        ),
        cell: ({ row }) => (
          <input
            type="checkbox"
            className="rounded border-input text-primary w-4 h-4"
            checked={row.getIsSelected()}
            onChange={(e) => row.toggleSelected(!!e.target.checked)}
          />
        ),
        enableSorting: false,
        enableHiding: false,
      },
      {
        accessorKey: 'email',
        header: 'Học sinh / Người dùng',
        cell: ({ row }) => {
          const u = row.original;
          return (
            <div className="flex items-center gap-3">
              <img src={u.photoURL} alt="" className="h-10 w-10 rounded-full bg-muted object-cover" />
              <div>
                <div className="font-medium text-foreground">
                  {u.displayName || u.email.split('@')[0]}
                </div>
                <div className="text-sm text-muted-foreground">{u.email}</div>
                {u.grade && (
                  <span className="inline-flex items-center gap-1 mt-0.5 text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded">
                    <GraduationCap className="w-3 h-3" />
                    Khối {u.grade}
                  </span>
                )}
              </div>
            </div>
          );
        },
      },
      {
        accessorKey: 'role',
        header: 'Vai trò',
        cell: ({ row }) => {
          const role = row.original.role;
          return (
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize
                    ${
                      role === 'admin'
                        ? 'bg-primary/10 text-primary border border-primary/20'
                        : role === 'teacher'
                        ? 'bg-primary/10 text-primary'
                        : 'bg-success/10 text-success'
                    }`}
            >
              {role === 'teacher' ? 'Giáo viên' : role === 'student' ? 'Học sinh' : 'Admin'}
            </span>
          );
        },
      },
      {
        id: 'enrolledCourses',
        header: 'Khóa học đã cấp',
        cell: ({ row }) => {
          const u = row.original;
          const ownedIds = userOwnedCourseIdsMap.get(u.uid) || [];
          return (
            <div className="flex flex-wrap items-center gap-1.5 max-w-xs">
              {ownedIds.length === 0 ? (
                <span className="text-xs text-muted-foreground">Chưa cấp</span>
              ) : (
                <>
                  {ownedIds.slice(0, 2).map((cid) => (
                    <span
                      key={cid}
                      className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium bg-success/10 text-success border border-success/20 max-w-[160px] truncate"
                      title={courseTitleMap.get(cid) || cid}
                    >
                      <BookOpen className="w-3 h-3 shrink-0" />
                      <span className="truncate">{courseTitleMap.get(cid) || 'Khóa học'}</span>
                    </span>
                  ))}
                  {ownedIds.length > 2 && (
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-semibold bg-muted text-foreground"
                      title={ownedIds.map((id) => courseTitleMap.get(id) || id).join(', ')}
                    >
                      +{ownedIds.length - 2} khóa
                    </span>
                  )}
                </>
              )}
              <button
                type="button"
                onClick={() => handleEdit(u)}
                className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md text-xs font-medium text-primary bg-primary/10 hover:bg-primary/15 transition-colors"
                title="Cấp hoặc chỉnh sửa khóa học"
              >
                + Cấp khóa
              </button>
            </div>
          );
        },
      },
      {
        accessorKey: 'joinedAt',
        header: 'Tham gia',
        cell: ({ row }) => (
          <span className="text-muted-foreground">{formatDate(row.original.joinedAt)}</span>
        ),
      },
      {
        id: 'lastActive',
        header: 'Đăng nhập cuối',
        cell: ({ row }) => formatLastActive(row.original),
      },
      {
        id: 'actions',
        cell: ({ row }) => (
          <div className="flex items-center justify-end gap-2">
            <button
              onClick={() => handleEdit(row.original)}
              className="text-muted-foreground hover:text-primary p-1"
              title="Chỉnh sửa & Cấp khóa học"
            >
              <Edit2 className="w-5 h-5" />
            </button>
            <button
              onClick={() => handleDelete(row.original.uid)}
              className="text-muted-foreground hover:text-destructive p-1"
              title="Xóa người dùng"
            >
              <Trash2 className="w-5 h-5" />
            </button>
          </div>
        ),
      },
    ],
    [userOwnedCourseIdsMap, courseTitleMap]
  );

  return (
    <div className="flex flex-col gap-5">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <button
            onClick={handleRunMigration}
            disabled={migrationLoading}
            className="flex items-center justify-center gap-2 bg-muted hover:bg-muted/80 text-muted-foreground px-3.5 py-2 rounded-lg text-xs font-medium transition-colors"
            title="Đồng bộ dữ liệu tham gia cho tài khoản cũ"
          >
            <Database className="w-4 h-4" />
            {migrationLoading ? 'Đang đồng bộ...' : 'Đồng bộ dữ liệu'}
          </button>
        </div>

        <button
          onClick={() => setIsAddMode(!isAddMode)}
          className="flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-sm whitespace-nowrap"
        >
          <Plus className="w-4 h-4" />
          Thêm người dùng
        </button>
      </div>

      {/* Add User Form (Collapsible) */}
      {isAddMode && (
        <div className="bg-card p-5 rounded-xl border border-border shadow-sm animate-fadeIn">
          <h3 className="text-base font-semibold mb-4 text-card-foreground">Mời người dùng mới</h3>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col md:flex-row gap-4 items-end"
          >
            <div className="flex-1 w-full">
              <label className="block text-sm font-medium mb-1 text-muted-foreground">Email</label>
              <input
                {...register('email', { required: 'Vui lòng nhập email' })}
                type="email"
                className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm"
                placeholder="hocsinh@gmail.com"
              />
            </div>

            <div className="w-full md:w-40">
              <label className="block text-sm font-medium mb-1 text-muted-foreground">
                Vai trò
              </label>
              <select
                {...register('role')}
                className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm"
              >
                <option value="student">Học sinh</option>
                <option value="teacher">Giáo viên</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {selectedRole === 'student' && (
              <div className="w-full md:w-40 animate-fadeIn">
                <label className="block text-sm font-medium mb-1 text-muted-foreground">Khối</label>
                <select
                  {...register('grade')}
                  className="w-full p-2.5 border border-input bg-background text-foreground rounded-lg focus:ring-2 focus:ring-primary outline-none text-sm"
                >
                  <option value="10">Khối 10</option>
                  <option value="11">Khối 11</option>
                  <option value="12">Khối 12</option>
                </select>
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full md:w-auto px-6 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center justify-center gap-2 text-sm"
            >
              {loading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <UserPlus className="w-4 h-4" />
              )}
              {loading ? 'Đang thêm...' : 'Mời'}
            </button>
          </form>
        </div>
      )}

      {/* Comprehensive Student & User Filter Bar */}
      <div className="bg-muted/30 border border-border rounded-xl p-4 space-y-4">
        {/* Row 1: Search Input + Course Filter Dropdown + Reset */}
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-3">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Tìm theo tên học sinh hoặc email..."
              className="w-full pl-10 pr-9 py-2 bg-background border border-input rounded-lg text-sm text-foreground placeholder-muted-foreground focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-1"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <div className="flex items-center gap-2 bg-background border border-input rounded-lg px-3 py-1.5">
              <BookOpen className="w-4 h-4 text-primary shrink-0" />
              <select
                value={courseStatusFilter}
                onChange={(e) => setCourseStatusFilter(e.target.value)}
                className="bg-transparent text-sm text-foreground font-medium outline-none cursor-pointer pr-2"
              >
                <option value="all">Tất cả trạng thái khóa học</option>
                <option value="has_course">
                  Đã có khóa học ({filterCounts.courseCounts.has_course})
                </option>
                <option value="no_course">
                  Chưa có khóa học ({filterCounts.courseCounts.no_course})
                </option>
                {courses.length > 0 && (
                  <optgroup label="Lọc theo từng khóa học cụ thể">
                    {courses.map((c) => (
                      <option key={c.id} value={c.id}>
                        Khóa: {c.title}
                      </option>
                    ))}
                  </optgroup>
                )}
              </select>
            </div>

            {hasActiveFilter && (
              <button
                type="button"
                onClick={resetAllFilters}
                className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-destructive bg-destructive/10 hover:bg-destructive/15 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Xóa bộ lọc
              </button>
            )}
          </div>
        </div>

        {/* Row 2: Role Filter & Grade Filter Pills */}
        <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-3 pt-3 border-t border-border/70">
          {/* Role Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Vai trò:
            </span>
            {(
              [
                { id: 'all', label: 'Tất cả', count: filterCounts.roleCounts.all },
                { id: 'student', label: 'Học sinh', count: filterCounts.roleCounts.student },
                { id: 'teacher', label: 'Giáo viên', count: filterCounts.roleCounts.teacher },
                { id: 'admin', label: 'Admin', count: filterCounts.roleCounts.admin },
              ] as const
            ).map((tab) => {
              const active = roleFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  type="button"
                  onClick={() => setRoleFilter(tab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-background text-muted-foreground border border-border hover:text-foreground hover:bg-muted/60'
                  }`}
                >
                  <span>{tab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Grade Filter */}
          <div className="flex flex-wrap items-center gap-1.5">
            <span className="text-xs font-semibold text-muted-foreground mr-1 flex items-center gap-1">
              <GraduationCap className="w-3.5 h-3.5" /> Khối lớp:
            </span>
            {(
              [
                { id: 'all', label: 'Tất cả khối', count: filterCounts.gradeCounts.all },
                { id: '10', label: 'Khối 10', count: filterCounts.gradeCounts['10'] },
                { id: '11', label: 'Khối 11', count: filterCounts.gradeCounts['11'] },
                { id: '12', label: 'Khối 12', count: filterCounts.gradeCounts['12'] },
                {
                  id: 'unassigned',
                  label: 'Chưa phân khối',
                  count: filterCounts.gradeCounts.unassigned,
                },
              ] as const
            ).map((gTab) => {
              const active = gradeFilter === gTab.id;
              return (
                <button
                  key={gTab.id}
                  type="button"
                  onClick={() => setGradeFilter(gTab.id)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'bg-background text-muted-foreground border border-border hover:text-foreground hover:bg-muted/60'
                  }`}
                >
                  <span>{gTab.label}</span>
                  <span
                    className={`px-1.5 py-0.2 rounded-full text-[11px] ${
                      active
                        ? 'bg-primary-foreground/20 text-primary-foreground'
                        : 'bg-muted text-muted-foreground'
                    }`}
                  >
                    {gTab.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Summary Status Line */}
        <div className="flex items-center justify-between text-xs text-muted-foreground pt-1">
          <span>
            Đang hiển thị <strong className="text-foreground">{filteredUsers.length}</strong> /{' '}
            {users.length} người dùng
          </span>
          <span className="hidden sm:inline">
            Mẹo: Tích chọn nhiều học sinh trong bảng để cấp khóa học hàng loạt.
          </span>
        </div>
      </div>

      {/* DataTable (searchColumn omitted because our custom filter bar above handles both Name + Email) */}
      <DataTable
        columns={columns}
        data={filteredUsers}
        isLoading={isFetching}
        onBulkDelete={handleBulkDelete}
        renderBulkActions={(selectedRows) => (
          <button
            type="button"
            onClick={() => {
              setBulkGrantUsers(selectedRows);
              setIsBulkGrantOpen(true);
            }}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background text-primary text-xs font-semibold hover:bg-background/90 transition-colors shadow-sm"
          >
            <BookOpen className="w-3.5 h-3.5" />
            + Cấp khóa học ({selectedRows.length})
          </button>
        )}
      />

      {/* Single User Edit Modal */}
      {isEditModalOpen && editingUser && (
        <EditUserModal
          user={editingUser}
          courses={courses}
          initialOwnedCourses={
            userOwnedCourseIdsMap.get(editingUser.uid) || editingUser.enrolledCourses || []
          }
          onClose={() => setIsEditModalOpen(false)}
          onUpdate={() => {
            setIsEditModalOpen(false);
            setEditingUser(null);
          }}
        />
      )}

      {/* Bulk Course Grant Modal */}
      {isBulkGrantOpen && bulkGrantUsers.length > 0 && (
        <BulkGrantCourseModal
          users={bulkGrantUsers}
          courses={courses}
          onClose={() => {
            setIsBulkGrantOpen(false);
            setBulkGrantUsers([]);
          }}
          onSuccess={() => {
            setIsBulkGrantOpen(false);
            setBulkGrantUsers([]);
          }}
        />
      )}
    </div>
  );
};

const BulkGrantCourseModal: React.FC<{
  users: User[];
  courses: Course[];
  onClose: () => void;
  onSuccess: () => void;
}> = ({ users, courses, onClose, onSuccess }) => {
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]);
  const [courseSearch, setCourseSearch] = useState('');
  const [saving, setSaving] = useState(false);

  const filteredCourses = useMemo(() => {
    if (!courseSearch.trim()) return courses;
    const q = courseSearch.toLowerCase().trim();
    return courses.filter((c) => c.title.toLowerCase().includes(q));
  }, [courses, courseSearch]);

  const toggleCourse = (courseId: string) => {
    setSelectedCourses((prev) =>
      prev.includes(courseId) ? prev.filter((id) => id !== courseId) : [...prev, courseId]
    );
  };

  const handleBulkGrant = async () => {
    if (selectedCourses.length === 0) {
      toast.error('Vui lòng chọn ít nhất 1 khóa học để cấp.');
      return;
    }
    setSaving(true);
    try {
      await Promise.all(
        users.map((u) =>
          updateDoc(doc(db, 'users', u.uid), {
            enrolledCourses: arrayUnion(...selectedCourses),
          })
        )
      );
      toast.success(
        `Đã cấp ${selectedCourses.length} khóa học cho ${users.length} học sinh thành công!`
      );
      onSuccess();
    } catch (error) {
      console.error(error);
      toast.error('Có lỗi xảy ra khi cấp khóa học hàng loạt.');
    } finally {
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4">
      <div className="bg-card p-6 rounded-xl w-full max-w-lg shadow-md border border-border">
        <h3 className="text-xl font-semibold mb-1 text-card-foreground flex items-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-primary" />
          Cấp khóa học hàng loạt
        </h3>
        <p className="text-sm text-muted-foreground mb-4">
          Đang chọn <strong className="text-foreground">{users.length}</strong> người dùng. Các khóa
          học được chọn dưới đây sẽ được cộng thêm vào tài khoản của họ.
        </p>

        {courses.length > 4 && (
          <div className="relative mb-3">
            <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={courseSearch}
              onChange={(e) => setCourseSearch(e.target.value)}
              placeholder="Tìm nhanh khóa học..."
              className="w-full pl-9 pr-3 py-1.5 text-sm border border-input rounded-lg bg-background text-foreground focus:ring-1 focus:ring-primary outline-none"
            />
          </div>
        )}

        <div className="space-y-1.5 max-h-60 overflow-y-auto border border-border p-2.5 rounded-lg bg-background">
          {filteredCourses.map((course) => {
            const isChecked = selectedCourses.includes(course.id);
            return (
              <div
                key={course.id}
                onClick={() => toggleCourse(course.id)}
                className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                  isChecked
                    ? 'bg-success/10 border border-success/20'
                    : 'hover:bg-muted/60 border border-transparent'
                }`}
              >
                <input
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => {}}
                  className="w-4 h-4 text-primary rounded focus:ring-primary pointer-events-none"
                />
                <div className="text-sm font-medium text-foreground flex-1 flex justify-between items-center gap-2">
                  <span className="line-clamp-1">{course.title}</span>
                  {isChecked && (
                    <span className="text-xs px-2 py-0.5 rounded-full bg-success/20 text-success font-semibold">
                      Sẽ cấp
                    </span>
                  )}
                </div>
              </div>
            );
          })}
          {filteredCourses.length === 0 && (
            <p className="text-xs text-muted-foreground py-3 text-center">
              Không tìm thấy khóa học phù hợp.
            </p>
          )}
        </div>

        <div className="flex justify-end gap-3 pt-5 mt-4 border-t border-border">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
          >
            Hủy
          </button>
          <button
            type="button"
            onClick={handleBulkGrant}
            disabled={saving || selectedCourses.length === 0}
            className="px-5 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50 flex items-center gap-2"
          >
            {saving && <Loader2 className="w-4 h-4 animate-spin" />}
            {saving ? 'Đang cấp...' : `Xác nhận cấp (${selectedCourses.length} khóa)`}
          </button>
        </div>
      </div>
    </div>
  );
};

const EditUserModal: React.FC<{
  user: User;
  courses: Course[];
  initialOwnedCourses: string[];
  onClose: () => void;
  onUpdate: () => void;
}> = ({ user, courses, initialOwnedCourses, onClose, onUpdate }) => {
  const { register, handleSubmit, watch } = useForm({
    defaultValues: {
      role: user.role,
      grade: user.grade || '10',
    },
  });
  const [loading, setLoading] = useState(false);
  const [selectedCourses, setSelectedCourses] = useState<string[]>(initialOwnedCourses);
  const [courseSearch, setCourseSearch] = useState('');
  const selectedRole = watch('role');

  const filteredCourses = useMemo(() => {
    if (!courseSearch.trim()) return courses;
    const q = courseSearch.toLowerCase().trim();
    return courses.filter((c) => c.title.toLowerCase().includes(q));
  }, [courses, courseSearch]);

  const toggleCourse = (courseId: string) => {
    if (selectedCourses.includes(courseId)) {
      setSelectedCourses(selectedCourses.filter((id) => id !== courseId));
    } else {
      setSelectedCourses([...selectedCourses, courseId]);
    }
  };

  const onSubmit = async (data: any) => {
    setLoading(true);
    try {
      await userService.updateUser(user.uid, {
        role: data.role,
        grade: data.role === 'student' ? data.grade : null,
        enrolledCourses: selectedCourses,
      });
      toast.success(`Đã cập nhật quyền & khóa học cho ${user.email}`);
      onUpdate();
    } catch (error) {
      toast.error('Cập nhật thất bại');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 animate-fadeIn px-4">
      <div className="bg-card p-6 rounded-xl w-full max-w-lg shadow-md border border-border">
        <h3 className="text-xl font-semibold mb-1 text-card-foreground">
          Chỉnh sửa & Cấp khóa học
        </h3>
        <p className="text-sm text-muted-foreground mb-4">{user.email}</p>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium mb-1 text-muted-foreground">
                Vai trò
              </label>
              <select
                {...register('role')}
                className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none text-sm"
              >
                <option value="student">Học sinh</option>
                <option value="teacher">Giáo viên</option>
                <option value="admin">Admin</option>
              </select>
            </div>

            {selectedRole === 'student' && (
              <div>
                <label className="block text-sm font-medium mb-1 text-muted-foreground">
                  Khối lớp
                </label>
                <select
                  {...register('grade')}
                  className="w-full p-2 border border-input rounded-lg bg-background text-foreground focus:ring-2 focus:ring-primary outline-none text-sm"
                >
                  <option value="10">Khối 10</option>
                  <option value="11">Khối 11</option>
                  <option value="12">Khối 12</option>
                </select>
              </div>
            )}
          </div>

          <div className="pt-2">
            <div className="flex items-center justify-between mb-2">
              <label className="block text-sm font-medium text-foreground">
                Phân quyền Khóa học ({selectedCourses.length}/{courses.length} đã cấp)
              </label>
              {courses.length > 0 && (
                <div className="flex items-center gap-2 text-xs">
                  <button
                    type="button"
                    onClick={() => setSelectedCourses(courses.map((c) => c.id))}
                    className="text-primary hover:underline font-medium"
                  >
                    Chọn tất cả
                  </button>
                  <span className="text-border">|</span>
                  <button
                    type="button"
                    onClick={() => setSelectedCourses([])}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Bỏ chọn
                  </button>
                </div>
              )}
            </div>

            {courses.length > 4 && (
              <div className="relative mb-2">
                <Search className="w-4 h-4 text-muted-foreground absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={courseSearch}
                  onChange={(e) => setCourseSearch(e.target.value)}
                  placeholder="Tìm nhanh khóa học..."
                  className="w-full pl-9 pr-3 py-1.5 text-sm border border-input rounded-lg bg-background text-foreground focus:ring-1 focus:ring-primary outline-none"
                />
              </div>
            )}

            <div className="space-y-1.5 max-h-56 overflow-y-auto border border-border p-2.5 rounded-lg bg-background">
              {filteredCourses.map((course) => {
                const isChecked = selectedCourses.includes(course.id);
                return (
                  <div
                    key={course.id}
                    onClick={() => toggleCourse(course.id)}
                    className={`flex items-center gap-2.5 p-2 rounded-lg cursor-pointer transition-colors ${
                      isChecked
                        ? 'bg-success/10 border border-success/20'
                        : 'hover:bg-muted/60 border border-transparent'
                    }`}
                  >
                    <input
                      type="checkbox"
                      id={`course-${course.id}`}
                      checked={isChecked}
                      onChange={() => {}}
                      className="w-4 h-4 text-primary rounded focus:ring-primary pointer-events-none"
                    />
                    <div className="text-sm font-medium text-foreground flex-1 flex justify-between items-center gap-2">
                      <span className="line-clamp-1">{course.title}</span>
                      <span
                        className={`text-xs shrink-0 px-2 py-0.5 rounded-full ${
                          isChecked
                            ? 'bg-success/20 text-success font-semibold'
                            : 'text-muted-foreground'
                        }`}
                      >
                        {isChecked ? 'Đã cấp' : 'Chưa cấp'}
                      </span>
                    </div>
                  </div>
                );
              })}
              {filteredCourses.length === 0 && (
                <p className="text-xs text-muted-foreground py-3 text-center">
                  Không tìm thấy khóa học phù hợp.
                </p>
              )}
            </div>
            <p className="text-xs text-muted-foreground mt-1.5">
              Học sinh được cấp khóa học sẽ thấy trạng thái{' '}
              <strong>Đã sở hữu / Vào học ngay</strong> và nhận toàn bộ bài tập của khóa đó.
            </p>
          </div>

          <div className="flex justify-end gap-3 pt-4 border-t border-border">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:bg-muted rounded-lg transition-colors"
            >
              Hủy
            </button>
            <button
              type="submit"
              disabled={loading}
              className="px-4 py-2 text-sm font-semibold bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors disabled:opacity-50"
            >
              {loading ? 'Đang lưu...' : 'Lưu thay đổi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
