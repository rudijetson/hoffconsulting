import React, { useState, useEffect, useRef } from 'react';
import MainLayout from '../layouts/MainLayout';
import HeroSection from '../sections/HeroSection';
import AboutSection from '../sections/AboutSection';
import SkillsSection from '../sections/SkillsSection';
import ExperienceSection from '../sections/ExperienceSection';
import ProjectsSection from '../sections/ProjectsSection';
import FeaturedInSection from '../sections/FeaturedInSection';
import ContactSection from '../sections/ContactSection';
import DemoSection from '../sections/DemoSection';

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true);
  const contactRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust this delay as needed

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <MainLayout width="max-w-7xl">
      <DemoSection />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
      <FeaturedInSection />
      <ContactSection ref={contactRef} />
    </MainLayout>
  );
};

export default Resume;