# Shared Features Logic Spec

## Core Objective
To define the logic and requirements for functional modules that span multiple roles (Admin, Teacher, Student) ensuring consistency and code reuse.

## Required Data Entities
- **Profile Data:** Display Name, Email, Avatar URL.
- **Settings Data:** UI Language (vi/en), Theme Preference (Light/Dark), Primary Color Theme (Blue, Purple, Green, Orange).
- **Notifications:** ID, Message, Type (info, warning, success), Read/Unread status.
- **Smart Exam Context:** Raw input text, parsed Question arrays (type, text, options, correct answers).

## User Actions & Inputs
- **Profile Management (`ProfilePage`):**
  - Upload/update avatar image (via Cloudinary/Cropper).
  - Update display name.
- **Application Settings (`SettingsContent`):**
  - Toggle Light/Dark mode.
  - Select primary color theme.
  - Switch application language.
- **Notifications & Communication:**
  - View list of notifications.
  - Mark notifications as read.
- **Smart Exam Builder (Used by Admin & Teacher):**
  - Input: DOCX file upload or raw text paste.
  - Action: Trigger AI/Regex parsing.
  - Input: Edit individual question text, add/remove options, select correct answers.
  - Action: Save compiled exam object to database.
