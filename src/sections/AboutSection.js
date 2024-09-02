import React from 'react';
import { TrendingUp, Users, Database, Cog, Calendar, Download } from 'lucide-react';

// Add this line near the top of your file, outside of any component
const profileImage = process.env.PUBLIC_URL + '/images/Linkedin.Profile_edit.jpg';

const HighlightItem = ({ icon, text }) => (
  <div className="flex items-center space-x-2 bg-gray-100 p-3 rounded-lg">
    <div className="text-blue-500">{icon}</div>
    <span className="text-gray-700 font-medium">{text}</span>
  </div>
);

const AboutSection = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-6 md:px-12">
      <div className="flex flex-col md:flex-row items-center md:items-start">
        <div className="md:w-1/3 mb-8 md:mb-0">
          <img 
            src={profileImage}
            alt="Brandon Z. Hoff" 
            className="rounded-full w-48 h-48 object-cover mx-auto"
          />
        </div>
        <div className="md:w-2/3 md:pl-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Hi! I'm Brandon Z. Hoff</h2>
          <p className="text-xl font-semibold text-blue-600 mb-4">
            Growth and Operations Executive for Mid-Size Businesses
          </p>
          <p className="text-lg text-gray-600 mb-6">
            I help growing companies scale efficiently by optimizing operations and implementing cutting-edge technologies.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <HighlightItem icon={<TrendingUp />} text="7-Figure Founder & Exit" />
            <HighlightItem icon={<Users />} text="Strategic Leadership" />
            <HighlightItem icon={<Database />} text="Data-Driven Decision Making" />
            <HighlightItem icon={<Cog />} text="AI & Process Optimization" />
          </div>
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300"
            >
              <Calendar className="mr-2" /> Schedule a Consultation
            </a>
            <a
              href="https://file.notion.so/f/f/45c6553e-7806-4d1e-9602-2242bcc541b2/3bc9bc70-99c5-45fc-b81a-e97316810561/BrandonHoffResume.pdf?table=block&id=fffe8043-b444-802b-b3ac-fdbb38dbda1c&spaceId=45c6553e-7806-4d1e-9602-2242bcc541b2&expirationTimestamp=1724025600000&signature=TIifq-Eku9Q-SDKUygpA6O_XVDhZTGHkSYos6DTdegM&downloadName=BrandonHoffResume.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 bg-gray-200 text-gray-800 font-semibold rounded-lg hover:bg-gray-300 transition duration-300"
            >
              <Download className="mr-2" /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;