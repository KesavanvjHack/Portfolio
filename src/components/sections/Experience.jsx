// src/components/sections/Experience.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';
import { FaGraduationCap } from 'react-icons/fa';
import { SectionHeading } from '../ui/SectionHeading';
import { experienceData, educationData, certificationsData } from '../../data/experience';

const TimelineItem = ({ data, icon, isLast }) => (
  <div className="relative pl-8 md:pl-0">
    <div className="md:hidden absolute left-0 top-1.5 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 z-10"></div>
    {!isLast && <div className="md:hidden absolute left-1.5 top-5 bottom-[-2rem] w-1 bg-slate-200 dark:bg-slate-800"></div>}

    <div className="md:grid md:grid-cols-5 md:gap-8 items-start mb-12">
      <div className="hidden md:flex flex-col items-end col-span-1 pt-1 relative">
        <div className="text-right">
          <span className="text-primary-600 dark:text-primary-400 font-bold whitespace-nowrap">{data.period || data.date}</span>
        </div>
        <div className="absolute right-[-2.3rem] top-1.5 w-4 h-4 rounded-full bg-primary-500 border-4 border-white dark:border-slate-900 z-10"></div>
        {!isLast && <div className="absolute right-[-1.9rem] top-5 bottom-[-4rem] w-1 bg-slate-200 dark:bg-slate-800"></div>}
      </div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="md:col-span-4 glass-card p-6 md:p-8 rounded-2xl relative"
      >
        <div className="absolute top-6 right-6 text-slate-300 dark:text-slate-700 opacity-50">
          {icon}
        </div>
        <div className="md:hidden mb-2 text-primary-600 dark:text-primary-400 font-bold text-sm">
          {data.period || data.date}
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 dark:text-white mb-1">
          {data.role || data.degree || data.name}
        </h3>
        <h4 className="text-lg font-medium text-slate-600 dark:text-slate-400 mb-4">
          {data.company || data.institution || data.school || data.issuer} 
          {data.location && <span> • <span className="font-normal">{data.location}</span></span>}
        </h4>
        
        {data.description && (
          <p className="text-slate-600 dark:text-slate-400 mb-2">{data.description}</p>
        )}
        
        {data.achievements && (
          <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 marker:text-primary-500">
            {data.achievements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </motion.div>
    </div>
  </div>
);

export const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Experience & Education" 
          subtitle="My professional journey and academic background."
        />

        <div className="max-w-4xl mx-auto space-y-20">
          <div>
            <div className="flex items-center space-x-3 mb-10">
              <FiBriefcase className="text-primary-500" size={28} />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Experience</h3>
            </div>
            <div className="md:pl-16 relative">
              {experienceData.map((item, index) => (
                <TimelineItem 
                  key={`exp-${item.id}`} 
                  data={item} 
                  icon={<FiBriefcase size={48} />}
                  isLast={index === experienceData.length - 1} 
                />
              ))}
            </div>
          </div>

          <div id="education">
            <div className="flex items-center space-x-3 mb-10">
              <FaGraduationCap className="text-primary-500" size={28} />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>
            <div className="md:pl-16 relative">
              {educationData.map((item, index) => (
                <TimelineItem 
                  key={`edu-${item.id}`} 
                  data={item} 
                  icon={<FaGraduationCap size={48} />}
                  isLast={index === educationData.length - 1} 
                />
              ))}
            </div>
          </div>

          <div id="certifications">
            <div className="flex items-center space-x-3 mb-10">
              <FiAward className="text-primary-500" size={28} />
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6 md:pl-16">
              {certificationsData.map((cert, index) => (
                <motion.div
                  key={`cert-${cert.id}`}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass-card p-6 rounded-2xl flex items-start space-x-4"
                >
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg">
                    <FiAward size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-white mb-1">{cert.name}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-sm font-medium">{cert.issuer}</p>
                    {cert.date && <p className="text-slate-500 text-xs mt-1">{cert.date}</p>}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
