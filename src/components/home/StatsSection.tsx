import { Users, BookOpen, Award, CheckCircle } from "lucide-react";

export const StatsSection = ({ stats = [] }: { stats?: { label: string, value: string }[] }) => {
  const displayStats = stats.length > 0 ? stats : [
    { label: "Học Viên Tích Cực", value: "10k+", icon: Users },
    { label: "Khóa Học Đa Dạng", value: "500+", icon: BookOpen },
    { label: "Giảng Viên Chuyên Môn", value: "150+", icon: Award },
    { label: "Tỷ Lệ Hoàn Thành", value: "98%", icon: CheckCircle },
  ];

  return (
    <section className="py-[64px] border-b border-border bg-background">
      <div className="container mx-auto px-[24px] max-w-[1280px]">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-[24px]">
          {displayStats.map((stat, i) => {
            const Icon = stat.icon || Users;
            return (
              <div
                key={stat.label + i}
                className="flex flex-col items-center justify-center p-[24px] rounded-[12px] border border-border bg-surface text-center transition-all hover:-translate-y-[2px] hover:shadow-card-hover"
              >
                <div className="mb-[16px] flex h-[48px] w-[48px] items-center justify-center rounded-[8px] bg-accent text-foreground">
                  <Icon className="h-[24px] w-[24px]" />
                </div>
                <h3 className="font-display text-[32px] font-bold text-foreground leading-tight">
                  {stat.value}
                </h3>
                <p className="mt-[8px] text-[14px] text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
