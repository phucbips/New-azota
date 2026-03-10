import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Nguyễn Văn A",
    role: "Học viên Khóa ReactJS",
    content: "Khóa học thực sự rất tuyệt vời, giảng viên hướng dẫn chi tiết và dễ hiểu. Tôi đã có thể tự tay làm một website chỉ sau 2 tuần học.",
    rating: 5,
  },
  {
    id: 2,
    name: "Trần Thị B",
    role: "Sinh viên CNTT",
    content: "Nền tảng học tập rất mượt mà. Hệ thống làm bài tập và chấm điểm tự động giúp tôi ôn tập kiến thức nhanh chóng.",
    rating: 5,
  },
  {
    id: 3,
    name: "Lê Hoàng C",
    role: "Người đi làm",
    content: "Nội dung bám sát thực tế, học xong có thể áp dụng vào công việc ngay. Rất đáng tiền!",
    rating: 4,
  },
];

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [emblaApi]);

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="font-display text-3xl font-bold text-foreground md:text-5xl">Học Viên Nói Gì?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-lg">
            Hàng ngàn học viên đã và đang thay đổi sự nghiệp của mình cùng chúng tôi.
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-6xl">
          <div className="overflow-hidden px-4 py-8" ref={emblaRef}>
            <div className="flex -ml-4">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] pl-4 md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                  <div className="relative h-full rounded-3xl border border-border bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
                    <Quote className="absolute right-6 top-6 h-12 w-12 text-primary/10" />
                    <div className="mb-6 flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${
                            i < testimonial.rating ? "fill-yellow-400 text-yellow-400" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-6 text-card-foreground leading-relaxed">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-xl font-bold text-primary">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2.5 rounded-full transition-all ${
                  index === selectedIndex ? "w-8 bg-primary" : "w-2.5 bg-primary/20 hover:bg-primary/40"
                }`}
                onClick={() => emblaApi?.scrollTo(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
