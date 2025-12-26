## 2024-05-23 - [Lazy Loading Dashboards]
**Learning:** React's `lazy` combined with `Suspense` allows for splitting the bundle based on conditional logic (user role). This is critical in role-based applications where a user never needs the code for other roles.
**Action:** Always check for role-based conditional rendering in `App.tsx` and apply code splitting.
