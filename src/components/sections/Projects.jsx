// src/components/sections/Projects.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Badge } from '../ui/Badge';
import { projectsData } from '../../data/projects';
import { profileData } from '../../data/profile';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={`glass-card rounded-2xl overflow-hidden flex flex-col h-full group ${project.featured ? 'ring-2 ring-primary-500/50' : ''}`}
    >
      <div className="relative overflow-hidden h-32 sm:h-40">
        <img 
          src={project.image} 
          alt={project.title} 
          className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
        />
        {project.featured && (
          <div className="absolute top-4 right-4 bg-yellow-500/90 text-white px-3 py-1 text-xs font-bold rounded-full flex items-center shadow-lg backdrop-blur-sm">
            <FiStar size={12} className="mr-1 fill-current" /> Featured
          </div>
        )}
        <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4 backdrop-blur-sm">
          {project.githubUrl !== '#' && (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors"
            >
              <FiGithub size={24} />
            </a>
          )}
          {project.liveUrl !== '#' && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 bg-primary-600/90 hover:bg-primary-500 text-white rounded-full transition-colors"
            >
              <FiExternalLink size={24} />
            </a>
          )}
        </div>
      </div>
      
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow line-clamp-3">
          {project.shortDescription || project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-200 dark:border-slate-800">
          {(project.tags || project.technologies || []).map(tech => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Featured Projects" 
          subtitle="Some of the notable applications I've built."
        />

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Want to see more of my code?
          </p>
          <a 
            href={profileData.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-primary-600 dark:text-primary-400 font-bold hover:underline"
          >
            Explore my GitHub Profile <FiExternalLink size={16} className="ml-2" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};
