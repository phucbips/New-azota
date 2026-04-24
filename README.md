# Hệ thống Học tập THPT - React TypeScript

Hệ thống học tập hiện đại cho học sinh THPT được phát triển bằng React, TypeScript, và Tailwind CSS.

## 🤖 Hướng dẫn cho AI Agents (Agent Skills)

Dự án này sử dụng một bộ kỹ năng đặc biệt cho AI Agent được lưu trong thư mục `.agent/skills/`. Để hỗ trợ việc phát triển tiếp theo hiệu quả:

1. **Hiểu về thư mục `.agent/skills/`**: Thư mục này chứa các công cụ/script kiểm tra mã nguồn trước khi commit (pre-commit checks). Hiện tại nó có thể bị thiếu trong repository hoặc đang nằm trong `.gitignore`.
2. **Khi phát triển tính năng mới**:
   - Nếu bạn là một AI Agent, hãy luôn ưu tiên đọc `AGENTS.md` (nếu có) hoặc xem xét các hướng dẫn trong `.jules/bolt.md`.
   - **Ví dụ từ file `bolt.md`**: Hệ thống đã được cấu hình **Route-based Code Splitting** (`React.lazy` và `Suspense`) trong `App.tsx` để giảm kích thước bundle. Khi tạo trang mới, hãy tiếp tục sử dụng `React.lazy` thay vì import đồng bộ.
3. **Cách phân tích lỗi (Bài học từ Fix 403 & OTP)**:
   - Các lỗi 403 thường xuất phát từ `firestore.rules` (hoặc RLS). **Tuyệt đối không cấp quyền ghi (write)** cho user thường trên các bảng dữ liệu nhạy cảm (như `courses`, `app_settings`).
   - Hãy xử lý ở backend (Webhook, Vercel Serverless Function) với Admin SDK thay vì lỏng lẻo ở client.
   - Khi làm chức năng gửi OTP hoặc đếm ngược, luôn quản lý state cẩn thận, ưu tiên tách component nếu file quá lớn (như đã phân tích trong kế hoạch Lovable/Supabase cũ).
   - **ĐẶC BIỆT LƯU Ý VỀ GIAO DIỆN (UI/UX):** Khi thiết kế hoặc chỉnh sửa bất kỳ giao diện nào, **bắt buộc** phải tối ưu hóa Responsive cho cả 2 nền tảng: **PC và Mobile (bao gồm Android và iPhone)**. Hãy sử dụng các class Tailwind như `min-h-[100dvh]` thay cho `h-screen` để tránh bị che bởi thanh công cụ trình duyệt di động, và luôn dùng `flex-col md:flex-row` để đảm bảo giao diện không bị vỡ.


## 🔍 Cẩm Nang Tính Năng (Feature Inventory)
👉 **HÃY ĐỌC FILE NÀY TRƯỚC KHI CODE:** [FEATURES_INVENTORY.md](./FEATURES_INVENTORY.md)
Tài liệu này phân loại chi tiết các module/tính năng đã có (Auth, Student Portal, Admin, Webhooks, Design System...) và nhật ký cập nhật. Việc đọc file này giúp:
- **Tái sử dụng (Reuse)** code có sẵn.
- **Tránh trùng lặp (Anti-duplication)** gây phình to hệ thống.
- **Hiểu mối liên kết (Linking)** giữa Frontend và Backend Serverless.

## 🚀 Tính năng

- **Xác thực Firebase** - Đăng nhập/đăng ký an toàn
- **Giao diện Admin** - Quản lý bài học và danh sách học sinh  
- **Giao diện Student** - Xem bài học và chat với AI assistant
- **Hệ thống thanh toán PayOS** - Tích hợp Webhook an toàn, tự động cấp quyền
- **AI Assistant** - Chatbot hỗ trợ học tập (cần API key Gemini)

## 🛠 Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Backend/Serverless**: Vercel Functions (`api/` directory)
- **Authentication/Database**: Firebase (Auth, Firestore)
- **Payments**: PayOS Node SDK

## 📦 Cài đặt

1. **Cài đặt dependencies**
```bash
pnpm install
```

2. **Cấu hình môi trường**
   - Copy file `.env.example` thành `.env`
   - Điền Firebase keys, Gemini API key, và PayOS keys.

3. **Chạy server**
```bash
pnpm dev
```

4. **Biên dịch**
```bash
pnpm build
```

## 📁 Cấu trúc Project
- `src/` - Chứa toàn bộ source code frontend React.
- `api/` - Chứa mã nguồn Vercel Serverless Functions (chạy trên Node.js).
- `src/styles/globals.css` - Chứa biến màu thiết kế (Design Tokens) của Tailwind.
- `DESIGN.md` - Tài liệu chuẩn quy định Design System và màu sắc của dự án.
