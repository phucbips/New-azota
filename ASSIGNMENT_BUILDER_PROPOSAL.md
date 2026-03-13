# Native Assignment Builder Proposal

## 1. Overview
The goal is to replace the reliance on external iFrame embeds (like Azota, Google Forms) with a native, integrated assignment builder. This allows EduPlatform to track detailed student progress, exact scores, identify common mistakes, and provide better analytics to teachers and students.

## 2. Core Features
- **Form Builder UI:** Teachers can add multiple block types to an assignment:
  - **Multiple Choice:** Standard radio button selections.
  - **Checkboxes:** Multiple correct answers.
  - **Short Answer:** Exact or fuzzy string matching.
  - **Long Text (Essay):** Requires manual grading.
  - **Code Execution Sandbox:** (Optional/Advanced) Allows running HTML/JS/CSS or Python in a secure sandbox (`iframe` with `sandbox="allow-scripts"`).
- **Auto-Grading:** The system automatically calculates scores for objective questions.
- **Analytics:** Dashboard showing which questions students got wrong the most.

## 3. Database Schema Changes (Firestore)

### `assignments` collection updates
```typescript
interface Assignment {
  id: string;
  type: 'embed' | 'native'; // 'embed' for legacy Azota links, 'native' for built-in
  embedUrl?: string; // Used if type === 'embed'
  questions?: Question[]; // Array of question blocks (if type === 'native')
  totalPoints?: number;
  timeLimit?: number; // in minutes (optional)
  // ... existing fields
}

type QuestionType = 'multiple_choice' | 'checkbox' | 'short_answer' | 'code_snippet';

interface Question {
  id: string; // Unique ID for the question
  type: QuestionType;
  text: string; // The question text (Rich text HTML allowed)
  options?: string[]; // For multiple_choice and checkbox
  correctAnswers: string[]; // E.g. ["A"], ["B", "C"], or ["exact_word"]
  points: number;
}
```

### `submissions` collection (New)
To track student progress and answers.
```typescript
interface Submission {
  id: string;
  assignmentId: string;
  studentId: string;
  courseId?: string;
  answers: Record<string, string | string[]>; // Map questionId -> student's answer
  score: number;
  maxScore: number;
  status: 'submitted' | 'graded';
  submittedAt: Timestamp;
}
```

## 4. UI/UX Flow
1. **Teacher creates assignment:** Selects "Tạo bài tập trực tiếp" (Create native assignment).
2. **Builder Interface:** Uses a drag-and-drop or simple "Add Question" interface to build the test. Saves to Firestore.
3. **Student View:** Instead of seeing an `iframe`, the student sees a cleanly formatted web form.
4. **Code Sandbox Demo (Web IDE):**
   - For HTML/JS/CSS, we can use a React component that takes the code string, generates a Blob URL, and mounts it in an `<iframe>`.
   - E.g. `<iframe srcDoc={htmlContent} sandbox="allow-scripts" />`
   - This is highly performant and secure for frontend web development tasks.

## 5. Next Steps for Implementation
If approved, we would:
1. Create `QuestionBuilder.tsx` in `src/components/assignments/`.
2. Create `AssignmentRunner.tsx` for students to take the test.
3. Add a Submissions service to evaluate and save scores.
4. Build the Analytics chart to show class average and question difficulty.