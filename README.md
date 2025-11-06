# Hệ thống Học tập THPT - React TypeScript

Hệ thống học tập hiện đại cho học sinh THPT được phát triển bằng React, TypeScript, và Tailwind CSS.

## 🚀 Tính năng

- **Xác thực Firebase** - Đăng nhập/đăng ký an toàn
- **Giao diện Admin** - Quản lý bài học và danh sách học sinh  
- **Giao diện Student** - Xem bài học và chat với AI assistant
- **UI/UX Hiện đại** - Glass morphism effects và responsive design
- **AI Assistant** - Chatbot hỗ trợ học tập (cần API key Gemini)
- **Responsive** - Tối ưu cho mọi thiết bị

## 🛠 Công nghệ sử dụng

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Custom CSS
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore  
- **AI**: Google Gemini API
- **Icons**: Lucide React
- **Build**: Vite + pnpm

## 📦 Cài đặt

### Yêu cầu
- Node.js >= 16
- pnpm >= 8

### Các bước cài đặt

1. **Giải nén project**
```bash
unzip thpt-learning-system.zip
cd thpt-learning-system
```

2. **Cài đặt dependencies**
```bash
pnpm install
```

3. **Cấu hình Firebase**
   - Tạo project Firebase: https://console.firebase.google.com/
   - Bật Authentication (Email/Password + Google)
   - Tạo Firestore Database
   - Copy cấu hình vào `src/config/firebase.ts`

4. **Cấu hình AI (tùy chọn)**
   - Tạo Gemini API key: https://makersuite.google.com/
   - Thêm vào file `.env`:
```
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

5. **Chạy development server**
```bash
pnpm dev
```

6. **Build production**
```bash
pnpm build
```

## 📁 Cấu trúc Project

```
src/
├── components/           # React components
│   ├── auth/            # Authentication components
│   ├── admin/           # Admin dashboard components  
│   ├── student/         # Student interface components
│   └── shared/          # Shared components
├── pages/               # Main pages
├── services/            # Business logic
├── config/              # Configuration files
├── contexts/            # React contexts
├── hooks/               # Custom hooks
├── types/               # TypeScript types
└── styles/              # Global styles
```

## 🎯 Sử dụng

### Admin Dashboard
- **Quản lý Bài học**: Thêm, sửa, xóa bài học
- **Quản lý Whitelist**: Quản lý danh sách học sinh được phép

### Student Dashboard  
- **Xem Bài học**: Danh sách và chi tiết bài học
- **AI Chat**: Trò chuyện với assistant để hỏi về bài học

## 🔧 Tùy chỉnh

### Đổi màu theme
Chỉnh sửa trong `tailwind.config.js` và `src/styles/globals.css`

### Thêm bài học mới
1. Vào Admin Dashboard
2. Chọn "Quản lý Bài học"  
3. Nhấn "Thêm Bài học Mới"
4. Điền thông tin và mã embed (iframe/HTML)

### Cấu hình Firebase
Cập nhật `src/config/firebase.ts` với config của project Firebase

## 🚀 Deploy

### Vercel
```bash
pnpm build
vercel deploy
```

### Netlify
```bash
pnpm build  
# Deploy thư mục dist/
```

### Firebase Hosting
```bash
pnpm build
firebase deploy
```

## 📝 Ghi chú

- Để Google Authentication hoạt động, cần thêm domain vào Firebase Console
- AI Chat chỉ hoạt động khi có Gemini API key
- Đảm bảo đã cấu hình Firebase Firestore rules phù hợp

## 📞 Hỗ trợ

Liên hệ qua GitHub Issues hoặc email để được hỗ trợ.
# MaxPing
