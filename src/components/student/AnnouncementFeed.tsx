import React, { useEffect, useState } from 'react';
import { announcementService } from '../../services/announcement.service';
import { Announcement } from '../../types';
import { format } from 'date-fns';
import { Calendar, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { Card, CardContent } from '../ui/card';

export const AnnouncementFeed: React.FC = () => {
  const { t } = useTranslation();
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = announcementService.subscribeToAnnouncements(false, (data) => {
      setAnnouncements(data);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) {
    return <div className="animate-pulse h-[160px] bg-muted rounded-[12px]"></div>;
  }

  if (announcements.length === 0) {
    return null;
  }

  return (
    <div className="space-y-[16px]">
      <div className="flex items-center gap-[8px]">
        <Megaphone className="w-[20px] h-[20px] text-primary" />
        <h2 className="text-[18px] font-bold font-display text-foreground tracking-tight">{t('home.announcements')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[24px]">
        {announcements.map((item) => (
          <Card key={item.id} className="flex flex-col h-full p-0">
            {item.imageUrl && (
              <div className="h-[160px] w-full border-b border-border">
                <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                />
              </div>
            )}
            <CardContent className="p-[20px] flex flex-col flex-1">
                <h3 className="font-bold text-[16px] text-foreground mb-[8px] line-clamp-2">{item.title}</h3>
                <p className="text-muted-foreground text-[14px] mb-[16px] flex-1 whitespace-pre-wrap line-clamp-3 leading-relaxed">{item.content}</p>

                <div className="flex items-center text-[12px] text-muted-foreground mt-auto pt-[16px] border-t border-border">
                <Calendar className="w-[14px] h-[14px] mr-[6px]" />
                {item.createdAt?.toMillis ? format(item.createdAt.toDate(), 'dd/MM/yyyy') : 'Unknown'}
                </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
