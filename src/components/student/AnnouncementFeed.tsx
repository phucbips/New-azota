import React, { useEffect, useState } from 'react';
import { announcementService } from '../../services/announcement.service';
import { Announcement } from '../../types';
import { format } from 'date-fns';
import { Calendar, Megaphone } from 'lucide-react';
import { useTranslation } from 'react-i18next';

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
    return <div className="animate-pulse h-40 bg-slate-100 rounded-xl"></div>;
  }

  if (announcements.length === 0) {
    return null; // Don't show anything if no announcements
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2 mb-2">
        <Megaphone className="w-5 h-5 text-blue-600" />
        <h2 className="text-lg font-bold text-slate-900">{t('home.announcements')}</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {announcements.map((item) => (
          <div key={item.id} className="bg-white border border-slate-200 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
            {item.imageUrl && (
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}
            <h3 className="font-bold text-slate-900 mb-2 line-clamp-2">{item.title}</h3>
            <p className="text-slate-600 text-sm mb-4 flex-1 whitespace-pre-wrap line-clamp-4">{item.content}</p>

            <div className="flex items-center text-xs text-slate-400 mt-auto pt-2 border-t border-slate-100">
              <Calendar className="w-3 h-3 mr-1" />
              {item.createdAt?.toMillis ? format(item.createdAt.toDate(), 'dd/MM/yyyy') : 'Unknown'}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
