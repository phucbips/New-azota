import * as mammoth from 'mammoth';
import { CognitiveLevel, Question, TrueFalseStatement } from '../types';

export const SAMPLE_AZOTA_EXAM_TEXT = `PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn
Câu 1. [NB] Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là thành phố nào?
*A. Hà Nội
B. Hải Phòng
C. Đà Nẵng
D. TP. Hồ Chí Minh
Lời giải: Hà Nội là thủ đô của Việt Nam theo Hiến pháp.

Câu 2. [TH] Trong các thành phố sau, những thành phố nào là thành phố trực thuộc Trung ương?
*A. Hải Phòng
*B. Đà Nẵng
C. Nha Trang
D. Đà Lạt
Lời giải: Hải Phòng và Đà Nẵng là các thành phố trực thuộc Trung ương.

PHẦN II. Câu trắc nghiệm đúng sai
Câu 3. Cho hàm số y = x^2 - 4x + 3 có đồ thị là parabol (P). Xét tính đúng sai của các mệnh đề sau:
*a) [NB] Đồ thị (P) có bề lõm quay lên trên.
b) [TH] Đỉnh của parabol (P) có tọa độ là I(2; 1).
*c) [TH] Đồ thị (P) cắt trục tung tại điểm có tung độ bằng 3.
d) [VD] Hàm số đồng biến trên khoảng (0; 3).
Lời giải: a) Đúng vì a = 1 > 0. b) Sai vì đỉnh là I(2; -1). c) Đúng vì x = 0 => y = 3. d) Sai vì hàm số nghịch biến trên (0; 2).

PHẦN III. Câu trắc nghiệm trả lời ngắn
Câu 4. [TH] Tính giá trị của biểu thức P = 2^3 + 3^2.
Đáp án: 17 | mười bảy
Lời giải: Ta có 2^3 = 8 và 3^2 = 9, suy ra P = 8 + 9 = 17.
---HẾT---`;

/**
 * Normalize Vietnamese Unicode (convert NFD/Tổ hợp -> NFC/Dựng sẵn)
 * and clean non-breaking spaces / zero-width characters from Word.
 */
function normalizeVietnamese(str: string): string {
  return str
    .normalize('NFC')
    .replace(/\u00A0/g, ' ')
    .replace(/[\u200B-\u200D\uFEFF]/g, '');
}

/**
 * Extract cognitive level tag like [0, NB], [1, TH], [2, VD], [3, VDC], [NB], [TH], [VD], [VDC]
 */
function extractLevel(text: string): { cleanText: string; level?: CognitiveLevel } {
  const match = text.match(/^\s*\[\s*(?:\d+\s*,\s*)?(NB|TH|VD|VDC)\s*\]\s*/i);
  if (match) {
    const level = match[1].toUpperCase() as CognitiveLevel;
    return {
      cleanText: text.slice(match[0].length).trim(),
      level,
    };
  }
  return { cleanText: text.trim() };
}

/**
 * Split a line that may contain multiple inline options (e.g. "A. Hà Nội   B. Hải Phòng   C. Đà Nẵng   D. Huế"
 * or "Thủ đô của Việt Nam là gì? A. Hà Nội B. Hải Phòng C. Đà Nẵng D. Huế")
 */
function splitInlineOptions(line: string): string[] {
  // Split before *A., A., *B., B., etc. when preceded by start-of-line, tab, or whitespace
  const normalized = line.replace(/\t+/g, '  ');
  // Check if line contains at least two option markers like A. and B. (or a) and b))
  const hasMultipleMC =
    /(?:^|\s)\*?[A-H][.:)]\s*\S/.test(normalized) && /\s+\*?[B-H][.:)]\s*\S/.test(normalized);
  const hasMultipleTF =
    /(?:^|\s)\*?[a-d]\)\s*\S/.test(normalized) && /\s+\*?[b-d]\)\s*\S/.test(normalized);

  if (!hasMultipleMC && !hasMultipleTF) {
    return [line.trim()];
  }

  const parts = normalized
    .split(/(?=(?:^|\s{1,})(?:\*|_)?(?:[A-H][.:)]|[a-d]\))\s*)/g)
    .map((p) => p.trim())
    .filter(Boolean);

  return parts.length > 1 ? parts : [line.trim()];
}

