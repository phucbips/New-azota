## 2024-03-24 - Route Code Splitting
**Learning:** The application bundles `AdminDashboard` and `StudentDashboard` into a single large chunk (~658kB), even though they are mutually exclusive based on user role. This unnecessarily increases the initial load time for all users.
**Action:** Implement `React.lazy` and `Suspense` for these top-level route components to split the code into separate chunks, ensuring users only download the code relevant to their role.
