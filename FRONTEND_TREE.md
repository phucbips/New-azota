# Frontend Architecture Tree

## Public (Landing & Catalog)
- `LandingPage` (src/pages/public/Landing.tsx)
  - `HeroSection`
  - `StatsSection`
  - `AboutSection`
  - `MenuSection`
  - `TestimonialCarousel`
- `PublicCourses` (src/pages/public/PublicCourses.tsx)

## Auth
- `LoginPage` (src/components/auth/LoginPage.tsx) - Handles both Login and Register
  - Password Reset Modal (Inline)

## Student Portal
- `StudentLayout` (src/layouts/StudentLayout.tsx)
  - `StudentHome` (src/pages/student/Home.tsx)
    - `AnnouncementFeed`
    - `StudentSupportWidget`
    - `GradeOnboardingModal`
  - `StudentCourses` (src/pages/student/Courses.tsx)
    - `SubjectFilterBar`
  - `StudentAssignments` (src/pages/student/Assignments.tsx)
    - `AIChat`
  - `CartOrders` (src/pages/student/CartOrders.tsx)
  - `PaymentQR` (src/pages/student/PaymentQR.tsx)
  - `PaymentSuccess` (src/pages/student/PaymentSuccess.tsx)
  - `StudentProfile` (src/pages/student/Profile.tsx)
    - `ProfilePage` (Shared component)
  - `StudentSettings` (src/pages/student/Settings.tsx)
    - `SettingsContent` (Shared component)

## Teacher Portal
- `TeacherLayout` (src/layouts/TeacherLayout.tsx)
  - `TeacherOverview` (src/pages/teacher/Overview.tsx)
  - `TeacherCourses` (src/pages/teacher/Courses.tsx)
  - `TeacherAssignments` (src/pages/teacher/Assignments.tsx)
    - `AssignmentForm` Modal
  - `TeacherProfile` (src/pages/teacher/Profile.tsx)
    - `ProfilePage` (Shared component)
  - `TeacherSettings` (src/pages/teacher/Settings.tsx)
    - `SettingsContent` (Shared component)

## Admin Dashboard
- `AdminLayout` (src/layouts/AdminLayout.tsx)
  - `AdminOverview` (src/pages/admin/Overview.tsx)
    - `StatsTab`
    - `FinanceTab`
    - `AnalyticsTabs`
    - `AnalyticsChart`
    - `TrafficChart`
    - `UserActivityChart`
    - `AssignmentStatsChart`
    - `AnalyticsWidget`
  - `AdminUsers` (src/pages/admin/Users.tsx)
    - `UserManagement`
      - Edit User Modal
  - `AdminAssignments` (src/pages/admin/Assignments.tsx)
    - `AssignmentForm` Modal
  - `AdminCourses` (src/pages/admin/Courses.tsx)
  - `AdminOrders` (src/pages/admin/Orders.tsx)
  - `AdminVouchers` (src/pages/admin/Vouchers.tsx)
    - `VoucherManagement`
  - `AdminCommunication` (src/pages/admin/Communication.tsx)
    - `AnnouncementManager`
    - `NotificationManager`
  - `AdminAuditLogs` (src/pages/admin/AuditLogs.tsx)
  - `AdminProfile` (src/pages/admin/Profile.tsx)
    - `ProfilePage` (Shared component)
  - `AdminSettings` (src/pages/admin/Settings.tsx)
    - `SettingsContent` (Shared component)

## Feature-Specific Views (Cross-Role)
- `SmartAssignmentBuilderPage` (src/pages/shared/SmartAssignmentBuilderPage.tsx)
  - `SmartExamBuilder`
  - `SubjectSelector`

## Shared Layouts & UI Shell
- `Navbar` (src/components/Navbar.tsx)
- `Footer` (src/components/Footer.tsx)
- `Header` (src/components/shared/Header.tsx)
- `Modal` (src/components/shared/Modal.tsx)
