import React, { useState, useRef } from 'react';
import * as mammoth from 'mammoth';
import { Question } from '../../types';
import { Upload, Wand2, Plus, Trash2, CheckCircle2, Circle, SearchCode, Edit2, GripVertical, Settings2 } from 'lucide-react';
import { toast } from 'sonner';

interface SmartExamBuilderProps {
  questions: Question[];
  onChange: (questions: Question[]) => void;
}

export const SmartExamBuilder: React.FC<SmartExamBuilderProps> = ({ questions, onChange }) => {
    const [rawText, setRawText] = useState('');
    const [isParsing, setIsParsing] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    // ==========================================
    // 1. FILE & TEXT INPUT HANDLING
    // ==========================================
    const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        if (file.name.endsWith('.docx')) {
            setIsParsing(true);
            try {
                const arrayBuffer = await file.arrayBuffer();
                // Use mammoth to extract raw text
                const result = await mammoth.extractRawText({ arrayBuffer });
                setRawText(result.value);
                toast.success('Đã đọc file Word thành công. Hãy bấm Phân tích để tạo câu hỏi.');
            } catch (err: any) {
                console.error(err);
                toast.error('Lỗi khi đọc file DOCX: ' + err.message);
            } finally {
                setIsParsing(false);
            }
        } else {
            toast.error('Hiện tại hệ thống chỉ hỗ trợ file .docx');
        }

        // Reset input so the same file can be uploaded again if needed
        if (fileInputRef.current) fileInputRef.current.value = '';
    };

    // ==========================================
    // 2. PARSING LOGIC (Regex + Fallback)
    // ==========================================
    const parseWithRegex = () => {
        if (!rawText.trim()) return toast.error('Vui lòng nhập hoặc tải lên nội dung đề thi trước.');
        setIsParsing(true);

        try {
            // Very basic regex parser following common Vietnamese exam formats
            // Looks for "Câu X: ..." or "Câu X. ..."
            const questionBlocks = rawText.split(/(?=Câu.*.+[:.])/i).filter(b => b.trim());
            const parsedQuestions: Question[] = [];

            questionBlocks.forEach((block, index) => {
                const lines = block.split('.').map(l => l.trim()).filter(Boolean);
                if (lines.length < 2) return; // Skip invalid blocks

                let questionText = '';
                const options: string[] = [];
                const correctAnswers: string[] = [];
                const currentOptionStr = '';

                // Try to separate question text from A, B, C, D options
                lines.forEach(line => {
                    const isOption = /^[A-D][..].*/i.test(line);
                    if (isOption) {
                        const optText = line.replace(/^[A-D][..].*/i, '').trim();
                        options.push(optText);

                        // Heuristic: If option text has an asterisk or underline marker (often lost in rawText, but maybe marked manually by teacher like *A.)
                        // Since mammoth.extractRawText loses formatting like bold/underline, strict Regex won't catch correct answers automatically unless marked with a symbol.
                        // For a true Azota experience, we'd use mammoth.convertToHtml and parse DOM to find <u> tags.
                        // But for MVP raw text, we'll leave correctAnswers empty for manual selection.
                    } else if (options.length === 0) {
                        questionText += line + '.';
                    }
                });

                if (options.length >= 2) {
                    parsedQuestions.push({
                        id: `q_${Date.now()}_${index}`,
                        type: 'multiple_choice',
                        text: questionText.trim(),
                        options,
                        correctAnswers: [], // Requires manual assignment in Preview mode if formatting was lost
                        points: 1
                    });
                }
            });

            if (parsedQuestions.length > 0) {
                onChange([...questions, ...parsedQuestions]);
                toast.success(`Đã nhận diện thành công ${parsedQuestions.length} câu hỏi trắc nghiệm!`);
                setRawText(''); // Clear input box after success to focus on Preview
            } else {
                toast.error('Không tìm thấy câu hỏi đúng định dạng chuẩn (Câu 1:, A., B., C., D.).');
            }

        } catch (error) {
            console.error(error);
            toast.error('Lỗi trong quá trình phân tích văn bản.');
        } finally {
            setIsParsing(false);
        }
    };

    const parseWithAI = async () => {
        if (!rawText.trim()) return toast.error('Vui lòng nhập nội dung đề thi.');
        setIsParsing(true);
        toast.info('Đang gửi dữ liệu cho AI phân tích. Vui lòng chờ...', { duration: 5000 });

        try {
            const prompt = `Phân tích đoạn văn bản đề thi sau và trích xuất thành mảng JSON chứa các câu hỏi trắc nghiệm. Định dạng JSON bắt buộc: [{"question": "Nội dung câu hỏi", "options": ["Đáp án A", "Đáp án B", "Đáp án C", "Đáp án D"], "correctAnswers": ["Chỉ chứa nội dung của đáp án đúng, ví dụ: 'Đáp án B'"], "points": 1}]. Hãy xử lý thông minh kể cả khi định dạng lộn xộn. Nếu không có đáp án đúng, để mảng correctAnswers rỗng. Đoạn văn bản: ..${rawText}`;

            const response = await fetch('/api/generate-content', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ prompt }),
            });

            if (!response.ok) throw new Error('AI Service unavailable.');
            const data = await response.json();

            // Clean up Markdown formatting from AI response if present
            const cleanJson = data.content.replace(/```json/g, '').replace(/```/g, '').trim();
            const parsedArray = JSON.parse(cleanJson);

            const newQs: Question[] = parsedArray.map((q: any, i: number) => ({
                id: `q_ai_${Date.now()}_${i}`,
                type: 'multiple_choice',
                text: q.question,
                options: q.options || [],
                correctAnswers: q.correctAnswers || [],
                points: q.points || 1
            }));

            onChange([...questions, ...newQs]);
            toast.success(`AI đã nhận diện ${newQs.length} câu hỏi thành công!`);
            setRawText('');
        } catch (error) {
            console.error(error);
            toast.error('AI không thể đọc được cấu trúc đề thi này. Vui lòng kiểm tra lại định dạng hoặc dùng Phân tích chuẩn.');
        } finally {
            setIsParsing(false);
        }
    };

    // ==========================================
    // 3. EDIT UI (Preview & Refine)
    // ==========================================
    const updateQuestion = (index: number, updatedQuestion: Question) => {
        const newQs = [...questions];
        newQs[index] = updatedQuestion;
        onChange(newQs);
    };

    const removeQuestion = (index: number) => {
        const newQs = questions.filter((_, i) => i !== index);
        onChange(newQs);
    };

    const toggleCorrectOption = (qIndex: number, optionText: string) => {
        const q = questions[qIndex];
        let newCorrect = [...q.correctAnswers];

        if (q.type === 'multiple_choice') {
            newCorrect = [optionText]; // Only one correct answer
        } else {
            if (newCorrect.includes(optionText)) {
                newCorrect = newCorrect.filter(a => a !== optionText);
            } else {
                newCorrect.push(optionText);
            }
        }
        updateQuestion(qIndex, { ...q, correctAnswers: newCorrect });
    };

    return (
        <div className="flex flex-col lg:flex-row gap-6 h-full items-stretch">

            {/* INGESTION SECTION (LEFT PANEL) */}
            <div className="w-full lg:w-[40%] flex flex-col gap-4 bg-slate-50 border border-slate-200 rounded-2xl p-5 shadow-sm overflow-y-auto max-h-[80vh]">
                <div>
                    <h3 className="font-extrabold text-slate-800 text-xl flex items-center gap-2 mb-1">
                        <SearchCode className="w-6 h-6 text-blue-600" />
                        Nhập Nội dung
                    </h3>
                    <p className="text-sm text-slate-500 mb-4">Dán văn bản thô hoặc tải lên file Word (.docx) chứa đề thi.</p>

                    <div className="flex items-center gap-2 mb-4">
                        <input
                            type="file"
                            accept=".docx"
                            className="hidden"
                            ref={fileInputRef}
                            onChange={handleFileUpload}
                        />
                        <button
                            type="button"
                            onClick={() => fileInputRef.current?.click()}
                            className="w-full flex items-center justify-center gap-2 px-4 py-2.5 bg-white border border-slate-300 text-slate-700 font-bold rounded-xl hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700 transition-colors shadow-sm"
                        >
                            <Upload className="w-5 h-5" />
                            Tải lên File DOCX
                        </button>
                    </div>

                    <textarea
                        value={rawText}
                        onChange={(e) => setRawText(e.target.value)}
                        placeholder="Ví dụ:.Câu 1: Thủ đô của Việt Nam là gì?.A. Hà Nội.B. TP.HCM.C. Đà Nẵng.D. Huế..Câu 2: ..."
                        className="w-full min-h-[300px] flex-1 p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-500/20 outline-none text-sm resize-y font-mono bg-white shadow-inner"
                    />
                </div>

                <div className="flex flex-col gap-3 mt-2">
                    <button
                        type="button"
                        onClick={parseWithRegex}
                        disabled={isParsing || !rawText.trim()}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-slate-800 text-white font-bold rounded-xl hover:bg-slate-900 transition-colors disabled:opacity-50 shadow-md"
                    >
                        {isParsing ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <SearchCode className="w-5 h-5" />}
                        Phân tích chuẩn (Regex)
                    </button>
                    <button
                        type="button"
                        onClick={parseWithAI}
                        disabled={isParsing || !rawText.trim()}
                        className="flex items-center justify-center gap-2 px-5 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-xl hover:shadow-lg hover:scale-[1.02] transition-all disabled:opacity-50 disabled:scale-100 shadow-md"
                    >
                        <Wand2 className="w-5 h-5" />
                        Nhận diện thông minh (AI Gemini)
                    </button>
                </div>
            </div>

            {/* PREVIEW & EDIT SECTION (RIGHT PANEL) */}
            <div className="w-full lg:w-[60%] flex flex-col bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden max-h-[80vh]">
                <div className="flex items-center justify-between border-b border-slate-200 p-5 bg-slate-50 shrink-0">
                    <div>
                        <h3 className="font-extrabold text-slate-800 text-xl">Bản xem trước (Preview)</h3>
                        <p className="text-sm text-slate-500">Chỉnh sửa và chọn đáp án đúng cho từng câu.</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-bold rounded-full">
                            {questions.length} câu hỏi
                        </span>
                        <button
                            type="button"
                            onClick={() => onChange([...questions, { id: `q_new_${Date.now()}`, type: 'multiple_choice', text: 'Câu hỏi mới', options: ['A', 'B', 'C', 'D'], correctAnswers: [], points: 1 }])}
                            className="flex items-center gap-1.5 px-4 py-2 text-sm font-bold text-white bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors shadow-sm"
                        >
                            <Plus className="w-4 h-4" /> Thêm
                        </button>
                    </div>
                </div>

                {questions.length > 0 ? (
                    <div className="flex-1 overflow-y-auto p-5 space-y-6 bg-slate-50/50">
                        {questions.map((q, qIndex) => (
                            <div key={q.id} className="bg-white border border-slate-200 rounded-xl p-5 shadow-sm group relative hover:border-blue-300 transition-colors">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-blue-600 text-white font-bold rounded-full flex items-center justify-center shadow-md text-sm">
                                    {qIndex + 1}
                                </div>
                                <div className="flex justify-between items-start gap-4 mb-4 pl-3">
                                    <div className="flex items-center gap-2 text-slate-300 cursor-move shrink-0 mt-1 hover:text-blue-500 transition-colors">
                                        <GripVertical className="w-5 h-5" />
                                    </div>
                                    <div className="flex-1">
                                        <textarea
                                            value={q.text}
                                            onChange={(e) => updateQuestion(qIndex, { ...q, text: e.target.value })}
                                            className="w-full text-base font-bold text-slate-800 bg-slate-50 hover:bg-slate-100 focus:bg-white border border-transparent focus:border-blue-300 rounded-lg resize-y focus:ring-4 focus:ring-blue-500/10 p-3 transition-all min-h-[80px]"
                                            rows={2}
                                            placeholder="Nội dung câu hỏi..."
                                        />
                                    </div>
                                    <button
                                        type="button"
                                        onClick={() => removeQuestion(qIndex)}
                                        className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100"
                                        title="Xóa câu hỏi"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>

                                <div className="pl-12 space-y-2.5">
                                    {q.options?.map((opt, oIndex) => {
                                        const isCorrect = q.correctAnswers.includes(opt);
                                        return (
                                            <div key={oIndex} className={`flex items-center gap-3 p-2.5 rounded-lg border transition-all ${isCorrect ? 'bg-emerald-50 border-emerald-300 ring-2 ring-emerald-500/20' : 'bg-white border-slate-200 hover:border-slate-300'}`}>
                                                <button
                                                    type="button"
                                                    onClick={() => toggleCorrectOption(qIndex, opt)}
                                                    className={`shrink-0 transition-colors ${isCorrect ? 'text-emerald-600' : 'text-slate-300 hover:text-emerald-500'}`}
                                                    title={isCorrect ? "Bỏ chọn đáp án đúng" : "Đánh dấu là đáp án đúng"}
                                                >
                                                    {isCorrect ? <CheckCircle2 className="w-6 h-6" /> : <Circle className="w-6 h-6" />}
                                                </button>
                                                <div className="flex items-center gap-2 flex-1">
                                                    <span className="font-bold text-slate-400 text-sm w-6 text-center">
                                                        {String.fromCharCode(65 + oIndex)}.
                                                    </span>
                                                    <input
                                                        type="text"
                                                        value={opt}
                                                        onChange={(e) => {
                                                            const newOpts = [...(q.options || [])];
                                                            newOpts[oIndex] = e.target.value;
                                                            // Also update correct answers if the text matches
                                                            const newCorrect = q.correctAnswers.map(c => c === opt ? e.target.value : c);
                                                            updateQuestion(qIndex, { ...q, options: newOpts, correctAnswers: newCorrect });
                                                        }}
                                                        className={`flex-1 bg-transparent border-none focus:ring-0 p-0 text-sm focus:outline-none ${isCorrect ? 'font-semibold text-emerald-900' : 'text-slate-700 font-medium'}`}
                                                        placeholder="Nhập nội dung đáp án..."
                                                    />
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="flex-1 flex flex-col items-center justify-center p-10 text-center opacity-50 bg-slate-50/50">
                        <SearchCode className="w-20 h-20 text-slate-300 mb-4" />
                        <h4 className="text-xl font-bold text-slate-500">Chưa có dữ liệu</h4>
                        <p className="text-slate-400 mt-2 max-w-sm">Tải lên file DOCX hoặc dán văn bản và nhấn Phân tích để hiển thị danh sách câu hỏi tại đây.</p>
                    </div>
                )}
            </div>
        </div>
    );
};
