# Student Portal Module Logic Spec

## Core Objective
To provide students with a personalized dashboard to access enrolled courses, view announcements, engage with assignments and exams, and manage course purchases via the cart and checkout system.

## Required Data Entities
- **Student Profile:** Display Name, Grade Level, Enrolled Course IDs.
- **Announcements:** Title, Content, Author, Date, active status.
- **Course Data (Enrolled & Available):** Title, Subject, Progress, Price, Thumbnail.
- **Assignments/Exams:** Title, Type (embed, native_code, smart_exam), Subject, Topic, Grade Level, Time Limit, Points, Questions (if exam).
- **Cart & Checkout:**
  - Selected Course IDs.
  - Subtotal, Discount (if voucher applied), Total Price.
  - Applied Voucher Code and rules.
  - Order ID, Payment Link/QR Code string, Payment Status.
- **AI Chat History:** Previous prompts and responses within the learning context.

## User Actions & Inputs
- **Dashboard Overview:** View latest announcements and quick access to active courses.
- **Onboarding (Grade):** Select/update grade level if missing.
- **Course Browsing:** Filter courses by subject.
- **Enrollment/Cart:** Add courses to cart, proceed to checkout.
- **Checkout Process:**
  - Input and validate voucher codes.
  - Confirm order creation.
  - Scan PayOS QR code to complete payment.
  - Await payment success confirmation webhook.
- **Learning/Assignments:**
  - Open and view assignment content (video, iframe, or native code).
  - Participate in exams (answer multiple-choice, checkbox, short answer questions).
  - Submit assignment/exam.
  - Toggle fullscreen mode for native code assignments.
- **AI Assistant:** Type queries and receive educational support in the AI Chat.
- **Profile/Settings:** Update personal information, view transaction history/orders.
