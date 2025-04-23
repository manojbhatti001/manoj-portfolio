import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-accent dark:bg-accent-dark py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <img 
                src="/images/mainlogo.webp" 
                alt="Logo" 
                className="h-16 w-auto filter dark:brightness-0 dark:invert transition-all duration-300 hover:brightness-110"
              />
            </motion.div>
            <div>
              <h3 className="text-xl font-bold text-text-primary dark:text-text-primary-dark">
                MANOJ <span className="text-primary">BHATTI</span>
              </h3>
              <p className="text-sm mt-1 text-text-secondary dark:text-text-secondary-dark">
                Full Stack Developer
              </p>
            </div>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/manojbhatti001" 
              className="social-icon-link flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-xl" />
              <span>GitHub</span>
            </a>
            <a 
              href="https://linkedin.com/in/manojbhatti" 
              className="social-icon-link flex items-center gap-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-xl" />
              <span>LinkedIn</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
