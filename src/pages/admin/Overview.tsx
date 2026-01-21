import React, { useEffect, useState } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { Users, BookOpen, Monitor, Smartphone, AlertCircle, Clock } from 'lucide-react';
import { userService } from '../../services/user.service';
import { assignmentService } from '../../services/assignment.service';
import { analyticsService } from '../../services/analytics.service';
import { useTranslation } from 'react-i18next';
import { User, Assignment } from '../../types';
import { TrafficChart } from '../../components/charts/TrafficChart';
import { AnalyticsWidget } from '../../components/charts/AnalyticsWidget';

export const AdminOverview: React.FC = () => {
  const { t } = useTranslation();
  const [users, setUsers] = useState<User[]>([]);
  const [assignments, setAssignments] = useState<Assignment[]>([]);

  // Analytics State
  const [trafficData, setTrafficData] = useState<{ date: string; visitors: number }[]>([]);
  const [aggStats, setAggStats] = useState<any>({ os: {}, browsers: {}, devices: {}, total_visits: 0 });

  useEffect(() => {
    // 1. Fetch Users (realtime)
    const unsubscribeUsers = userService.subscribeToAllUsers((fetchedUsers) => {
      setUsers(fetchedUsers);
    });

    // 2. Fetch Assignments (realtime)
    const unsubscribeAssignments = assignmentService.subscribeToAllAssignments((fetchedAssignments) => {
      setAssignments(fetchedAssignments);
    });

    // 3. Fetch Analytics (Once on mount for now, could be realtime with onSnapshot if needed)
    const loadAnalytics = async () => {
        const traffic = await analyticsService.getDailyTraffic(7);
        setTrafficData(traffic.reverse()); // Chart expects chronological

        const aggs = await analyticsService.getAggregatedStats();
        setAggStats(aggs);
    };
    loadAnalytics();

    return () => {
      unsubscribeUsers();
      unsubscribeAssignments();
    };
  }, []);

  // Helper to transform aggregates map to array for Widget
  const toArray = (map: Record<string, number>) => Object.entries(map).map(([name, value]) => ({ name, value }));

  return (
    <div className="flex flex-col gap-6 pb-10">
      <PageHeader
        title={t('admin.title')}
        subtitle={t('admin.subtitle')}
      />

      {/* Top Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <StatCard
          title={t('admin.total_users')}
          value={users.length}
          icon={<Users className="w-6 h-6" />}
          trend={t('admin.trend_realtime')}
        />
        <StatCard
          title={t('admin.total_assignments')}
          value={assignments.length}
          icon={<BookOpen className="w-6 h-6" />}
          trend={t('admin.trend_system')}
        />
      </div>

      {/* Main Analytics Section: Traffic Chart */}
      <div className="w-full">
         <TrafficChart data={trafficData} />
      </div>

      {/* Demographics / System Stats (Vercel Style) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
