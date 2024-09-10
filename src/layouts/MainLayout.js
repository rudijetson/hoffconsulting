import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { SpeedInsights } from '@vercel/speed-insights/next';

const MainLayout = ({ children, width = 'max-w-4xl' }) => {
  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header width={width} />
      <SpeedInsights />
      <main className="flex-grow py-12">
        <div className={`${width} mx-auto px-4 sm:px-6 lg:px-8`}>
          <div className="bg-white shadow-xl rounded-lg overflow-hidden">
            {children}
          </div>
        </div>
      </main>
      <Footer width={width} />
    </div>
  );
};

export default MainLayout;