/**
 * Convert DOCX ArrayBuffer to Azota-annotated plain text while preserving:
 * 1) Underlined option letters (<u>A</u>., <u>A.</u>, <u>A. Nội dung</u>, <u>a)</u>) -> converted to *A. / *a)
 * 2) Option layout tables (2x2 or 1x4 grids used in Word) AND end-of-exam answer tables
 */
export async function extractAzotaTextFromDocx(arrayBuffer: ArrayBuffer): Promise<string> {
  const htmlResult = await mammoth.convertToHtml(
    { arrayBuffer },
    {
      styleMap: ['u => u'],
    }
  );

  const parser = new DOMParser();
  const doc = parser.parseFromString(normalizeVietnamese(htmlResult.value), 'text/html');

  // 1. Mark underlined options (<u>A</u>., <u>A.</u>, <u>A. Text</u>, <u>a)</u>) with leading *
  doc.querySelectorAll('u').forEach((u) => {
    const txt = (u.textContent || '').trim();
    if (/^[A-H][.:)]?(\s|$)/i.test(txt) || /^[a-d]\)(\s|$)/i.test(txt)) {
      if (!txt.startsWith('*')) {
        u.textContent = `*${txt}`;
      }
    }
  });

  // 2. Convert tables: handle both option layout tables (A. B. C. D. in cells) and end-of-exam answer tables
  doc.querySelectorAll('table').forEach((table) => {
    const rows = Array.from(table.querySelectorAll('tr')).map((tr) =>
      Array.from(tr.querySelectorAll('td, th')).map((cell) => normalizeVietnamese(cell.textContent || '').trim())
    );

    const lines: string[] = [];
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      const nextRow = rows[r + 1];
      // Detect 2-row horizontal answer table (Row 1: question numbers, Row 2: answers)
      if (
        nextRow &&
        row.length === nextRow.length &&
        row.every((c) => /^(?:Câu\s*)?\d+$/i.test(c)) &&
        nextRow.some((c) => /^[A-H,\s]+$|^[ĐSđs]$/i.test(c))
      ) {
        row.forEach((qCell, idx) => {
          const qNum = qCell.replace(/\D/g, '');
          const ans = nextRow[idx];
          if (qNum && ans) lines.push(`${qNum}.${ans}`);
        });
        r++;
      } else {
        // Put each non-empty cell on its own line so 2x2 option tables in Word become 4 clean A/B/C/D lines
        row.filter(Boolean).forEach((cell) => lines.push(cell));
      }
    }

    const replacement = doc.createElement('p');
    replacement.textContent = '\n' + lines.join('\n') + '\n';
    table.replaceWith(replacement);
  });

  // 3. Extract paragraph lines
  const blocks = doc.querySelectorAll('p, li, h1, h2, h3, h4, h5, h6');
  if (blocks.length > 0) {
    return Array.from(blocks)
      .flatMap((el) => normalizeVietnamese(el.textContent || '').split('\n'))
      .map((s) => s.trim())
      .filter(Boolean)
      .join('\n');
  }

  return normalizeVietnamese(doc.body.textContent || '').trim();
}

/**
 * Parse Azota-formatted exam text into structured Question[]
 */
