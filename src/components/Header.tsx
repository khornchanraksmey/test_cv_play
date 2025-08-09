import React from 'react';
import { Moon, Sun, Download } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  darkMode: boolean;
  toggleDarkMode: () => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, darkMode, toggleDarkMode }) => {
  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'future-plans', label: 'Future' },
    { id: 'contact', label: 'Contact' },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-blue-200 dark:border-slate-700">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] bg-clip-text text-transparent">
              KHORN CHANRAKSMEY
            </h1>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-[#ea638c] dark:text-[#72ddf7] bg-[#ea638c]/10 dark:bg-[#72ddf7]/20'
                      : 'text-gray-700 dark:text-gray-300 hover:text-[#ea638c] dark:hover:text-[#72ddf7] hover:bg-gray-50 dark:hover:bg-slate-800 ripple-effect'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-[#ea638c] dark:hover:text-[#72ddf7] hover:bg-gray-100 dark:hover:bg-slate-800 transition-all duration-300 water-drop ripple-effect"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] hover:opacity-90 transition-all duration-300 transform hover:scale-105 liquid-button">
              <Download size={16} className="mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;