import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { useTranslation } from 'react-i18next';

interface TabData {
  name: string;
  value: number;
}

interface AnalyticsTabsProps {
  osData: TabData[];
  deviceData: TabData[];
  browserData: TabData[];
  totalVisits: number;
}

export const AnalyticsTabs: React.FC<AnalyticsTabsProps> = ({
  osData,
  deviceData,
  browserData,
  totalVisits
}) => {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState<'devices' | 'browsers' | 'os'>('devices');

  const tabs = [
    { id: 'devices', label: t('analytics.devices') },
    { id: 'browsers', label: t('analytics.browsers') },
    { id: 'os', label: t('analytics.os') },
  ];

  const currentData = activeTab === 'devices' ? deviceData
                    : activeTab === 'browsers' ? browserData
                    : osData;

  // Sort by value desc and take top 5
  const sortedData = [...currentData].sort((a, b) => b.value - a.value).slice(0, 5);

  return (
    <div className="bg-card border border-border rounded-xl p-6 h-full flex flex-col">
      {/* Tabs Header */}
      <div className="flex items-center gap-6 border-b border-border pb-0 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={cn(
              "pb-3 text-sm font-medium transition-colors relative",
              activeTab === tab.id
                ? "text-foreground"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {tab.label}
            {activeTab === tab.id && (
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-foreground rounded-t-full" />
            )}
          </button>
        ))}
        <div className="ml-auto text-xs text-muted-foreground uppercase tracking-wider font-semibold">
            {t('analytics.visitors')}
        </div>
      </div>

      {/* Content List */}
      <div className="flex flex-col gap-3 flex-1 overflow-y-auto">
        {sortedData.length > 0 ? (
          sortedData.map((item, index) => {
            const percentage = totalVisits > 0 ? Math.round((item.value / totalVisits) * 100) : 0;
            return (
              <div key={index} className="flex flex-col gap-1.5 group">
                <div className="flex justify-between items-center text-sm">
                  <span className="text-foreground font-medium truncate max-w-[70%]">{item.name}</span>
                  <span className="text-foreground font-bold">{percentage}%</span>
                </div>
                {/* Progress Bar Container */}
                <div className="w-full h-2 bg-muted/50 rounded-full overflow-hidden">
                  <div
                      className="h-full bg-foreground/80 rounded-full transition-all duration-500 ease-out group-hover:bg-primary"
                      style={{ width: `${percentage}%` }}
                  />
                </div>
              </div>
            );
          })
        ) : (
          <div className="flex items-center justify-center h-full min-h-[150px] text-sm text-muted-foreground italic">
            {t('analytics.no_data')}
          </div>
        )}
      </div>
    </div>
  );
};
