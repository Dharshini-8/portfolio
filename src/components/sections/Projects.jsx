import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiLink, FiZap, FiBriefcase, FiShoppingCart } from 'react-icons/fi';
import { projectsData } from '../../data/portfolioData';
import { FaGraduationCap, FaPaw } from 'react-icons/fa';


const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-slate-50 dark:bg-slate-900/50 relative z-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 tracking-tight text-slate-900 dark:text-white">
            Featured <span className="text-blue-600">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-8"></div>
          <p className="text-slate-500 dark:text-slate-400 max-w-2xl mx-auto text-lg">
            A selection of my recent work. Crafted with care to solve real-world problems.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => {
            const isFeatured = project.featured;

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`bg-white dark:bg-slate-800 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 group flex flex-col border border-slate-100 dark:border-slate-700 hover:-translate-y-1 ${
                  isFeatured ? 'md:col-span-2 flex-col md:flex-row' : ''
                }`}
              >


                {/* Project Details */}
                <div className={`p-8 flex flex-col flex-grow ${isFeatured ? 'md:w-2/3 justify-center' : ''}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-slate-600 dark:text-slate-400 mb-6 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tag, i) => (
                      <span key={i} className="text-xs font-semibold text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30 px-3 py-1 rounded-full border border-blue-100 dark:border-blue-800">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {project.features && (
                    <ul className="mb-8 space-y-2 text-sm text-slate-500 dark:text-slate-400">
                      {project.features.slice(0, 4).map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                      {project.features.length > 4 && (
                        <li className="text-emerald-600 dark:text-emerald-400 font-medium ml-3">+ more features</li>
                      )}
                    </ul>
                  )}

                  <div className="flex items-center gap-4 mt-6 pt-6 border-t border-slate-100 dark:border-slate-700">
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-blue-600 transition-colors font-medium text-sm"
                    >
                      <FiGithub className="text-lg" />
                      GitHub
                    </a>

                    {project.liveLink && project.liveLink !== "#" && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-auto flex items-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-blue-600 hover:bg-blue-600 dark:hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-colors duration-300 shadow-md"
                      >
                        <FiExternalLink className="text-lg" />
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
