import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiChevronDown } from 'react-icons/fi';
import { Button } from '../ui/Button';
import { HeroCircleSlider } from './HeroCircleSlider';
import { profileData } from '../../data/profile';

// Left-origin transition for Kesava Perumal G (cycles every 2 seconds)
const LeftOriginNameTransition = () => {
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    // Transitions starting from the left side every 2 seconds
    const interval = setInterval(() => {
      setCycle(prev => prev + 1);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      <motion.span
        key={cycle}
        initial={{ clipPath: 'inset(0 100% 0 0)', opacity: 0.25 }}
        animate={{ clipPath: 'inset(0 0% 0 0)', opacity: 1 }}
        transition={{ duration: 0.75, ease: [0.25, 1, 0.5, 1] }}
        className="font-bold text-slate-900 dark:text-white inline-block origin-left"
      >
        {profileData.name}
      </motion.span>

      {/* High-tech light wipe beam starting from the left side every 2 seconds */}
      <motion.span
        key={`beam-${cycle}`}
        initial={{ left: '-60%', opacity: 0 }}
        animate={{ left: '140%', opacity: [0, 0.9, 0.9, 0] }}
        transition={{ duration: 0.85, ease: 'easeInOut' }}
        className="absolute inset-y-0 w-16 bg-gradient-to-r from-transparent via-primary-400/50 dark:via-primary-300/50 to-transparent skew-x-12 pointer-events-none"
      />

      {/* Left-origin accent underline expanding from left */}
      <motion.span
        key={`accent-${cycle}`}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: [0, 1, 0.8] }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        style={{ originX: 0 }}
        className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-primary-500 via-indigo-500 to-transparent rounded-full"
      />
    </span>
  );
};

// 3D Horizontal Flipping Role Title (flips right & left side every 2 seconds)
const FlippingRoleTitle = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  useEffect(() => {
    // Flips back and forth between right and left side every 2 seconds
    const interval = setInterval(() => {
      setIsFlipped(prev => !prev);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div 
      className="my-1 select-none cursor-pointer inline-block text-left"
      style={{ perspective: '1200px' }}
      onClick={() => setIsFlipped(prev => !prev)}
      title="Click to flip"
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.75, ease: [0.4, 0, 0.2, 1] }}
        style={{ transformStyle: 'preserve-3d' }}
        className="relative inline-block"
      >
        {/* Front Face */}
        <h1 
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden' 
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 flex flex-wrap items-center gap-x-3.5"
        >
          <span className="text-slate-900 dark:text-white">Full Stack</span>
          <span className="text-gradient">Developer</span>
        </h1>

        {/* Back Face (Flipped horizontally 180deg to read properly) */}
        <h1 
          style={{ 
            backfaceVisibility: 'hidden', 
            WebkitBackfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 flex flex-wrap items-center gap-x-3.5 absolute inset-0"
        >
          <span className="text-gradient">Full Stack</span>
          <span className="text-slate-900 dark:text-white">Developer</span>
        </h1>
      </motion.div>
    </div>
  );
};

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
          <div className="text-left">
            {/* Name starts from the left side with left-origin reveal transition every 2 seconds */}
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400 mb-3 text-left flex items-center flex-wrap gap-x-2">
              <span>Hi, I'm</span>
              <LeftOriginNameTransition />
            </h2>

            {/* Full Stack Developer flips right & left side in 3D every 2 seconds */}
            <FlippingRoleTitle />

            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg mb-8 leading-relaxed text-left">
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
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center relative my-6 lg:my-0"
          >
            <HeroCircleSlider />
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
