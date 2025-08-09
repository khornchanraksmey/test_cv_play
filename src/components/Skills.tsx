import React, { useEffect, useRef, useState } from 'react';
import { Code, BarChart3, Brain, Wrench } from 'lucide-react';

/** Small counter that animates from 0 → value */
const PercentCounter: React.FC<{ value: number; start: boolean; delay?: number; duration?: number }> = ({
  value,
  start,
  delay = 0,
  duration = 1000,
}) => {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!start) {
      setDisplay(0);
      return;
    }
    let raf = 0;
    let startTime = 0;
    const timer = setTimeout(() => {
      const tick = (t: number) => {
        if (!startTime) startTime = t;
        const progress = Math.min((t - startTime) / duration, 1);
        setDisplay(Math.round(progress * value));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    }, delay);

    return () => {
      clearTimeout(timer);
      cancelAnimationFrame(raf);
    };
  }, [start, value, delay, duration]);

  return <>{display}%</>;
};

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: 'Frontend',
      icon: Code,
      skills: [
        { name: 'HTML', level: 50 },
        { name: 'CSS', level: 50 },
        { name: 'Tailwind CSS', level: 50 },
        { name: 'JavaScript', level: 50 },
        { name: 'React', level: 50 },
        { name: 'TypeScript', level: 50 },
      ],
    },
    {
      title: 'Data Analysis',
      icon: BarChart3,
      skills: [
        { name: 'Pandas', level: 10 },
        { name: 'NumPy', level: 10 },
        { name: 'Matplotlib', level: 0 },
        { name: 'Seaborn', level: 0 },
        { name: 'Excel', level: 50 },
      ],
    },
    {
      title: 'Machine Learning & AI',
      icon: Brain,
      skills: [
        { name: 'Scikit-learn', level: 0 },
        { name: 'TensorFlow', level: 0 },
        { name: 'Keras', level: 0 },
        { name: 'PyTorch', level: 0 },
      ],
    },
    {
      title: 'Tools & Platforms',
      icon: Wrench,
      skills: [
        { name: 'Jupyter Notebook', level: 50 },
        { name: 'Google Colab', level: 50 },
        { name: 'Git', level: 50 },
      ],
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 bg-gradient-to-b from-rose-50 to-pink-50 dark:from-slate-800 dark:to-blue-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] bg-clip-text text-transparent">
              Skills & Expertise
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto transition-all duration-1000 delay-200 rounded-full
            ${isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'}
            bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]`}
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className={`bg-gray-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-all duration-500 hover:scale-105 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${400 + categoryIndex * 200}ms` }}
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] rounded-lg flex items-center justify-center mr-4 animate-pulse">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => {
                  const delay = 800 + categoryIndex * 200 + skillIndex * 100; // match bar timing
                  return (
                    <div key={skillIndex} className="relative">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-gray-500 dark:text-gray-400 tabular-nums">
                          <PercentCounter value={skill.level} start={isVisible} delay={delay} />
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className={`h-2 rounded-full bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] transition-[width] duration-1000`}
                          style={{
                            width: isVisible ? `${skill.level}%` : '0%',
                            transitionDelay: `${delay}ms`,
                          }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
