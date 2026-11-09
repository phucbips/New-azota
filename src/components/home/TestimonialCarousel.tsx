import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Học viên",
    content: "Bài giảng rõ ràng, giao diện sạch sẽ và dễ tập trung. Tôi có thể ôn bài và làm đề kiểm tra rất nhanh.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Sinh viên CNTT",
    content: "Hệ thống làm bài tập và chấm điểm tự động mượt mà, không bị rối mắt như nhiều trang khác.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    role: "Học viên",
    content: "Nội dung bám sát thực tế, tốc độ tải nhanh và dễ theo dõi tiến độ học tập.",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
  return (
    <section className="bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-2xl text-center">
          <p className="eyebrow mb-1.5">Đánh giá</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Học viên nói gì?
          </h2>
        </div>

        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.id} className="flex flex-col justify-between rounded-xl border border-border bg-card p-5">
              <div>
                <div className="mb-3 flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-3.5 w-3.5 ${
                        i < t.rating ? "fill-warning text-warning" : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>
                <p className="text-sm leading-relaxed text-foreground">"{t.content}"</p>
              </div>
              <div className="mt-5 flex items-center gap-3 border-t border-border pt-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-xs font-semibold text-foreground">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
