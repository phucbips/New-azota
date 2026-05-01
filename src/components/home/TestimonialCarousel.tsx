import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Nguyen Van A",
    role: "ReactJS Student",
    content: "The course is absolutely fantastic. The instructor is detailed and easy to understand. I built a website myself after just 2 weeks.",
    rating: 5,
  },
  {
    id: 2,
    name: "Tran Thi B",
    role: "IT Student",
    content: "The learning platform is very smooth. The automated grading system helps me review knowledge quickly and effectively.",
    rating: 5,
  },
  {
    id: 3,
    name: "Le Hoang C",
    role: "Professional",
    content: "The content closely follows real-world scenarios. I can apply what I learn directly to my job. Highly recommended!",
    rating: 5,
  },
];

export const TestimonialCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

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
    <section className="bg-background py-[80px] md:py-[120px] border-b border-border">
      <div className="container mx-auto px-[24px] max-w-[1280px]">
        <div className="mb-[48px] text-center">
          <h2 className="font-display text-[32px] font-bold text-foreground md:text-[48px]">What our students say</h2>
          <p className="mx-auto mt-[16px] max-w-[600px] text-muted-foreground text-[16px]">
            Thousands of students have transformed their careers with us. Here is their experience.
          </p>
        </div>

        <div className="relative mx-auto">
          <div className="overflow-hidden py-[16px]" ref={emblaRef}>
            <div className="flex -ml-[24px]">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="min-w-0 flex-[0_0_100%] pl-[24px] md:flex-[0_0_50%] lg:flex-[0_0_33.33%]">
                  <div className="relative h-full rounded-[12px] border border-border bg-surface p-[24px] transition-all hover:-translate-y-[2px] hover:shadow-card-hover flex flex-col">
                    <div className="mb-[16px] flex gap-[4px]">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-[16px] w-[16px] ${
                            i < testimonial.rating ? "fill-[#F59E0B] text-[#F59E0B]" : "fill-muted text-muted"
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mb-[24px] text-[15px] text-foreground leading-relaxed flex-grow">"{testimonial.content}"</p>
                    <div className="flex items-center gap-[16px] mt-auto pt-[16px] border-t border-border">
                      <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-accent text-[14px] font-bold text-foreground">
                        {testimonial.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="font-bold text-[14px] text-foreground">{testimonial.name}</h4>
                        <p className="text-[12px] text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-[32px] flex justify-center gap-[8px]">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-[6px] rounded-full transition-all ${
                  index === selectedIndex ? "w-[24px] bg-primary" : "w-[6px] bg-border hover:bg-muted"
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
