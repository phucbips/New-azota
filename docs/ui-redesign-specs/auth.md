# Authentication Module Logic Spec

## Core Objective
To securely manage user identity (registration, login, password recovery) and establish authorized sessions across the platform, delegating roles (Admin, Teacher, Student).

## Required Data Entities
- **User Credentials:** Email, Password.
- **User Profile Data (Registration):** Display Name, intended Role, Grade Level (for Students).
- **Session State:** Authentication token/session ID, User Role, Last Login timestamp, Last Device used.
- **Error/Success States:** Validation messages, authentication error codes (e.g., 'email-already-in-use').

## User Actions & Inputs
- **Login:** Input email and password, submit credentials.
- **Register:** Input email, password, confirm password, display name.
- **Role/Grade Selection (Registration):** Choose role, and if Student, select grade level (10, 11, 12).
- **Third-Party Auth:** Click to authenticate via Google.
- **Password Recovery:** Request password reset link via email input.
- **Toggle Mode:** Switch between Login and Registration views.
