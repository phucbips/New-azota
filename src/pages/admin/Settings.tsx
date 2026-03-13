import React, { useState, useEffect } from 'react';
import { PageHeader } from '../../components/ui/PageHeader';
import { SettingsContent } from '../../components/shared/SettingsContent';
import { useTranslation } from 'react-i18next';
import { useAppSettings } from '../../contexts/AppSettingsContext';
import { AppSettings } from '../../services/appSettings.service';
import { toast } from 'sonner';
import { Phone, Mail, MessageSquare, Facebook, Link as LinkIcon, Save, Settings, ShieldCheck, CreditCard, LayoutTemplate, Plus, Trash2, Eye, EyeOff } from 'lucide-react';
import { SaaSButton } from '../../components/ui/SaaSButton';
import { Loading } from '../../components/shared/Loading';
import CloudinaryUploadWidget from '../../components/ui/CloudinaryUploadWidget';
import { Switch } from '../../components/ui/switch';

export const AdminSettings: React.FC = () => {
  const { t } = useTranslation();
  const { settings, loading, updateSettings } = useAppSettings();
  const [formData, setFormData] = useState<AppSettings | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [showApiKey, setShowApiKey] = useState(false);
  const [showChecksum, setShowChecksum] = useState(false);

  // Sync state when settings are loaded
  useEffect(() => {
    if (settings && !formData) {
      setFormData(settings);
    }
  }, [settings, formData]);

  if (loading || !formData) {
    return <Loading />;
  }

  const handleChange = (section: keyof AppSettings, field: string, value: string | boolean) => {
    setFormData((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [section]: {
          ...(prev[section] as any),
          [field]: value,
        },
      };
    });
  };

  const handleSave = async () => {
    setIsSaving(true);
    try {
      await updateSettings(formData);
      toast.success(t('messages.success'));
    } catch (error) {
      console.error(error);
      toast.error(t('messages.error'));
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col gap-6 max-w-6xl mx-auto pb-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-card p-6 rounded-2xl border border-border shadow-sm">
        <div>
            <h1 className="text-2xl font-bold tracking-tight text-foreground">{t('sidebar.settings')}</h1>
            <p className="text-sm text-muted-foreground mt-2 font-medium">Cấu hình hệ thống, liên hệ và thanh toán</p>
        </div>
        <SaaSButton
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2 rounded-xl px-6 py-2.5 shadow-md hover:shadow-lg transition-all"
        >
            <Save className="w-4 h-4" />
            {isSaving ? 'Đang lưu...' : 'Lưu thay đổi'}
        </SaaSButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        {/* Left Column */}
        <div className="flex flex-col gap-6">

            {/* System Preferences (Theme/Lang) */}
            <SettingsContent />

            {/* General Features */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-border flex items-center gap-4">
                    <div className="p-3 bg-blue-50 dark:bg-blue-900/30 rounded-xl text-blue-600 dark:text-blue-400">
                        <Settings className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground">Cấu hình chung</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">Tùy chỉnh các tính năng cốt lõi</p>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Cho phép Đăng ký</p>
                            <p className="text-sm text-muted-foreground">Mở hoặc đóng chức năng đăng ký tài khoản mới.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={formData.features.enableRegistration}
                                onChange={(e) => handleChange('features', 'enableRegistration', e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>

                    <div className="flex items-center justify-between">
                        <div>
                            <p className="font-medium text-foreground">Chế độ Bảo trì</p>
                            <p className="text-sm text-muted-foreground">Khóa truy cập hệ thống đối với học viên.</p>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={formData.features.maintenanceMode}
                                onChange={(e) => handleChange('features', 'maintenanceMode', e.target.checked)}
                            />
                            <div className="w-11 h-6 bg-muted peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary"></div>
                        </label>
                    </div>
                </div>
            </div>

            {/* Homepage Customization */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-border flex items-center gap-4">
                    <div className="p-3 bg-pink-50 dark:bg-pink-900/30 rounded-xl text-pink-600 dark:text-pink-400">
                        <LayoutTemplate className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground">Giao diện Trang chủ</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">Tùy chỉnh các khối hiển thị và nội dung</p>
                    </div>
                </div>
                <div className="p-6 space-y-6">
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Tiêu đề Hero</label>
                        <input
                            type="text"
                            value={formData.homepage.heroTitle}
                            onChange={(e) => handleChange('homepage', 'heroTitle', e.target.value)}
                            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background text-foreground transition-all shadow-sm"
                            placeholder="VD: Học Tập Không Giới Hạn"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Mô tả Hero</label>
                        <textarea
                            value={formData.homepage.heroSubtitle}
                            onChange={(e) => handleChange('homepage', 'heroSubtitle', e.target.value)}
                            rows={3}
                            className="w-full px-4 py-3 border border-input rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary bg-background text-foreground transition-all shadow-sm resize-none"
                            placeholder="Nhập mô tả ngắn cho trang chủ..."
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-foreground mb-2">Ảnh/Video Nền (Hero Background)</label>
                        <CloudinaryUploadWidget
                            onSuccess={(url) => handleChange('homepage', 'heroBackgroundUrl', url)}
                            folder="settings"
                        />
                        {formData.homepage.heroBackgroundUrl && (
                            <div className="mt-3 relative w-full h-32 rounded-xl overflow-hidden border border-border shadow-sm group">
                                {formData.homepage.heroBackgroundUrl.endsWith('.mp4') || formData.homepage.heroBackgroundUrl.endsWith('.webm') ? (
                                    <video src={formData.homepage.heroBackgroundUrl} className="w-full h-full object-cover" muted loop autoPlay />
                                ) : (
                                    <img src={formData.homepage.heroBackgroundUrl} className="w-full h-full object-cover" alt="Hero Background" />
                                )}
                                <button
                                    onClick={() => handleChange('homepage', 'heroBackgroundUrl', '')}
                                    className="absolute top-2 right-2 bg-red-500 text-white p-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity shadow-md"
                                >
                                    <Trash2 className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Thống kê động */}
                    <div className="pt-4 border-t border-border space-y-4">
                         <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">Số liệu Thống kê (Stats Section)</h4>
                         {formData.homepage.stats?.map((stat, idx) => (
                             <div key={idx} className="flex gap-2 items-center">
                                 <input
                                     value={stat.label}
                                     onChange={(e) => {
                                         const newStats = [...formData.homepage.stats];
                                         newStats[idx].label = e.target.value;
                                         handleChange('homepage', 'stats', newStats as any);
                                     }}
                                     className="flex-1 px-3 py-2 border border-input rounded-lg bg-background text-sm focus:ring-2 focus:ring-primary/20"
                                     placeholder="VD: Học viên"
                                 />
                                 <input
                                     value={stat.value}
                                     onChange={(e) => {
                                         const newStats = [...formData.homepage.stats];
                                         newStats[idx].value = e.target.value;
                                         handleChange('homepage', 'stats', newStats as any);
                                     }}
                                     className="w-32 px-3 py-2 border border-input rounded-lg bg-background text-sm font-bold focus:ring-2 focus:ring-primary/20"
                                     placeholder="VD: 10k+"
                                 />
                                 <button
                                     onClick={() => {
                                         const newStats = formData.homepage.stats.filter((_, i) => i !== idx);
                                         handleChange('homepage', 'stats', newStats as any);
                                     }}
                                     className="p-2 text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                 >
                                     <Trash2 className="w-4 h-4" />
                                 </button>
                             </div>
                         ))}
                         <button
                             onClick={() => {
                                 const newStats = [...(formData.homepage.stats || []), { label: 'Mục mới', value: '100' }];
                                 handleChange('homepage', 'stats', newStats as any);
                             }}
                             className="text-primary text-sm font-bold flex items-center gap-1 hover:underline"
                         >
                             <Plus className="w-4 h-4" /> Thêm chỉ số
                         </button>
                    </div>

                    <div className="space-y-4 pt-4 border-t border-border">
                        <h4 className="font-semibold text-sm text-foreground uppercase tracking-wide">Bật/Tắt các khối</h4>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { id: 'showHero', label: 'Khối Hero (Banner chính)', desc: 'Banner to nhất ở đầu trang' },
                                { id: 'showCourses', label: 'Khối Khóa học', desc: 'Danh sách các khóa học thịnh hành' },
                                { id: 'showStats', label: 'Khối Thống kê', desc: 'Các con số ấn tượng' },
                                { id: 'showAbout', label: 'Khối Về chúng tôi', desc: 'Giới thiệu ngắn' },
                                { id: 'showTestimonials', label: 'Khối Đánh giá', desc: 'Review từ học viên' }
                            ].map((item) => (
                                <div key={item.id} className="flex items-center justify-between p-4 rounded-xl border border-border bg-background hover:border-primary/50 transition-colors">
                                    <div>
                                        <div className="font-bold text-foreground text-sm">{item.label}</div>
                                        <div className="text-xs text-muted-foreground mt-0.5">{item.desc}</div>
                                    </div>
                                    <Switch
                                        checked={(formData.homepage as any)[item.id]}
                                        onCheckedChange={(checked) => handleChange('homepage', item.id, checked)}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-6">

            {/* Contact Info */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-border flex items-center gap-4">
                    <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-xl text-green-600 dark:text-green-400">
                        <MessageSquare className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground">Thông tin Liên hệ</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">Thông tin hiển thị cho học viên</p>
                    </div>
                </div>
                <div className="p-6 space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            <div className="flex items-center gap-2"><Phone className="w-4 h-4"/> Hotline</div>
                        </label>
                        <input
                            type="text"
                            value={formData.contact.hotline}
                            onChange={(e) => handleChange('contact', 'hotline', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground"
                            placeholder="Nhập số điện thoại hotline..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            <div className="flex items-center gap-2"><Mail className="w-4 h-4"/> Email Hỗ trợ</div>
                        </label>
                        <input
                            type="email"
                            value={formData.contact.email}
                            onChange={(e) => handleChange('contact', 'email', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground"
                            placeholder="Nhập email hỗ trợ..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            <div className="flex items-center gap-2"><LinkIcon className="w-4 h-4"/> Link Zalo Group</div>
                        </label>
                        <input
                            type="text"
                            value={formData.contact.zaloUrl}
                            onChange={(e) => handleChange('contact', 'zaloUrl', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground"
                            placeholder="Nhập link nhóm Zalo..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            <div className="flex items-center gap-2"><Facebook className="w-4 h-4"/> Fanpage Facebook</div>
                        </label>
                        <input
                            type="text"
                            value={formData.contact.facebookUrl}
                            onChange={(e) => handleChange('contact', 'facebookUrl', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground"
                            placeholder="Nhập link fanpage facebook..."
                        />
                    </div>

                </div>
            </div>

            {/* Integrations */}
            <div className="bg-card rounded-2xl border border-border shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                <div className="p-6 border-b border-border flex items-center gap-4">
                    <div className="p-3 bg-purple-50 dark:bg-purple-900/30 rounded-xl text-purple-600 dark:text-purple-400">
                        <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                        <h3 className="text-lg font-bold text-card-foreground">Thanh toán PayOS</h3>
                        <p className="text-sm font-medium text-muted-foreground mt-1">Cấu hình cổng thanh toán tự động</p>
                    </div>
                </div>
                <div className="p-6 space-y-5">

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Client ID
                        </label>
                        <input
                            type="text"
                            value={formData.integrations.payosClientId}
                            onChange={(e) => handleChange('integrations', 'payosClientId', e.target.value)}
                            className="w-full px-3 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground font-mono text-sm"
                            placeholder="Nhập Client ID..."
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            API Key
                        </label>
                        <div className="relative">
                            <input
                                type={showApiKey ? "text" : "password"}
                                value={formData.integrations.payosApiKey}
                                onChange={(e) => handleChange('integrations', 'payosApiKey', e.target.value)}
                                className="w-full pl-3 pr-10 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground font-mono text-sm"
                                placeholder="Nhập API Key..."
                            />
                            <button
                                type="button"
                                onClick={() => setShowApiKey(!showApiKey)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showApiKey ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-foreground mb-1">
                            Checksum Key
                        </label>
                        <div className="relative">
                            <input
                                type={showChecksum ? "text" : "password"}
                                value={formData.integrations.payosChecksumKey}
                                onChange={(e) => handleChange('integrations', 'payosChecksumKey', e.target.value)}
                                className="w-full pl-3 pr-10 py-2 border border-input rounded-lg focus:ring-2 focus:ring-ring focus:border-input bg-background text-foreground font-mono text-sm"
                                placeholder="Nhập Checksum Key..."
                            />
                            <button
                                type="button"
                                onClick={() => setShowChecksum(!showChecksum)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                            >
                                {showChecksum ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                            </button>
                        </div>
                    </div>

                </div>
            </div>

        </div>
      </div>
    </div>
  );
};
