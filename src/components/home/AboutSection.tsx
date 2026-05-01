import { MonitorPlay, Target, Users2, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";

export const AboutSection = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "Learn Anywhere",
      description: "Access thousands of high-quality video lectures on any device, at your own pace.",
    },
    {
      icon: Target,
      title: "Clear Roadmaps",
      description: "Structured learning paths designed to help you achieve your goals faster.",
    },
    {
      icon: Users2,
      title: "Community Support",
      description: "Ask questions and collaborate with thousands of other students and instructors.",
    },
    {
      icon: CheckCircle2,
      title: "Certifications",
      description: "Earn certificates after completing courses to showcase your new skills.",
    },
  ];

  return (
    <section className="bg-surface py-[80px] md:py-[120px] border-b border-border">
      <div className="container mx-auto px-[24px] max-w-[1280px]">
        <div className="grid grid-cols-1 gap-[48px] lg:grid-cols-2 lg:gap-[80px] items-center">

          <div className="relative order-2 lg:order-1">
            <div className="aspect-square overflow-hidden rounded-[12px] border border-border">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating stat card - updated to Genesis style */}
            <div className="absolute -right-[24px] bottom-[48px] hidden rounded-[12px] border border-border bg-surface p-[24px] shadow-card-hover md:block">
              <div className="flex items-center gap-[16px]">
                <div className="flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-success/10 text-success">
                  <CheckCircle2 className="h-[20px] w-[20px]" />
                </div>
                <div>
                  <p className="font-display text-[24px] font-bold text-foreground">98%</p>
                  <p className="text-[13px] text-muted-foreground">Satisfaction rate</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-[32px] order-1 lg:order-2">
            <div>
              <h2 className="font-display text-[32px] font-bold text-foreground md:text-[48px] mb-[16px] leading-tight">
                Why choose our platform?
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                We are committed to providing the best learning experience, combining modern technology and quality educational content to help you develop comprehensive skills.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-[24px] sm:grid-cols-2">
              {features.map((feature, i) => (
                <div key={i} className="flex flex-col">
                  <div className="mb-[12px] inline-flex h-[40px] w-[40px] items-center justify-center rounded-[8px] bg-accent text-foreground">
                    <feature.icon className="h-[20px] w-[20px]" />
                  </div>
                  <h3 className="mb-[8px] text-[16px] font-bold text-foreground">{feature.title}</h3>
                  <p className="text-[14px] text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="pt-[16px]">
              <Button asChild size="lg">
                <Link to="/courses">Explore all courses</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
