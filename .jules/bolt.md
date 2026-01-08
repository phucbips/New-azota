# Bolt's Journal

## 2024-05-22 - Code Splitting Opportunity **Learning:** Large bundle sizes (~658kB) are caused by synchronous imports of role-specific dashboards. **Action:** Implement `React.lazy` to split `AdminDashboard` and `StudentDashboard` into separate chunks.
