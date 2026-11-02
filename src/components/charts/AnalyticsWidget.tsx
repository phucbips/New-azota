import React from 'react';

interface AnalyticsWidgetProps {
  title: string;
  data: { name: string; value: number }[];
  total: number;
}

export const AnalyticsWidget: React.FC<AnalyticsWidgetProps> = ({ title, data, total }) => {
  // Sort by value desc
  const sortedData = [...data].sort((a, b) => b.value - a.value).slice(0, 5); // Take top 5

  return (
    <div className="bg-card p-6 rounded-xl border border-border shadow-sm flex flex-col">
      <h3 className="text-sm font-medium text-muted-foreground mb-4 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-col gap-4">
        {sortedData.map((item, index) => {
          const percentage = total > 0 ? (item.value / total) * 100 : 0;
          return (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-foreground font-medium truncate max-w-[70%]">{item.name}</span>
                <span className="text-muted-foreground">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 bg-muted rounded-full overflow-hidden">
                <div
                    className="h-full bg-foreground rounded-full"
                    style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
        {data.length === 0 && (
            <p className="text-sm text-muted-foreground/70 italic">Chưa có dữ liệu.</p>
        )}
      </div>
    </div>
  );
};
