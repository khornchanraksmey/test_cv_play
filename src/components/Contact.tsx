import React, { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin,Github, Linkedin, Instagram } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 3000);
    }, 2000);
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'chanraksmeykhorn@email.com', href: 'mailto:chanraksmeykhorn@email.com' },
    { icon: Phone, label: 'Phone', value: '+855 (96) 651-2225', href: 'tel:+855966512225' },
    { icon: MapPin, label: 'Location', value: 'Dangkao, Phnom Penh, Cambodia 🇰🇭', href: 'https://maps.app.goo.gl/4WZ6QeVqUKkVnPZ27?g_st=ipc' },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/raks-mey", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/raks-mey-4317022bb/", label: "LinkedIn" },
    { icon: Instagram, href: "https://www.instagram.com/star_dust_loooooo/", label: "Instagram" },
  ];

  return (
    <section ref={sectionRef} id="contact" className="relative py-20 bg-gradient-to-b from-pink-50 to-rose-100 dark:from-blue-900 dark:to-slate-900 overflow-hidden">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none animate-pulse text-5xl text-pink-400 select-none">
          <div className="absolute top-10 left-10 animate-bounce">💌</div>
          <div className="absolute bottom-10 right-16 animate-bounce delay-150">🎀</div>
          <div className="absolute top-24 right-32 animate-bounce delay-300">✨</div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <span className="bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent">Let's be friends 💕</span>
          </h2>
          <p className={`text-lg sm:text-xl text-gray-600 dark:text-gray-300 mt-4 max-w-xl mx-auto transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            I'm just one lovely message away 💖 Tell me your dreams ✨
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className={`transition-all duration-1000 delay-600 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">Reach out 📬</h3>
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  className="flex items-center p-4 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:scale-105 transform transition duration-300 border border-pink-200 dark:border-slate-700"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-blue-400 flex items-center justify-center mr-4 animate-wiggle">
                    <info.icon className="text-white" size={22} />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 dark:text-gray-400">{info.label}</p>
                    <p className="font-semibold text-gray-800 dark:text-white">{info.value}</p>
                  </div>
                </a>
              ))}
            </div>
            <div className="mt-6">
              <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-4">Follow my sparkles 🌟</h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 flex items-center justify-center shadow-md hover:scale-110 transform transition hover:bg-pink-100 dark:hover:bg-slate-700"
                    title={social.label}
                  >
                    <social.icon size={18} className="text-pink-500 dark:text-blue-300" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className={`transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-6">💗 Leave me a sweet message</h3>
              <input type="text" name="name" placeholder="Your lovely name 💕" value={formData.name} onChange={handleInputChange} required className="w-full mb-4 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400" />
              <input type="email" name="email" placeholder="Your magical email ✨" value={formData.email} onChange={handleInputChange} required className="w-full mb-4 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400" />
              <input type="text" name="subject" placeholder="Subject of love 💌" value={formData.subject} onChange={handleInputChange} required className="w-full mb-4 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400" />
              <textarea name="message" rows={5} placeholder="Write something beautiful 🌸" value={formData.message} onChange={handleInputChange} required className="w-full mb-6 px-4 py-3 rounded-lg border border-pink-200 focus:ring-2 focus:ring-pink-400"></textarea>
              <button type="submit" disabled={isSubmitting} className="w-full bg-gradient-to-r from-pink-400 to-blue-400 text-white py-3 rounded-lg font-semibold hover:scale-105 transition-transform duration-300">
                {isSubmitting ? 'Sending your sparkles...' : 'Send 💖'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
