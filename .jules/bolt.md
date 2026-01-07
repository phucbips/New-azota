## 2024-05-22 - Code Splitting Dashboards
**Learning:** Lazy loading `AdminDashboard` and `StudentDashboard` reduced the main bundle size by ~25KB (splitting ~12KB Admin and ~11KB Student chunks). However, the main bundle remains heavy (~633KB), confirming that the core dependencies (likely Firebase) are the dominant factor.
**Action:** Future optimizations should investigate specific Firebase imports (e.g., importing only used Firestore functions instead of the whole SDK) or manual chunking for vendor libraries.
