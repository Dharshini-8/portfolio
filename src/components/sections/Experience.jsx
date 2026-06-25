import React from 'react';
import { motion } from 'framer-motion';
import { experienceData, educationData } from '../../data/portfolioData';

const TimelineItem = ({ data, isEducation, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="relative pl-8 md:pl-0 w-full mb-12"
  >
    {/* Timeline Line (Mobile) */}
    <div className="absolute left-0 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700 md:hidden"></div>

    <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-16 md:ml-auto md:text-left' : 'md:pl-16 md:mr-auto md:text-right'}`}>
      
      {/* Node Marker */}
      <div className={`absolute top-0 w-4 h-4 rounded-full bg-blue-600 shadow-sm transform -translate-x-1/2 
        ${index % 2 === 0 ? 'left-0 md:left-auto md:right-0 md:translate-x-1/2' : 'left-0 md:left-0'} 
        mt-1.5 border-4 border-white dark:border-slate-900 z-10`}>
      </div>

      <div className="bg-white dark:bg-slate-800 p-8 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-lg transition-shadow duration-300 relative group">
        
        <span className="inline-block px-3 py-1 mb-4 text-xs font-bold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 rounded-full">
          {isEducation ? data.year : data.duration}
        </span>
        
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-2 tracking-tight">
          {isEducation ? data.degree : data.role}
        </h3>
        
        <h4 className="text-lg text-slate-600 dark:text-slate-300 font-semibold mb-4">
          {isEducation ? data.institution : data.company}
        </h4>
        
        {isEducation ? (
          <p className="text-emerald-600 dark:text-emerald-400 font-bold">{data.score}</p>
        ) : (
          <>
            <p className="text-slate-500 dark:text-slate-400 mb-4 leading-relaxed">{data.description}</p>
            <ul className={`text-slate-500 dark:text-slate-400 text-sm space-y-2 ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
              {data.responsibilities.map((resp, i) => (
                <li key={i} className={`flex items-start gap-2 ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></span>
                  <span>{resp}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  </motion.div>
);

const Experience = () => {
  return (
    <section id="experience" className="py-24 relative z-10 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
            Experience & <span className="text-blue-600">Education</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          {/* Main Timeline Line (Desktop) */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-px bg-slate-200 dark:bg-slate-700 transform -translate-x-1/2"></div>

          <div className="mb-24">
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-16 flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-slate-200 dark:bg-slate-700"></span>
              Professional Experience
              <span className="w-16 h-px bg-slate-200 dark:bg-slate-700"></span>
            </h3>
            {experienceData.map((exp, index) => (
              <TimelineItem key={`exp-${exp.id}`} data={exp} index={index} isEducation={false} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-center text-slate-800 dark:text-slate-200 mb-16 flex items-center justify-center gap-4">
              <span className="w-16 h-px bg-slate-200 dark:bg-slate-700"></span>
              Education Journey
              <span className="w-16 h-px bg-slate-200 dark:bg-slate-700"></span>
            </h3>
            {educationData.map((edu, index) => (
              <TimelineItem key={`edu-${edu.id}`} data={edu} index={index + experienceData.length} isEducation={true} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;
