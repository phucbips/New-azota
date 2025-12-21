## 2024-05-23 - Monolithic Bundle Splitting

**Learning:**
The application was originally importing all Page and Layout components synchronously in `src/App.tsx`. This caused Vite to bundle everything (Admin, Teacher, Student code) into a single large 880kB chunk (`index.js`). This degrades performance for all users, as they download code they don't have permission to use.

**Action:**
Implemented Route-based Code Splitting using `React.lazy` and `Suspense`.
- Wrapped `Routes` in `Suspense` with a full-screen `Loading` fallback.
- Converted synchronous imports to `React.lazy` imports.
- Handled named exports by using the `.then(module => ({ default: module.ExportName }))` pattern.
- **Result:** The main bundle dropped from ~880kB to ~677kB (mostly vendor code). Specific route code is now split into separate chunks (e.g., `AssignmentForm` is 73kB and only loaded when needed), improving initial load time and resource usage.
