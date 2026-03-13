import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, BookOpen, GraduationCap, ShoppingCart } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Khóa học", href: "/courses" },
    { label: "Về chúng tôi", href: "/about" },
    { label: "Liên hệ", href: "/contact" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 py-4 shadow-sm backdrop-blur-md border-b border-border"
          : "bg-black/20 py-6 backdrop-blur-sm"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="group flex items-center gap-2 text-2xl font-bold transition-transform hover:scale-105"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-lg shadow-primary/30 transition-transform group-hover:rotate-12">
              <GraduationCap className="h-6 w-6" />
            </div>
            <span className={isScrolled ? "text-foreground" : "text-white"}>
              EduPlatform
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-8 md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-sm font-semibold transition-colors ${
                  isActive(item.href)
                    ? "text-primary"
                    : isScrolled
                    ? "text-muted-foreground hover:text-foreground"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-4 md:flex">
            <div className="relative group">
              <Link
                to="/student/courses"
                className={`relative p-2 rounded-full transition-colors flex items-center justify-center ${
                  isScrolled ? "text-foreground hover:bg-muted" : "text-white hover:bg-white/10"
                }`}
              >
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white shadow-sm">
                    {cartItems.length}
                  </span>
                )}
              </Link>

              {/* Hover Cart Dropdown */}
              {cartItems.length > 0 && (
                  <div className="absolute right-0 top-full mt-2 w-80 bg-background rounded-2xl shadow-xl border border-border opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 overflow-hidden flex flex-col">
                      <div className="p-4 border-b border-border bg-muted/30">
                          <h4 className="font-bold text-foreground">Giỏ hàng của bạn</h4>
                      </div>
                      <div className="max-h-[60vh] overflow-y-auto p-2">
                          {cartItems.map((item, idx) => (
                              <div key={idx} className="flex items-center gap-3 p-2 hover:bg-muted/50 rounded-xl transition-colors">
                                  {item.imageUrl ? (
                                      <img src={item.imageUrl} className="w-12 h-12 rounded-lg object-cover" />
                                  ) : (
                                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center"><BookOpen className="w-5 h-5 text-muted-foreground" /></div>
                                  )}
                                  <div className="flex-1 min-w-0">
                                      <p className="text-sm font-bold text-foreground truncate">{item.title}</p>
                                      <p className="text-xs text-emerald-600 font-bold">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.price)}</p>
                                  </div>
                              </div>
                          ))}
                      </div>
                      <div className="p-4 border-t border-border bg-background">
                          <div className="flex items-center justify-between mb-4">
                              <span className="text-sm text-muted-foreground font-medium">Tổng cộng:</span>
                              <span className="text-lg font-bold text-primary">
                                  {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(cartItems.reduce((acc, curr) => acc + curr.price, 0))}
                              </span>
                          </div>
                          <Link
                              to="/student/checkout"
                              className="w-full py-2.5 bg-primary text-white rounded-xl font-bold flex items-center justify-center transition-all hover:bg-primary/90 hover:shadow-md"
                          >
                              Thanh toán ngay
                          </Link>
                      </div>
                  </div>
              )}
            </div>

            {user ? (
              <Link
                to={`/${user.role}`}
                className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
              >
                Vào {user.role === 'admin' ? 'Admin Dashboard' : user.role === 'teacher' ? 'Teacher Dashboard' : 'Student Dashboard'}
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className={`text-sm font-semibold transition-colors ${
                    isScrolled
                      ? "text-muted-foreground hover:text-foreground"
                      : "text-white/80 hover:text-white"
                  }`}
                >
                  Đăng nhập
                </Link>
                <Link
                  to="/register"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30"
                >
                  Đăng ký
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden ${isScrolled ? "text-foreground" : "text-white"}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute left-0 right-0 top-full border-t border-border bg-background shadow-xl md:hidden"
          >
            <nav className="flex flex-col p-4">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block rounded-lg px-4 py-3 text-base font-semibold ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-muted"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <div className="my-4 h-px bg-border" />
              {user ? (
                <Link
                  to={`/${user.role}`}
                  className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Vào {user.role === 'admin' ? 'Admin Dashboard' : user.role === 'teacher' ? 'Teacher Dashboard' : 'Student Dashboard'}
                </Link>
              ) : (
                <div className="flex flex-col gap-2">
                  <Link
                    to="/login"
                    className="block rounded-lg px-4 py-3 text-center text-base font-semibold text-foreground hover:bg-muted"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng nhập
                  </Link>
                  <Link
                    to="/register"
                    className="block rounded-lg bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Đăng ký
                  </Link>
                </div>
              )}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
