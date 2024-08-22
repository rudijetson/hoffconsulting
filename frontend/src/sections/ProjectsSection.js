import React from 'react';
import { Code, ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ title, description, highlights, link, github, colorClasses }) => (
  <div className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl ${colorClasses.border}`}>
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {highlights.map((highlight, index) => (
            <span 
              key={`${index}-${highlight}`}
              className={`px-3 py-1 ${colorClasses.bg} ${colorClasses.text} rounded-full text-xs font-medium`}
            >
              {highlight}
            </span>
          ))}
        </div>
        <div className="flex items-center space-x-4">
          {link ? (
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center text-sm ${colorClasses.text} hover:underline transition-colors duration-200`}
            >
              <ExternalLink className="w-4 h-4 mr-1" />
              View Project
            </a>
          ) : (
            <span className={`inline-flex items-center text-sm ${colorClasses.text}`}>
              <ExternalLink className="w-4 h-4 mr-1" />
              You're here
            </span>
          )}
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-gray-600 hover:text-gray-800 hover:underline transition-colors duration-200"
            >
              <Github className="w-4 h-4 mr-1" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  </div>
);

const ProjectsSection = () => {
  const projects = [
    {
      title: "Interactive Resume Website",
      description: "A modern, responsive resume website built with React and Tailwind CSS. Features include dynamic content rendering, interactive sections, and integration with Calendly for scheduling meetings.",
      highlights: ["React", "Tailwind CSS", "Responsive Design", "Calendly API", "SMTP", "Email Integration"],
      link: null,
      github: "https://github.com/yourusername/resume-website", // Replace with actual GitHub link
      colorClasses: {
        border: "border-t-4 border-blue-500",
        bg: "bg-blue-100",
        text: "text-blue-700"
      }
    },
    {
      title: "Business Plan Financial Calculator Suite",
      description: "React application for entrepreneurs and small business owners to create detailed financial projections. Features include startup costs, sales forecasts, workforce planning, and more, with interactive UI, data persistence, and visual representations.",
      highlights: ["React", "Context API", "Tailwind CSS", "Recharts", "Custom Hooks", "Financial Modeling"],
      link: "https://rudijetson.github.io/smartplan/",
      github: "https://github.com/rudijetson/smartplan",
      colorClasses: {
        border: "border-t-4 border-green-500",
        bg: "bg-green-100",
        text: "text-green-700"
      }
    },
    {
      title: "Project Management Dashboard",
      description: "A React-based web application showcasing the Maroon League, a sustainable textile ecosystem involving HBCUs. The project outlines the stages of the ecosystem, implementation timeline, and organizational structure.",
      highlights: ["React", "Tailwind CSS", "Lucide React", "Custom Hooks", "Responsive Design", "Project Management"],
      link: "https://rudijetson.github.io/eco-hbcu/",
      github: "https://github.com/rudijetson/eco-hbcu",
      colorClasses: {
        border: "border-t-4 border-purple-500",
        bg: "bg-purple-100",
        text: "text-purple-700"
      }
    }
  ];

  return (
    <section id="projects" className="py-16 px-6 sm:px-8 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center mb-10">
          <Code className="w-8 h-8 mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;