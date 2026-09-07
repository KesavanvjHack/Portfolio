// src/components/sections/Contact.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiSend } from 'react-icons/fi';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { profileData } from '../../data/profile';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Form submitted:', formData);
      alert('Thanks for your message! This is currently a frontend demo.');
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <SectionHeading 
          title="Let's build something together." 
          subtitle="Feel free to reach out for collaborations, opportunities, or just a friendly hello."
        />

        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Contact Information</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              I'm currently open to new opportunities and exciting projects. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href={`mailto:${profileData.email}`} className="flex items-center p-4 glass-card rounded-xl group hover:-translate-y-1 transition-all">
                <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-lg group-hover:scale-110 transition-transform">
                  <FiMail size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Email</h4>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{profileData.email}</p>
                </div>
              </a>
              
              <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 glass-card rounded-xl group hover:-translate-y-1 transition-all">
                <div className="p-3 bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-lg group-hover:scale-110 transition-transform">
                  <FiGithub size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">GitHub</h4>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">github.com/username</p>
                </div>
              </a>
              
              <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center p-4 glass-card rounded-xl group hover:-translate-y-1 transition-all">
                <div className="p-3 bg-[#0077b5]/10 text-[#0077b5] dark:bg-[#0077b5]/20 dark:text-[#0077b5] rounded-lg group-hover:scale-110 transition-transform">
                  <FiLinkedin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">LinkedIn</h4>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">linkedin.com/in/username</p>
                </div>
              </a>

              <div className="flex items-center p-4 glass-card rounded-xl">
                <div className="p-3 bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 rounded-lg">
                  <FiMapPin size={24} />
                </div>
                <div className="ml-4">
                  <h4 className="text-sm font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider">Location</h4>
                  <p className="text-lg font-medium text-slate-900 dark:text-white">{profileData.location}</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">Send me a message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-100 border border-transparent dark:bg-slate-800/50 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-100 border border-transparent dark:bg-slate-800/50 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-slate-100 border border-transparent dark:bg-slate-800/50 dark:border-slate-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-all text-slate-900 dark:text-white resize-none"
                    placeholder="Hello, I'd like to talk about..."
                  />
                </div>
                <Button type="submit" variant="primary" size="lg" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FiSend size={18} className="ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
