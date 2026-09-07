// src/components/sections/Hero.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-400/20 dark:bg-primary-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-indigo-400/20 dark:bg-indigo-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400/20 dark:bg-purple-600/20 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-4">
              Hi, I'm {profileData.name}
            </h2>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
              <span className="text-slate-900 dark:text-white">Full Stack </span>
              <span className="text-gradient">Developer</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed">
              {profileData.shortDescription}
            </p>
            
            <div className="flex flex-wrap gap-4 mb-10">
              <Button asChild variant="primary" size="lg" href="#projects">
                View My Work
              </Button>
              <Button asChild variant="outline" size="lg" href={profileData.resume} target="_blank" rel="noopener noreferrer">
                Download Resume
              </Button>
              <Button asChild variant="ghost" size="lg" href="#contact">
                Contact Me
              </Button>
            </div>

            <div className="flex items-center space-x-5">
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                <FiGithub size={28} />
                <span className="sr-only">GitHub</span>
              </a>
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-primary-600 dark:text-slate-400 dark:hover:text-primary-400 transition-colors">
                <FiLinkedin size={28} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hidden lg:flex justify-center relative"
          >
            {/* Visual Element: Profile Photo */}
            <div className="relative w-full max-w-md aspect-square rounded-full p-4 flex items-center justify-center">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full animate-spin-slow opacity-20 blur-xl"></div>
              <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/10 shadow-2xl glass flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                {/* Fallback to text if image not found, but we expect user to add profile.png */}
                <img 
                  src="/profile.jpg" 
                  alt="Kesava Perumal G" 
                  className="w-full h-full object-cover object-top z-10"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="absolute inset-0 hidden items-center justify-center text-slate-400 text-sm text-center p-4">
                  Please place your transparent photo as <strong>public/profile.jpg</strong>
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }} 
                transition={{ repeat: Infinity, duration: 4 }}
                className="absolute -right-4 top-20 glass-card px-4 py-2 rounded-lg shadow-lg font-bold text-sm text-slate-800 dark:text-slate-200 z-20"
              >
                React.js
              </motion.div>
              <motion.div 
                animate={{ y: [0, 15, 0] }} 
                transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                className="absolute -left-4 bottom-24 glass-card px-4 py-2 rounded-lg shadow-lg font-bold text-sm text-slate-800 dark:text-slate-200 z-20"
              >
                Django
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
        >
          <a href="#about" className="text-slate-400 hover:text-primary-500 transition-colors">
            <span className="sr-only">Scroll down</span>
            <FiChevronDown size={32} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
