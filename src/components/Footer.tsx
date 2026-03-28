import { Link } from "react-router-dom";
import { GraduationCap, Facebook, Instagram, Twitter, Mail, Phone, MapPin } from "lucide-react";
import { useAppSettings } from "../contexts/AppSettingsContext";

export const Footer = () => {
  const { settings, loading } = useAppSettings();

  return (
    <footer className="bg-slate-900 pt-20 pb-10 text-slate-300">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold text-white">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              EduPlatform
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Nền tảng học tập trực tuyến hàng đầu, cung cấp các khóa học chất lượng cao từ những chuyên gia giàu kinh nghiệm.
            </p>
            <div className="flex gap-4">
              {settings?.contact.facebookUrl && (
                <a href={settings.contact.facebookUrl} target="_blank" rel="noopener noreferrer" className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 transition-colors hover:bg-primary hover:text-white">
                  <Facebook className="h-5 w-5" />
                </a>
              )}
            </div>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Khám phá</h3>
            <ul className="space-y-4">
              <li><Link to="/courses" className="transition-colors hover:text-primary">Tất cả khóa học</Link></li>
              <li><Link to="/about" className="transition-colors hover:text-primary">Về chúng tôi</Link></li>
              <li><Link to="/blog" className="transition-colors hover:text-primary">Bài viết mới</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-primary">Liên hệ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Hỗ trợ</h3>
            <ul className="space-y-4">
              <li><Link to="/faq" className="transition-colors hover:text-primary">Câu hỏi thường gặp</Link></li>
              <li><Link to="/terms" className="transition-colors hover:text-primary">Điều khoản sử dụng</Link></li>
              <li><Link to="/privacy" className="transition-colors hover:text-primary">Chính sách bảo mật</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 font-display text-lg font-bold text-white">Liên hệ</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="mt-1 h-5 w-5 shrink-0 text-primary" />
                <span>123 Đường Học Tập, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 shrink-0 text-primary" />
                <a href={`tel:${settings?.contact.hotline || ''}`} className="transition-colors hover:text-primary">
                  {loading ? 'Đang tải...' : settings?.contact.hotline || '1900 xxxx'}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 shrink-0 text-primary" />
                <a href={`mailto:${settings?.contact.email || ''}`} className="transition-colors hover:text-primary">
                  {loading ? 'Đang tải...' : settings?.contact.email || 'support@example.com'}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-800 pt-8 text-center text-sm text-slate-500">
          <p>© {new Date().getFullYear()} EduPlatform. Đã đăng ký bản quyền.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
