import React, { useEffect, useRef, useState } from 'react';

const Projects: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-blue-900 dark:to-slate-800"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold mb-4 transform transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] bg-clip-text text-transparent">
            Projects
          </span>
        </h2>

        <div
          className={`w-24 h-1 mx-auto bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] rounded-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
          }`}
        ></div>

        <p
          className={`mt-12 text-lg text-gray-700 dark:text-gray-300 leading-relaxed max-w-2xl mx-auto transform transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          I'm currently focused on learning data science, machine learning, and artificial intelligence. Personal and collaborative projects will be showcased here soon. Stay tuned and thank you for visiting!
        </p>

        <div
          className={`mt-10 transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
        >
          <span className="inline-block px-6 py-3 bg-[#ea638c] text-white dark:bg-[#72ddf7] dark:text-slate-900 rounded-full text-sm font-semibold shadow hover:shadow-md transform hover:scale-105 transition">
            Projects Coming Soon 🚀
          </span>
        </div>
      </div>
    </section>
  );
};

export default Projects;