import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/app/components/HeroSection';
import AboutSection from '@/app/components/AboutSection';
import SkillsSection from '@/app/components/SkillsSection';
import ProjectsSection from '@/app/components/ProjectsSection';
import ExperienceSection from '@/app/components/ExperienceSection';
import ContactSection from '@/app/components/ContactSection';
import CursorGlow from '@/app/components/CursorGlow';
import ScrollRevealInit from '@/app/components/ScrollRevealInit';

export default function HomePage() {
  return (
    <>
      <CursorGlow />
      <ScrollRevealInit />
      <Header />
      <main className="relative overflow-x-hidden">
        {/* Decorative vertical grid lines */}
        <div className="grid-line left-[8%] hidden lg:block" />
        <div className="grid-line left-[50%] hidden lg:block" />
        <div className="grid-line right-[8%] hidden lg:block" />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}