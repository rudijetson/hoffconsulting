import React, { useState, useRef, useEffect } from 'react';
import { Award, ExternalLink, ChevronDown, ChevronUp } from 'lucide-react';

const FeaturedItem = ({ title, description, link, isVideo }) => (
  <div className="mb-4">
    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
    {link && (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-1 transition-colors duration-200"
      >
        {isVideo ? "Watch Video" : "Read More"} <ExternalLink className="w-4 h-4 ml-1" />
      </a>
    )}
  </div>
);

const FeaturedInSection = () => {
  const [showAll, setShowAll] = useState(false);
  const containerRef = useRef(null);
  const buttonRef = useRef(null);

  const featuredItems = [
    {
      title: "Channel 9 News",
      description: "Featured in a startup spotlight video showcasing innovative basketball analytics and training methods.",
      link: "https://www.youtube.com/watch?v=9kAFqzuFtzw&t=402s",
      isVideo: true
    },
    {
      title: "Co-op Cincy",
      description: "Highlighted for developing a worker-owned apparel circularity co-op, showcasing innovative approaches in sustainable fashion.",
      link: "https://coopcincy.org/heritage-hill"
    },
    {
      title: "NCBA CLUSA",
      description: "Co-op Cincy Supports Transition of Black-Owned Apparel Company Heritage Hill to Worker Ownership",
      link: "https://ncbaclusa.coop/blog/co-op-cincy-supports-transition-of-black-owned-apparel-company-heritage-hill-to-worker-ownership/"
    },
    {
      title: "The Cincinnati Herald",
      description: "Co-op Cincy Supports Transition, Broadening Ownership for a Black-Owned Business",
      link: "https://thecincinnatiherald.com/2022/04/07/co-op-cincy-supports-transition-broadening-ownership-for-a-black-owned-business/"
    },
    {
      title: "Soapbox Cincinnati",
      description: "Featured article on Heritage Hill's transition to worker ownership in partnership with Co-op Sensi's network, highlighting innovative business models.",
      link: "https://www.soapboxmedia.com/devnews/Heritage-Hill-gets-help-from-Co-op-Cincy.aspx"
    },
    {
      title: "Cincinnati Magazine",
      description: "Mortar Partners with P&G and Kroger to Give Business Owners a Boost",
      link: "https://www.cincinnatimagazine.com/article/mortar-partners-with-pg-and-kroger-to-give-business-owners-a-boost/"
    },
    {
      title: "YES! Magazine",
      description: "Cooperative Ways to Weather the Silver Tsunami",
      link: "https://www.yesmagazine.org/economy/2023/12/07/business-cooperative-boomers-model"
    },
    {
      title: "Resilience.org",
      description: "Cooperative Ways to Weather the Silver Tsunami",
      link: "https://www.resilience.org/stories/2024-01-24/cooperative-ways-to-weather-the-silver-tsunami/"
    },
    {
      title: "Local 12 News",
      description: "New Grant Initiative Helps Local Minority-Owned Businesses",
      link: "https://local12.com/news/local/new-grant-initiative-helps-local-minority-owned-businesses-walnut-hills-dozens-business-owners-grants-lincoln-gilbert-djx-construction-nahamani-heritage-hill-llc-i-can-health-llc-african-american-chamber-commerce-winners-fitness-education-cincinnati-ohio"
    },
    {
      title: "Wealth & Wellness Podcast",
      description: "Featured guest discussing appearances in major publications like Essence and GQ, highlighting entrepreneurial journey and success.",
      link: "https://www.iheart.com/podcast/269-wealth-wellness-69158014/episode/wealth-wellness-podcast-how-102517297/"
    },
    {
      title: "Documentary",
      description: "Works For All: Cincinnati's Co-op Economy (2023)",
      link: null
    }
  ];

  const visibleItems = showAll ? featuredItems : featuredItems.slice(0, 4);

  useEffect(() => {
    if (!showAll && buttonRef.current) {
      const yOffset = -20; // Adjust this value to fine-tune the scroll position
      const y = buttonRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }, [showAll]);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  return (
    <section id="featured" className="py-12 px-6 sm:px-8 bg-gray-50" ref={containerRef}>
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center mb-8">
          <Award className="w-6 h-6 mr-2 text-blue-600" />
          <h2 className="text-3xl font-bold text-gray-800">In the Media</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 transition-all duration-300 ease-in-out">
          {visibleItems.map((item, index) => (
            <FeaturedItem key={index} {...item} />
          ))}
        </div>
        {featuredItems.length > 4 && (
          <div ref={buttonRef} className="mt-8">
            <button
              onClick={toggleShowAll}
              className="flex items-center justify-center w-full py-2 text-blue-600 bg-white border border-blue-600 rounded-md hover:bg-blue-50 transition-colors duration-300"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5 mr-2" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5 mr-2" />
                  Show More ({featuredItems.length - 4} more)
                </>
              )}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedInSection;