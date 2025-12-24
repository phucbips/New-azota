## 2024-05-23 - Code Splitting Missed
**Learning:** The memory stated that code splitting was implemented in `src/App.tsx` for dashboards, but static imports were still in use. This caused students to download admin code and vice versa.
**Action:** Always verify "implemented" features in the actual code before assuming they exist. Check `src/App.tsx` imports for `React.lazy` when dealing with role-based routing.
