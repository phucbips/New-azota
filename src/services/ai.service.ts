import { GEMINI_API_KEY, GEMINI_API_URL } from '../config/constants';

export interface GeminiResponse {
  candidates?: Array<{
    content?: {
      parts?: Array<{
        text?: string;
      }>;
    };
  }>;
}

class AIService {
  private apiKey: string;
  private apiUrl: string;

  constructor() {
    this.apiKey = GEMINI_API_KEY;
    this.apiUrl = GEMINI_API_URL;
  }

  async generateContent(
    prompt: string,
    systemInstruction?: string
  ): Promise<string> {
    const payload: any = {
      contents: [{ parts: [{ text: prompt }] }],
    };

    if (systemInstruction) {
      payload.systemInstruction = {
        parts: [{ text: systemInstruction }],
      };
    }

    const maxRetries = 3;
    let delay = 1000;

    for (let i = 0; i < maxRetries; i++) {
      try {
        const response = await fetch(`${this.apiUrl}?key=${this.apiKey}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
        });

        if (response.status === 429) {
          if (i < maxRetries - 1) {
            await this.sleep(delay);
            delay *= 2; // Exponential backoff
            continue;
          }
        }

        if (!response.ok) {
          const errorBody = await response.json();
          throw new Error(
            `API call failed: ${response.status} - ${errorBody.error?.message || 'Unknown error'}`
          );
        }

        const result: GeminiResponse = await response.json();
        const text =
          result.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Không thể tạo nội dung.';
        return text;
      } catch (error) {
        console.error('Gemini API Error:', error);
        if (i === maxRetries - 1) throw error;
      }
    }

    throw new Error('API call failed after multiple retries.');
  }

  async suggestLessonDescription(lessonName: string): Promise<string> {
    const systemPrompt =
      'Bạn là trợ lý soạn thảo nội dung giáo dục. Hãy tạo một mô tả ngắn gọn (tối đa 30 từ) bằng tiếng Việt, mang tính thu hút và cung cấp tóm tắt nội dung chính cho một bài học.';
    const prompt = `Đề xuất mô tả cho bài học: "${lessonName}"`;

    return this.generateContent(prompt, systemPrompt);
  }

  async chatWithLesson(
    lessonName: string,
    userQuestion: string
  ): Promise<string> {
    const systemPrompt = `Bạn là Trợ lý Học tập AI. Nhiệm vụ của bạn là trả lời các câu hỏi của học sinh về Bài học "${lessonName}". Hãy giữ câu trả lời ngắn gọn, chính xác, mang tính giáo dục và sử dụng ngôn ngữ tiếng Việt thân thiện.`;

    return this.generateContent(userQuestion, systemPrompt);
  }

  private sleep(ms: number): Promise<void> {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}

export const aiService = new AIService();
