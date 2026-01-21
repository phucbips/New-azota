import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { AnalyticsStatCard } from '../../components/analytics/AnalyticsStatCard';
import { AnalyticsChart } from '../../components/analytics/AnalyticsChart';
import { AnalyticsWidget } from '../../components/charts/AnalyticsWidget';
import { analyticsService } from '../../services/analytics.service';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';
import { useTranslation } from 'react-i18next';
import { Calendar, MoreHorizontal } from 'lucide-react';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const [trafficData, setTrafficData] = useState<{ date: string; visitors: number; page_views: number }[]>([]);
  const [aggStats, setAggStats] = useState<any>({ os: {}, browsers: {}, devices: {}, total_visits: 0, total_page_views: 0 });
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalAssignments, setTotalAssignments] = useState(0);

  useEffect(() => {
    // Real-time Listeners
    const unsubscribeTraffic = analyticsService.subscribeToDailyTraffic(7, (data) => {
        setTrafficData(data);
    });

    const unsubscribeAgg = analyticsService.subscribeToAggregates((data) => {
        setAggStats(data);
    });

    const unsubscribeUsers = userService.subscribeToAllUsers((users) => setTotalUsers(users.length));
    const unsubscribeAssignments = assignmentService.subscribeToAllAssignments((asg) => setTotalAssignments(asg.length));

    return () => {
        unsubscribeTraffic();
        unsubscribeAgg();
        unsubscribeUsers();
        unsubscribeAssignments();
    };
  }, []);

  // Calculate trends (simple mock or based on data comparison if we had prev period)
  // For now, we show live totals.
  const visitorsCount = trafficData.reduce((acc, curr) => acc + (curr.visitors || 0), 0);
  const pageViewsCount = trafficData.reduce((acc, curr) => acc + (curr.page_views || 0), 0);

  const toArray = (map: Record<string, number>) => Object.entries(map || {}).map(([name, value]) => ({ name, value }));

  return (
    <div className="flex flex-col gap-8 pb-10">
      {/* Header Area */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">Web Analytics</h1>
            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-1">
                <span>azota.vercel.app</span>
                <span className="w-1 h-1 rounded-full bg-slate-400"></span>
                <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                    </span>
                    <span className="text-emerald-500 font-medium">1 online</span>
                </div>
            </div>
        </div>

        <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-sm">
                Production
            </div>
            <div className="flex items-center gap-2 px-3 py-1.5 bg-card border border-border rounded-md text-sm font-medium text-foreground shadow-sm cursor-pointer hover:bg-accent/50 transition-colors">
                <Calendar className="w-4 h-4 text-muted-foreground" />
                <span>Last 7 Days</span>
            </div>
            <button className="p-1.5 hover:bg-accent rounded-md transition-colors text-muted-foreground">
                <MoreHorizontal className="w-5 h-5" />
            </button>
        </div>
      </div>

      {/* Top Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <AnalyticsStatCard
            label="Visitors"
            value={visitorsCount}
            trend={33}
            className="border-t-2 border-t-foreground" // Active tab style
        />
        <AnalyticsStatCard
            label="Page Views"
            value={pageViewsCount}
            trend={12}
        />
        <AnalyticsStatCard
            label="Total Users"
            value={totalUsers}
        />
      </div>

      {/* Main Chart */}
      <AnalyticsChart data={trafficData} />

      {/* Bottom Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnalyticsWidget
            title="Operating Systems"
            data={toArray(aggStats.os)}
            total={aggStats.total_visits}
          />
          <AnalyticsWidget
            title="Devices"
            data={toArray(aggStats.devices)}
            total={aggStats.total_visits}
          />
          <AnalyticsWidget
            title="Browsers"
            data={toArray(aggStats.browsers)}
            total={aggStats.total_visits}
          />
      </div>
    </div>
  );
};
