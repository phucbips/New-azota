import React from 'react';
import { useTranslation } from 'react-i18next';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Globe, Moon, Sun, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

export const SettingsContent: React.FC = () => {
  const { t } = useTranslation();
  const { theme } = useTheme();

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <h3 className="text-lg font-bold text-slate-900 dark:text-white">Giao diện & Ngôn ngữ</h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">Tùy chỉnh trải nghiệm sử dụng của bạn.</p>
      </div>

      <div className="divide-y divide-slate-100 dark:divide-slate-700">
        {/* Language Setting */}
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-blue-50 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
                    <Globe className="w-5 h-5" />
                </div>
                <div>
                    <h4 className="font-medium text-slate-900 dark:text-white">Ngôn ngữ / Language</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Chọn ngôn ngữ hiển thị.</p>
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
                    <h4 className="font-medium text-slate-900 dark:text-white">Chế độ hiển thị</h4>
                    <p className="text-sm text-slate-500 dark:text-slate-400">Chuyển đổi giữa giao diện Sáng và Tối.</p>
                </div>
            </div>
            <div className="flex items-center gap-2">
                 <ThemeToggle />
            </div>
        </div>
      </div>
    </div>
  );
};
