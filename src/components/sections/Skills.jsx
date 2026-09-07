// src/components/sections/Skills.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { SectionHeading } from '../ui/SectionHeading';
import { skillsData } from '../../data/skills';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 }
};

export const Skills = () => {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Technical Skills" 
          subtitle="Technologies I work with to bring ideas to life."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {skillsData.map((categoryGroup, categoryIndex) => (
            <motion.div
              key={categoryGroup.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
              className="glass-card p-8 rounded-2xl"
            >
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6 border-b border-slate-200 dark:border-slate-800 pb-4">
                {categoryGroup.category}
              </h3>
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="flex flex-wrap gap-3"
              >
                {categoryGroup.items.map((skill) => (
                  <motion.span
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 rounded-lg text-sm font-medium shadow-sm border border-slate-200 dark:border-slate-700 hover:border-primary-500 hover:text-primary-600 dark:hover:border-primary-500 dark:hover:text-primary-400 transition-colors cursor-default"
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
