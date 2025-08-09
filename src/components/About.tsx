import React from 'react';
import { User, Award, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="min-h-screen flex flex-col justify-center py-20 bg-gradient-to-br from-gray-50 to-pink-50 dark:from-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-[#ea638c] dark:text-[#72ddf7]">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] mx-auto rounded-full"></div>
        </div>

        {/* Description */}
        <div className="max-w-3xl mx-auto text-center space-y-6 mb-12">
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            I'm currently a Year 3 student at the Institute of Technology of Cambodia, majoring in Engineering. My academic journey has sparked a deep interest in data science, and I'm excited to explore how data can solve real-world problems and uncover new insights.
          </p>
          <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
            As I continue learning, I enjoy experimenting with tools like Python, Pandas, and SQL, and I'm beginning to explore data visualization, machine learning, and statistical thinking. I'm eager to keep discovering new technologies and ideas as I grow in this exciting field.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <User className="w-8 h-8 text-[#ea638c] dark:text-[#72ddf7] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Experience</h3>
            <p className="text-gray-600 dark:text-gray-400">0+ Years in Data Science</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Award className="w-8 h-8 text-[#ea638c] dark:text-[#72ddf7] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Projects</h3>
            <p className="text-gray-600 dark:text-gray-400">0+ ML Models</p>
          </div>
          <div className="text-center p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <Target className="w-8 h-8 text-[#ea638c] dark:text-[#72ddf7] mx-auto mb-3" />
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Focus</h3>
            <p className="text-gray-600 dark:text-gray-400">Predictive Analytics</p>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] text-white font-semibold rounded-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Contact Me
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center px-6 py-3 border-2 border-[#ea638c] dark:border-[#72ddf7] text-[#ea638c] dark:text-[#72ddf7] font-semibold rounded-lg hover:bg-[#ea638c] dark:hover:bg-[#72ddf7] hover:text-white transition-all duration-300"
          >
            Download My CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
