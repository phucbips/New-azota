import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Mail, Phone, MapPin } from "lucide-react";
import { useAppSettings } from "../contexts/AppSettingsContext";

export const Footer = () => {
  const { settings, loading } = useAppSettings();

  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-3">
            <Link to="/" className="flex items-center gap-2.5 text-sm font-semibold text-foreground">
              <div className="flex h-7 w-7 items-center justify-center rounded-md bg-primary text-primary-foreground">
                <GraduationCap className="h-4 w-4" />
              </div>
              EduPlatform
            </Link>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Nền tảng học tập và luyện thi trực tuyến tinh gọn, hiện đại, tối ưu cho học sinh và giáo viên.
            </p>
            {settings?.contact.facebookUrl && (
              <div className="pt-1">
                <a
                  href={settings.contact.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">Khám phá</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/courses" className="transition-colors hover:text-foreground">Tất cả khóa học</Link></li>
              <li><Link to="/login" className="transition-colors hover:text-foreground">Đăng nhập</Link></li>
              <li><Link to="/register" className="transition-colors hover:text-foreground">Đăng ký tài khoản</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">Hỗ trợ</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><span className="text-muted-foreground">Câu hỏi thường gặp</span></li>
              <li><span className="text-muted-foreground">Điều khoản sử dụng</span></li>
              <li><span className="text-muted-foreground">Chính sách bảo mật</span></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-3 text-xs font-semibold uppercase tracking-wider text-foreground">Liên hệ</h3>
            <ul className="space-y-2.5 text-sm text-muted-foreground">
              <li className="flex items-start gap-2.5">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                <span>TP. Hồ Chí Minh, Việt Nam</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`tel:${settings?.contact.hotline || ''}`} className="transition-colors hover:text-foreground">
                  {loading ? 'Đang tải...' : settings?.contact.hotline || '1900 xxxx'}
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="h-4 w-4 shrink-0 text-muted-foreground" />
                <a href={`mailto:${settings?.contact.email || ''}`} className="transition-colors hover:text-foreground">
                  {loading ? 'Đang tải...' : settings?.contact.email || 'support@example.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} EduPlatform. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
