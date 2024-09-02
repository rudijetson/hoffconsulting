import React, { useRef, useEffect, useState } from 'react';
import { Award, Zap, TrendingUp, Users, BarChart, ChevronLeft, ChevronRight } from 'lucide-react';

const SkillCategory = ({ icon: Icon, title, skills }) => (
  <div className="flex-shrink-0 w-80 p-6 bg-white rounded-lg shadow-md mr-6 transition-all duration-300 hover:shadow-lg">
    <div className="flex items-center mb-4">
      <Icon className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2">
      {skills.map((skill, index) => (
        <li key={index} className="flex items-start">
          <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2 flex-shrink-0"></span>
          <span className="text-gray-700">{skill}</span>
        </li>
      ))}
    </ul>
  </div>
);

const SkillsSection = () => {
  const scrollRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const scroll = (scrollOffset) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollOffset,
        behavior: 'smooth'
      });
    }
  };

  const checkScrollPosition = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  useEffect(() => {
    const currentScrollRef = scrollRef.current;
    if (currentScrollRef) {
      currentScrollRef.addEventListener('scroll', checkScrollPosition);
      checkScrollPosition(); // Initial check
    }

    return () => {
      if (currentScrollRef) {
        currentScrollRef.removeEventListener('scroll', checkScrollPosition);
      }
    };
  }, []);

  const skillCategories = [
    {
      icon: Award,
      title: "Key Achievements",
      skills: [
        "Founded and grew a seven-figure apparel CO-OP to $3M+ revenue",
        "Fundraised over $1M in 12 months",
        "Developed go-to-market strategy for $20M Tech consulting firm",
        "Saved $750,000 through strategic restructuring in financial services"
      ]
    },
    {
      icon: Zap,
      title: "Technical Expertise",
      skills: [
        "Generative AI Workflows",
        "Rapid prototyping and MVP development",
        "Data Analytics & Business Intelligence",
        "Software Solution Conceptualization"
      ]
    },
    {
      icon: TrendingUp,
      title: "Business Strategy",
      skills: [
        "Go-to-Market Strategy",
        "Revenue Operations",
        "Strategic Planning",
        "Process Optimization"
      ]
    },
    {
      icon: Users,
      title: "Industry Experience",
      skills: [
        "Retail",
        "E-commerce",
        "Financial Services",
        "Education",
        "Technology"
      ]
    },
    {
      icon: BarChart,
      title: "Additional Skills",
      skills: [
        "Leadership and management",
        "Data-driven decision making",
        "Financial modeling and forecasting",
        "Contract negotiations",
        "Compliance and risk management"
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center mb-8">
          <BarChart className="w-8 h-8 text-blue-500 mr-3" />
          <h2 className="text-3xl font-bold text-gray-800">Skills & Expertise</h2>
        </div>
        
        <div className="relative">
          <div 
            ref={scrollRef}
            className="flex overflow-x-auto pb-8 hide-scrollbar relative"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
          >
            {skillCategories.map((category, index) => (
              <SkillCategory key={index} {...category} />
            ))}
          </div>

          {/* Desktop-only subtle arrow buttons */}
          <div className="hidden md:block">
            {showLeftArrow && (
              <button 
                onClick={() => scroll(-300)} 
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md transition-all duration-200"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6 text-gray-600" />
              </button>
            )}
            {showRightArrow && (
              <button 
                onClick={() => scroll(300)} 
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-50 hover:bg-opacity-75 p-2 rounded-full shadow-md transition-all duration-200"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6 text-gray-600" />
              </button>
            )}
          </div>

          {/* Gradient overlays for visual cue */}
          <div className="absolute inset-y-0 left-0 w-8 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-8 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none" />
        </div>

        <p className="text-center text-gray-500 mt-4 md:hidden">Scroll to see more skills</p>
      </div>
    </section>
  );
};

export default SkillsSection;