import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { AnalyticsStatCard } from '../../components/analytics/AnalyticsStatCard';
import { AnalyticsChart } from '../../components/analytics/AnalyticsChart';
import { AnalyticsTabs } from '../../components/analytics/AnalyticsTabs';
import { analyticsService } from '../../services/analytics.service';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';
import { useTranslation } from 'react-i18next';
import { Calendar, MoreHorizontal, Layout, CheckSquare, Square, TrendingUp, Users } from 'lucide-react';
import { useDashboardConfig } from '../../contexts/DashboardConfigContext';
import { cn } from '../../lib/utils';
import * as Popover from '@radix-ui/react-popover';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../../components/ui/tabs';
import { FinanceTab } from '../../components/admin/FinanceTab';
import { StatsTab } from '../../components/admin/StatsTab';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const { widgets, toggleWidget } = useDashboardConfig();

  const [activeTab, setActiveTab] = useState<string>("overview");
  const [trafficData, setTrafficData] = useState<{ date: string; visitors: number; page_views: number }[]>([]);
  const [aggStats, setAggStats] = useState<any>({ os: {}, browsers: {}, devices: {}, total_visits: 0, total_page_views: 0 });
  const [totalUsers, setTotalUsers] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);

  const [activeMetric, setActiveMetric] = useState<'visitors' | 'page_views'>('visitors');

  useEffect(() => {
    const unsubscribeTraffic = analyticsService.subscribeToDailyTraffic(7, (data) => {
        setTrafficData(data);
    });

    const unsubscribeAgg = analyticsService.subscribeToAggregates((data) => {
        setAggStats(data);
    });

    const unsubscribeUsers = userService.subscribeToAllUsers((users) => setTotalUsers(users.length));
    const unsubscribeOnline = userService.subscribeToOnlineUsers((count) => setOnlineUsers(count));

    return () => {
        unsubscribeTraffic();
        unsubscribeAgg();
        unsubscribeUsers();
        unsubscribeOnline();
    };
  }, []);

  const visitorsCount = trafficData.reduce((acc, curr) => acc + (curr.visitors || 0), 0);
  const pageViewsCount = trafficData.reduce((acc, curr) => acc + (curr.page_views || 0), 0);

  const calculateTrend = (metric: 'visitors' | 'page_views') => {
      if (trafficData.length < 2) return 0;
      const today = trafficData[trafficData.length - 1][metric] || 0;
      const yesterday = trafficData[trafficData.length - 2][metric] || 0;
      if (yesterday === 0) return 100;
      return Math.round(((today - yesterday) / yesterday) * 100);
  };

  const visitorsTrend = calculateTrend('visitors');
  const pageViewsTrend = calculateTrend('page_views');

  const toArray = (map: Record<string, number>) => Object.entries(map || {}).map(([name, value]) => ({ name, value }));

  const chartData = trafficData.map(item => ({
      date: item.date,
      visitors: activeMetric === 'visitors' ? item.visitors : item.page_views,
  }));

  const isVisible = (id: string) => widgets.find(w => w.id === id)?.visible;

  return (
    <div className="flex flex-col gap-6 max-w-7xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{t('analytics.title')}</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>azota.vercel.app</span>
                <span className="w-1 h-1 rounded-full bg-muted-foreground/30"></span>
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-500 font-medium">{onlineUsers} {t('analytics.online')}</span>
                </div>
            </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-4">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full sm:w-auto">
                <TabsList className="grid w-full grid-cols-3 sm:w-auto bg-muted/50 p-1 rounded-xl">
                    <TabsTrigger value="overview" className="rounded-lg text-sm font-semibold">Tổng quan</TabsTrigger>
                    <TabsTrigger value="finance" className="rounded-lg text-sm font-semibold">Tài chính</TabsTrigger>
                    <TabsTrigger value="stats" className="rounded-lg text-sm font-semibold">Thống kê</TabsTrigger>
                </TabsList>
            </Tabs>

            <div className="hidden lg:flex items-center px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-bold">
                Môi trường: Production
            </div>

            {/* Dashboard Config Popover */}
            <Popover.Root>
                <Popover.Trigger asChild>
                    <button className="p-2.5 bg-background border border-border hover:bg-accent hover:text-accent-foreground rounded-xl transition-all shadow-sm flex items-center gap-2 group">
                        <Layout className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />
                        <span className="hidden sm:inline text-sm font-semibold">Tùy chỉnh</span>
                    </button>
                </Popover.Trigger>
                <Popover.Portal>
                    <Popover.Content className="z-50 min-w-[200px] bg-popover rounded-md border border-border shadow-md p-3 animate-in fade-in zoom-in-95 duration-200" sideOffset={5}>
                        <h4 className="font-medium text-sm text-foreground mb-2">Visible Widgets</h4>
                        <div className="space-y-1">
                            {widgets.map(widget => (
                                <button
                                    key={widget.id}
                                    onClick={() => toggleWidget(widget.id)}
                                    className="flex items-center gap-2 w-full px-2 py-1.5 text-sm rounded-sm hover:bg-muted transition-colors text-left"
                                >
                                    {widget.visible ?
                                        <CheckSquare className="w-4 h-4 text-primary" /> :
                                        <Square className="w-4 h-4 text-muted-foreground" />
                                    }
                                    <span className={widget.visible ? "text-foreground" : "text-muted-foreground"}>{widget.label}</span>
                                </button>
                            ))}
                        </div>
                    </Popover.Content>
                </Popover.Portal>
            </Popover.Root>
        </div>
      </div>

      {activeTab === "overview" && (
          <div className="space-y-6 animate-in fade-in zoom-in-95 duration-300">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {isVisible('visitors') && (
                    <div onClick={() => setActiveMetric('visitors')} className="cursor-pointer transition-transform hover:scale-[1.01]">
                        <AnalyticsStatCard
                            label={t('analytics.visitors')}
                            value={visitorsCount}
                            trend={visitorsTrend}
                            className={activeMetric === 'visitors' ? "border-2 border-primary shadow-md" : ""}
                        />
                    </div>
                )}
                {isVisible('page_views') && (
                    <div onClick={() => setActiveMetric('page_views')} className="cursor-pointer transition-transform hover:scale-[1.01]">
                        <AnalyticsStatCard
                            label={t('analytics.page_views')}
                            value={pageViewsCount}
                            trend={pageViewsTrend}
                            className={activeMetric === 'page_views' ? "border-2 border-primary shadow-md" : ""}
                        />
                    </div>
                )}
                {isVisible('total_users') && (
                    <div>
                        <AnalyticsStatCard
                            label={t('admin.total_users')}
                            value={totalUsers}
                        />
                    </div>
                )}
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                 {isVisible('traffic_chart') && (
                     <div className="h-[400px]">
                        <AnalyticsChart data={chartData} />
                     </div>
                 )}
                 {isVisible('device_stats') && (
                     <div className="h-[400px]">
                        <AnalyticsTabs
                            osData={toArray(aggStats.os)}
                            deviceData={toArray(aggStats.devices)}
                            browserData={toArray(aggStats.browsers)}
                            totalVisits={aggStats.total_visits}
                        />
                     </div>
                 )}
              </div>
          </div>
      )}

      {activeTab === "finance" && <FinanceTab />}
      {activeTab === "stats" && <StatsTab />}
    </div>
  );
};