export function parseAzotaText(rawInput: string): Question[] {
  const normalized = normalizeVietnamese(rawInput).replace(/\r\n/g, '\n').replace(/\r/g, '\n');
  if (!normalized.trim()) return [];

  // Split main body and end-of-exam section (after HẾT / ---HẾT--- / BẢNG ĐÁP ÁN)
  const endMarkerMatch = normalized.match(/\n\s*(?:-*\s*HẾT\s*-*|BẢNG\s+ĐÁP\s+ÁN)\s*(?:\n|$)/i);
  const bodyText = endMarkerMatch ? normalized.slice(0, endMarkerMatch.index) : normalized;
  const tailText = endMarkerMatch ? normalized.slice((endMarkerMatch.index || 0) + endMarkerMatch[0].length) : '';

  // Parse answer key from tailText if present (e.g. "1.A 2.B,C 3.a-Đ,b-S,c-Đ,d-S" or "1. A")
  const answerKeyMap = new Map<number, string>();
  if (tailText) {
    const pairRegex =
      /(?:Câu\s*)?(\d+)\s*[.:=-]\s*([A-H](?:\s*,\s*[A-H])*|[a-d]\s*-\s*[ĐSđs](?:\s*,\s*[a-d]\s*-\s*[ĐSđs])*|[^\n\t]+)/gi;
    let m: RegExpExecArray | null;
    while ((m = pairRegex.exec(tailText)) !== null) {
      const qNum = parseInt(m[1], 10);
      const ans = m[2].trim();
      if (qNum && ans) {
        answerKeyMap.set(qNum, ans);
      }
    }
  }

  const rawLines = bodyText
    .split('\n')
    .map((l) => l.trim())
    .filter(Boolean);

  let currentSection = '';
  interface RawBlock {
    number: number;
    section: string;
    headerLine: string;
    lines: string[];
  }

  const blocks: RawBlock[] = [];
  let currentBlock: RawBlock | null = null;
  let autoNumber = 0;

  // Match section headers: "PHẦN I...", "Phần 1...", "I. Trắc nghiệm...", "II. Tự luận..."
  const sectionRegex = /^(?:PHẦN\s+[IVXLC\d]+|[IVXLC]+)\s*[.:-]\s*(.*)$/i;
  // Match Vietnamese & English question headers: "Câu 1.", "Câu 1:", "Câu 1 -", "Câu hỏi 1:", "Bài 1.", "Question 1.", "1."
  const questionStartRegex =
    /^(?:Câu(?:\s+hỏi|\s+số)?|Cau(?:\s+hoi|\s+so)?|Bài|Bai|Question)\s*(\d+)\s*[.:)-]?\s*(.*)$|^(\d+)\s*[.:)]\s+(.*)$/i;

  for (const line of rawLines) {
    const secMatch = line.match(sectionRegex);
    if (secMatch && (/^PHẦN\s+/i.test(line) || !currentBlock || currentBlock.lines.length > 0)) {
      currentSection = line;
      continue;
    }

    const qMatch = line.match(questionStartRegex);
    if (qMatch) {
      autoNumber++;
      const qNum = parseInt(qMatch[1] || qMatch[3] || String(autoNumber), 10);
      const restText = (qMatch[2] ?? qMatch[4] ?? '').trim();
      // If the question header line itself has inline options (e.g. "Câu 1: 1+1=? A. 1 B. 2 C. 3 D. 4"), split them
      const headerSegments = splitInlineOptions(restText);
      currentBlock = {
        number: qNum,
        section: currentSection,
        headerLine: headerSegments[0] || '',
        lines: headerSegments.slice(1),
      };
      blocks.push(currentBlock);
    } else if (currentBlock) {
      currentBlock.lines.push(line);
    } else {
      // Fallback: if user pasted a single question without "Câu 1.", start an implicit Question 1
      autoNumber++;
      const headerSegments = splitInlineOptions(line);
      currentBlock = {
        number: autoNumber,
        section: currentSection,
        headerLine: headerSegments[0] || '',
        lines: headerSegments.slice(1),
      };
      blocks.push(currentBlock);
    }
  }

  const parsedQuestions: Question[] = [];

  blocks.forEach((block, idx) => {
    const { cleanText: headerClean, level: qLevel } = extractLevel(block.headerLine);
    const stemParts: string[] = headerClean ? [headerClean] : [];
    const mcOptions: { letter: string; text: string; isCorrect: boolean }[] = [];
    const tfStatements: TrueFalseStatement[] = [];
    let shortAnswers: string[] = [];
    const explanationParts: string[] = [];
    let inExplanation = false;

    // Expand inline options (e.g. "A. Hà Nội   B. Hải Phòng   C. Đà Nẵng   D. Huế")
    const expandedLines = block.lines.flatMap((rawLine) => splitInlineOptions(rawLine));

    for (const line of expandedLines) {
      // 1. Check Explanation line
      const expMatch = line.match(/^(?:Lời\s*giải|Hướng\s*dẫn(?:\s*giải)?|HDG|Giải\s*thích)\s*[:.-]?\s*(.*)$/i);
      if (expMatch) {
        inExplanation = true;
        if (expMatch[1].trim()) explanationParts.push(expMatch[1].trim());
        continue;
      }
      if (inExplanation) {
        explanationParts.push(line);
        continue;
      }

      // 2. Check Answer declaration ("Đáp án: A | B" or "ĐS: ...")
      const ansLineMatch = line.match(/^(?:Đáp\s*án|Đáp\s*số|ĐA|ĐS|Answer)\s*[:=.]?\s*(.+)$/i);
      if (ansLineMatch) {
        const rawAns = ansLineMatch[1].trim();
        if (mcOptions.length > 0 && /^[A-H](?:\s*[,|]\s*[A-H])*$/i.test(rawAns)) {
          const letters = rawAns
            .split(/[,|]/)
            .map((s) => s.trim().toUpperCase())
            .filter(Boolean);
          mcOptions.forEach((opt) => {
            if (letters.includes(opt.letter)) opt.isCorrect = true;
          });
        } else {
          shortAnswers = rawAns
            .split('|')
            .map((s) => s.trim())
            .filter(Boolean);
        }
        continue;
      }

      // 3. Check True/False sub-statements: a), b), c), d) (lowercase only, per Azota rule)
      const tfMatch = line.match(/^(\*|_)?([a-d])\)\s*(.*)$/);
      if (tfMatch) {
        const hasStar = Boolean(tfMatch[1]);
        const label = tfMatch[2].toLowerCase();
        let rawStmt = (tfMatch[3] || '').trim();

        let explicitTrue: boolean | null = null;
        const trailingTag = rawStmt.match(/\s*(?:\[(Đ|S|Đúng|Sai)\]|\((Đ|S|Đúng|Sai)\))\s*$/i);
        if (trailingTag) {
          const token = (trailingTag[1] || trailingTag[2]).toUpperCase();
          explicitTrue = token.startsWith('Đ');
          rawStmt = rawStmt.slice(0, trailingTag.index).trim();
        }

        const { cleanText: stmtText, level: stmtLevel } = extractLevel(rawStmt);

        tfStatements.push({
          id: `tf_${block.number}_${label}`,
          label,
          text: stmtText,
          isTrue: explicitTrue !== null ? explicitTrue : hasStar,
          level: stmtLevel,
        });
        continue;
      }

      // 4. Check Multiple Choice options: A., B., C., D. (uppercase A-H, allow A., A:, A))
      const mcMatch = line.match(/^(\*|_)?([A-H])[.:)]\s*(.*)$/);
      if (mcMatch) {
        const isCorrect = Boolean(mcMatch[1]);
        const letter = mcMatch[2].toUpperCase();
        const optText = (mcMatch[3] || '').trim();
        mcOptions.push({ letter, text: optText, isCorrect });
        continue;
      }

      // 5. Otherwise, append to question stem if before options/statements
      if (mcOptions.length === 0 && tfStatements.length === 0) {
        stemParts.push(line);
      } else if (mcOptions.length > 0) {
        mcOptions[mcOptions.length - 1].text += (mcOptions[mcOptions.length - 1].text ? ' ' : '') + line;
      } else if (tfStatements.length > 0) {
        tfStatements[tfStatements.length - 1].text +=
          (tfStatements[tfStatements.length - 1].text ? ' ' : '') + line;
      }
    }

    // Apply end-of-exam answer table if present for this question number
    const keyFromTable = answerKeyMap.get(block.number);
    if (keyFromTable) {
      if (mcOptions.length > 0) {
        const letters = keyFromTable
          .toUpperCase()
          .split(/[,;\s]+/)
          .map((s) => s.trim())
          .filter(Boolean);
        mcOptions.forEach((o) => {
          if (letters.includes(o.letter)) o.isCorrect = true;
        });
      } else if (tfStatements.length > 0) {
        const parts = keyFromTable.split(/[,;]+/).map((s) => s.trim());
        parts.forEach((p, pIdx) => {
          const labeled = p.match(/^([a-d])\s*[-:]\s*(Đ|S|Đúng|Sai)/i);
          if (labeled) {
            const target = tfStatements.find((s) => s.label === labeled[1].toLowerCase());
            if (target) target.isTrue = labeled[2].toUpperCase().startsWith('Đ');
          } else if (tfStatements[pIdx] && /^(Đ|S|Đúng|Sai)$/i.test(p)) {
            tfStatements[pIdx].isTrue = p.toUpperCase().startsWith('Đ');
          }
        });
      } else if (shortAnswers.length === 0) {
        shortAnswers = keyFromTable
          .split('|')
          .map((s) => s.trim())
          .filter(Boolean);
      }
    }

    const questionText = stemParts.join('\n').trim();
    if (!questionText && mcOptions.length === 0 && tfStatements.length === 0) return;

    const explanation = explanationParts.join('\n').trim() || undefined;
    const isShortAnswerSection = /trả\s*lời\s*ngắn|điền\s*từ|tự\s*luận/i.test(block.section);
    const isTrueFalseSection = /đúng\s*[\/\-]?\s*sai/i.test(block.section);

    if (tfStatements.length > 0 || (isTrueFalseSection && mcOptions.length === 0 && shortAnswers.length === 0)) {
      // Ensure 4 statements a, b, c, d by default for True/False questions
      const defaultLabels = ['a', 'b', 'c', 'd'];
      const finalSubs: TrueFalseStatement[] =
        tfStatements.length > 0
          ? tfStatements
          : defaultLabels.map((label) => ({
              id: `tf_${block.number}_${label}`,
              label,
              text: '',
              isTrue: false,
            }));

      parsedQuestions.push({
        id: `q_${block.number}_${idx}`,
        type: 'true_false',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        subQuestions: finalSubs,
        correctAnswers: finalSubs.filter((s) => s.isTrue).map((s) => s.label),
        explanation,
        points: 1,
      });
    } else if (shortAnswers.length > 0 || (isShortAnswerSection && mcOptions.length === 0)) {
      parsedQuestions.push({
        id: `q_${block.number}_${idx}`,
        type: 'short_answer',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        correctAnswers: shortAnswers,
        explanation,
        points: 0.5,
      });
    } else {
      // Default to Multiple Choice with 4 options (A, B, C, D) even if user is still typing options!
      while (mcOptions.length < 4) {
        const nextLetter = String.fromCharCode(65 + mcOptions.length);
        mcOptions.push({
          letter: nextLetter,
          text: `Phương án ${nextLetter}`,
          isCorrect: false,
        });
      }
      const correctTexts = mcOptions.filter((o) => o.isCorrect).map((o) => o.text);
      const isMulti = correctTexts.length > 1;
      parsedQuestions.push({
        id: `q_${block.number}_${idx}`,
        type: isMulti ? 'checkbox' : 'multiple_choice',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        options: mcOptions.map((o) => o.text),
        correctAnswers: correctTexts,
        explanation,
        points: 0.25,
      });
    }
  });

  return parsedQuestions;
}

