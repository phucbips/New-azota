import React from 'react';
import { ThemeToggle } from './ThemeToggle';
import { LanguageToggle } from './LanguageToggle';
import { Globe, Moon, Sun, Palette, Check } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';
import { useThemeSettings, type PrimaryColor } from '../../contexts/ThemeSettingsContext';
import { cn } from '../../lib/utils';

// Swatch preview colors (match the .theme-* classes in globals.css)
const colors: { id: PrimaryColor; name: string; hsl: string }[] = [
  { id: 'indigo', name: 'Indigo', hsl: '243 75% 59%' },
  { id: 'blue', name: 'Blue', hsl: '221 83% 53%' },
  { id: 'purple', name: 'Purple', hsl: '262 83% 58%' },
  { id: 'green', name: 'Green', hsl: '152 60% 36%' },
  { id: 'orange', name: 'Orange', hsl: '24 90% 50%' },
];

const SettingRow: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  children: React.ReactNode;
}> = ({ icon, title, description, children }) => (
  <div className="flex flex-col gap-4 p-5 sm:flex-row sm:items-center sm:justify-between">
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border text-muted-foreground">
        {icon}
      </div>
      <div>
        <h4 className="text-sm font-medium text-foreground">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
    </div>
    <div className="flex items-center gap-2">{children}</div>
  </div>
);

export const SettingsContent: React.FC = () => {
  const { theme } = useTheme();
  const { primaryColor, setPrimaryColor } = useThemeSettings();

  return (
    <div className="overflow-hidden rounded-xl border border-border bg-card">
      <div className="border-b border-border p-5">
        <h3 className="text-base font-semibold text-foreground">Giao diện &amp; Ngôn ngữ</h3>
        <p className="text-sm text-muted-foreground">Tùy chỉnh trải nghiệm sử dụng của bạn.</p>
      </div>

      <div className="divide-y divide-border">
        <SettingRow icon={<Globe className="h-4 w-4" />} title="Ngôn ngữ / Language" description="Chọn ngôn ngữ hiển thị.">
          <LanguageToggle />
        </SettingRow>

        <SettingRow
          icon={theme === 'light' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          title="Chế độ hiển thị"
          description="Chuyển đổi giữa giao diện Sáng và Tối."
        >
          <ThemeToggle />
        </SettingRow>

        <SettingRow icon={<Palette className="h-4 w-4" />} title="Màu chủ đạo" description="Chọn màu nhấn cho hệ thống.">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => setPrimaryColor(color.id)}
              className={cn(
                'flex h-7 w-7 items-center justify-center rounded-full transition-shadow focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                primaryColor === color.id && 'ring-2 ring-foreground/80 ring-offset-2 ring-offset-background'
              )}
              style={{ backgroundColor: `hsl(${color.hsl})` }}
              title={color.name}
              aria-label={color.name}
            >
              {primaryColor === color.id && <Check className="h-3.5 w-3.5 text-white" />}
            </button>
          ))}
        </SettingRow>
      </div>
    </div>
  );
};
