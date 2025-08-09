import React, { useEffect, useRef, useState } from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education: React.FC = () => {
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
  const education = [
    {
      degree: "Foundation Year I in Data Science Engineering",
      school: "Institute of Technology of Cambodia",
      location: "Russian Conf Norodom Boulevard, Phnom Penh",
      period: "2023 - 2024",
      gpa: "3.8/4.0",
      achievements: [
        "Strong academic foundation in mathematics and programming",
        "Participated in multiple workshops and group projects",
        "Actively prepared for admission into full engineering degree"
      ],
      image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Institute_of_Technology_of_Cambodia_logo.png",
    },
    {
      degree: "Foundation Year II in Data Science Engineering",
      school: "Institute of Technology of Cambodia",
      location: "Russian Conf Norodom Boulevard, Phnom Penh",
      period: "2024 - 2025",
      gpa: "2.9/4.0",
      achievements: [
        "Advanced coursework in data structures and algorithms",
        "Hands-on experience with data analysis tools",
        "Collaborative projects in machine learning fundamentals"
      ],
      image: "https://upload.wikimedia.org/wikipedia/en/f/f7/Institute_of_Technology_of_Cambodia_logo.png",
    }
  ];

  const certifications = [
    {
      name: "Engineering and Data Science Essentials",
      issuer: "Udemy",
      date: "Jan 2025",
      image: "https://img-c.udemycdn.com/course/750x422/567828_67d0.jpg"
    },
    {
      name: "SAP Analytics Cloud Training",
      issuer: "ASEAN Data Science Explorers 2025",
      date: "Apr 2025",
      image: "https://media.licdn.com/dms/image/v2/D4E2DAQFWXFS-U8zFYQ/profile-treasury-image-shrink_800_800/B4EZavIYjxHMAk-/0/1746694933699?e=1754928000&v=beta&t=2Dt-zO-5u8o0ZXd6Al-TFz9_hDT8OjSZivyBjqtsIi0"
    },
    {
      name: "Python Programming: Build a Strong Foundation",
      issuer: "Udemy",
      date: "May 2025",
      image: "https://img-c.udemycdn.com/course/750x422/629302_8a2d_2.jpg"
    },
    {
      name: "Python Data Structures",
      issuer: "University of Michigan, Coursera",
      date: "Apr 2025",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TUT1MIBYSBA5/CERTIFICATE_LANDING_PAGE~TUT1MIBYSBA5.jpeg"
    },
    {
      name: "What is Data Science?",
      issuer: "IBM, Coursera",
      date: "Aug 2025",
      image: "https://s3.amazonaws.com/coursera_assets/meta_images/generated/CERTIFICATE_LANDING_PAGE/CERTIFICATE_LANDING_PAGE~TQPP9N2FDVGB/CERTIFICATE_LANDING_PAGE~TQPP9N2FDVGB.jpeg"
    },
    {
      name: "Data Science Masterclass: Python A-Z for ML",
      issuer: "Udemy",
      date: "Aug 2025",
      image: "https://udemy-certificate.s3.amazonaws.com/image/UC-146cdb8e-a2aa-4506-9c65-80d0bda2fea0.jpg?v=1754111739000"
    }
  ];

  return (
    <section
    id="education"
    ref={sectionRef}
    className={`py-20 bg-gradient-to-br from-pink-50 to-rose-50 dark:from-slate-800 dark:to-slate-700 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
  >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Education & <span className="text-[#ea638c] dark:text-[#72ddf7]">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea638c] dark:to-[#72ddf7] dark:from-[#72ddf7] to-[#ea638c] mx-auto rounded-full"></div>
        </div>

        {/* Education */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <GraduationCap className="w-8 h-8 text-[#ea638c] dark:text-[#72ddf7] mr-3" />
            Academic Background
          </h3>
          
          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden water-drop">
                <div className="md:flex">
                  <div className="md:w-1/3">
                    <img
                      src={edu.image}
                      alt={edu.school}
                      className="w-full h-48 md:h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="md:w-2/3 p-8">
                    <div className="flex flex-wrap items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                        <p className="text-pink-600 dark:text-blue-400 font-semibold text-lg">{edu.school}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center text-gray-600 dark:text-gray-400 mb-1">
                          <Calendar className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.period}</span>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-400">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="text-sm">{edu.location}</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <span className="inline-block bg-[#ea638c]/10 dark:bg-[#72ddf7]/20 text-[#ea638c] dark:text-[#72ddf7] px-3 py-1 rounded-full text-sm font-semibold">
                        GPA: {edu.gpa}
                      </span>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <Award className="w-4 h-4 text-[#ea638c] dark:text-[#72ddf7] mr-2" />
                        Achievements
                      </h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <li key={idx} className="flex items-center text-gray-700 dark:text-gray-300">
                            <div className="w-2 h-2 bg-[#ea638c] dark:bg-[#72ddf7] rounded-full mr-3 animate-pulse"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
            <Award className="w-8 h-8 text-[#ea638c] dark:text-[#72ddf7] mr-3" />
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden water-drop">
                <img
                  src={cert.image}
                  alt={cert.name}
                  className="w-full h-32 object-cover hover:scale-110 transition-transform duration-500"
                />
                <div className="p-6">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-[#ea638c] dark:text-[#72ddf7] font-semibold mb-2">{cert.issuer}</p>
                  <div className="flex items-center text-gray-600 dark:text-gray-400">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span className="text-sm">{cert.date}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;