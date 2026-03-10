import { motion } from "framer-motion";
import { CheckCircle2, MonitorPlay, Target, Users2 } from "lucide-react";

export const AboutSection = () => {
  const features = [
    {
      icon: MonitorPlay,
      title: "Học mọi lúc, mọi nơi",
      description: "Tiếp cận hàng ngàn bài giảng video chất lượng cao trên mọi thiết bị.",
    },
    {
      icon: Target,
      title: "Lộ trình rõ ràng",
      description: "Được thiết kế chuẩn hóa giúp bạn đạt được mục tiêu nhanh nhất.",
    },
    {
      icon: Users2,
      title: "Cộng đồng hỗ trợ",
      description: "Hỏi đáp, trao đổi cùng hàng ngàn học viên và giảng viên khác.",
    },
    {
      icon: CheckCircle2,
      title: "Chứng nhận hoàn thành",
      description: "Nhận chứng chỉ sau mỗi khóa học để nâng cấp CV của bạn.",
    },
  ];

  return (
    <section className="bg-background py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 aspect-square overflow-hidden rounded-3xl lg:aspect-[4/5]">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1471&q=80"
                alt="Students learning"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 -z-10 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
            <div className="absolute -right-8 -top-8 -z-10 h-64 w-64 rounded-full bg-secondary/20 blur-3xl"></div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="absolute -right-12 bottom-24 hidden rounded-2xl border border-white/20 bg-white/90 p-6 shadow-xl backdrop-blur-md md:block dark:bg-slate-800/90 dark:border-slate-700"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">98%</p>
                  <p className="text-sm font-medium text-muted-foreground">Học viên hài lòng</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="font-display text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl mb-6">
                Tại sao chọn chúng tôi?
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Chúng tôi cam kết mang đến trải nghiệm học tập tốt nhất, kết hợp công nghệ hiện đại và nội dung giáo dục chất lượng. Giúp bạn phát triển kỹ năng toàn diện.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              {features.map((feature, i) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-card-foreground">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="pt-4">
              <button className="rounded-full bg-primary px-8 py-4 text-sm font-bold text-primary-foreground shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl">
                Tìm hiểu thêm
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
