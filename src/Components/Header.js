import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';
import { FaCode, FaDownload, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when window is resized to desktop view
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) { // md breakpoint
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { name: 'Home', icon: AiOutlineHome, href: '#home' },
    { name: 'About', icon: AiOutlineUser, href: '#about' },
    { name: 'Projects', icon: AiOutlineProject, href: '#projects' },
    { name: 'Skills', icon: AiOutlineTool, href: '#skills' },
    { name: 'Contact', icon: AiOutlineMessage, href: '#contact' }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav 
      className={`
        fixed top-0 left-0 right-0 z-50 
        bg-accent/95 dark:bg-accent-dark/95
        backdrop-blur-md 
        border-b border-gray-200/20 dark:border-gray-700/20
        shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30 
        transition-all duration-300
        ${scrollY > 70 ? 'py-1' : 'py-2'}
      `}
    >
      <div className="container mx-auto px-4 sm:px-6 relative">
        <div className="flex justify-between items-center h-16"> {/* Fixed height for consistency */}
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img 
              src="/images/mainlogo.webp" 
              alt="Logo" 
              className="h-8 w-auto sm:h-9 transition-all duration-300 hover:brightness-110" // Adjusted logo size
            />
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2 lg:gap-4">
            {navItems.map(({ name, icon: Icon, href }) => {
              const isActive = activeSection === name.toLowerCase();
              return (
                <motion.button
                  key={name}
                  onClick={() => scrollToSection(name.toLowerCase())}
                  className={`
                    flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 lg:py-2 rounded-full
                    transition-all duration-300 cursor-pointer text-sm lg:text-base
                    ${isActive 
                      ? 'bg-primary/10 text-primary dark:text-primary-light font-medium' 
                      : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-3.5 h-3.5 lg:w-4 lg:h-4" />
                  <span>{name}</span>
                </motion.button>
              );
            })}

            {/* Desktop Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 
                       text-gray-700 dark:text-gray-200
                       hover:bg-gray-200 dark:hover:bg-gray-700 
                       transition-colors duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              {isDarkMode ? (
                <FiSun className="w-4 h-4" />
              ) : (
                <FiMoon className="w-4 h-4" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-5 h-4 flex flex-col justify-between"> {/* Adjusted hamburger size */}
              <span 
                className={`
                  block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'rotate-45 translate-y-1.75' : ''}
                `}
              />
              <span 
                className={`
                  block h-0.5 w-5 bg-current transition-all duration-300 ease-in-out
                  ${isMenuOpen ? 'opacity-0' : 'opacity-100'}
                `}
              />
              <span 
                className={`
                  block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out
                  ${isMenuOpen ? '-rotate-45 -translate-y-1.75' : ''}
                `}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`
            md:hidden fixed left-0 right-0 top-16 
            bg-accent/98 dark:bg-accent-dark/98 
            backdrop-blur-lg
            border-b border-gray-200/20 dark:border-gray-700/20
            shadow-lg
            transition-all duration-300 ease-in-out
            transform
            ${isMenuOpen ? 'translate-y-0 opacity-100 visible' : '-translate-y-full opacity-0 invisible'}
          `}
        >
          <div className="container mx-auto py-3"> {/* Adjusted padding */}
            <div className="flex flex-col gap-1"> {/* Reduced gap */}
              {navItems.map(({ name, icon: Icon, href }) => {
                const isActive = activeSection === name.toLowerCase();
                return (
                  <motion.button
                    key={name}
                    onClick={() => {
                      scrollToSection(name.toLowerCase());
                      setIsMenuOpen(false);
                    }}
                    className={`
                      flex items-center gap-3 w-full px-4 py-2.5 
                      transition-all duration-300
                      ${isActive 
                        ? 'bg-primary/10 text-primary dark:text-primary-light font-medium' 
                        : 'text-text-primary dark:text-text-primary-dark hover:bg-gray-100 dark:hover:bg-gray-800'
                      }
                    `}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Icon className="w-4 h-4" /> {/* Adjusted icon size */}
                    <span className="text-sm">{name}</span> {/* Adjusted text size */}
                  </motion.button>
                );
              })}
              
              {/* Mobile Theme Toggle */}
              <button
                onClick={() => {
                  toggleTheme();
                  setIsMenuOpen(false);
                }}
                className="flex items-center gap-3 w-full px-4 py-2.5
                         text-gray-700 dark:text-gray-200
                         hover:bg-gray-100 dark:hover:bg-gray-800 
                         transition-colors duration-300"
              >
                {isDarkMode ? (
                  <>
                    <FiSun className="w-4 h-4" />
                    <span className="text-sm">Light Mode</span>
                  </>
                ) : (
                  <>
                    <FiMoon className="w-4 h-4" />
                    <span className="text-sm">Dark Mode</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Header = () => {
  const technologies = [
    "React.js", "Node.js", "MongoDB", "Express.js", "JavaScript", "TypeScript"
  ];

  return (
    <>
      <Navbar />
      <section id="home" className="relative min-h-[100svh] flex flex-col">
        {/* Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-secondary via-accent to-secondary opacity-70 -z-10" />
        
        {/* Hero Section */}
        <div className="flex-grow flex items-center px-4 sm:px-6 pt-16 sm:pt-20">
          <div className="container mx-auto">
            {/* Mobile Layout (Single Column) */}
            <div className="flex flex-col gap-8 md:hidden items-center text-center">
              {/* Profile Image for Mobile */}
              <motion.div 
                className="w-48 h-48 relative"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-4 rounded-full overflow-hidden bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm shadow-xl">
                  <img
                    src="/images/manoj.jpg"
                    alt="Manoj Bhatti"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* Text Content for Mobile */}
              <motion.div
                className="space-y-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h2 className="text-lg text-neon-purple">Hello, I'm</h2>
                <h1 className="text-3xl font-bold">
                  <span className="text-purple-500">Manoj Bhatti</span>
                </h1>
                <h2 className="text-xl font-semibold">
                  Building Digital Experiences
                </h2>
                <p className="text-sm text-text-secondary px-4">
                  A passionate Full Stack Developer specializing in building exceptional digital experiences.
                </p>
              </motion.div>

              {/* Buttons for Mobile */}
              <motion.div 
                className="flex flex-col gap-3 w-full px-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <motion.a 
                  href="mailto:mbhatti9912@gmail.com"
                  className="button-primary flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaCode className="text-lg" />
                  Get In Touch
                </motion.a>
                
                <motion.a 
                  href="/Manoj.pdf"
                  className="button-secondary flex items-center justify-center gap-2"
                  whileTap={{ scale: 0.95 }}
                >
                  <FaDownload className="text-lg" />
                  Download CV
                </motion.a>
              </motion.div>

              {/* Social Links for Mobile */}
              <motion.div 
                className="flex justify-center gap-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                {[
                  { icon: FaGithub, url: "https://github.com/manojbhatti001" },
                  { icon: FaLinkedin, url: "https://linkedin.com/in/manojbhatti" },
                  { icon: FaInstagram, url: "https://www.instagram.com/_manojbhatti_/" }
                ].map(({ icon: Icon, url }) => (
                  <motion.a 
                    key={url}
                    href={url}
                    className="social-icon-link"
                    whileTap={{ scale: 0.95 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className="text-lg" />
                  </motion.a>
                ))}
              </motion.div>
            </div>

            {/* Desktop Layout (Two Columns) */}
            <div className="hidden md:grid md:grid-cols-2 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl text-neon-purple mb-4">Hello, I'm</h2>
                <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                  <span className="text-purple-500">Manoj Bhatti</span>
                </h1>
                <h2 className="text-3xl lg:text-4xl font-semibold mb-6">
                  Building Digital Experiences
                </h2>
                <p className="text-lg text-text-secondary mb-8">
                  A passionate Full Stack Developer specializing in building exceptional digital experiences.
                  Focused on creating innovative solutions with modern technologies.
                </p>

                {/* Desktop Buttons */}
                <div className="flex gap-4 mb-8">
                  <motion.a 
                    href="mailto:mbhatti9912@gmail.com"
                    className="button-primary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="text-xl mr-2" />
                    Get In Touch
                  </motion.a>
                  
                  <motion.a 
                    href="/Manoj.pdf"
                    className="button-secondary"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="text-xl mr-2" />
                    Download CV
                  </motion.a>
                </div>

                {/* Desktop Social Links */}
                <div className="flex gap-6">
                  {[
                    { icon: FaGithub, url: "https://github.com/manojbhatti001" },
                    { icon: FaLinkedin, url: "https://linkedin.com/in/manojbhatti" },
                    { icon: FaInstagram, url: "https://www.instagram.com/_manojbhatti_/" }
                  ].map(({ icon: Icon, url }) => (
                    <motion.a 
                      key={url}
                      href={url}
                      className="social-icon-link"
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>

              {/* Right Column - Profile Image */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className="relative w-80 h-80 mx-auto"
                  whileHover={{ scale: 1.02 }}
                >
                  <motion.div
                    className="absolute inset-8 rounded-full overflow-hidden bg-gradient-to-b from-white/50 to-white/30 backdrop-blur-sm shadow-xl"
                    whileHover={{ scale: 1.05 }}
                  >
                    <img
                      src="/images/manoj.jpg"
                      alt="Manoj Bhatti"
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;
