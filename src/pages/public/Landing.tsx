import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/home/HeroSection';
import MenuSection from '../../components/home/MenuSection';
import AboutSection from '../../components/home/AboutSection';
import StatsSection from '../../components/home/StatsSection';
import TestimonialCarousel from '../../components/home/TestimonialCarousel';
import Footer from '../../components/Footer';
import { useAppSettings } from '../../contexts/AppSettingsContext';
import { Loading } from '../../components/shared/Loading';

export const LandingPage: React.FC = () => {
  const { settings, loading } = useAppSettings();

  if (loading || !settings) {
      return <Loading fullScreen />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {settings.homepage.showHero && <HeroSection title={settings.homepage.heroTitle} subtitle={settings.homepage.heroSubtitle} />}
        {settings.homepage.showCourses && <MenuSection />}
        {settings.homepage.showStats && <StatsSection />}
        {settings.homepage.showAbout && <AboutSection />}
        {settings.homepage.showTestimonials && <TestimonialCarousel />}
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
