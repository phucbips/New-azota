import React from 'react';
import { useTranslation } from 'react-i18next';
import { LanguageToggle } from './LanguageToggle';
import { Globe } from 'lucide-react';
import { cn } from '../../lib/utils';

export const SettingsContent: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="bg-surface rounded-lg border border-border shadow-sm overflow-hidden">
      <div className="p-6 border-b border-border">
        <h3 className="text-lg font-bold text-foreground">Giao diện & Ngôn ngữ</h3>
        <p className="text-sm text-muted-foreground">Tùy chỉnh trải nghiệm sử dụng của bạn.</p>
      </div>

      <div className="divide-y divide-border">
        {/* Language Setting */}
        <div className="p-6 flex items-center justify-between">
            <div className="flex items-center gap-4">
                <div className="p-2.5 bg-gray-50 rounded-lg text-gray-600">
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

        {/* Theme settings removed for Genesis Phase 1 */}
      </div>
    </div>
  );
};
