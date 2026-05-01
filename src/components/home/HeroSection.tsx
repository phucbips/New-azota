import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const HeroSection = ({
    title = "Học Tập Không Giới Hạn",
    subtitle = "Khám phá hàng ngàn khóa học chất lượng từ các chuyên gia hàng đầu. Nâng cao kỹ năng của bạn ngay hôm nay.",
}) => {
  return (
    <section className="relative bg-background pt-[120px] pb-[80px] md:pt-[160px] md:pb-[120px] border-b border-border overflow-hidden">
      {/* Subtle decorative dot grid - acceptable per Genesis spec */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />

      <div className="container mx-auto px-[24px] max-w-[1280px] relative z-10 flex flex-col items-center text-center">
        {/* Brand highlight chip */}
        <div className="mb-[24px] inline-flex items-center rounded-full border border-border bg-surface px-[12px] py-[4px] text-[12px] font-medium text-foreground">
          <span className="flex h-[8px] w-[8px] rounded-full bg-secondary mr-[8px]"></span>
          Taste of Vietnam Design System
        </div>

        <h1 className="font-display text-[48px] font-bold leading-[1.1] tracking-tighter text-foreground md:text-[60px] lg:text-[72px] max-w-[900px] mb-[24px] whitespace-pre-wrap">
          {title}
        </h1>

        <p className="text-[18px] text-muted-foreground md:text-[20px] max-w-[600px] mb-[40px] whitespace-pre-wrap leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-col sm:flex-row gap-[16px] justify-center items-center">
            <Button asChild size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Link to="/login">
                Bắt đầu học ngay
                </Link>
            </Button>
            <Button asChild variant="secondary" size="lg" className="w-full sm:w-auto min-w-[200px]">
                <Link to="/courses">
                Khám phá Khóa học
                </Link>
            </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
