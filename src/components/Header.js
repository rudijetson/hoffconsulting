import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = ({ width = 'max-w-4xl' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavItemClick = (event, sectionId) => {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
      const yOffset = -80; // Adjust this value based on your header height
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 transition-shadow duration-300">
      <div className={`${width} mx-auto px-4 sm:px-6 lg:px-8`}>
        <div className="flex justify-between items-center py-4">
          <h1 className="text-2xl font-semibold text-gray-800">Hoff Consulting</h1>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden z-50 relative"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-6 items-center">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`}
                    onClick={(e) => handleNavItemClick(e, item.id)}
                    className={`text-gray-600 hover:text-gray-800 transition-colors duration-200 ${
                      item.name === 'Contact' ? 'bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded' : ''
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        <div 
          className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-40 transition-opacity duration-300 ${
            isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={() => setIsMenuOpen(false)}
        />
        <nav 
          className={`fixed top-0 left-0 bottom-0 w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            <div className="p-4 border-b border-gray-200">
              <h2 className="text-xl font-semibold text-gray-800">Menu</h2>
            </div>
            <ul className="flex-grow py-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a 
                    href={`#${item.id}`}
                    className="block px-4 py-2 text-gray-600 hover:bg-gray-100 hover:text-gray-800 transition-colors duration-200"
                    onClick={(e) => handleNavItemClick(e, item.id)}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;