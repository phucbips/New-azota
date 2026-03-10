import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import { BookOpen, TrendingUp, Star, Users } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const HeroSection = ({ title = "Học Tập Không Giới Hạn", subtitle = "Khám phá hàng ngàn khóa học chất lượng từ các chuyên gia hàng đầu. Nâng cao kỹ năng của bạn ngay hôm nay." }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => emblaApi.scrollNext(), 7000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => { emblaApi.off("select", onSelect); };
  }, [emblaApi, onSelect]);

  const slideCount = 2; // Fixed to 2 slides for now

  return (
    <section className="relative">
      <div ref={emblaRef} className="overflow-hidden">
        <div className="flex">
          {/* Slide 1: Main Hero */}
          <div className="relative min-h-[85vh] w-full flex-[0_0_100%] overflow-hidden bg-primary md:min-h-screen">
            <div className="absolute inset-0">
               <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80" />
            </div>

            <div className="relative flex min-h-[85vh] flex-col items-center justify-center py-16 text-center md:min-h-screen md:py-24 z-10">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="flex flex-col items-center gap-4"
              >
                <div className="h-20 w-20 bg-white rounded-full flex items-center justify-center shadow-2xl ring-4 ring-white/30 md:h-28 md:w-28 mb-4">
                     <BookOpen className="w-10 h-10 text-primary md:w-14 md:h-14" />
                </div>
                <h1 className="font-display text-4xl font-extrabold leading-none text-white md:text-6xl lg:text-7xl px-4 whitespace-pre-wrap">
                  {title}
                </h1>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="px-4 mt-8"
              >
                <p className="mb-8 text-lg font-medium text-white/90 md:text-xl max-w-2xl mx-auto whitespace-pre-wrap">
                  {subtitle}
                </p>
                <div className="flex gap-4 justify-center flex-wrap">
                    <Link
                    to="/login"
                    className="inline-block rounded-full bg-white px-8 py-4 text-base font-bold text-primary shadow-xl transition-transform hover:scale-105"
                    >
                    Bắt đầu học miễn phí
                    </Link>
                    <Link
                    to="/courses"
                    className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-4 text-base font-bold text-white transition-all hover:bg-white hover:text-primary"
                    >
                    Khám phá Khóa học
                    </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Slide 2: Trending / Top Courses */}
          <div className="relative min-h-[85vh] w-full flex-[0_0_100%] overflow-hidden bg-slate-900 md:min-h-screen">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

            <div className="relative flex min-h-[85vh] flex-col items-center justify-center px-4 py-16 md:min-h-screen md:py-24">
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="mb-10 text-center"
                >
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/20">
                    <TrendingUp className="h-7 w-7 text-primary" />
                  </div>
                  <h2 className="font-display text-3xl font-extrabold text-white md:text-5xl">
                    Khóa Học Nổi Bật
                  </h2>
                  <p className="mt-2 text-white/60">Được học viên đăng ký nhiều nhất tháng này</p>
                </motion.div>

                <div className="grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
                    {[1, 2, 3].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.15 }}
                        className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm transition-transform hover:-translate-y-2`}
                      >
                        <div className="aspect-[16/9] overflow-hidden bg-muted/20 relative">
                             <div className="absolute inset-0 flex items-center justify-center">
                                 <BookOpen className="w-12 h-12 text-white/20" />
                             </div>
                        </div>
                        <div className="p-6">
                          <div className="flex justify-between items-start mb-2">
                             <span className="text-xs font-semibold px-2 py-1 rounded bg-primary/20 text-primary">Web Development</span>
                             <div className="flex items-center gap-1 text-yellow-400 text-sm">
                                <Star className="w-4 h-4 fill-current" /> 4.9
                             </div>
                          </div>
                          <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">Lập trình ReactJS từ cơ bản đến nâng cao (2024)</h3>
                          <div className="flex items-center gap-4 mt-4 text-sm text-white/60">
                            <span className="flex items-center gap-1"><Users className="w-4 h-4" /> 1.2k học viên</span>
                            <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" /> 45 bài giảng</span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
            </div>
          </div>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2">
        {Array.from({ length: slideCount }).map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi?.scrollTo(i)}
            className={`h-2 rounded-full transition-all ${
              i === selectedIndex ? "w-8 bg-white" : "w-2 bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
