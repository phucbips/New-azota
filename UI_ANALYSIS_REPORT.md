# UI Analysis & Design System Report

## 1. Design System

### Colors
The application uses a semantic color system based on CSS variables (HSL) defined in `src/styles/globals.css`. It supports multiple themes (Blue, Purple, Green, Orange) and Dark Mode.

- **Backgrounds**: `bg-background` (Page), `bg-card` (Containers), `bg-popover`.
- **Primary**: `bg-primary`, `text-primary`, `bg-primary/10` (Accents).
- **Secondary**: `bg-secondary` (Subtle backgrounds).
- **Muted**: `text-muted-foreground` (Secondary text).
- **Destructive**: `text-destructive` (Error states).
- **Border**: `border-border` (Dividers).

### Typography
- **Font Family**: `Inter` (sans-serif) for both body and display text.
- **Sizes**: Standard Tailwind sizing (`text-sm`, `text-base`, `text-lg`, `text-xl`, `text-2xl`).

### Spacing & Layout
- **Border Radius**: `--radius` (0.5rem / 8px default). Used for buttons (`rounded-lg`), cards (`rounded-xl`), and inputs.
- **Shadows**: `shadow-sm` used on Cards and Buttons for depth.

---

## 2. Layout Specifications

### Core Layout (`DashboardLayout.tsx`)
- **Sidebar**:
  - Width: `w-64` (256px).
  - Background: `bg-card`.
  - Border: `border-r border-border`.
  - Responsive: Hidden on mobile (`-translate-x-full`), slides in (`translate-x-0`) with overlay (`bg-black/50`).
- **Header**:
  - Height: `h-16` (64px).
  - Position: `sticky top-0 z-20`.
  - Background: `bg-background/80` with `backdrop-blur-md`.
  - Border: `border-b border-border`.
- **Main Content**:
  - Padding: `p-4 sm:p-8`.
  - Background: `bg-background`.

---

## 3. Component Inventory

### A. Generic UI (`src/components/ui`)
Reusable building blocks without business logic.

| Component | Description | Visual Style |
| :--- | :--- | :--- |
| **SaaSButton** | Primary action button. | `rounded-lg`, `font-medium`, uses `cva` for variants (primary, outline, ghost, destructive). |
| **StatCard** | Dashboard metric display. | `bg-card`, `rounded-xl`, `shadow-sm`, `border`, includes icon with `bg-primary/10`. |
| **DataTable** | Advanced data grid. | Supports sorting, filtering, pagination. Uses `@tanstack/react-table`. |
| **PageHeader** | Standard page title area. | Consistent spacing and typography for H1. |
| **StatusBadge** | Label for status. | `rounded-full`, `px-2.5 py-0.5`, color-coded (Green for active/success). |
| **CloudinaryUploadWidget** | Image uploader. | Integration with Cloudinary via widget script. |

### B. Shared Functional Components (`src/components/shared`)
Used across multiple roles (Admin/Teacher/Student).

| Component | Function | Key Design Elements |
| :--- | :--- | :--- |
| **Header** | Top navigation bar. | Contains Search input (`bg-muted/50`, `rounded-lg`), Notification bell, User profile. |
| **NotificationList** | Dropdown for alerts. | Popover style, lists items with timestamps. |
| **Theme/LanguageToggle** | Switchers. | Icon buttons (`ghost` variant). |
| **Modal** | Dialog overlay. | Centered, `bg-background`, `rounded-lg`, `shadow-lg`, backdrop overlay. |
| **EmptyState** | No data placeholder. | Centered icon, title, description, optional action button. |
| **Loading/Skeleton** | Loading indicators. | Spinner (`loader` class) or pulse animation (`bg-muted`). |

### C. Admin Components (`src/components/admin`)
Complex management interfaces.

- **UserManagement**: Wraps `DataTable` with bulk actions (Delete) and "Add User" modal.
- **AnnouncementManager**: Form to create/edit announcements.
- **NotificationManager**: Form to send system-wide notifications.

### D. Student Components (`src/components/student`)
Student-facing interactive elements.

- **AIChat**: Chat interface with message bubbles (`bg-primary` for user, `bg-muted` for bot).
- **AnnouncementFeed**: List of announcements, likely using card style.
- **StudentSupportWidget**: Floating action button or embedded help form.
- **GradeOnboardingModal**: Modal forcing grade selection on first login.
- **SubjectFilterBar**: Horizontal scrollable list of subject chips (`rounded-full`).

### E. Assignment Components (`src/components/assignments`)
- **AssignmentForm**: Large form with validation, uses `SubjectSelector`.
- **SubjectSelector**: Dropdown or grid to pick subjects.

---

## 4. Key Design Patterns & Implementation Details

### CSS Utilities
- **`cn` Helper**: All components use `cn` (from `src/lib/utils.ts`) to merge Tailwind classes and resolve conflicts.
- **Tailwind Config**: Extended with custom colors (`border`, `input`, `ring`, `background`, `foreground`) mapped to CSS variables.

