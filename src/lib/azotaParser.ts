import * as mammoth from 'mammoth';
import { CognitiveLevel, Question, TrueFalseStatement } from '../types';

export const SAMPLE_AZOTA_EXAM_TEXT = `PHẦN I. Câu trắc nghiệm nhiều phương án lựa chọn
Câu 1. [NB] Thủ đô của nước Cộng hòa Xã hội Chủ nghĩa Việt Nam là thành phố nào?
*A. Hà Nội
B. Hải Phòng
C. Đà Nẵng
D. TP. Hồ Chí Minh
Lời giải: Hà Nội là thủ đô của Việt Nam theo Hiến pháp.

Câu 2. [TH] Những số nào sau đây là số nguyên tố? (Câu nhiều đáp án đúng)
*A. 2
B. 4
*C. 7
D. 9
*E. 11
Lời giải: Học sinh phải chọn đúng cả 3 đáp án A, C, E mới được tính điểm câu này.

PHẦN II. Câu trắc nghiệm đúng sai
Câu 3. Cho hàm số y = x^2 - 4x + 3 có đồ thị là parabol (P). Xét tính đúng sai của các mệnh đề sau:
*a) [NB] Đồ thị (P) có bề lõm quay lên trên.
b) [TH] Đỉnh của parabol (P) có tọa độ là I(2; 1).
*c) [TH] Đồ thị (P) cắt trục tung tại điểm có tung độ bằng 3.
d) [VD] Hàm số đồng biến trên khoảng (0; 3).
Lời giải: a) Đúng vì a = 1 > 0. b) Sai vì y(2) = 4 - 8 + 3 = -1 nên đỉnh là I(2; -1). c) Đúng vì x = 0 => y = 3. d) Sai vì hàm số nghịch biến trên (0; 2) và đồng biến trên (2; 3).

PHẦN III. Câu trắc nghiệm trả lời ngắn
Câu 4. [TH] Tính giá trị của biểu thức P = 2^3 + 3^2.
Đáp án: 17 | mười bảy
Lời giải: Ta có 2^3 = 8 và 3^2 = 9, suy ra P = 8 + 9 = 17.

Câu 5. [VD] Liên kết hóa học được hình thành bằng sự dùng chung các cặp electron gọi là liên kết gì?
Đáp án: cộng hóa trị | liên kết cộng hóa trị
Lời giải: Hệ thống chấm không phân biệt chữ hoa/thường và chấp nhận các phương án ngăn cách bởi dấu |.
---HẾT---`;

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
 * Convert DOCX ArrayBuffer to Azota-annotated plain text while preserving:
 * 1) Underlined option letters (<u>A</u>. or <u>a)</u>) -> converted to *A. / *a)
 * 2) Answer tables at the end of the Word document
 */
