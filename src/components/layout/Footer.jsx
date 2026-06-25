import React from 'react';
import { heroData } from '../../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors duration-300">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-black tracking-tighter text-slate-900 dark:text-white inline-block mb-2">
              Dharshini<span className="text-blue-600">.</span>
            </a>
            <p className="text-slate-500 text-sm">
              Building scalable web applications and solving real-world problems.
            </p>
          </div>
          
          <div className="flex gap-4">
            {heroData.socials.map((social) => (
              <a 
                key={social.id}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-10 h-10 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-600 dark:hover:border-blue-500 hover:shadow-md transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-slate-200 dark:border-slate-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500 dark:text-slate-400">
          <p>&copy; {currentYear} {heroData.name}. All rights reserved.</p>
          <p>Designed with clean typography & minimal aesthetics.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
