# Teacher Portal Module Logic Spec

## Core Objective
To allow educators to manage their courses, create and organize assignments/exams, monitor student engagement, and utilize AI tools to streamline content creation.

## Required Data Entities
- **Teacher Profile:** Display Name, Subject focus.
- **Teacher's Courses:** Course ID, Title, Status (active/inactive), Enrolled Students count, assigned Modules/Assignments.
- **Assignments/Exams (Authored by Teacher):** Title, Subject, Topic, Grade Level, Type, Content/Embed URL, Questions Array (for smart exams), Time Limit.

## User Actions & Inputs
- **Dashboard Navigation:** View overview of created content and active courses.
- **Course Management:** Create, edit, and toggle visibility of courses. Assign specific assignments to courses.
- **Assignment Creation (Standard):** Input title, subject, grade level, topic, select type (video/embed/code), input external URL or raw HTML/JS code.
- **Smart Exam Builder (AI):**
  - Upload DOCX file or paste raw text.
  - Trigger AI extraction/generation of structured questions.
  - Review, edit, add, or delete individual questions (adjust points, set correct answers).
  - Save finalized exam structure.
- **Profile/Settings:** Manage account details and preferences.