export async function extractAzotaTextFromDocx(arrayBuffer: ArrayBuffer): Promise<string> {
  const htmlResult = await mammoth.convertToHtml(
    { arrayBuffer },
    {
      styleMap: ['u => u'],
    }
  );

  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlResult.value, 'text/html');

  // 1. Mark underlined option letters (<u>A</u>. or <u>A.</u> or <u>a)</u> or <u>a</u>)) with leading *
  doc.querySelectorAll('u').forEach((u) => {
    const txt = (u.textContent || '').trim();
    if (/^[A-H]\.?$/i.test(txt) || /^[a-d]\)?$/i.test(txt)) {
      u.textContent = `*${txt}`;
    }
  });

  // 2. Convert tables (e.g. end-of-exam answer tables) into readable lines
  doc.querySelectorAll('table').forEach((table) => {
    const rows = Array.from(table.querySelectorAll('tr')).map((tr) =>
      Array.from(tr.querySelectorAll('td, th')).map((cell) => (cell.textContent || '').trim())
    );

    const lines: string[] = [];
    // Detect 2-row horizontal answer table (Row 1: question numbers, Row 2: answers)
    for (let r = 0; r < rows.length; r++) {
      const row = rows[r];
      const nextRow = rows[r + 1];
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
        r++; // skip nextRow
      } else {
        lines.push(row.filter(Boolean).join('\t'));
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
      .map((el) => (el.textContent || '').trim())
      .filter(Boolean)
      .join('\n');
  }

  return (doc.body.textContent || '').trim();
}

/**
 * Parse Azota-formatted exam text into structured Question[]
 */
export function parseAzotaText(rawInput: string): Question[] {
  const normalized = rawInput.replace(/\r\n/g, '\n').replace(/\r/g, '\n');

  // Split main body and end-of-exam section (after HẾT / ---HẾT--- / BẢNG ĐÁP ÁN)
  const endMarkerMatch = normalized.match(/\n\s*(?:-*\s*HẾT\s*-*|BẢNG\s+ĐÁP\s+ÁN)\s*\n/i);
  const bodyText = endMarkerMatch ? normalized.slice(0, endMarkerMatch.index) : normalized;
  const tailText = endMarkerMatch ? normalized.slice((endMarkerMatch.index || 0) + endMarkerMatch[0].length) : '';

  // Parse answer key from tailText if present (e.g. "1.A 2.B,C 3.a-Đ,b-S,c-Đ,d-S" or "1. A")
  const answerKeyMap = new Map<number, string>();
  if (tailText) {
    // Match patterns like "1.A", "1: A,B", "Câu 1: A"
    const pairRegex = /(?:Câu\s*)?(\d+)\s*[.:=-]\s*([A-H](?:\s*,\s*[A-H])*|[a-d]\s*-\s*[ĐSđs](?:\s*,\s*[a-d]\s*-\s*[ĐSđs])*|[^\n\t]+)/gi;
    let m: RegExpExecArray | null;
    while ((m = pairRegex.exec(tailText)) !== null) {
      const qNum = parseInt(m[1], 10);
      const ans = m[2].trim();
      if (qNum && ans) {
        answerKeyMap.set(qNum, ans);
      }
    }
  }

  const lines = bodyText.split('\n').map((l) => l.trim()).filter(Boolean);

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

  const sectionRegex = /^(?:PHẦN\s+[IVXLC\d]+|[IVXLC]+)\s*[.:-]\s*(.*)$/i;
  const questionStartRegex = /^(?:Câu|Bài|Question)\s*(\d+)\s*[.:]\s*(.*)$|^(\d+)\s*[.:]\s+(.*)$/i;

  for (const line of lines) {
    const secMatch = line.match(sectionRegex);
    // Avoid confusing Roman numeral I. with option if inside question unless it starts with PHẦN or before questions
    if (secMatch && (/^PHẦN\s+/i.test(line) || !currentBlock || currentBlock.lines.length > 0)) {
      currentSection = line;
      continue;
    }

    const qMatch = line.match(questionStartRegex);
    if (qMatch) {
      autoNumber++;
      const qNum = parseInt(qMatch[1] || qMatch[3] || String(autoNumber), 10);
      const restText = (qMatch[2] ?? qMatch[4] ?? '').trim();
      currentBlock = {
        number: qNum,
        section: currentSection,
        headerLine: restText,
        lines: [],
      };
      blocks.push(currentBlock);
    } else if (currentBlock) {
      currentBlock.lines.push(line);
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

    // Expand inline options if multiple A. B. C. D. are on the same line
    const expandedLines: string[] = [];
    for (const rawLine of block.lines) {
      if (/\s+\*?[B-H]\.\s+/.test(rawLine) && /^\*?[A-H]\.\s+/.test(rawLine)) {
        const parts = rawLine.split(/\s+(?=\*?[A-H]\.\s+)/);
        expandedLines.push(...parts);
      } else {
        expandedLines.push(rawLine);
      }
    }

    for (const line of expandedLines) {
      // 1. Check Explanation line
      const expMatch = line.match(/^(?:Lời\s*giải|Hướng\s*dẫn(?:\s*giải)?|HDG)\s*[:.]\s*(.*)$/i);
      if (expMatch) {
        inExplanation = true;
        if (expMatch[1].trim()) explanationParts.push(expMatch[1].trim());
        continue;
      }
      if (inExplanation) {
        explanationParts.push(line);
        continue;
      }

      // 2. Check Short Answer declaration ("Đáp án: A | B" or "ĐS: ...")
      const ansLineMatch = line.match(/^(?:Đáp\s*án|Đáp\s*số|ĐA|ĐS|Answer)\s*[:=]\s*(.+)$/i);
      if (ansLineMatch) {
        const rawAns = ansLineMatch[1].trim();
        // If it already has MC options, "Đáp án: A" or "Đáp án: A, C" marks the MC correct option(s)
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
      const tfMatch = line.match(/^(\*|_)?([a-d])\)\s*(.+)$/);
      if (tfMatch) {
        const hasStar = Boolean(tfMatch[1]);
        const label = tfMatch[2].toLowerCase();
        let rawStmt = tfMatch[3].trim();

        // Check trailing [Đ]/[S] or (Đúng)/(Sai)
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

      // 4. Check Multiple Choice options: A., B., C., D. (uppercase A-H)
      const mcMatch = line.match(/^(\*|_)?([A-H])[.:]\s*(.+)$/);
      if (mcMatch) {
        const isCorrect = Boolean(mcMatch[1]);
        const letter = mcMatch[2].toUpperCase();
        const optText = mcMatch[3].trim();
        mcOptions.push({ letter, text: optText, isCorrect });
        continue;
      }

      // 5. Otherwise, append to question stem if before options/statements
      if (mcOptions.length === 0 && tfStatements.length === 0) {
        stemParts.push(line);
      } else if (mcOptions.length > 0) {
        // Continuation of the previous option
        mcOptions[mcOptions.length - 1].text += ' ' + line;
      } else if (tfStatements.length > 0) {
        tfStatements[tfStatements.length - 1].text += ' ' + line;
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
        // e.g. "a-Đ, b-S, c-Đ, d-S" or "Đ, S, Đ, S"
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
    if (!questionText) return;

    const explanation = explanationParts.join('\n').trim() || undefined;

    if (tfStatements.length > 0) {
      parsedQuestions.push({
        id: `q_${Date.now()}_${idx}`,
        type: 'true_false',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        subQuestions: tfStatements,
        correctAnswers: tfStatements.filter((s) => s.isTrue).map((s) => s.label),
        explanation,
        points: 1,
      });
    } else if (mcOptions.length >= 2) {
      const correctTexts = mcOptions.filter((o) => o.isCorrect).map((o) => o.text);
      const isMulti = correctTexts.length > 1;
      parsedQuestions.push({
        id: `q_${Date.now()}_${idx}`,
        type: isMulti ? 'checkbox' : 'multiple_choice',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        options: mcOptions.map((o) => o.text),
        correctAnswers: correctTexts,
        explanation,
        points: 0.25,
      });
    } else {
      parsedQuestions.push({
        id: `q_${Date.now()}_${idx}`,
        type: 'short_answer',
        text: questionText,
        section: block.section || undefined,
        level: qLevel,
        correctAnswers: shortAnswers,
        explanation,
        points: 0.5,
      });
    }
  });

  return parsedQuestions;
}

/**
 * Score a single question according to Azota / THPT 2025 rules:
 * - multiple_choice: exact match = full points
 * - checkbox (multiple correct answers): student must select ALL and ONLY correct answers to get points
 * - true_false (a, b, c, d):
 *   - 4 statements: 1 right = 10%, 2 right = 25%, 3 right = 50%, 4 right = 100% of question points
 *   - otherwise proportional
 * - short_answer: case-insensitive, trimmed match against any "|" alternative
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
    const raw = (userResponse.shortAnswer || '').trim().toLowerCase();
    const accepted = (question.correctAnswers || []).map((a) => a.trim().toLowerCase()).filter(Boolean);
    const ok = Boolean(raw && accepted.includes(raw));
    return {
      earnedPoints: ok ? maxPoints : 0,
      isFullyCorrect: ok,
      detailText: ok ? 'Chính xác' : 'Chưa khớp đáp án',
    };
  }

  return { earnedPoints: 0, isFullyCorrect: false, detailText: 'Tự luận' };
}
