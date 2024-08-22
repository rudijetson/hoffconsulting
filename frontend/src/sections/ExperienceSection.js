import React, { useState, useRef } from 'react';
import { ChevronDown, ChevronUp, Briefcase, GraduationCap } from 'lucide-react';

const ExperienceItem = ({ title, company, period, achievements, icon: Icon }) => (
  <div className="mb-8 border-b border-gray-200 pb-8 last:border-b-0 last:pb-0">
    <div className="flex items-center mb-2">
      {Icon && <Icon className="w-6 h-6 text-blue-500 mr-2" />}
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <p className="text-lg font-medium text-gray-600 mb-1">{company}</p>
    <p className="text-sm text-gray-500 mb-4">{period}</p>
    <ul className="space-y-2">
      {achievements.map((achievement, index) => (
        <li key={index} className="flex items-start">
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mt-2 mr-2 flex-shrink-0"></span>
          <span className="text-gray-700">{achievement}</span>
        </li>
      ))}
    </ul>
  </div>
);

const ExperienceSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleButtonRef = useRef(null);

  const experiences = [
    {
      title: "Strategy Consultant",
      company: "Morehouse College (Contract)",
      period: "May 2024 - Aug 2024",
      achievements: [
        "Co-organized and co-ran grant applications securing up to $20 million in funding.",
        "Developed a detailed manifesto serving as franchise guidelines for establishing cooperative organizations to conduct business on behalf of the college.",
        "Advised senior leadership on funding strategy, business language, and operational procedures."
      ],
      icon: Briefcase
    },
    {
      title: "Fractional CMO",
      company: "Ultimate Technologies Group (Contract)",
      period: "Dec 2023 - May 2024",
      achievements: [
        "Developed comprehensive go-to-market strategy, encompassing the entire revenue operations model for service, sales, and marketing for a $20M company with 40 employees.",
        "Created ideal customer profiles, buyer personas, and customer journey mappings through extensive research and analysis.",
        "Trained sales team on generative AI to assist in creating email sequences, website copy, and content, improving efficiency and effectiveness.",
        "Implemented automated workflows via HubSpot and ZoomInfo and integrated file management systems, streamlining processes and enhancing collaboration across sales funnel activity between sales, service, and marketing."
      ],
      icon: Briefcase
    },
    {
      title: "Founder and Head of Growth",
      company: "Heritage Hill Co-op, Self-Employed",
      period: "Feb 2019 - Nov 2023",
      achievements: [
        "Founded brand and implemented data-driven strategies, growing Heritage Hill into a seven-figure apparel CO-OP and boosting revenue to over $3M in four years.",
        "Managed end-to-end operations, from design to shipment, delivering 50k units using a just-in-time sourcing strategy with rapid replenishment.",
        "Implemented predictive sales strategies, online conversion rate optimization, and sales and inventory forecasting, ensuring efficient operations and maximizing revenue."
      ],
      icon: Briefcase
    },
    {
      title: "Director of Strategic Initiatives",
      company: "Axcess Financial",
      period: "Mar 2017 - Feb 2019",
      achievements: [
        "Managed high-risk payment processing service acquisitions, balancing compliance with company risk appetite.",
        "Developed Tableau dashboards presenting critical multi-million dollar financial metrics, facilitating C-suite decision-making with a focus on loan performance across various states.",
        "Strategically restructured payment processing to meet CFPB compliance, saving the company $750,000."
      ],
      icon: Briefcase
    },
    {
      title: "Sr. Strategic Sourcing Manager",
      company: "Axcess Financial",
      period: "Jan 2016 - Feb 2017",
      achievements: [
        "Constructed predictive models to accurately forecast revenue and payment returns, directly impacting fiscal strategy for future quarters.",
        "Directed 7-figure contract negotiations, producing substantial savings by evaluating and selecting vendors based on stringent criteria.",
        "Utilized SQL, R, and Tableau to drive data analytics, optimizing business processes and informing financial decisions."
      ],
      icon: Briefcase
    },
    {
      title: "M.B.A. in Finance & Entrepreneurial Studies",
      company: "EDHEC Business School",
      period: "2016", // You may want to add the actual year
      achievements: [
      ],
      icon: GraduationCap
    },
    {
      title: "B.S. in Business Administration Management & Operations",
      company: "Xavier University",
      period: "2012", // You may want to add the actual year
      achievements: [
      ],
      icon: GraduationCap
    }
  ];

  const visibleExperiences = isExpanded ? experiences : experiences.slice(0, 3);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
    if (isExpanded) {
      setTimeout(() => {
        toggleButtonRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <section id="experience" className="py-12 px-6 sm:px-8">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Professional Experience & Education</h2>
      {visibleExperiences.map((exp, index) => (
        <ExperienceItem key={index} {...exp} />
      ))}
      {experiences.length > 3 && (
        <div ref={toggleButtonRef}>
          <button
            onClick={toggleExpand}
            className="flex items-center justify-center w-full py-2 mt-4 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-5 h-5 mr-2" />
                Show Less
              </>
            ) : (
              <>
                <ChevronDown className="w-5 h-5 mr-2" />
                Show More
              </>
            )}
          </button>
        </div>
      )}
    </section>
  );
};

export default ExperienceSection;