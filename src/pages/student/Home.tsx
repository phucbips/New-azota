import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { PageHeader } from '../../components/ui/PageHeader';
import { StatCard } from '../../components/ui/StatCard';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { AnnouncementFeed } from '../../components/student/AnnouncementFeed';
import { useTranslation } from 'react-i18next';

export const StudentHome: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="space-y-6 relative min-h-[80vh]">
      <PageHeader
        title={t('home.welcome', { name: user?.displayName?.split(' ')[0] || 'Student' })}
        description={t('home.subtitle')}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title={t('home.grade_level')}
          value={`Grade ${user?.grade || '--'}`}
          icon={<GraduationCap className="w-6 h-6 text-primary" />}
          trend={t('home.grade_trend')}
        />
        <div className="md:col-span-2 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground relative overflow-hidden shadow-md group">
            <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold mb-3">{t('home.cta_title')}</h3>
                <p className="text-primary-foreground/90 mb-8 max-w-lg text-base">
                    {t('home.cta_desc', { grade: user?.grade })}
                </p>
                <Link
                    to="/student/assignments"
                    className="inline-flex items-center gap-2 bg-background text-primary px-6 py-3 rounded-xl font-bold text-sm hover:shadow-lg transition-all hover:-translate-y-1"
                >
                    <BookOpen className="w-4 h-4" />
                    {t('home.cta_button')}
                </Link>
            </div>
            {/* Decoration */}
            <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-8 translate-y-8 group-hover:scale-110 transition-transform duration-700">
                <GraduationCap className="w-64 h-64" />
            </div>
        </div>
      </div>

      <AnnouncementFeed />

      {/* Support Widget */}
      <StudentSupportWidget />
    </div>
  );
};
