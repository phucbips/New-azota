## 2024-05-23 - Memory vs Reality: Code Splitting Mismatch
**Learning:** The memory explicitly stated that `AdminDashboard` and `StudentDashboard` were code-split using `React.lazy`. However, inspecting `src/App.tsx` revealed they are statically imported.
**Action:** Always verify "known" architectural facts by reading the actual entry point files (`App.tsx`, `main.tsx`, etc.) before assuming an optimization exists. Do not rely solely on memory for code state.
