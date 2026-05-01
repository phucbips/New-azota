import React from 'react';
import { useAuth } from '../../hooks/useAuth';
import { BookOpen, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { StudentSupportWidget } from '../../components/student/StudentSupportWidget';
import { AnnouncementFeed } from '../../components/student/AnnouncementFeed';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '../../components/ui/card';
import { Button } from '../../components/ui/button';

export const StudentHome: React.FC = () => {
  const { t } = useTranslation();
  const { user } = useAuth();

  return (
    <div className="space-y-[32px] relative min-h-[80vh]">
      <div>
        <h1 className="text-[32px] font-bold font-display tracking-tight text-foreground">
          {t('home.welcome', { name: user?.displayName?.split(' ')[0] || 'Student' })}
        </h1>
        <p className="text-[15px] text-muted-foreground mt-[8px]">
          {t('home.subtitle')}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[24px]">
        {/* Grade Level Card */}
        <Card className="flex flex-col justify-between">
          <CardContent className="p-[24px] flex flex-col h-full">
            <div className="flex items-center justify-between mb-[16px]">
              <h3 className="text-[14px] font-medium text-muted-foreground">{t('home.grade_level')}</h3>
              <div className="w-[40px] h-[40px] rounded-[8px] bg-accent flex items-center justify-center">
                <GraduationCap className="w-[20px] h-[20px] text-foreground" />
              </div>
            </div>
            <div>
              <p className="text-[32px] font-bold font-display text-foreground">Grade {user?.grade || '--'}</p>
              <p className="text-[13px] text-muted-foreground mt-[4px]">{t('home.grade_trend')}</p>
            </div>
          </CardContent>
        </Card>

        {/* CTA Card */}
        <Card className="lg:col-span-2 bg-primary text-white border-primary relative overflow-hidden">
          <CardContent className="p-[32px] flex flex-col justify-center h-full relative z-10">
            <h3 className="text-[24px] font-bold font-display mb-[12px]">{t('home.cta_title')}</h3>
            <p className="text-[15px] text-white/80 mb-[24px] max-w-lg leading-relaxed">
                {t('home.cta_desc', { grade: user?.grade })}
            </p>
            <div>
              <Button asChild variant="secondary" className="bg-white text-primary border-white hover:bg-white/90">
                <Link to="/student/assignments">
                    <BookOpen className="w-[16px] h-[16px] mr-2" />
                    {t('home.cta_button')}
                </Link>
              </Button>
            </div>
          </CardContent>
          {/* Decoration */}
          <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-1/4 translate-y-1/4 pointer-events-none">
              <GraduationCap className="w-[240px] h-[240px] text-white" />
          </div>
        </Card>
      </div>

      <AnnouncementFeed />

      {/* Support Widget */}
      <StudentSupportWidget />
    </div>
  );
};
