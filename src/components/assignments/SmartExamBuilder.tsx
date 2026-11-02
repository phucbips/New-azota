import React, { useState, useRef, useEffect } from 'react';
import { CognitiveLevel, Question, QuestionType, TrueFalseStatement } from '../../types';
import {
  extractAzotaTextFromDocx,
  parseAzotaText,
  serializeQuestionsToAzotaText,
  SAMPLE_AZOTA_EXAM_TEXT,
} from '../../lib/azotaParser';
import { SmartExamPlayer } from '../student/SmartExamPlayer';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import {
  Upload,
  Wand2,
  Plus,
  Trash2,
  CheckCircle2,
  Circle,
  SearchCode,
  FileText,
  Eye,
  Edit3,
  HelpCircle,
} from 'lucide-react';
import { toast } from 'sonner';
import { cn } from '../../lib/utils';

interface SmartExamBuilderProps {
  questions: Question[];
  onChange: (questions: Question[]) => void;
  durationMin?: number;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
}

export const SmartExamBuilder: React.FC<SmartExamBuilderProps> = ({
  questions,
  onChange,
  durationMin = 45,
  shuffleQuestions = false,
  shuffleOptions = false,
}) => {
  const [rawText, setRawText] = useState(() =>
    questions.length > 0 ? serializeQuestionsToAzotaText(questions) : ''
  );
  const [isParsing, setIsParsing] = useState(false);
  const [activeTab, setActiveTab] = useState<'edit' | 'preview'>('edit');
  const [showSyntaxHelp, setShowSyntaxHelp] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const isInternalChangeRef = useRef(false);

  // Populate rawText if existing questions are loaded asynchronously from Firestore
  useEffect(() => {
    if (isInternalChangeRef.current) {
      isInternalChangeRef.current = false;
      return;
    }
    if (questions.length > 0 && !rawText.trim()) {
      setRawText(serializeQuestionsToAzotaText(questions));
    }
  }, [questions, rawText]);

  // Apply changes from the Right Preview Panel -> sync back to Left Text Panel
  const commitQuestionsFromPreview = (nextQuestions: Question[]) => {
    isInternalChangeRef.current = true;
    onChange(nextQuestions);
    setRawText(serializeQuestionsToAzotaText(nextQuestions));
  };

  // Live sync: when user edits the Left Text Panel -> immediately update Right Preview Panel
  const handleRawTextChange = (nextText: string) => {
    setRawText(nextText);
    isInternalChangeRef.current = true;
    if (!nextText.trim()) {
      onChange([]);
      return;
    }
    const parsed = parseAzotaText(nextText);
    onChange(parsed);
  };

  // ==========================================
  // 1. DOCX UPLOAD (PRESERVING UNDERLINES & TABLES)
  // ==========================================
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.name.toLowerCase().endsWith('.docx')) {
      toast.error('Hệ thống chỉ hỗ trợ file Word định dạng .docx');
      return;
    }

    setIsParsing(true);
    try {
      const arrayBuffer = await file.arrayBuffer();
      const extracted = await extractAzotaTextFromDocx(arrayBuffer);
      setRawText(extracted);
      const parsed = parseAzotaText(extracted);
      isInternalChangeRef.current = true;
      onChange(parsed);
      if (parsed.length > 0) {
        toast.success(`Đã đọc file DOCX và tự động nhận diện ${parsed.length} câu hỏi chuẩn Azota!`);
      } else {
        toast.info('Đã trích xuất nội dung file DOCX. Hãy kiểm tra văn bản bên trái.');
      }
    } catch (err: any) {
      console.error(err);
      toast.error('Lỗi khi đọc file DOCX: ' + err.message);
    } finally {
      setIsParsing(false);
      if (fileInputRef.current) fileInputRef.current.value = '';
    }
  };

  // ==========================================
  // 2. AZOTA STRUCTURAL PARSER + AI FALLBACK
  // ==========================================
  const handleParseAzota = () => {
    if (!rawText.trim()) {
      toast.error('Vui lòng nhập hoặc tải lên nội dung đề thi trước.');
      return;
    }
    setIsParsing(true);
    try {
      const parsed = parseAzotaText(rawText);
      if (parsed.length > 0) {
        isInternalChangeRef.current = true;
        onChange(parsed);
        toast.success(`Đã đồng bộ ${parsed.length} câu hỏi chuẩn Azota!`);
      } else {
        toast.error('Không tìm thấy câu hỏi hợp lệ. Hãy bắt đầu mỗi câu bằng "Câu 1.", "Câu 2:"...');
      }
    } catch (error) {
      console.error(error);
      toast.error('Lỗi trong quá trình phân tích cú pháp Azota.');
    } finally {
      setIsParsing(false);
    }
  };

  const handleParseWithAI = async () => {
    if (!rawText.trim()) {
      toast.error('Vui lòng nhập nội dung đề thi.');
      return;
    }
    setIsParsing(true);
    toast.info('Đang gửi dữ liệu cho AI phân tích...', { duration: 4000 });

    try {
      const prompt = `Phân tích đề thi tiếng Việt sau theo chuẩn Azota và trả về mảng JSON thuần túy (không bọc markdown). Mỗi câu trắc nghiệm bắt buộc phải có đủ 4 phương án A, B, C, D trong mảng options:
[
  {
    "type": "multiple_choice" | "checkbox" | "true_false" | "short_answer",
    "section": "PHẦN I...",
    "level": "NB" | "TH" | "VD" | "VDC",
    "question": "Nội dung câu hỏi",
    "options": ["Phương án A", "Phương án B", "Phương án C", "Phương án D"],
    "correctAnswers": ["Nội dung đáp án đúng (hoặc các phương án trả lời ngắn)"],
    "subQuestions": [{"id":"a","label":"a","text":"Mệnh đề a","isTrue":true}],
    "explanation": "Lời giải chi tiết nếu có",
    "points": 0.25
  }
]
Đề thi:
${rawText}`;

      const response = await fetch('/api/generate-content', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) throw new Error('AI Service unavailable.');
      const data = await response.json();
      const rawContent = data.content || data?.candidates?.[0]?.content?.parts?.[0]?.text || '[]';
      const cleanJson = rawContent.replace(/```json/g, '').replace(/```/g, '').trim();
      const parsedArray = JSON.parse(cleanJson);

      const newQs: Question[] = parsedArray.map((q: any, i: number) => {
        const qType = (q.type as QuestionType) || 'multiple_choice';
        let opts: string[] = Array.isArray(q.options) ? [...q.options] : [];
        if (qType === 'multiple_choice' || qType === 'checkbox') {
          while (opts.length < 4) {
            opts.push(`Phương án ${String.fromCharCode(65 + opts.length)}`);
          }
        }
        return {
          id: `q_ai_${Date.now()}_${i}`,
          type: qType,
          section: q.section || undefined,
          level: q.level || undefined,
          text: q.question || '',
          options: opts,
          correctAnswers: q.correctAnswers || [],
          subQuestions: q.subQuestions || undefined,
          explanation: q.explanation || undefined,
          points: Number(q.points) || 0.25,
        };
      });

      commitQuestionsFromPreview(newQs);
      toast.success(`AI đã nhận diện và chuẩn hóa ${newQs.length} câu hỏi!`);
    } catch (error) {
      console.error(error);
      toast.error('AI không phản hồi hoặc lỗi cấu trúc. Văn bản của bạn vẫn đang được phân tích tự động bằng bộ chuẩn Azota.');
    } finally {
      setIsParsing(false);
    }
  };

  // ==========================================
  // 3. QUESTION CRUD HELPERS (TWO-WAY SYNCED)
  // ==========================================
  const updateQuestion = (index: number, updated: Question) => {
    const next = [...questions];
    next[index] = updated;
    commitQuestionsFromPreview(next);
  };

  const removeQuestion = (index: number) => {
    commitQuestionsFromPreview(questions.filter((_, i) => i !== index));
  };

  const addNewQuestion = (type: QuestionType) => {
    const id = `q_new_${Date.now()}`;
    if (type === 'true_false') {
      const subs: TrueFalseStatement[] = ['a', 'b', 'c', 'd'].map((label, idx) => ({
        id: `${id}_${label}`,
        label,
        text: `Mệnh đề ${label}`,
        isTrue: idx % 2 === 0,
      }));
      commitQuestionsFromPreview([
        ...questions,
        {
          id,
          type: 'true_false',
          section: 'PHẦN II. Câu trắc nghiệm đúng sai',
          text: 'Cho thông tin sau, xét tính đúng sai của các mệnh đề:',
          subQuestions: subs,
          correctAnswers: ['a', 'c'],
          points: 1,
        },
      ]);
      return;
    }

    if (type === 'short_answer') {
      commitQuestionsFromPreview([
        ...questions,
        {
          id,
          type: 'short_answer',
          section: 'PHẦN III. Câu trắc nghiệm trả lời ngắn',
          text: 'Nội dung câu hỏi trả lời ngắn...',
          correctAnswers: ['Đáp án 1'],
          points: 0.5,
        },
      ]);
      return;
    }

    commitQuestionsFromPreview([
      ...questions,
      {
        id,
        type,
        section: 'PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn',
        text: 'Nội dung câu hỏi mới...',
        options: ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'],
        correctAnswers: ['Phương án A'],
        points: 0.25,
      },
    ]);
  };

  const toggleCorrectOption = (qIndex: number, optionText: string) => {
    const q = questions[qIndex];
    let newCorrect = [...q.correctAnswers];

    if (q.type === 'multiple_choice') {
      newCorrect = [optionText];
    } else {
      if (newCorrect.includes(optionText)) {
        newCorrect = newCorrect.filter((a) => a !== optionText);
      } else {
        newCorrect.push(optionText);
      }
    }
    const nextType: QuestionType =
      q.type === 'multiple_choice' || q.type === 'checkbox'
        ? newCorrect.length > 1
          ? 'checkbox'
          : 'multiple_choice'
        : q.type;
    updateQuestion(qIndex, { ...q, type: nextType, correctAnswers: newCorrect });
  };

  const handleLoadSample = () => {
    setRawText(SAMPLE_AZOTA_EXAM_TEXT);
    const parsed = parseAzotaText(SAMPLE_AZOTA_EXAM_TEXT);
    isInternalChangeRef.current = true;
    onChange(parsed);
    toast.success(`Đã nạp đề mẫu Azota (${parsed.length} câu đủ 3 phần)!`);
  };

  return (
    <div className="flex h-full flex-col gap-5 lg:flex-row">
      {/* LEFT PANEL: AZOTA DOCX / LIVE TEXT EDITOR */}
      <div className="flex w-full flex-col gap-4 rounded-xl border border-border bg-card p-5 lg:w-[38%] lg:overflow-y-auto">
        <div className="flex items-start justify-between gap-2">
          <div>
            <h3 className="text-base font-semibold text-foreground">Văn bản Đề thi (Đồng bộ tức thì)</h3>
            <p className="mt-0.5 text-xs text-muted-foreground">
              Gõ hoặc sửa văn bản ở đây, khung Xem trước bên phải sẽ tự động cập nhật theo thời gian thực.
            </p>
          </div>
          <Button
            type="button"
            variant="ghost"
            size="sm"
            onClick={() => setShowSyntaxHelp((v) => !v)}
          >
            <HelpCircle className="h-3.5 w-3.5" />
            Cú pháp
          </Button>
        </div>

        {showSyntaxHelp && (
          <div className="space-y-1.5 rounded-lg border border-border bg-muted/50 p-3 text-xs leading-relaxed text-muted-foreground">
            <p className="font-semibold text-foreground">Quy tắc nhận diện tự động Azota:</p>
            <p>• <strong>Phân phần:</strong> <code>PHẦN I.</code>, <code>PHẦN II.</code>, <code>I.</code>, <code>II.</code></p>
            <p>• <strong>Câu hỏi &amp; Mức độ:</strong> <code>Câu 1. [NB]</code>, <code>Câu 2: [VD]</code></p>
            <p>• <strong>Trắc nghiệm (4 đáp án A, B, C, D):</strong> Đánh dấu <code>*A.</code> hoặc <u>gạch chân chữ A</u> trong Word. Hỗ trợ viết 4 dòng hoặc viết chung 1 dòng cách nhau bởi dấu cách/Tab.</p>
            <p>• <strong>Đúng / Sai:</strong> Dùng chữ thường <code>a)</code>, <code>b)</code>, <code>c)</code>, <code>d)</code>. Đánh dấu <code>*a)</code> nếu mệnh đề Đúng.</p>
            <p>• <strong>Trả lời ngắn:</strong> Ghi <code>Đáp án: A | B</code> ngay dưới câu hỏi.</p>
            <p>• <strong>Lời giải &amp; Bảng đáp án:</strong> Hỗ trợ dòng <code>Lời giải: ...</code> và bảng đáp án sau chữ <code>HẾT</code>.</p>
          </div>
        )}

        <div className="grid grid-cols-2 gap-2">
          <input
            type="file"
            accept=".docx"
            className="hidden"
            ref={fileInputRef}
            onChange={handleFileUpload}
          />
          <Button type="button" variant="outline" onClick={() => fileInputRef.current?.click()}>
            <Upload />
            Tải file .DOCX
          </Button>
          <Button type="button" variant="secondary" onClick={handleLoadSample}>
            <FileText />
            Chèn đề mẫu Azota
          </Button>
        </div>

        <textarea
          value={rawText}
          onChange={(e) => handleRawTextChange(e.target.value)}
          placeholder={SAMPLE_AZOTA_EXAM_TEXT}
          className="min-h-[300px] w-full flex-1 resize-y rounded-lg border border-input bg-background p-3 font-mono text-xs leading-relaxed text-foreground focus:border-ring focus:outline-none focus:ring-[3px] focus:ring-ring/15"
        />

        <div className="flex flex-col gap-2">
          <Button
            type="button"
            variant="secondary"
            onClick={handleParseAzota}
            disabled={isParsing || !rawText.trim()}
            className="w-full"
          >
            <SearchCode />
            Chuẩn hóa lại từ Văn bản
          </Button>
          <Button
            type="button"
            variant="outline"
            onClick={handleParseWithAI}
            disabled={isParsing || !rawText.trim()}
            className="w-full"
          >
            <Wand2 />
            Nhận diện văn bản tự do bằng AI Gemini
          </Button>
        </div>
      </div>

      {/* RIGHT PANEL: EDITOR & STUDENT PREVIEW */}
      <div className="flex w-full flex-col overflow-hidden rounded-xl border border-border bg-card lg:w-[62%]">
        {/* Toolbar */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border px-5 py-3.5">
          <div className="inline-flex rounded-lg bg-muted p-1">
            <button
              type="button"
              onClick={() => setActiveTab('edit')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors',
                activeTab === 'edit'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Edit3 className="h-3.5 w-3.5" />
              Biên tập ({questions.length} câu)
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('preview')}
              className={cn(
                'inline-flex items-center gap-1.5 rounded-md px-3 py-1 text-xs font-medium transition-colors',
                activeTab === 'preview'
                  ? 'bg-background text-foreground shadow-xs'
                  : 'text-muted-foreground hover:text-foreground'
              )}
            >
              <Eye className="h-3.5 w-3.5" />
              Làm thử đề (Chế độ Học sinh)
            </button>
          </div>

          {activeTab === 'edit' && (
            <div className="flex flex-wrap items-center gap-1.5">
              <Button type="button" size="sm" variant="outline" onClick={() => addNewQuestion('multiple_choice')}>
                <Plus className="h-3.5 w-3.5" /> Trắc nghiệm (4 ĐA)
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={() => addNewQuestion('true_false')}>
                <Plus className="h-3.5 w-3.5" /> Đúng/Sai (a,b,c,d)
              </Button>
              <Button type="button" size="sm" variant="outline" onClick={() => addNewQuestion('short_answer')}>
                <Plus className="h-3.5 w-3.5" /> Trả lời ngắn
              </Button>
              {questions.length > 0 && (
                <Button
                  type="button"
                  size="sm"
                  variant="ghost"
                  className="text-destructive hover:text-destructive"
                  onClick={() => commitQuestionsFromPreview([])}
                >
                  Xóa hết
                </Button>
              )}
            </div>
          )}
        </div>

        {/* Workspace Content */}
        <div className="flex-1 overflow-y-auto p-5">
          {activeTab === 'preview' ? (
            <SmartExamPlayer
              questions={questions}
              durationMin={durationMin}
              shuffleQuestions={shuffleQuestions}
              shuffleOptions={shuffleOptions}
            />
          ) : questions.length === 0 ? (
            <div className="flex h-72 flex-col items-center justify-center text-center">
              <SearchCode className="mb-3 h-10 w-10 text-muted-foreground/50" />
              <p className="text-sm font-semibold text-foreground">Chưa có câu hỏi nào</p>
              <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                Gõ trực tiếp vào ô văn bản bên trái, bấm <strong>"Chèn đề mẫu Azota"</strong> hoặc tải lên file Word (.docx).
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              {questions.map((q, qIndex) => {
                const mcOpts =
                  q.type === 'multiple_choice' || q.type === 'checkbox'
                    ? q.options && q.options.length >= 4
                      ? q.options
                      : [
                          ...(q.options || []),
                          ...['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'].slice(
                            q.options?.length || 0
                          ),
                        ]
                    : q.options || [];

                return (
                  <div
                    key={q.id}
                    className="rounded-xl border border-border bg-background p-4 transition-colors"
                  >
                    {/* Top metadata row */}
                    <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="inline-flex h-6 items-center rounded-md bg-primary/10 px-2 text-xs font-semibold text-primary">
                          Câu {qIndex + 1}
                        </span>

                        <select
                          value={q.type}
                          onChange={(e) => {
                            const nextType = e.target.value as QuestionType;
                            const patched: Question = { ...q, type: nextType };
                            if (
                              (nextType === 'multiple_choice' || nextType === 'checkbox') &&
                              (!q.options || q.options.length < 4)
                            ) {
                              patched.options = [
                                'Phương án A',
                                'Phương án B',
                                'Phương án C',
                                'Phương án D',
                              ];
                              patched.correctAnswers = ['Phương án A'];
                            }
                            if (
                              nextType === 'true_false' &&
                              (!q.subQuestions || q.subQuestions.length === 0)
                            ) {
                              patched.subQuestions = ['a', 'b', 'c', 'd'].map((label) => ({
                                id: `${q.id}_${label}`,
                                label,
                                text: `Mệnh đề ${label}`,
                                isTrue: true,
                              }));
                            }
                            updateQuestion(qIndex, patched);
                          }}
                          className="h-7 rounded-md border border-input bg-card px-2 text-xs font-medium text-foreground"
                        >
                          <option value="multiple_choice">Trắc nghiệm (1 đáp án)</option>
                          <option value="checkbox">Trắc nghiệm (Nhiều đáp án)</option>
                          <option value="true_false">Đúng / Sai (a, b, c, d)</option>
                          <option value="short_answer">Trả lời ngắn / Điền từ</option>
                        </select>

                        <select
                          value={q.level || ''}
                          onChange={(e) =>
                            updateQuestion(qIndex, {
                              ...q,
                              level: (e.target.value || undefined) as CognitiveLevel | undefined,
                            })
                          }
                          className="h-7 rounded-md border border-input bg-card px-2 text-xs text-muted-foreground"
                        >
                          <option value="">Mức độ</option>
                          <option value="NB">NB (Nhận biết)</option>
                          <option value="TH">TH (Thông hiểu)</option>
                          <option value="VD">VD (Vận dụng)</option>
                          <option value="VDC">VDC (Vận dụng cao)</option>
                        </select>

                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <span>Điểm:</span>
                          <input
                            type="number"
                            step="0.05"
                            min="0"
                            value={q.points}
                            onChange={(e) =>
                              updateQuestion(qIndex, {
                                ...q,
                                points: parseFloat(e.target.value) || 0,
                              })
                            }
                            className="h-7 w-16 rounded-md border border-input bg-card px-2 text-xs font-medium text-foreground tabular-nums"
                          />
                        </div>
                      </div>

                      <button
                        type="button"
                        onClick={() => removeQuestion(qIndex)}
                        className="rounded-md p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                        title="Xóa câu hỏi"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>

                    {/* Optional Section Header */}
                    <div className="mb-2">
                      <input
                        type="text"
                        value={q.section || ''}
                        onChange={(e) =>
                          updateQuestion(qIndex, { ...q, section: e.target.value || undefined })
                        }
                        placeholder="Phần (VD: PHẦN I. Trắc nghiệm...)"
                        className="w-full border-none bg-transparent p-0 text-xs font-medium text-muted-foreground placeholder:text-muted-foreground/50 focus:outline-none"
                      />
                    </div>

                    {/* Question Stem */}
                    <textarea
                      value={q.text}
                      onChange={(e) => updateQuestion(qIndex, { ...q, text: e.target.value })}
                      rows={2}
                      placeholder="Nội dung câu hỏi..."
                      className="mb-3 w-full resize-y rounded-lg border border-input bg-card p-2.5 text-sm text-foreground focus:border-ring focus:outline-none"
                    />

                    {/* A. MULTIPLE CHOICE / CHECKBOX OPTIONS (4+ OPTIONS) */}
                    {(q.type === 'multiple_choice' || q.type === 'checkbox') && (
                      <div className="space-y-2">
                        {mcOpts.map((opt, oIndex) => {
                          const isCorrect = q.correctAnswers.includes(opt);
                          return (
                            <div
                              key={oIndex}
                              className={cn(
                                'flex items-center gap-2.5 rounded-lg border px-3 py-2 transition-colors',
                                isCorrect
                                  ? 'border-success/40 bg-success/5'
                                  : 'border-border bg-card'
                              )}
                            >
                              <button
                                type="button"
                                onClick={() => toggleCorrectOption(qIndex, opt)}
                                className={cn(
                                  'shrink-0 transition-colors',
                                  isCorrect
                                    ? 'text-success'
                                    : 'text-muted-foreground hover:text-foreground'
                                )}
                                title={isCorrect ? 'Đáp án đúng' : 'Chọn làm đáp án đúng'}
                              >
                                {isCorrect ? (
                                  <CheckCircle2 className="h-4 w-4" />
                                ) : (
                                  <Circle className="h-4 w-4" />
                                )}
                              </button>
                              <span className="w-5 text-xs font-semibold text-muted-foreground">
                                {String.fromCharCode(65 + oIndex)}.
                              </span>
                              <input
                                type="text"
                                value={opt}
                                onChange={(e) => {
                                  const newOpts = [...mcOpts];
                                  newOpts[oIndex] = e.target.value;
                                  const newCorrect = q.correctAnswers.map((c) =>
                                    c === opt ? e.target.value : c
                                  );
                                  updateQuestion(qIndex, {
                                    ...q,
                                    options: newOpts,
                                    correctAnswers: newCorrect,
                                  });
                                }}
                                className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
                                placeholder={`Nhập phương án ${String.fromCharCode(65 + oIndex)}...`}
                              />
                              {mcOpts.length > 4 && (
                                <button
                                  type="button"
                                  onClick={() => {
                                    const nextOpts = mcOpts.filter((_, idx) => idx !== oIndex);
                                    const nextCorrect = q.correctAnswers.filter((c) => c !== opt);
                                    updateQuestion(qIndex, {
                                      ...q,
                                      options: nextOpts,
                                      correctAnswers: nextCorrect,
                                    });
                                  }}
                                  className="text-xs text-muted-foreground hover:text-destructive"
                                >
                                  ✕
                                </button>
                              )}
                            </div>
                          );
                        })}
                        {mcOpts.length < 8 && (
                          <button
                            type="button"
                            onClick={() => {
                              const nextLetter = String.fromCharCode(65 + mcOpts.length);
                              updateQuestion(qIndex, {
                                ...q,
                                options: [...mcOpts, `Phương án ${nextLetter}`],
                              });
                            }}
                            className="text-xs font-medium text-primary hover:underline"
                          >
                            + Thêm phương án (tối đa 8)
                          </button>
                        )}
                      </div>
                    )}

                    {/* B. TRUE / FALSE STATEMENTS (a, b, c, d) */}
                    {q.type === 'true_false' && (
                      <div className="space-y-2">
                        {(q.subQuestions || []).map((sub, sIdx) => (
                          <div
                            key={sub.id}
                            className="flex items-center gap-2.5 rounded-lg border border-border bg-card px-3 py-2"
                          >
                            <span className="w-5 text-xs font-semibold text-foreground">
                              {sub.label})
                            </span>
                            <input
                              type="text"
                              value={sub.text}
                              onChange={(e) => {
                                const nextSubs = [...(q.subQuestions || [])];
                                nextSubs[sIdx] = { ...sub, text: e.target.value };
                                updateQuestion(qIndex, { ...q, subQuestions: nextSubs });
                              }}
                              className="flex-1 bg-transparent text-sm text-foreground focus:outline-none"
                              placeholder={`Nội dung ý ${sub.label})...`}
                            />
                            <button
                              type="button"
                              onClick={() => {
                                const nextSubs = [...(q.subQuestions || [])];
                                nextSubs[sIdx] = { ...sub, isTrue: !sub.isTrue };
                                updateQuestion(qIndex, {
                                  ...q,
                                  subQuestions: nextSubs,
                                  correctAnswers: nextSubs
                                    .filter((s) => s.isTrue)
                                    .map((s) => s.label),
                                });
                              }}
                              className={cn(
                                'rounded-md border px-2.5 py-1 text-xs font-semibold transition-colors',
                                sub.isTrue
                                  ? 'border-success/30 bg-success/10 text-success'
                                  : 'border-destructive/30 bg-destructive/10 text-destructive'
                              )}
                            >
                              {sub.isTrue ? 'Đúng' : 'Sai'}
                            </button>
                          </div>
                        ))}
                      </div>
                    )}

                    {/* C. SHORT ANSWER */}
                    {q.type === 'short_answer' && (
                      <div className="space-y-1.5">
                        <label className="text-xs font-medium text-muted-foreground">
                          Đáp án chấp nhận (ngăn cách nhiều đáp án bằng dấu <code>|</code>, không phân biệt hoa/thường):
                        </label>
                        <Input
                          type="text"
                          value={q.correctAnswers.join(' | ')}
                          onChange={(e) =>
                            updateQuestion(qIndex, {
                              ...q,
                              correctAnswers: e.target.value
                                .split('|')
                                .map((s) => s.trim())
                                .filter(Boolean),
                            })
                          }
                          placeholder="Ví dụ: 17 | mười bảy"
                        />
                      </div>
                    )}

                    {/* Explanation */}
                    <div className="mt-3 border-t border-border pt-2.5">
                      <input
                        type="text"
                        value={q.explanation || ''}
                        onChange={(e) =>
                          updateQuestion(qIndex, {
                            ...q,
                            explanation: e.target.value || undefined,
                          })
                        }
                        placeholder="Lời giải chi tiết (hiển thị sau khi học sinh nộp bài)..."
                        className="w-full bg-transparent text-xs text-muted-foreground placeholder:text-muted-foreground/60 focus:text-foreground focus:outline-none"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
