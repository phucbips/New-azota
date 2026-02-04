import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Globe, Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useThemeSettings } from '../../contexts/ThemeSettingsContext';
import { cn } from '../../lib/utils';

export const SettingsContent: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();
  const { primaryColor, setPrimaryColor } = useThemeSettings();

  const colors = [
    { id: 'blue', name: 'Blue', class: 'bg-blue-600' },
    { id: 'purple', name: 'Purple', class: 'bg-purple-600' },
    { id: 'green', name: 'Green', class: 'bg-emerald-600' },
    { id: 'orange', name: 'Orange', class: 'bg-orange-600' },
  ];

  return (
    <div className="bg-card rounded-xl border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-card-foreground">Giao diện & Ngôn ngữ</h3>
        <p className="text-sm text-muted-foreground">Tùy chỉnh trải nghiệm sử dụng của bạn.</p>
      </div>

      <div className="divide-y divide-border">
        {/* Language Setting */}
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Globe className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-foreground">Ngôn ngữ / Language</h4>
                    <p className="text-sm text-muted-foreground">Chọn ngôn ngữ hiển thị.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <LanguageToggle />
            </div>
        </div>

        {/* Theme Setting */}
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-purple-50 dark:bg-purple-900/30 rounded-lg text-purple-600 dark:text-purple-400">
                    {theme === 'light' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                </div>
                <div>
                    <h4 className="font-medium text-foreground">Chế độ hiển thị</h4>
                    <p className="text-sm text-muted-foreground">Chuyển đổi giữa giao diện Sáng và Tối.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <ThemeToggle />
            </div>
        </div>

        {/* Primary Color Setting */}
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-pink-50 dark:bg-pink-900/30 rounded-lg text-pink-600 dark:text-pink-400">
                    <Palette className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-foreground">Màu chủ đạo</h4>
                    <p className="text-sm text-muted-foreground">Chọn màu sắc yêu thích cho hệ thống.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 {colors.map((color) => (
                    <button
                        key={color.id}
                        onClick={() => setPrimaryColor(color.id as any)}
                        className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center transition-transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-background",
                            color.class,
                            primaryColor === color.id ? "ring-2 ring-offset-2 ring-offset-background ring-foreground" : ""
                        )}
                        title={color.name}
                    >
                        {primaryColor === color.id && <Check className="w-4 h-4 text-white" />}
                    </button>
                 ))}
            </div>
        </div>
      </div>
    </div>
  );
};
