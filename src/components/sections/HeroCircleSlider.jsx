// src/components/sections/HeroCircleSlider.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiExternalLink, FiChevronLeft, FiChevronRight, FiCode, FiLayers, FiCheckCircle } from 'react-icons/fi';
import { SiReact, SiDjango } from 'react-icons/si';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';

export const HeroCircleSlider = () => {
  // Construct the slides: Profile & Core Skills template first, followed by the featured projects
  const slides = [
    {
      id: 'profile-skills',
      type: 'skill',
      title: profileData.name,
      subtitle: 'React.js & Django Full Stack Developer',
      tag: 'Core Expertise',
      image: '/profile.jpg',
      isProfile: true,
      skills: ['React.js', 'Django', 'REST APIs', 'MySQL'],
      githubUrl: profileData.github,
      liveUrl: '#projects',
      actionLabel: 'Explore Portfolio'
    },
    ...projectsData.map(project => ({
      id: project.id,
      type: 'project',
      title: project.title,
      subtitle: project.shortDescription,
      tag: project.tags?.slice(0, 2).join(' • ') || 'Featured Project',
      image: project.image,
      isProfile: false,
      skills: project.tags || [],
      githubUrl: project.githubUrl,
      liveUrl: project.liveUrl,
      actionLabel: project.githubUrl !== '#' ? 'View Code' : (project.liveUrl !== '#' ? 'Live Demo' : 'View Project')
    }))
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [imgError, setImgError] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => (prev + 1) % slides.length);
    setImgError(false);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => (prev - 1 + slides.length) % slides.length);
    setImgError(false);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setImgError(false);
  };

  // 5-second automatic sliding
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const currentSlide = slides[currentIndex];

  return (
    <div 
      className="relative flex flex-col items-center select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Outer ambient glow circles */}
      <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 via-primary-500/25 to-emerald-500/20 rounded-full blur-2xl opacity-60 animate-pulse pointer-events-none"></div>

      {/* Main Circular Container */}
      <div className="relative w-72 h-72 sm:w-84 sm:h-84 md:w-96 md:h-96 aspect-square rounded-full p-2 sm:p-3 flex items-center justify-center">
        
        {/* Glowing animated border ring */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-primary-500/30 dark:border-primary-400/30 animate-spin-slow pointer-events-none"></div>
        <div className="absolute inset-1 rounded-full border border-primary-500/20 dark:border-white/10 pointer-events-none"></div>

        {/* Inner Circle Frame */}
        <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white/40 dark:border-slate-800/80 shadow-2xl glass flex items-center justify-center bg-slate-900 group">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.65, ease: "easeInOut" }}
              className="relative w-full h-full"
            >
              {/* Slide Background Image */}
              {!imgError ? (
                <img
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  onError={() => setImgError(true)}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-700"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-primary-950 to-slate-900 text-white p-6 text-center">
                  <FiCode size={40} className="text-primary-400 mb-2" />
                  <p className="font-bold text-sm">{currentSlide.title}</p>
                </div>
              )}

              {/* Glassmorphism Info Overlay (Bottom portion of circle) */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/60 to-transparent flex flex-col justify-end items-center text-center p-4 sm:p-6 pb-6 text-white">
                {/* Category / Tag */}
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] sm:text-xs font-semibold bg-primary-500/30 text-primary-200 backdrop-blur-md border border-primary-400/30 mb-1"
                >
                  {currentSlide.tag}
                </motion.span>

                {/* Slide Title */}
                <motion.h4 
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                  className="text-sm sm:text-base md:text-lg font-bold text-white drop-shadow-md line-clamp-1 max-w-[85%]"
                >
                  {currentSlide.title}
                </motion.h4>

                {/* Skills tags pill preview */}
                <motion.div 
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="flex flex-wrap justify-center gap-1 my-1.5 max-w-[90%]"
                >
                  {currentSlide.skills.slice(0, 3).map((skill, i) => (
                    <span 
                      key={i} 
                      className="text-[9px] sm:text-[10px] px-2 py-0.5 rounded-full bg-white/10 text-slate-200 backdrop-blur-sm border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </motion.div>

                {/* Interactive Action Links */}
                <motion.div 
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="flex items-center space-x-2 mt-1"
                >
                  {currentSlide.githubUrl && currentSlide.githubUrl !== '#' && (
                    <a
                      href={currentSlide.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View GitHub Repository"
                      className="p-1.5 bg-white/20 hover:bg-white/30 text-white rounded-full transition-colors backdrop-blur-md shadow"
                    >
                      <FiGithub size={14} />
                    </a>
                  )}
                  {currentSlide.liveUrl && currentSlide.liveUrl !== '#' && (
                    <a
                      href={currentSlide.liveUrl}
                      target={currentSlide.liveUrl.startsWith('http') ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      title="View Live / Details"
                      className="p-1.5 bg-primary-600 hover:bg-primary-500 text-white rounded-full transition-colors shadow"
                    >
                      <FiExternalLink size={14} />
                    </a>
                  )}
                  {!currentSlide.githubUrl && !currentSlide.liveUrl && (
                    <a
                      href="#projects"
                      className="text-[11px] text-primary-300 hover:text-white underline font-medium"
                    >
                      Explore Project
                    </a>
                  )}
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Quick Prev / Next Arrow Overlay */}
          <button
            onClick={prevSlide}
            aria-label="Previous Slide"
            className="absolute left-2 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900/80 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
          >
            <FiChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next Slide"
            className="absolute right-2 p-2 rounded-full bg-slate-950/60 hover:bg-slate-900/80 text-white/80 hover:text-white backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-300 z-30"
          >
            <FiChevronRight size={18} />
          </button>
        </div>

        {/* ----------------- Floating Skills on Circle ----------------- */}

        {/* React.js Badge (Top Right Orbit) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }} 
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="absolute -right-2 sm:-right-5 top-8 sm:top-12 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xl font-bold text-xs sm:text-sm text-slate-900 dark:text-white z-20 flex items-center space-x-2 border border-cyan-500/40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
        >
          <div className="w-6 h-6 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-500">
            <SiReact size={16} className="animate-spin-slow" />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-cyan-600 dark:text-cyan-400 leading-tight">React.js</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-normal">Frontend</span>
          </div>
        </motion.div>

        {/* Django Badge (Bottom Left Orbit) */}
        <motion.div 
          animate={{ y: [0, 8, 0] }} 
          transition={{ repeat: Infinity, duration: 4.5, delay: 0.5, ease: "easeInOut" }}
          className="absolute -left-2 sm:-left-6 bottom-10 sm:bottom-14 glass-card px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl shadow-xl font-bold text-xs sm:text-sm text-slate-900 dark:text-white z-20 flex items-center space-x-2 border border-emerald-500/40 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md"
        >
          <div className="w-6 h-6 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
            <SiDjango size={15} />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-extrabold text-emerald-600 dark:text-emerald-400 leading-tight">Django</span>
            <span className="text-[9px] text-slate-500 dark:text-slate-400 font-normal">Backend</span>
          </div>
        </motion.div>

        {/* Top Floating Slide Mode Badge */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -top-3 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full bg-slate-900/90 text-white text-[11px] font-semibold flex items-center space-x-1.5 shadow-lg border border-primary-500/40 backdrop-blur-md z-20"
        >
          {currentSlide.isProfile ? (
            <>
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>Developer & Skills</span>
            </>
          ) : (
            <>
              <FiLayers size={12} className="text-primary-400" />
              <span>Project Slide ({currentIndex}/{slides.length - 1})</span>
            </>
          )}
        </motion.div>
      </div>

      {/* 5-Second Slider Navigation Indicators */}
      <div className="flex items-center space-x-2 mt-4 z-20">
        {slides.map((slide, idx) => {
          const isActive = idx === currentIndex;
          return (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={`relative h-2 rounded-full transition-all duration-300 ${
                isActive 
                  ? 'w-7 sm:w-8 bg-primary-500 dark:bg-primary-400' 
                  : 'w-2 bg-slate-300 dark:bg-slate-700 hover:bg-slate-400 dark:hover:bg-slate-600'
              }`}
            >
              {isActive && !isPaused && (
                <motion.div 
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ duration: 5, ease: "linear" }}
                  className="absolute inset-0 bg-white/40 rounded-full"
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Subtle indicator caption */}
      <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1">
        <span className="w-1.5 h-1.5 rounded-full bg-primary-500 animate-pulse"></span>
        Slides every 5 seconds • Hover to pause
      </p>
    </div>
  );
};
