import React from 'react';
import { Target, TrendingUp, Zap } from 'lucide-react';

const TargetAudienceItem = ({ icon: Icon, text }) => (
  <div className="flex items-center space-x-3 bg-white bg-opacity-10 p-4 rounded-lg">
    <Icon className="w-6 h-6 text-yellow-300 flex-shrink-0" />
    <span className="text-white font-medium">{text}</span>
  </div>
);

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down">
          Start, Grow, and Achieve New Levels of Success
        </h1>
        <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto animate-fade-in-up">
        AI can streamline your processes, enhance decision-making, and drive sustainable growth for your business.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
          <TargetAudienceItem 
            icon={Target} 
            text="Mid-size businesses with $5M-$50M annual revenue" 
          />
          <TargetAudienceItem 
            icon={TrendingUp} 
            text="Growing companies facing operational challenges" 
          />
          <TargetAudienceItem 
            icon={Zap} 
            text="Leaders ready to implement cutting-edge tech" 
          />
        </div>
        <p className="text-lg md:text-xl mb-8 animate-fade-in-up">
          If this sounds like you, you're in the right place. Let's transform your challenges into opportunities.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;