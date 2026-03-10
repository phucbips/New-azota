import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/home/HeroSection';
import MenuSection from '../../components/home/MenuSection';
import AboutSection from '../../components/home/AboutSection';
import StatsSection from '../../components/home/StatsSection';
import TestimonialCarousel from '../../components/home/TestimonialCarousel';
import Footer from '../../components/Footer';

export const LandingPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <MenuSection />
        <StatsSection />
        <AboutSection />
        <TestimonialCarousel />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;
