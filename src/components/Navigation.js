import React from 'react';

const Navigation = ({ sections, activeSection, setActiveSection }) => (
  <nav className="sticky top-0 bg-white dark:bg-gray-800 shadow-md z-10">
    <ul className="flex justify-center space-x-4 py-4">
      {sections.map((section) => (
        <li key={section}>
          <button
            className={`px-3 py-2 rounded-md transition-colors duration-200 ${
              activeSection === section
                ? 'bg-blue-500 text-white'
                : 'text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
            }`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;