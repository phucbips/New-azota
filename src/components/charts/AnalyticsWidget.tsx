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
    <div className="bg-surface p-6 rounded-[12px] border border-border shadow-sm flex flex-col">
      <h3 className="text-sm font-medium text-slate-500 mb-4 uppercase tracking-wider">{title}</h3>
      <div className="flex flex-col gap-4">
        {sortedData.map((item, index) => {
          const percentage = total > 0 ? (item.value / total) * 100 : 0;
          return (
            <div key={index} className="flex flex-col gap-1">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-900 font-medium truncate max-w-[70%]">{item.name}</span>
                <span className="text-slate-500">{percentage.toFixed(0)}%</span>
              </div>
              <div className="w-full h-2 bg-muted/20 rounded-full overflow-hidden">
                <div
                    className="h-full bg-primary rounded-full"
                    style={{ width: `${percentage}%` }}
                />
              </div>
            </div>
          );
        })}
        {data.length === 0 && (
            <p className="text-sm text-slate-400 italic">Chưa có dữ liệu.</p>
        )}
      </div>
    </div>
  );
};
