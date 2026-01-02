## 2024-05-23 - Bundle Size Optimization: Dashboard Code Splitting

**Learning:** Static imports in `App.tsx` bundle all dashboard logic (Admin/Student) into the main chunk, forcing users to download code they can't use (e.g., Students downloading Admin logic).

**Action:** Implement `React.lazy` and `Suspense` for top-level role-based routes (`AdminDashboard`, `StudentDashboard`). This ensures users only download the code relevant to their role, reducing initial load time and TTI.
