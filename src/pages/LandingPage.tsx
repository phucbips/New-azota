import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  BarChart3,
  Users,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2
} from 'lucide-react';

export const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-primary/20">
      {/* Header / Nav (Dense) */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <div className="container mx-auto px-4 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded bg-primary flex items-center justify-center text-primary-foreground">
              <Code2 className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight font-display">WebHocTap</span>
          </div>
          <div className="flex items-center gap-4">
             <button
               onClick={() => navigate('/login')}
               className="text-sm font-medium hover:text-primary transition-colors"
             >
               Sign In
             </button>
             <button
               onClick={() => navigate('/login')}
               className="bg-primary hover:bg-primary/90 text-primary-foreground px-4 py-1.5 rounded text-sm font-medium transition-colors shadow-sm"
             >
               Get Started
             </button>
          </div>
        </div>
      </header>

      {/* Hero Section (Dense & Impactful) */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto max-w-5xl text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 text-secondary-foreground text-xs font-mono mb-6 border border-secondary/20">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            v2.0.0 Stable Release
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 text-foreground font-display">
            Data-Driven Education <br/>
            <span className="text-primary">Management System</span>
          </h1>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Enterprise-grade analytics, real-time tracking, and seamless drill-down capabilities for modern educational institutions.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-3 bg-[#F97316] hover:bg-[#EA580C] text-white rounded font-semibold shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2"
            >
              Start Free Trial <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => navigate('/login')}
              className="w-full sm:w-auto px-8 py-3 bg-card border border-border hover:bg-muted text-foreground rounded font-medium transition-colors"
            >
              View Demo
            </button>
          </div>

          {/* Abstract Dashboard Preview (CSS Grid) */}
          <div className="mt-16 p-2 bg-border/50 rounded-lg max-w-4xl mx-auto">
             <div className="bg-card rounded shadow-xl border border-border p-4 grid grid-cols-12 gap-4 h-[300px] overflow-hidden opacity-90">
                {/* Sidebar Mockup */}
                <div className="hidden sm:block col-span-2 bg-muted/30 rounded border border-border/50 h-full"></div>
                {/* Main Content */}
                <div className="col-span-12 sm:col-span-10 grid grid-cols-3 gap-4 grid-rows-3 h-full">
                    <div className="bg-muted/10 border border-border/50 rounded p-4 col-span-3 row-span-1 flex items-center justify-between">
                        <div className="h-4 w-32 bg-muted/50 rounded"></div>
                        <div className="h-8 w-8 bg-primary/20 rounded-full"></div>
                    </div>
                    <div className="bg-primary/5 border border-primary/20 rounded p-4 col-span-1 row-span-2"></div>
                    <div className="bg-muted/10 border border-border/50 rounded p-4 col-span-1 row-span-2"></div>
                    <div className="bg-muted/10 border border-border/50 rounded p-4 col-span-1 row-span-2"></div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Features Grid (Data-Dense) */}
      <section className="py-20 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold font-display mb-4">Core Capabilities</h2>
            <p className="text-muted-foreground max-w-xl mx-auto">High-performance tools designed for administrative efficiency.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
            {[
              {
                icon: <BarChart3 className="w-5 h-5 text-primary" />,
                title: "Real-time Analytics",
                desc: "Live visitor tracking and performance metrics with sub-second latency."
              },
              {
                icon: <Users className="w-5 h-5 text-primary" />,
                title: "User Management",
                desc: "Bulk operations, role-based access control (RBAC), and detailed audit logs."
              },
              {
                icon: <ShieldCheck className="w-5 h-5 text-primary" />,
                title: "Enterprise Security",
                desc: "SOC2 compliant infrastructure with automated threat detection."
              },
              {
                icon: <Zap className="w-5 h-5 text-primary" />,
                title: "High Performance",
                desc: "Optimized for speed with edge caching and minimal bundle size."
              }
            ].map((feature, idx) => (
              <div key={idx} className="bg-card p-6 rounded border border-border hover:border-primary/50 transition-colors group">
                <div className="mb-4 p-2 bg-primary/10 w-fit rounded group-hover:bg-primary/20 transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-bold text-lg mb-2 text-foreground font-display">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        <div className="container mx-auto max-w-3xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Ready to optimize your workflow?</h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">Join 10,000+ institutions using WebHocTap for data-driven decisions.</p>
          <button
            onClick={() => navigate('/login')}
            className="px-8 py-3 bg-white text-primary rounded font-bold hover:bg-gray-100 transition-colors shadow-lg"
          >
            Get Started Now
          </button>
        </div>
      </section>

      {/* Footer (Technical/Mono) */}
      <footer className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-4">
            <span>© 2024 WebHocTap Inc.</span>
            <span>Build: v2.4.1</span>
            <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-500"></span>
                System Operational
            </span>
          </div>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground">Terms</a>
            <a href="#" className="hover:text-foreground">Privacy</a>
            <a href="#" className="hover:text-foreground">Status</a>
            <a href="#" className="hover:text-foreground">API</a>
          </div>
        </div>
      </footer>
    </div>
  );
};