### Iconography
- **Library**: `lucide-react`.
- **Usage**: Consistent `w-6 h-6` or `w-5 h-5` sizing. Icons often wrapped in a container with `bg-primary/10` and `text-primary`.

### Responsiveness
- **Mobile First**: Default styles are mobile.
- **Breakpoints**: `sm` (640px), `md` (768px), `lg` (1024px), `xl` (1280px).
- **Sidebar Toggle**: Mobile menu button (`lg:hidden`) triggers sidebar visibility.

### Theming Strategy
- **Dark Mode**: Handled via `.dark` class on `html/body`. Variables remapped in CSS.
- **Color Themes**: Classes like `.theme-purple`, `.theme-green` override `--primary` and `--ring` variables.

---

## 5. Detailed Page Breakdown

### A. Student Role

#### **1. Student Dashboard (`src/pages/student/Home.tsx`)**
- **Wrapper**: `StudentLayout` > `DashboardLayout`
- **Header**:
  - Component: `PageHeader`
  - Content: "Welcome back, [Name]" + Subtitle.
- **Main Layout**: `grid grid-cols-1 md:grid-cols-3 gap-6`
- **Widgets**:
  - **Grade Card (`StatCard`)**:
    - **Position**: Column 1.
    - **Content**: Displays "Grade [10/11/12]".
    - **Visual**: Standard card with `GraduationCap` icon.
  - **Call-to-Action Banner (Hero)**:
    - **Position**: Spans 2 columns (`md:col-span-2`).
    - **Visual**: `bg-gradient-to-r from-primary to-indigo-600`.
    - **Content**: Title "Ready to learn?", Description, and a "Start Learning" button linking to `/student/assignments`.
    - **Decoration**: Large, low-opacity icon in bottom-right.
  - **Announcement Feed (`AnnouncementFeed`)**:
    - **Position**: Below the top grid (implicit row 2).
    - **Content**: List of recent school news.
  - **Support Widget (`StudentSupportWidget`)**:
    - **Position**: Fixed/Floating (likely, or appended at bottom).
    - **Function**: Quick access to help.

#### **2. Student Assignments (`src/pages/student/Assignments.tsx`)**
*(Inferred from file structure and standard patterns)*
- **Header**: Title "Assignments" + Filter controls (Subject, Status).
- **Body**: List or Grid of assignment cards showing:
  - Title, Subject, Due Date, Status (Pending/Submitted).
  - "Start" or "View Result" button.

### B. Admin Role

#### **1. Admin Overview (`src/pages/admin/Overview.tsx`)**
- **Wrapper**: `AdminLayout` > `DashboardLayout`
- **Header**:
  - Title "Analytics Dashboard".
  - **Meta Info**: "Online Users" indicator (Green pulsing dot + count).
  - **Controls**: "Production" badge + "Customize" button (Popover).
- **Widget Visibility System**:
  - Uses `DashboardConfigContext`.
  - **Customize Popover**: Checkbox list to toggle visibility of widgets (Visitors, Page Views, Charts, etc.).
- **Top Metrics Grid**: `grid grid-cols-1 md:grid-cols-3 gap-6`
  - **Visitors Card (`AnalyticsStatCard`)**: Clickable, toggles chart metric. Active state adds top border.
  - **Page Views Card (`AnalyticsStatCard`)**: Clickable.
  - **Total Users Card (`AnalyticsStatCard`)**: Static count.
- **Charts Section**: `grid grid-cols-1 lg:grid-cols-2 gap-6`
  - **Traffic Chart (`AnalyticsChart`)**: Line chart showing 7-day trend.
  - **Device/OS Stats (`AnalyticsTabs`)**: Tabbed interface showing breakdown by Browser, OS, Device.

#### **2. User Management (`src/pages/admin/Users.tsx`)**
- **Structure**:
  - **Header**: `PageHeader` ("User Management").
  - **Container**: White card wrapper (`bg-white rounded-xl shadow-sm`).
- **Core Component**: `UserManagement`
  - **Action Bar**:
    - "Fix Data" button (Migration tool).
    - "Add User" button (Toggles form).
  - **Add User Form** (Collapsible):
    - Fields: Email, Role (Select), Grade (Conditional for Students).
    - Submit: "Invite" button.
  - **Data Table (`DataTable`)**:
    - **Columns**: Selection, User Info (Avatar+Name+Email), Role (Badge), Joined Date, Last Active, Status (Active/Inactive), Actions (Edit/Delete).
    - **Features**: Search by email, Bulk Delete, Pagination.
  - **Edit Modal**:
    - Popover form to update Role, Grade, and Whitelist status.

### C. Teacher Role

#### **1. Teacher Overview (`src/pages/teacher/Overview.tsx`)**
- **Wrapper**: `TeacherLayout` > `DashboardLayout`
- **Header**: `PageHeader` ("Teacher Overview").
- **Body**: `grid grid-cols-1 md:grid-cols-2 gap-6`
  - **Active Assignments (`StatCard`)**: Count of currently running assignments.
  - **Total Students (`StatCard`)**: Count of students in classes.
