// src/components/sections/About.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiLayout, FiDatabase, FiCode, FiServer } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { profileData } from '../../data/profile';

const stats = [
  {
    icon: <FiLayout size={32} className="text-blue-500" />,
    title: "React.js",
    subtitle: "Frontend",
  },
  {
    icon: <FiServer size={32} className="text-green-500" />,
    title: "Django + DRF",
    subtitle: "Backend",
  },
  {
    icon: <FiCode size={32} className="text-purple-500" />,
    title: "REST APIs",
    subtitle: "API Development",
  },
  {
    icon: <FiDatabase size={32} className="text-orange-500" />,
    title: "MySQL / MongoDB",
    subtitle: "Database",
  }
];

export const About = () => {
  return (
    <section id="about" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="About Me" 
          subtitle="Get to know me and what I do."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="prose prose-lg dark:prose-invert max-w-none text-slate-600 dark:text-slate-400">
              {profileData.about.split('\n').map((paragraph, index) => (
                <p key={index} className="mb-4 text-lg leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card p-6 rounded-2xl flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-3 rounded-full bg-slate-100 dark:bg-slate-800 group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{stat.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 font-medium">{stat.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
