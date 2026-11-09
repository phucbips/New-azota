import React, { useEffect, useState, useRef } from 'react';
import { Bell, Check, Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { useAuth } from '../../hooks/useAuth';
import { notificationService } from '../../services/notification.service';
import { Notification } from '../../types';
import { format } from 'date-fns';

export const NotificationList: React.FC = () => {
  const { user } = useAuth();
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!user) return;
    const unsubscribe = notificationService.subscribeToNotifications(user, (data) => {
      setNotifications(data);
    });
    return unsubscribe;
  }, [user]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleMarkAsRead = async (notification: Notification) => {
    if (user && !notification.readBy.includes(user.uid)) {
      await notificationService.markAsRead(notification.id, user.uid);
    }
  };

  const unreadCount = notifications.filter(n => !n.readBy.includes(user?.uid || '')).length;

  const getIcon = (type: string) => {
    switch (type) {
      case 'warning': return <AlertTriangle className="w-4 h-4 text-warning" />;
      case 'success': return <CheckCircle className="w-4 h-4 text-success" />;
      default: return <Info className="w-4 h-4 text-primary" />;
    }
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative rounded-md p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
      >
        <Bell className="h-[18px] w-[18px]" />
        {unreadCount > 0 && (
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-destructive rounded-full border-2 border-background flex items-center justify-center">
            {/* Optional: Show number if needed, but dot is cleaner for small size */}
          </span>
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 md:w-96 bg-card rounded-xl shadow-md border border-border overflow-hidden z-50 animate-in fade-in zoom-in-95 duration-200">
          <div className="p-4 border-b border-border bg-muted/50 flex justify-between items-center">
            <h3 className="font-semibold text-foreground">Thông báo</h3>
            <span className="text-xs text-muted-foreground">{unreadCount} chưa đọc</span>
          </div>

          <div className="max-h-[400px] overflow-y-auto">
            {notifications.length === 0 ? (
              <div className="p-8 text-center text-muted-foreground text-sm">
                Không có thông báo nào.
              </div>
            ) : (
              <div className="divide-y divide-border">
                {notifications.map((notification) => {
                    const isRead = notification.readBy.includes(user?.uid || '');
                    return (
                        <div
                            key={notification.id}
                            className={`p-4 hover:bg-muted transition-colors cursor-pointer ${!isRead ? 'bg-primary/5' : ''}`}
                            onClick={() => handleMarkAsRead(notification)}
                        >
                            <div className="flex gap-3 items-start">
                                <div className={`mt-0.5 p-1.5 rounded-full ${!isRead ? 'bg-card shadow-sm' : 'bg-muted'}`}>
                                    {getIcon(notification.type)}
                                </div>
                                <div className="flex-1 space-y-1">
                                    <div className="flex justify-between items-start">
                                        <p className={`text-sm ${!isRead ? 'font-semibold text-foreground' : 'font-medium text-foreground'}`}>
                                            {notification.title}
                                        </p>
                                        {!isRead && <span className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />}
                                    </div>
                                    <p className="text-xs text-muted-foreground line-clamp-2">{notification.message}</p>
                                    <p className="text-[10px] text-muted-foreground/70">
                                        {notification.createdAt?.toMillis ? format(notification.createdAt.toDate(), 'dd/MM/yyyy HH:mm') : 'Just now'}
                                    </p>
                                </div>
                            </div>
                        </div>
                    );
                })}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
