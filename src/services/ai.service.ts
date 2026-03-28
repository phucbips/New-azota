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
  async generateContent(
    prompt: string,
    systemInstruction?: string,
    signal?: AbortSignal
  ): Promise<string> {
    const maxRetries = 3;
    let delay = 1000;

    for (let i = 0; i < maxRetries; i++) {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30s timeout

      // Combine signals: if external signal aborts, we abort our controller
      const handleExternalAbort = () => controller.abort();
      if (signal) {
        signal.addEventListener('abort', handleExternalAbort);
        if (signal.aborted) {
           controller.abort();
        }
      }

      try {
        const response = await fetch('/api/generate-content', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ prompt, systemInstruction }),
          signal: controller.signal,
        });

        clearTimeout(timeoutId);
        if (signal) signal.removeEventListener('abort', handleExternalAbort);

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
            `API call failed: ${response.status} - ${errorBody.error || 'Unknown error'}`
          );
        }

        const result: GeminiResponse = await response.json();
        const text =
          result.candidates?.[0]?.content?.parts?.[0]?.text ||
          'Không thể tạo nội dung.';
        return text;
      } catch (error: any) {
        clearTimeout(timeoutId);
        if (signal) signal.removeEventListener('abort', handleExternalAbort);

        // Don't retry if aborted by user
        if (error.name === 'AbortError') {
             if (signal?.aborted) {
                 throw new Error('Request cancelled by user.');
             }
             throw new Error('Request timed out.');
        }

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
