import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiArrowRight } from 'react-icons/fi';
import { heroData } from '../../data/portfolioData';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 relative overflow-hidden bg-transparent">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-3/5 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 text-sm font-semibold mb-6 border border-slate-200 dark:border-slate-700"
            >
              <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
              Available for Internships
            </motion.div>
            
            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight leading-[1.1]">
              Hi, I'm <span className="text-blue-600">Dharshini</span>
              <br />
              <span className="text-slate-400 dark:text-slate-500 block mt-2 text-4xl md:text-6xl">Full Stack Developer.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
              I am a Computer Science Engineering undergraduate passionate about crafting scalable web applications, solving complex problems, and building elegant, handcrafted user experiences.
            </p>
            
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <a 
                href="#projects"
                className="btn-primary flex items-center gap-2 group"
              >
                View Projects
                <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a 
                href={heroData.resumePdf}
                download="Dharshini_Resume.pdf"
                className="btn-secondary flex items-center gap-2"
              >
                <FiDownload />
                Download Resume
              </a>
            </div>

            <div className="mt-12 pt-8 border-t border-slate-100 dark:border-slate-800 flex items-center justify-center md:justify-start gap-6">
              <p className="text-sm font-medium text-slate-400 dark:text-slate-500">Connect with me:</p>
              <div className="flex gap-4">
                {heroData.socials.map((social) => (
                  <a 
                    key={social.id}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-500 transition-colors duration-300"
                  >
                    <span className="text-2xl">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Profile Photo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full md:w-2/5 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 bg-white dark:bg-slate-800 shadow-2xl border border-slate-100 dark:border-slate-700">
              <div className="w-full h-full rounded-full overflow-hidden bg-slate-100 dark:bg-slate-700 relative">
                <img 
                  src="/profile.jpg" 
                  alt="Dharshini V T" 
                  className="w-full h-full object-cover rounded-full"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextElementSibling.style.display = 'flex';
                  }}
                />
                {/* Fallback Initials */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 text-6xl font-bold hidden">
                  D
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-100 dark:bg-blue-600/30 rounded-full -z-10 blur-2xl opacity-60"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-emerald-100 dark:bg-emerald-600/30 rounded-full -z-10 blur-3xl opacity-60"></div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Hero;
