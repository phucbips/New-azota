export const StatsSection = ({ stats = [] }: { stats?: { label: string; value: string }[] }) => {
  const displayStats =
    stats.length > 0
      ? stats
      : [
          { label: "Học viên", value: "10,000+" },
          { label: "Khóa học", value: "500+" },
          { label: "Giảng viên", value: "150+" },
          { label: "Tỷ lệ hoàn thành", value: "98%" },
        ];

  return (
    <section className="border-b border-border bg-muted/30 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="mx-auto grid max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
          {displayStats.map((stat, i) => (
            <div key={stat.label + i} className="rounded-xl border border-border bg-card p-5 text-center">
              <p className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl tabular-nums">
                {stat.value}
              </p>
              <p className="mt-1 text-xs font-medium text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
