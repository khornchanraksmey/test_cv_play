import React, { useEffect, useRef, useState } from 'react';
import { Briefcase, Calendar, MapPin } from 'lucide-react';

const Experience: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const experiences = [
    {
      title: 'Secondary School Student',
      company: 'Secondary School',
      location: 'Ponhea Loeur, Kandal',
      period: '2017 - 2020',
      description:
        'Attended secondary school with a strong interest in science, mathematics, and technology. Built foundational skills in logical thinking and problem-solving.',
      achievements: [
        'Explored subjects like math, physics, biology, and chemistry',
        'Improved study skills and academic discipline',
        'Became curious about how science explains the real world',
      ],
    },
    {
      title: 'High School Student',
      company: 'Tepronom High School',
      location: 'Ponhea Loeur, Kandal',
      period: '2021 - 2023',
      description:
        'Completed secondary education with a focus on science and mathematics. Developed strong foundations in analytical thinking, teamwork, and academic discipline.',
      achievements: [
        'Maintained strong academic performance in science subjects',
        'Developed critical thinking and problem-solving skills',
        'Participated in collaborative learning and group projects',
      ],
    },
    {
      title: 'Data Science Student',
      company: 'Institute of Technology of Cambodia',
      location: 'Russian Conf Norodom Boulevard, Phnom Penh',
      period: '2024 - Present',
      description:
        'Currently studying core topics in data science including Python programming, data analysis, and machine learning. Actively exploring how to use data to uncover insights and solve real-world problems.',
      achievements: [],
    },
     {
      title: 'Foundation',
      company: 'Institute of Science and Technology Advanced Development ',
      location: '#24, St 562, Phnom Penh 120407, Phnom Penh',
      period: '2months but not finish',
      description:
        'Java programming,Database, Data Modeling,Web Design,UX/UI Concept and Design,Git (Source Code Management)',
      achievements: [],
    },
    {
      title: 'Data Science and Analytics',
      company: 'TUX Global Institute',
      location: 'Phnom Penh Thmey, Sen Sok, Phnom Penh',
      period: '2025 - Present',
      description:
        'Working on data-driven solutions and analytics projects to support decision-making and innovation.',
      achievements: [],
    },
   
  ];

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-20 bg-gradient-to-b from-pink-50 to-rose-50 dark:from-blue-900 dark:to-slate-800 overflow-x-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <span className="bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full transition-all duration-1000 delay-200 ${
              isVisible ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]`}
          />
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* vertical line */}
          <div className="absolute left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] transform md:-translate-x-0.5" />

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative flex flex-col md:flex-row items-start md:items-center mb-12 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${400 + index * 200}ms` }}
            >
              {/* dot */}
              <div className="absolute left-[22px] md:left-1/2 w-4 h-4 bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] rounded-full transform md:-translate-x-2 flex items-center justify-center animate-pulse z-10">
                <div className="w-2 h-2 bg-white rounded-full" />
              </div>

              {/* card container */}
              <div
                className={`w-full md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'
                } pl-14 md:pl-0 pr-4 max-w-[calc(100%-1rem)]`}
              >
                <div className="bg-white dark:bg-slate-900 rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl md:hover:scale-105 break-words">
                  <div className="flex items-center mb-3">
                    <Briefcase size={20} className="text-[#ea638c] dark:text-[#72ddf7] mr-2 animate-pulse" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.title}</h3>
                  </div>

                  <div className="text-lg font-semibold text-[#ea638c] dark:text-[#72ddf7] mb-2">
                    {exp.company}
                  </div>

                  <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center min-w-0">
                      <MapPin size={16} className="mr-1 flex-shrink-0" />
                      <span className="truncate sm:whitespace-normal">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                  {exp.achievements.length > 0 && (
                    <ul className="space-y-2">
                      {exp.achievements.map((a, i) => (
                        <li key={i} className="flex items-start">
                          <div className="w-2 h-2 bg-[#ea638c] dark:bg-[#72ddf7] rounded-full mt-2 mr-3 flex-shrink-0 animate-pulse" />
                          <span className="text-gray-600 dark:text-gray-400 text-sm">{a}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
