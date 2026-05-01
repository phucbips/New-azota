import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useAppSettings } from "../contexts/AppSettingsContext";

export const Footer = () => {
  const { settings, loading } = useAppSettings();

  return (
    <footer className="bg-surface border-t border-border pt-16 pb-8 text-muted-foreground mt-auto">
      <div className="container mx-auto px-[24px] max-w-[1280px]">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 transition-opacity hover:opacity-80">
              <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary text-white">
                <GraduationCap className="h-5 w-5" />
              </div>
              <span className="font-display font-bold text-foreground tracking-tight text-[16px]">EduPlatform</span>
            </Link>
            <p className="text-[14px] leading-relaxed">
              Nền tảng học tập trực tuyến hàng đầu, cung cấp các khóa học chất lượng cao từ những chuyên gia giàu kinh nghiệm.
            </p>
            <div className="flex gap-3">
              {settings?.contact.facebookUrl && (
                <a href={settings.contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-accent text-muted-foreground transition-colors hover:bg-primary hover:text-white">
                  <Facebook className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-display text-[16px] font-bold text-foreground">Khám phá</h3>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/courses" className="transition-colors hover:text-foreground">Tất cả khóa học</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-foreground">Về chúng tôi</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-foreground">Bài viết mới</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-[16px] font-bold text-foreground">Hỗ trợ</h3>
            <ul className="space-y-3 text-[14px]">
              <li><Link to="/faq" className="transition-colors hover:text-foreground">Câu hỏi thường gặp</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-foreground">Điều khoản sử dụng</Link></li>
              <li><Link to="/privacy" className="transition-colors hover:text-foreground">Chính sách bảo mật</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-display text-[16px] font-bold text-foreground">Liên hệ</h3>
            <ul className="space-y-3 text-[14px]">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span>123 Đường Học Tập, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-primary" />
                <a href={`tel:${settings?.contact.hotline || ''}`} className="transition-colors hover:text-foreground">
                  {loading ? 'Đang tải...' : settings?.contact.hotline || '1900 xxxx'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                <a href={`mailto:${settings?.contact.email || ''}`} className="transition-colors hover:text-foreground">
                  {loading ? 'Đang tải...' : settings?.contact.email || 'support@example.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[13px]">
          <p>© {new Date().getFullYear()} EduPlatform. All rights reserved.</p>
          <div className="flex items-center gap-4">
             <span className="flex items-center gap-1"><div className="w-2 h-2 rounded-full bg-success"></div> Hệ thống hoạt động bình thường</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
