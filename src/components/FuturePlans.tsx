import React, { useEffect, useRef, useState } from 'react';
import { BookOpen, Rocket, Heart, Sparkles, Target, Star } from 'lucide-react';

const FuturePlans: React.FC = () => {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Reveal on scroll
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => e.isIntersecting && setShow(true),
      { threshold: 0.25 }
    );
    if (ref.current) io.observe(ref.current);
    return () => io.disconnect();
  }, []);

  const goals = [
    { icon: <Rocket size={18} />, title: 'Data Analysis', note: '' },
    { icon: <Sparkles size={18} />, title: 'Web Developer', note: 'It will be challenge for do it.' },
    { icon: <BookOpen size={18} />, title: 'AI , Machine learning Skill', note: 'Imagine' },
    { icon: <Heart size={18} />, title: 'Content Creator', note: 'I dream when i am in grade 9 .' },
  ];

  return (
    <section
      ref={ref}
      id="future-plans"
      className="py-20 bg-gradient-to-br from-rose-50 via-white to-pink-50 dark:from-slate-900 dark:via-slate-900 dark:to-slate-800"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading + gradient line (same as Skills) */}
        <div className="text-center mb-10">
          <h2
            className={`text-3xl md:text-4xl font-extrabold mb-4 transition-all duration-700 ${
              show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
            }`}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]">
              Future
            </span>
          </h2>
          <div
            className={`w-24 h-1 mx-auto rounded-full transition-all duration-700 ${
              show ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            } bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]`}
          />
        </div>

        {/* Cute cards with animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {goals.map((g, i) => (
            <div
              key={i}
              className={`group rounded-3xl bg-white dark:bg-slate-800 border border-white/70 dark:border-white/10 p-5 shadow-sm
                          transition-all duration-500 will-change-transform
                          ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}
                          hover:shadow-md hover:-translate-y-1`}
              style={{ transitionDelay: `${150 + i * 80}ms` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-2xl flex items-center justify-center text-white
                                bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]
                                transition-transform duration-300 group-hover:scale-110">
                  {g.icon}
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white">{g.title}</h3>
              </div>

              <p className="text-sm text-gray-600 dark:text-gray-300">{g.note}</p>

              {/* Progress bar with animated width */}
              <div className="mt-4 h-2 w-full rounded-full bg-gray-200/70 dark:bg-slate-700 overflow-hidden">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c] transition-[width] duration-700"
                  style={{
                    width: show ? `${Math.min(20 + i * 12, 90)}%` : '0%',
                    transitionDelay: `${250 + i * 80}ms`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl text-white shadow-sm hover:shadow-md transition active:scale-[0.99]
                       bg-gradient-to-r from-[#ea638c] to-[#72ddf7] dark:from-[#72ddf7] dark:to-[#ea638c]"
          >
            let’s grow together 🌱
          </button>
        </div>
      </div>
    </section>
  );
};

export default FuturePlans;
