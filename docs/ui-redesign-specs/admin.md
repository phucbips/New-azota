# Admin Dashboard Module Logic Spec

## Core Objective
To provide absolute oversight and management capabilities over the entire platform, including user administration, financial tracking, content moderation, system configurations, and security audits.

## Required Data Entities
- **Platform Analytics:** Daily traffic, unique visitors, user activity trends, top-selling courses, revenue charts.
- **User Records:** UID, Email, Display Name, Role, Grade, Last Login, Enrolled Courses, Device History.
- **Financial/Order Records:** Order IDs, User IDs, Course IDs, Amount Paid, Voucher Used, Payment Status, Timestamps.
- **Vouchers:** Code, Discount Type (percentage/fixed), Value, Usage Limits, Expiration, Active Status.
- **System Settings:** Contact info, PayOS API keys, Theme settings, Maintenance mode toggles.
- **Audit Logs:** Action type, Admin UID, Target UID/Resource, Timestamp, Old/New values.
- **Global Content:** All Courses, All Assignments, All Announcements, All Notifications.

## User Actions & Inputs
- **Analytics & Finance:** View aggregate data charts, filter by date ranges, inspect specific transactions.
- **User Management:**
  - View paginated list of all users.
  - Edit user details (Role, Grade).
  - Explicitly grant/revoke course access (modify `enrolledCourses` array).
  - Delete users.
- **Content Management:** Create, edit, and delete any course, assignment, or announcement across the platform. Use Smart Exam Builder.
- **Order Management:** View orders, manually approve pending orders (triggering course enrollment).
- **Voucher Management:** Create new discount codes, set rules, deactivate existing codes.
- **System Configuration:** Update environment keys, toggle site maintenance mode, configure global UI themes.
- **Security Monitoring:** Review read-only audit logs to track changes made by admins.
