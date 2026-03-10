import { motion } from "framer-motion";
import { Users, BookOpen, Award, CheckCircle } from "lucide-react";

export const StatsSection = () => {
  const stats = [
    { label: "Học Viên", value: "10,000+", icon: Users, color: "text-blue-500", bg: "bg-blue-500/10" },
    { label: "Khóa Học", value: "500+", icon: BookOpen, color: "text-purple-500", bg: "bg-purple-500/10" },
    { label: "Giảng Viên", value: "150+", icon: Award, color: "text-orange-500", bg: "bg-orange-500/10" },
    { label: "Hoàn Thành", value: "98%", icon: CheckCircle, color: "text-green-500", bg: "bg-green-500/10" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${stat.bg} transition-transform group-hover:scale-110 group-hover:-rotate-3`}>
                <stat.icon className={`h-8 w-8 ${stat.color}`} />
              </div>
              <h3 className="font-display text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
                {stat.value}
              </h3>
              <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
