import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "../ui/button";

export const HeroSection = ({
  title = "Học tập hiệu quả, tối giản và tập trung",
  subtitle = "Nền tảng học tập và luyện đề trực tuyến hiện đại, giúp học sinh nắm vững kiến thức và giáo viên quản lý lớp học dễ dàng.",
  backgroundUrl = "",
}) => {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20 md:py-28">
      {backgroundUrl && (
        <div className="pointer-events-none absolute inset-0 opacity-10">
          {backgroundUrl.endsWith(".mp4") || backgroundUrl.endsWith(".webm") ? (
            <video src={backgroundUrl} className="h-full w-full object-cover" autoPlay muted loop playsInline />
          ) : (
            <img src={backgroundUrl} className="h-full w-full object-cover" alt="" />
          )}
        </div>
      )}

      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-muted-foreground">
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          <span>Nền tảng học tập &amp; kiểm tra trực tuyến</span>
        </div>

        <h1 className="text-3xl font-semibold tracking-tight text-foreground sm:text-5xl md:leading-[1.15] whitespace-pre-wrap">
          {title}
        </h1>

        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg whitespace-pre-wrap">
          {subtitle}
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild size="lg">
            <Link to="/login">
              Bắt đầu học ngay
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/courses">Khám phá khóa học</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
