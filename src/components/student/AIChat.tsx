import React, { useState, useRef, useEffect } from 'react';
import { Send } from 'lucide-react';
import { aiService } from '../../services/ai.service';
import { LoadingSpinner } from '../shared/Loading';

interface AIChatProps {
  lessonName: string;
}

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChat: React.FC<AIChatProps> = ({ lessonName }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: 'assistant',
      content: 'Chào bạn! Tôi có thể giúp bạn trả lời bất kỳ câu hỏi nào về bài học này. Hãy hỏi tôi nhé!',
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    const userMessage = input.trim();
    if (!userMessage || loading) return;

    setInput('');
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setLoading(true);

    try {
      const aiResponse = await aiService.chatWithLesson(lessonName, userMessage);
      setMessages((prev) => [...prev, { role: 'assistant', content: aiResponse }]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: 'Xin lỗi, đã xảy ra lỗi khi kết nối với Trợ lý AI.',
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="lg:col-span-1 glass p-6 rounded-xl shadow-md animate-fadeIn">
      <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center">
        🤖 Trợ lý AI Học tập
        <span className="ml-2 text-xs text-primary font-medium">(Gemini)</span>
      </h3>

      <div
        ref={chatContainerRef}
        className="ai-chat-box bg-muted/50 p-3 rounded-xl border border-border mb-4 h-[350px]"
      >
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`p-3 rounded-xl max-w-[80%] shadow-md ${
                message.role === 'user'
                  ? 'bg-primary text-primary-foreground rounded-tr-none'
                  : 'bg-card border border-border text-foreground rounded-tl-none'
              }`}
            >
              {message.content}
            </div>
          </div>
        ))}

        {loading && (
          <div className="flex justify-start">
            <div className="bg-muted text-foreground p-3 rounded-xl rounded-tl-none max-w-[80%] shadow-md flex items-center">
              <LoadingSpinner size="sm" />
              <span className="ml-2">Đang trả lời...</span>
            </div>
          </div>
        )}
      </div>

      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Hỏi AI về bài học..."
          className="input-custom w-full px-4 py-3 border-2 border-border rounded-xl rounded-r-none transition-all"
          disabled={loading}
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="btn-primary flex-shrink-0 px-4 py-3 text-primary-foreground rounded-xl rounded-l-none font-semibold hover:shadow-md transition-all disabled:opacity-50 disabled:cursor-not-allowed bg-primary"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
