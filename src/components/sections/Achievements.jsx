import React from 'react';
import { motion } from 'framer-motion';
import { achievementsData } from '../../data/portfolioData';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
            Proud <span className="text-blue-600">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            Milestones that represent my dedication and passion for technology.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsData.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center group"
            >
              <div className="w-16 h-16 bg-white dark:bg-slate-800 rounded-full flex items-center justify-center text-3xl shadow-sm border border-slate-100 dark:border-slate-700 mb-6 group-hover:scale-110 transition-transform duration-300">
                {achievement.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 leading-snug">
                {achievement.title}
              </h3>
              <p className="text-slate-500 dark:text-slate-400 mb-4 text-sm font-medium">
                {achievement.organization}
              </p>
              <div className="mt-auto pt-4 w-full border-t border-slate-200 dark:border-slate-700">
                <span className="inline-block bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 text-xs font-bold px-3 py-1 rounded-full">
                  {achievement.year}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
