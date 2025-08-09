import React from 'react';
import { Heart, Github, Linkedin, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-[#ffe4ec] to-[#fef6fb] dark:from-slate-900 dark:to-black text-gray-800 dark:text-white py-14 relative overflow-hidden">
      {/* Floating sparkles */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute animate-ping-slow top-10 left-10 w-6 h-6 bg-pink-300 rounded-full opacity-30"></div>
        <div className="absolute animate-ping-slow bottom-10 right-10 w-4 h-4 bg-blue-300 rounded-full opacity-30"></div>
        <div className="absolute animate-ping-slow top-20 right-20 w-3 h-3 bg-purple-400 rounded-full opacity-30"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-10 text-center md:text-left">
          {/* Brand Section */}
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-400 dark:from-blue-300 dark:to-pink-400 bg-clip-text text-transparent mb-4">
              KHORN CHANRAKSMEY
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              💡 Aspiring Data Scientist | AI Dreamer | Curious Coder
            </p>
            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="https://github.com/khornchanraksmey"
                className="hover:scale-110 transition-transform"
              >
                <Github size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/raks-mey-4317022bb/"
                className="hover:scale-110 transition-transform"
              >
                <Linkedin size={22} />
              </a>
              <a
                href="chanraksmeykhorn@gmail.com"
                className="hover:scale-110 transition-transform"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500 dark:text-blue-400">🌟 Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Experience', 'Skills', 'Projects', 'Education', 'Contact'].map((link) => (
                <li key={link}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(link.toLowerCase());
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-600 dark:text-gray-300 hover:text-pink-500 dark:hover:text-blue-300 transition duration-300"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-pink-500 dark:text-blue-400">📫 Get In Touch</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-1">chanraksmeykhorn@gmail.com</p>
            <p className="text-gray-600 dark:text-gray-300 mb-1">+855 (96) 651-2225</p>
            <p className="text-gray-600 dark:text-gray-300">Phnom Penh, Cambodia 🇰🇭</p>
          </div>
        </div>

        <div className="mt-12 border-t border-pink-200 dark:border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-gray-400">
          <p>© {currentYear} KHORN CHANRAKSMEY. All rights reserved.</p>
          <p className="flex items-center mt-4 md:mt-0">
            Built with <Heart size={16} className="text-red-500 mx-1 animate-bounce" /> React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