/**
 * Serialize structured Question[] back to Azota text so edits on the right panel stay synced with the left text box.
 */
export function serializeQuestionsToAzotaText(questions: Question[]): string {
  if (questions.length === 0) return '';
  const lines: string[] = [];
  let lastSection = '';

  questions.forEach((q, idx) => {
    if (q.section && q.section !== lastSection) {
      if (lines.length > 0) lines.push('');
      lines.push(q.section);
      lastSection = q.section;
    }

    const levelPrefix = q.level ? `[${q.level}] ` : '';
    lines.push(`Câu ${idx + 1}. ${levelPrefix}${q.text}`);

    if (q.type === 'multiple_choice' || q.type === 'checkbox') {
      const opts = q.options && q.options.length > 0 ? q.options : ['Phương án A', 'Phương án B', 'Phương án C', 'Phương án D'];
      opts.forEach((opt, oIdx) => {
        const letter = String.fromCharCode(65 + oIdx);
        const isCorrect = q.correctAnswers.includes(opt);
        lines.push(`${isCorrect ? '*' : ''}${letter}. ${opt}`);
      });
    } else if (q.type === 'true_false') {
      (q.subQuestions || []).forEach((sub) => {
        const subLevel = sub.level ? `[${sub.level}] ` : '';
        lines.push(`${sub.isTrue ? '*' : ''}${sub.label}) ${subLevel}${sub.text}`);
      });
    } else if (q.type === 'short_answer') {
      if (q.correctAnswers.length > 0) {
        lines.push(`Đáp án: ${q.correctAnswers.join(' | ')}`);
      }
    }

    if (q.explanation) {
      lines.push(`Lời giải: ${q.explanation}`);
    }

    lines.push('');
  });

  return lines.join('\n').trim();
}

