import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import MyPhoto from '../components/MyPhoto.png';

const Hero: React.FC = () => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(120);

  const titles = ['Data Analyst', 'Machine Learning Engineer', 'Artificial Intelligence', 'Data Engineer'];

  useEffect(() => {
    const i = loopNum % titles.length;
    const full = titles[i];

    const next = () => {
      setText(prev => (isDeleting ? full.substring(0, prev.length - 1) : full.substring(0, prev.length + 1)));
      setTypingSpeed(isDeleting ? 35 : 120);

      if (!isDeleting && text === full) {
        setTimeout(() => setIsDeleting(true), 600);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const t = setTimeout(next, typingSpeed);
    return () => clearTimeout(t);
  }, [text, isDeleting, loopNum, typingSpeed]);

  const scrollToNext = () => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <section
        id="home"
        className="
          min-h-screen flex flex-col items-center justify-center
          bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50
          dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900
          relative overflow-hidden
        "
      >
        {/* blobs here */}

        <div className="text-center max-w-4xl mx-auto px-4">
          {/* Photo */}
          <div className="flex justify-center">
            <img
              src={MyPhoto}
              alt="KHORN CHANRAKSMEY"
              className="w-44 h-44 rounded-full border-8 border-white shadow-xl object-cover ring-4 ring-pink-300 dark:ring-indigo-400 mb-6"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-[#ea638c] via-[#72ddf7] to-[#ea638c] dark:from-[#72ddf7] dark:via-[#ea638c] dark:to-[#72ddf7] bg-clip-text text-transparent">
            CHANRAKSMEY
          </h1>

          {/* Typing line */}
          <div className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6 h-10">
            I&apos;m a{" "}
            <span className="text-[#ea638c] dark:text-[#72ddf7] font-semibold">
              {text}
              <span className="animate-pulse">|</span>
            </span>
          </div>

          {/* Intro */}
          <p className="text-xl text-gray-700 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            As a beginner in data science, I'm excited to explore how data solves real problems...
          </p>

          {/* Socials */}
          <div className="flex justify-center space-x-6 mb-10">
            {/* GitHub, LinkedIn, Email icons */}
          </div>

          {/* Scroll arrow */}
          <button
            onClick={scrollToNext}
            className="animate-bounce text-gray-400 hover:text-[#ea638c] dark:hover:text-[#72ddf7] transition-colors"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </section>
  );
}

export default Hero;
