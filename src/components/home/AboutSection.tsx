import { CheckCircle2, MonitorPlay, Target, Users2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const AboutSection = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "Học mọi lúc, mọi nơi",
      description: "Tiếp cận bài giảng và bài tập trực tuyến trên mọi thiết bị.",
    },
    {
      icon: Target,
      title: "Lộ trình rõ ràng",
      description: "Thiết kế tinh gọn giúp bạn tập trung đạt mục tiêu nhanh nhất.",
    },
    {
      icon: Users2,
      title: "Hỗ trợ tận tâm",
      description: "Trao đổi trực tiếp cùng giảng viên và trợ lý học tập AI.",
    },
    {
      icon: CheckCircle2,
      title: "Đánh giá tức thì",
      description: "Làm bài tập và xem kết quả, lời giải chi tiết ngay sau khi nộp.",
    },
  ];

  return (
    <section className="border-b border-border bg-background py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <p className="eyebrow mb-1.5">Ưu điểm</p>
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            Tại sao chọn chúng tôi?
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
            Giao diện tối giản, không gây xao nhãng, tập trung hoàn toàn vào trải nghiệm học và luyện đề.
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-muted/50 text-foreground">
                <feature.icon className="h-4 w-4" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{feature.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link to="/courses">Xem danh sách khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
