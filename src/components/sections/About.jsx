import React from 'react';
import { motion } from 'framer-motion';
import { aboutData } from '../../data/portfolioData';

const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900 dark:text-white">
              About <span className="text-blue-600">Me</span>
            </h2>
            <div className="w-20 h-1 bg-blue-600 rounded-full mb-8"></div>
            
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              {aboutData.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {aboutData.stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-4xl font-black text-blue-600 mb-2">{stat.value}</h3>
                  <p className="text-sm font-medium text-slate-500 dark:text-slate-400 uppercase tracking-wide">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="aspect-square rounded-full overflow-hidden shadow-2xl relative z-10">
              <img 
                src="/profile.jpg" 
                alt="Dharshini Profile" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-600/10"></div>
            </div>
            
            {/* Decorative dots background */}
            <div className="absolute -top-10 -right-10 w-64 h-64 opacity-30 dark:opacity-20 -z-10" 
                 style={{ backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
            <div className="absolute -bottom-10 -left-10 w-64 h-64 opacity-30 dark:opacity-20 -z-10" 
                 style={{ backgroundImage: 'radial-gradient(#94a3b8 2px, transparent 2px)', backgroundSize: '24px 24px' }}></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
