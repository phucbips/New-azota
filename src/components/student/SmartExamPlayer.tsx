import React, { useState, useEffect, useMemo } from 'react';
import { Question } from '../../types';
import { scoreQuestion } from '../../lib/azotaParser';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { StatusBadge } from '../ui/StatusBadge';
import { CheckCircle2, XCircle, Clock, RotateCcw, Send, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface SmartExamPlayerProps {
  title?: string;
  questions: Question[];
  durationMin?: number;
  shuffleQuestions?: boolean;
  shuffleOptions?: boolean;
}

interface UserAnswerState {
  selectedOptions?: string[];
  trueFalseMap?: Record<string, boolean | undefined>;
  shortAnswer?: string;
}

function shuffleArray<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export const SmartExamPlayer: React.FC<SmartExamPlayerProps> = ({
  questions,
  durationMin = 45,
  shuffleQuestions = false,
  shuffleOptions = false,
}) => {
  const [seed, setSeed] = useState(0);
  const [answers, setAnswers] = useState<Record<string, UserAnswerState>>({});
  const [submitted, setSubmitted] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(durationMin * 60);

  // Prepare displayed questions (with optional question/option shuffling)
  const displayQuestions = useMemo(() => {
    const base = shuffleQuestions ? shuffleArray(questions) : [...questions];
    return base.map((q) => {
      if (shuffleOptions && q.options && q.options.length > 1) {
        return { ...q, options: shuffleArray(q.options) };
      }
      return q;
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [questions, shuffleQuestions, shuffleOptions, seed]);

  useEffect(() => {
    setSecondsLeft((durationMin || 45) * 60);
  }, [durationMin, seed]);

  useEffect(() => {
    if (submitted || secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          setSubmitted(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [submitted, secondsLeft]);

  const formatTimer = (sec: number) => {
    const m = Math.floor(sec / 60);
    const s = sec % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
  };

  const handleSelectOption = (q: Question, opt: string) => {
    if (submitted) return;
    setAnswers((prev) => {
      const current = prev[q.id]?.selectedOptions || [];
      if (q.type === 'multiple_choice') {
        return { ...prev, [q.id]: { ...prev[q.id], selectedOptions: [opt] } };
      }
      // checkbox (multiple answers)
      const exists = current.includes(opt);
      const next = exists ? current.filter((x) => x !== opt) : [...current, opt];
      return { ...prev, [q.id]: { ...prev[q.id], selectedOptions: next } };
    });
  };

  const handleSelectTrueFalse = (qId: string, label: string, val: boolean) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        trueFalseMap: {
          ...(prev[qId]?.trueFalseMap || {}),
          [label]: val,
        },
      },
    }));
  };

  const handleShortAnswer = (qId: string, val: string) => {
    if (submitted) return;
    setAnswers((prev) => ({
      ...prev,
      [qId]: {
        ...prev[qId],
        shortAnswer: val,
      },
    }));
  };

  const isQuestionAnswered = (q: Question): boolean => {
    const a = answers[q.id];
    if (!a) return false;
    if (q.type === 'multiple_choice' || q.type === 'checkbox') {
      return Boolean(a.selectedOptions && a.selectedOptions.length > 0);
    }
    if (q.type === 'true_false') {
      const subs = q.subQuestions || [];
      return subs.length > 0 && subs.every((s) => a.trueFalseMap?.[s.label] !== undefined);
    }
    if (q.type === 'short_answer') {
      return Boolean(a.shortAnswer && a.shortAnswer.trim().length > 0);
    }
    return false;
  };

  const results = useMemo(() => {
    if (!submitted) return null;
    let earnedTotal = 0;
    let maxTotal = 0;
    let fullyCorrectCount = 0;
    const perQuestion: Record<string, ReturnType<typeof scoreQuestion>> = {};

    displayQuestions.forEach((q) => {
      const r = scoreQuestion(q, answers[q.id] || {});
      perQuestion[q.id] = r;
      earnedTotal += r.earnedPoints;
      maxTotal += Number(q.points) || 1;
      if (r.isFullyCorrect) fullyCorrectCount++;
    });

    const scale10 = maxTotal > 0 ? Math.round((earnedTotal / maxTotal) * 10 * 100) / 100 : 0;
    return {
      earnedTotal: Math.round(earnedTotal * 100) / 100,
      maxTotal: Math.round(maxTotal * 100) / 100,
      scale10,
      fullyCorrectCount,
      perQuestion,
    };
  }, [submitted, displayQuestions, answers]);

  const handleReset = () => {
    setAnswers({});
    setSubmitted(false);
    setSeed((s) => s + 1);
  };

  if (displayQuestions.length === 0) {
    return (
      <div className="flex h-64 flex-col items-center justify-center rounded-xl border border-border bg-card p-6 text-center">
        <HelpCircle className="mb-2 h-8 w-8 text-muted-foreground" />
        <p className="text-sm font-medium text-foreground">Đề thi chưa có câu hỏi nào.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
      {/* Left: Question stream */}
      <div className="space-y-4 lg:col-span-8">
        {submitted && results && (
          <div className="rounded-xl border border-border bg-card p-5">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <p className="eyebrow">Kết quả bài làm</p>
                <div className="mt-1 flex items-baseline gap-3">
                  <span className="text-3xl font-semibold tracking-tight text-foreground tabular-nums">
                    {results.scale10}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    / 10 điểm ({results.earnedTotal}/{results.maxTotal} đ thô · Đúng tuyệt đối{' '}
                    {results.fullyCorrectCount}/{displayQuestions.length} câu)
                  </span>
                </div>
              </div>
              <Button variant="outline" onClick={handleReset}>
                <RotateCcw />
                Làm lại đề
              </Button>
            </div>
          </div>
        )}

        {displayQuestions.map((q, index) => {
          const prevSection = index > 0 ? displayQuestions[index - 1].section : undefined;
          const showSectionHeader = q.section && q.section !== prevSection;
          const qResult = results?.perQuestion[q.id];
          const userAns = answers[q.id] || {};

          return (
            <React.Fragment key={q.id}>
              {showSectionHeader && (
                <div className="rounded-lg border border-border bg-muted/50 px-4 py-2.5">
                  <h3 className="text-sm font-semibold text-foreground">{q.section}</h3>
                </div>
              )}

              <div
                id={`exam-q-${index}`}
                className="rounded-xl border border-border bg-card p-5 transition-colors"
              >
                {/* Question Header */}
                <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex h-6 items-center rounded-md bg-muted px-2 text-xs font-semibold text-foreground">
                      Câu {index + 1}
                    </span>
                    {q.level && <StatusBadge type="neutral">{q.level}</StatusBadge>}
                    <span className="text-xs text-muted-foreground">
                      {q.type === 'multiple_choice'
                        ? 'Một đáp án'
                        : q.type === 'checkbox'
                          ? 'Nhiều đáp án'
                          : q.type === 'true_false'
                            ? 'Đúng / Sai'
                            : 'Trả lời ngắn'}{' '}
                      · {q.points} điểm
                    </span>
                  </div>

                  {submitted && qResult && (
                    <StatusBadge
                      type={
                        qResult.isFullyCorrect
                          ? 'success'
                          : qResult.earnedPoints > 0
                            ? 'warning'
                            : 'error'
                      }
                    >
                      +{qResult.earnedPoints}đ · {qResult.detailText}
                    </StatusBadge>
                  )}
                </div>

                {/* Stem */}
                <p className="whitespace-pre-wrap text-sm leading-relaxed text-foreground">{q.text}</p>

                {/* A. Multiple Choice / Checkbox */}
                {(q.type === 'multiple_choice' || q.type === 'checkbox') && q.options && (
                  <div className="mt-4 space-y-2">
                    {q.options.map((opt, oIdx) => {
                      const letter = String.fromCharCode(65 + oIdx);
                      const isSelected = Boolean(userAns.selectedOptions?.includes(opt));
                      const isCorrectOption = q.correctAnswers.includes(opt);

                      let rowStyle = 'border-border bg-background hover:bg-muted/50';
                      if (!submitted && isSelected) {
                        rowStyle = 'border-primary bg-primary/5 ring-1 ring-primary/30';
                      } else if (submitted) {
                        if (isCorrectOption) {
                          rowStyle = 'border-success/40 bg-success/10';
                        } else if (isSelected && !isCorrectOption) {
                          rowStyle = 'border-destructive/40 bg-destructive/10';
                        }
                      }

                      return (
                        <button
                          key={oIdx}
                          type="button"
                          onClick={() => handleSelectOption(q, opt)}
                          disabled={submitted}
                          className={cn(
                            'flex w-full items-center gap-3 rounded-lg border px-3.5 py-2.5 text-left text-sm transition-colors',
                            rowStyle
                          )}
                        >
                          <span
                            className={cn(
                              'flex h-6 w-6 shrink-0 items-center justify-center rounded-md border text-xs font-semibold',
                              isSelected
                                ? 'border-primary bg-primary text-primary-foreground'
                                : 'border-border bg-muted/60 text-muted-foreground'
                            )}
                          >
                            {letter}
                          </span>
                          <span className="flex-1 text-foreground">{opt}</span>
                          {submitted && isCorrectOption && (
                            <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                          )}
                          {submitted && isSelected && !isCorrectOption && (
                            <XCircle className="h-4 w-4 shrink-0 text-destructive" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}

                {/* B. True / False (a, b, c, d) */}
                {q.type === 'true_false' && q.subQuestions && (
                  <div className="mt-4 overflow-hidden rounded-lg border border-border">
                    <table className="w-full text-left text-sm">
                      <thead className="border-b border-border bg-muted/50 text-xs text-muted-foreground">
                        <tr>
                          <th className="px-3.5 py-2 font-medium">Mệnh đề</th>
                          <th className="w-20 px-3 py-2 text-center font-medium">Đúng</th>
                          <th className="w-20 px-3 py-2 text-center font-medium">Sai</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-border">
                        {q.subQuestions.map((sub) => {
                          const picked = userAns.trueFalseMap?.[sub.label];
                          const isSubCorrect = submitted && picked === sub.isTrue;
                          const isSubWrong = submitted && picked !== undefined && picked !== sub.isTrue;

                          return (
                            <tr
                              key={sub.id}
                              className={cn(
                                isSubCorrect && 'bg-success/5',
                                isSubWrong && 'bg-destructive/5'
                              )}
                            >
                              <td className="px-3.5 py-2.5 text-foreground">
                                <span className="mr-1.5 font-semibold">{sub.label})</span>
                                {sub.level && (
                                  <span className="mr-1.5 rounded bg-muted px-1.5 py-0.5 text-[11px] text-muted-foreground">
                                    {sub.level}
                                  </span>
                                )}
                                {sub.text}
                                {submitted && (
                                  <span className="ml-2 text-xs font-medium text-muted-foreground">
                                    (Đáp án: {sub.isTrue ? 'Đúng' : 'Sai'})
                                  </span>
                                )}
                              </td>
                              <td className="px-3 py-2.5 text-center">
                                <input
                                  type="radio"
                                  name={`tf-${q.id}-${sub.label}`}
                                  checked={picked === true}
                                  disabled={submitted}
                                  onChange={() => handleSelectTrueFalse(q.id, sub.label, true)}
                                  className="h-4 w-4 accent-primary"
                                />
                              </td>
                              <td className="px-3 py-2.5 text-center">
                                <input
                                  type="radio"
                                  name={`tf-${q.id}-${sub.label}`}
                                  checked={picked === false}
                                  disabled={submitted}
                                  onChange={() => handleSelectTrueFalse(q.id, sub.label, false)}
                                  className="h-4 w-4 accent-primary"
                                />
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                )}

                {/* C. Short Answer */}
                {q.type === 'short_answer' && (
                  <div className="mt-4 space-y-2">
                    <Input
                      type="text"
                      placeholder="Nhập câu trả lời của bạn..."
                      value={userAns.shortAnswer || ''}
                      disabled={submitted}
                      onChange={(e) => handleShortAnswer(q.id, e.target.value)}
                    />
                    {submitted && (
                      <p className="text-xs text-muted-foreground">
                        Đáp án chấp nhận:{' '}
                        <span className="font-semibold text-foreground">
                          {q.correctAnswers.join(' | ') || '(Chưa cài đặt)'}
                        </span>
                      </p>
                    )}
                  </div>
                )}

                {/* Explanation (shown after submit) */}
                {submitted && q.explanation && (
                  <div className="mt-4 rounded-lg border border-border bg-muted/40 p-3.5 text-xs leading-relaxed text-foreground">
                    <p className="mb-1 font-semibold text-muted-foreground uppercase tracking-wider">
                      Lời giải chi tiết
                    </p>
                    <p className="whitespace-pre-wrap">{q.explanation}</p>
                  </div>
                )}
              </div>
            </React.Fragment>
          );
        })}
      </div>

      {/* Right: Timer & Question Palette */}
      <div className="lg:col-span-4">
        <div className="sticky top-20 space-y-4 rounded-xl border border-border bg-card p-5">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <div className="flex items-center gap-2 text-sm font-medium text-muted-foreground">
              <Clock className="h-4 w-4 text-primary" />
              <span>Thời gian còn lại</span>
            </div>
            <span className="font-mono text-lg font-semibold text-foreground tabular-nums">
              {formatTimer(secondsLeft)}
            </span>
          </div>

          <div>
            <div className="mb-2.5 flex items-center justify-between text-xs text-muted-foreground">
              <span>Danh sách câu hỏi</span>
              <span>
                Đã làm: {displayQuestions.filter(isQuestionAnswered).length}/{displayQuestions.length}
              </span>
            </div>

            <div className="grid grid-cols-5 gap-2">
              {displayQuestions.map((q, idx) => {
                const answered = isQuestionAnswered(q);
                const qRes = results?.perQuestion[q.id];

                let btnClass = 'border-border bg-background text-muted-foreground hover:bg-muted';
                if (!submitted && answered) {
                  btnClass = 'border-primary bg-primary text-primary-foreground';
                } else if (submitted && qRes) {
                  btnClass = qRes.isFullyCorrect
                    ? 'border-success bg-success text-success-foreground'
                    : qRes.earnedPoints > 0
                      ? 'border-warning bg-warning text-warning-foreground'
                      : 'border-destructive bg-destructive text-destructive-foreground';
                }

                return (
                  <a
                    key={q.id}
                    href={`#exam-q-${idx}`}
                    className={cn(
                      'flex h-8 items-center justify-center rounded-md border text-xs font-medium transition-colors tabular-nums',
                      btnClass
                    )}
                  >
                    {idx + 1}
                  </a>
                );
              })}
            </div>
          </div>

          {!submitted ? (
            <Button onClick={() => setSubmitted(true)} className="w-full">
              <Send />
              Nộp bài &amp; Chấm điểm
            </Button>
          ) : (
            <Button variant="outline" onClick={handleReset} className="w-full">
              <RotateCcw />
              Làm lại từ đầu
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
