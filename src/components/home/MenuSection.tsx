import { motion } from "framer-motion";
import { BookOpen, Star, PlayCircle, Users } from "lucide-react";
import { Link } from "react-router-dom";

export const MenuSection = () => {
  const courses = [
    {
      id: 1,
      title: "Lập trình ReactJS Thực Chiến",
      category: "Web Development",
      students: 1250,
      lessons: 45,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 2,
      title: "Khoá học UI/UX Design cơ bản",
      category: "Design",
      students: 840,
      lessons: 32,
      rating: 4.8,
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 3,
      title: "Tiếng Anh Giao Tiếp Cho Người Đi Làm",
      category: "Language",
      students: 2100,
      lessons: 60,
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1546410531-ea4cea477149?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
    {
      id: 4,
      title: "Khóa học Marketing Chuyên Sâu",
      category: "Marketing",
      students: 1560,
      lessons: 50,
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    },
  ];

  return (
    <section className="bg-muted/10 py-20 md:py-32" id="courses">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-20 md:flex-row"
        >
          <div className="text-center md:text-left">
            <h2 className="font-display text-4xl font-extrabold text-foreground md:text-5xl lg:text-6xl">
              Khóa Học Phổ Biến
            </h2>
            <p className="mt-4 max-w-2xl text-lg text-muted-foreground">
              Lựa chọn khóa học phù hợp với mục tiêu của bạn từ thư viện khóa học đa dạng của chúng tôi.
            </p>
          </div>
          <Link
            to="/courses"
            className="group flex items-center gap-2 rounded-full border-2 border-primary bg-transparent px-8 py-3 text-sm font-bold text-primary transition-all hover:bg-primary hover:text-primary-foreground"
          >
            Xem tất cả
            <svg
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course, i) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <img
                  src={course.image}
                  alt={course.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <button className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 scale-50 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
                  <PlayCircle className="h-16 w-16 fill-primary text-white" />
                </button>
                <div className="absolute left-4 top-4 rounded-full bg-background/90 px-3 py-1 text-xs font-bold text-foreground backdrop-blur-md">
                  {course.category}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-1 text-yellow-500">
                    <Star className="h-4 w-4 fill-current" />
                    <span className="font-bold">{course.rating}</span>
                  </div>
                </div>

                <h3 className="mb-4 font-display text-xl font-bold text-card-foreground line-clamp-2 group-hover:text-primary transition-colors">
                  <Link to={`/courses/${course.id}`}>{course.title}</Link>
                </h3>

                <div className="mt-auto flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4" />
                    <span>{course.students.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    <span>{course.lessons} bài giảng</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
