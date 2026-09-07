// src/layouts/Footer.jsx
import React from 'react';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profileData } from '../data/profile';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-12 transition-colors">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <h3 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-slate-100 mb-2">
              {profileData.name}
            </h3>
            <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
              {profileData.role}
            </p>
            <p className="text-slate-500 dark:text-slate-400 text-sm max-w-sm">
              React.js • Python • Django • REST APIs
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
              <FiGithub size={20} />
            </a>
            <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
              <FiLinkedin size={20} />
            </a>
            <a href={`mailto:${profileData.email}`} className="p-2 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-primary-100 hover:text-primary-600 dark:hover:bg-primary-900/30 dark:hover:text-primary-400 transition-colors">
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="text-center border-t border-slate-200 dark:border-slate-800 pt-8 text-sm text-slate-500 dark:text-slate-500">
          <p>© {currentYear} {profileData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