/**
 * Score a single question according to Azota / THPT 2025 rules
 */
export function scoreQuestion(
  question: Question,
  userResponse: {
    selectedOptions?: string[];
    trueFalseMap?: Record<string, boolean | undefined>;
    shortAnswer?: string;
  }
): { earnedPoints: number; isFullyCorrect: boolean; detailText: string } {
  const maxPoints = Number(question.points) || 1;

  if (question.type === 'multiple_choice') {
    const picked = userResponse.selectedOptions?.[0];
    const correct = question.correctAnswers[0];
    const ok = Boolean(picked && correct && picked === correct);
    return {
      earnedPoints: ok ? maxPoints : 0,
      isFullyCorrect: ok,
      detailText: ok ? 'Chính xác' : 'Chưa chính xác',
    };
  }

  if (question.type === 'checkbox') {
    const picked = new Set(userResponse.selectedOptions || []);
    const correct = new Set(question.correctAnswers || []);
    const isExact =
      correct.size > 0 &&
      picked.size === correct.size &&
      Array.from(correct).every((c) => picked.has(c));
    return {
      earnedPoints: isExact ? maxPoints : 0,
      isFullyCorrect: isExact,
      detailText: isExact
        ? 'Chính xác tất cả phương án'
        : 'Sai hoặc thiếu phương án (câu nhiều lựa chọn phải đúng toàn bộ mới có điểm)',
    };
  }

  if (question.type === 'true_false') {
    const subs = question.subQuestions || [];
    if (subs.length === 0) return { earnedPoints: 0, isFullyCorrect: false, detailText: '0/0 ý đúng' };
    const map = userResponse.trueFalseMap || {};
    let correctCount = 0;
    subs.forEach((s) => {
      if (map[s.label] === s.isTrue) correctCount++;
    });

    let ratio = 0;
    if (subs.length === 4) {
      const table: Record<number, number> = { 0: 0, 1: 0.1, 2: 0.25, 3: 0.5, 4: 1 };
      ratio = table[correctCount] ?? 0;
    } else {
      ratio = correctCount / subs.length;
    }

    const earned = Math.round(maxPoints * ratio * 100) / 100;
    return {
      earnedPoints: earned,
      isFullyCorrect: correctCount === subs.length,
      detailText: `Đúng ${correctCount}/${subs.length} ý`,
    };
  }

  if (question.type === 'short_answer') {
    const raw = normalizeVietnamese(userResponse.shortAnswer || '').trim().toLowerCase();
    const accepted = (question.correctAnswers || [])
      .map((a) => normalizeVietnamese(a).trim().toLowerCase())
      .filter(Boolean);
    const ok = Boolean(raw && accepted.includes(raw));
    return {
      earnedPoints: ok ? maxPoints : 0,
      isFullyCorrect: ok,
      detailText: ok ? 'Chính xác' : 'Chưa khớp đáp án',
    };
  }

  return { earnedPoints: 0, isFullyCorrect: false, detailText: 'Tự luận' };
}
