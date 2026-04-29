# 🗂 Cẩm Nang Tính Năng (Features Inventory)

Tài liệu này tổng hợp toàn bộ các tính năng hiện có của hệ thống `Taste of Vietnam LMS`.
Mục đích của tài liệu là giúp các lập trình viên (và các AI Agents) hiểu rõ hệ sinh thái tính năng hiện tại, biết đoạn code xử lý nằm ở đâu để **tái sử dụng (reuse)**, tránh **tạo trùng lặp (duplication)** gây lãng phí bộ nhớ và đảm bảo **tính liên kết (linking)** giữa các module.

---

## 1. 🔐 Hệ Thống Xác Thực & Phân Quyền (Auth & Authorization)
- **Tính năng:** Đăng nhập/Đăng ký qua Email/Password và Google. Quản lý phiên đăng nhập (chống đăng nhập đa thiết bị). Phân quyền dựa trên RBAC (Role-based access control).
- **Vị trí Code:**
  - `src/contexts/AuthContext.tsx` (Quản lý state, single-session Level 2)
  - `src/pages/shared/LoginPage.tsx` (Giao diện Auth)
  - `firestore.rules` (Security Rules chặn quyền read/write theo `role`)

## 2. 🎓 Cổng Học Viên (Student Portal)
- **Khám Phá Khóa Học (Catalog & Cart):**
  - **Tính năng:** Xem danh sách khóa học đang hoạt động (`isActive`), thêm vào giỏ hàng. Nếu khóa học 0đ, tự động thêm quyền truy cập. Nếu có phí, chuyển qua luồng thanh toán.
  - **Vị trí Code:** `src/pages/student/Courses.tsx`, `src/pages/public/PublicCourses.tsx`, `src/contexts/CartContext.tsx`
- **Thanh Toán PayOS (Checkout & Payment):**
  - **Tính năng:** Giao diện checkout giỏ hàng, áp dụng mã giảm giá (Voucher). Tích hợp QR Code thanh toán tự động qua PayOS.
  - **Vị trí Code:** `src/pages/student/Checkout.tsx`, `src/pages/student/PaymentQR.tsx`, `src/services/order.service.ts`
- **Học Tập & Làm Bài (Assignment Viewer):**
  - **Tính năng:** Xem nội dung khóa học, video nhúng (Youtube), iframe, hoặc bài tập Native Code (hiển thị full màn hình).
  - **Vị trí Code:** `src/pages/student/Assignments.tsx`

## 3. ⚙️ Cổng Quản Trị & Giáo Viên (Admin/Teacher Portal)
- **Quản Lý Người Dùng & Quyền (User Management):**
  - **Tính năng:** Xem, thêm, sửa, xóa học viên. Cấp quyền truy cập khóa học trực tiếp qua mảng `enrolledCourses` (thay cho logic `isWhitelisted` cũ).
  - **Vị trí Code:** `src/pages/admin/UserManagement.tsx`
- **Tạo Đề Thi Thông Minh (Smart Exam Builder):**
  - **Tính năng:** Import file DOCX hoặc dán văn bản thô. Tích hợp AI (Gemini) hoặc Regex để tự động bóc tách thành các câu hỏi trắc nghiệm (JSON) và hiển thị giao diện chỉnh sửa chia đôi màn hình (Split-screen).
  - **Vị trí Code:** `src/components/assignments/SmartExamBuilder.tsx`, `src/pages/shared/SmartAssignmentBuilderPage.tsx`
- **Quản Lý Mã Giảm Giá (Vouchers):**
  - **Tính năng:** Tạo mã giảm giá (theo % hoặc số tiền cố định), giới hạn số lượt dùng.
  - **Vị trí Code:** `src/pages/admin/VoucherManagement.tsx`, `src/services/voucher.service.ts`
- **Cấu Hình Hệ Thống & Nhật Ký (Settings & Audit):**
  - **Tính năng:** Thay đổi cấu hình website (số điện thoại, PayOS keys) và theo dõi lịch sử thao tác của Admin (Audit Logs).
  - **Vị trí Code:** `src/pages/admin/SystemSettings.tsx`, `src/pages/admin/AuditLogs.tsx`, `src/services/audit.service.ts`

## 4. 🌐 Xử Lý Hậu Đài (Backend - Vercel Serverless)
Toàn bộ logic bảo mật cao được đẩy xuống Vercel Functions (Node.js) để che giấu API keys và xử lý dữ liệu tin cậy.
- **PayOS Webhook:** `api/payos-webhook.ts` - Nhận tín hiệu thanh toán từ ngân hàng, sử dụng SDK để verify chữ ký (Checksum), áp dụng tính Lũy đẳng (Idempotency) và ghi đè `enrolledCourses` cho học sinh.
- **PayOS Link Generator:** `api/create-payment-link.ts` - Gọi API PayOS tạo phiên thanh toán QR.
- **AI Content Generator:** `api/generate-content.ts` - Giao tiếp với Google Gemini AI bảo vệ API Key.

## 5. 🎨 Giao Diện Hệ Thống (Design System)
- **Tính năng:** Hệ thống theme động hỗ trợ 4 màu (Blue, Purple, Green, Orange) và Light/Dark mode.
- **Vị trí Code:** `src/contexts/ThemeSettingsContext.tsx`, `tailwind.config.js`, `src/styles/globals.css`, `DESIGN.md`.

---

## 📝 Nhật Ký Cập Nhật Tính Năng (Update/Edit Log)
*(Khu vực này ghi chú các luồng đã được chỉnh sửa/nâng cấp để AI/Dev đời sau nắm bắt)*

- **[Cập nhật PayOS Webhook]**: Refactor `api/payos-webhook.ts` sử dụng hàm `verifyPaymentWebhookData` của `@payos/node` thay vì tự mã hóa HMAC. Thêm ràng buộc `Idempotency` (chặn lặp lệnh khi `status === 'paid'`). Luôn trả về HTTP 200 để tránh timeout chặn IP.
- **[Cập nhật Quyền Khóa Học (Free Courses)]**: Sửa lỗi `Permission Denied` ở Frontend. Học sinh mua khóa học 0đ sẽ tự cập nhật quyền vào mảng `enrolledCourses` qua hàm `arrayUnion` trên tài liệu User của chính họ, bỏ qua PayOS.
- **[Giao Diện Layout]**: Đã tối ưu hóa **Route-based Code Splitting** (`React.lazy` và `Suspense`) ở `App.tsx` giúp giảm dung lượng bundle tải về.

> ⚠️ **Quy tắc khi tạo tính năng mới:** Luôn tìm xem có Service/Component tương đồng trong danh sách trên hay không trước khi tạo mới. Tránh vi phạm quy định phân quyền của Firebase `firestore.rules`.
