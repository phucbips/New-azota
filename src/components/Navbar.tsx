import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, GraduationCap, ShoppingCart } from "lucide-react";
import { useAuth } from "../hooks/useAuth";
import { useCart } from "../contexts/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useAuth();
  const { cartItems } = useCart();
  const location = useLocation();

  const menuItems = [
    { label: "Trang chủ", href: "/" },
    { label: "Khóa học", href: "/courses" },
  ];

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  return (
    <header
      className="fixed left-0 right-0 top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-border h-[56px] flex items-center"
    >
      <div className="container mx-auto px-[24px]">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 transition-transform hover:opacity-80"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-[6px] bg-primary text-white">
              <GraduationCap className="h-5 w-5" />
            </div>
            <span className="text-[16px] font-bold text-foreground font-display tracking-tight">
              EduPlatform
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-[24px] md:flex">
            {menuItems.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[14px] font-medium transition-colors hover:bg-accent px-3 py-1.5 rounded-[6px] ${
                  isActive(item.href)
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden items-center gap-[16px] md:flex">
            {user?.role === 'student' && (
              <Link to="/student/cart" className="relative p-2 text-muted-foreground hover:text-foreground hover:bg-accent rounded-[6px] transition-colors">
                <ShoppingCart className="w-5 h-5" />
                {cartItems.length > 0 && (
                  <span className="absolute top-0 right-0 -mt-1 -mr-1 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-white">
                    {cartItems.length}
                  </span>
                )}
              </Link>
            )}

            {user ? (
              <Button asChild size="sm">
                <Link to={`/${user.role}`}>
                  Vào Dashboard
                </Link>
              </Button>
            ) : (
              <>
                <Button asChild variant="ghost" size="sm">
                  <Link to="/login">Đăng nhập</Link>
                </Button>
                <Button asChild size="sm">
                  <Link to="/register">Đăng ký</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:bg-accent p-2 rounded-[6px]"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
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
            className="absolute left-0 right-0 top-[56px] border-b border-border bg-background shadow-lg md:hidden overflow-hidden"
          >
            <nav className="flex flex-col p-[16px] gap-[8px]">
              {menuItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`block rounded-[6px] px-4 py-2 text-[14px] font-medium ${
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-foreground hover:bg-accent"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}

              <div className="h-px bg-border my-2" />

              {user ? (
                <Button asChild className="w-full justify-center">
                  <Link to={`/${user.role}`} onClick={() => setIsMenuOpen(false)}>
                    Vào Dashboard
                  </Link>
                </Button>
              ) : (
                <div className="flex flex-col gap-2">
                  <Button asChild variant="secondary" className="w-full justify-center">
                    <Link to="/login" onClick={() => setIsMenuOpen(false)}>Đăng nhập</Link>
                  </Button>
                  <Button asChild className="w-full justify-center">
                    <Link to="/register" onClick={() => setIsMenuOpen(false)}>Đăng ký</Link>
                  </Button>
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
