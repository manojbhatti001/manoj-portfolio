import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineTool, AiOutlineMessage } from 'react-icons/ai';
import { FaCode, FaDownload, FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const { isDarkMode, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      // Update active section based on scroll position
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
      // Get the navbar height
      const navbarHeight = document.querySelector('nav').offsetHeight;
      
      // Calculate position
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;

      // Smooth scroll to the section
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`
      fixed top-0 left-0 right-0 z-50 
      bg-accent/95 dark:bg-accent-dark/95
      backdrop-blur-md 
      border-b border-gray-200/20 dark:border-gray-700/20
      shadow-lg shadow-gray-200/20 dark:shadow-gray-900/30 
      transition-all duration-300
      ${scrollY > 70 ? 'py-1' : 'py-2'}
    `}>
      <div className="container mx-auto flex justify-between items-center px-6">
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
            className="h-24 w-auto scale-75 filter dark:brightness-0 dark:invert transition-all duration-300 hover:brightness-110"
          />
        </motion.div>

        {/* Navigation Items */}
        <div className="flex items-center space-x-8">
          {/* Nav Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map(({ name, icon: Icon, href }) => {
              const isActive = activeSection === name.toLowerCase();
              return (
                <motion.button // Changed from motion.a to motion.button
                  key={name}
                  onClick={() => scrollToSection(name.toLowerCase())}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-full
                    transition-all duration-300 cursor-pointer
                    ${isActive 
                      ? 'bg-primary/10 text-primary dark:text-primary-light' 
                      : 'text-text-primary dark:text-text-primary-dark hover:text-primary dark:hover:text-primary'
                    }
                  `}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-5 h-5" />
                  <span>{name}</span>
                </motion.button>
              );
            })}
          </div>

          {/* Theme Toggle */}
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
              <FiSun className="w-5 h-5" />
            ) : (
              <FiMoon className="w-5 h-5" />
            )}
          </motion.button>
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
      <section id="home" className="relative min-h-screen flex flex-col">
        {/* Gradient Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-secondary via-accent to-secondary opacity-70 -z-10" />
        
        {/* Hero Section */}
        <div className="flex-grow flex items-center pt-20">
          <motion.div 
            className="container mx-auto px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="grid md:grid-cols-2 mt-16 mb-10 gap-12 items-center">
              {/* Left Column - Text Content */}
              <motion.div 
                className="text-left"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl text-neon-purple mb-4">Hello, I'm</h2>
                
                <motion.h1 className="text-6xl md:text-6xl font-bold mb-4">
                  <span className="text-purple-500">Manoj Bhatti</span>
                </motion.h1>
                <h2 className="text-4xl font-semibold mb-6">
                  Building Digital Experiences
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  A passionate Full Stack Developer specializing in building exceptional digital experiences.
                  Focused on creating innovative solutions with modern technologies.
                </p>

                {/* Call to Action Buttons */}
                <motion.div 
                  className="flex flex-wrap gap-4 mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <motion.a 
                    href="mailto:mbhatti9912@gmail.com?subject=Project%20Inquiry&body=Hi%20Manoj,%0D%0A%0D%0AI'm%20interested%20in%20discussing%20a%20potential%20project.%0D%0A%0D%0AName:%0D%0ACompany:%0D%0AProject%20Details:%0D%0A%0D%0ABest%20regards," 
                    className="button-primary group flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaCode className="text-xl mr-2" />
                    Get In Touch
                  </motion.a>
                  <motion.a 
                    href="/Manoj.pdf"  // Updated path
                    className="button-secondary group flex items-center"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaDownload className="text-xl mr-2" />
                    Download CV
                  </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div 
                  className="flex space-x-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 }}
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
                      whileHover={{ scale: 1.1, y: -5 }}
                      whileTap={{ scale: 0.95 }}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Icon className="text-2xl" />
                    </motion.a>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Column - Profile Photo with Creative Elements */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
              >
                {/* Animated Background Shapes */}
                <motion.div 
                  className="absolute inset-0 -z-10"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-r from-gradient-1/20 to-gradient-2/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-r from-gradient-2/20 to-gradient-3/20 rounded-full blur-3xl" />
                </motion.div>

                {/* Profile Container */}
                <motion.div
                  className="relative w-full aspect-square max-w-md mx-auto"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Decorative Circle */}
                  <motion.div
                    className="absolute inset-0 border-2 border-dashed border-primary/30 rounded-full"
                    animate={{
                      rotate: [0, 360],
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />

                  {/* Tech Stack Orbit */}
                  {['React', 'Node.js', 'MongoDB', 'Express'].map((tech, index) => (
                    <motion.div
                      key={tech}
                      className="absolute w-12 h-12 rounded-full bg-white/90 shadow-lg flex items-center justify-center"
                      style={{
                        top: '50%',
                        left: '50%',
                      }}
                      animate={{
                        x: Math.cos(((2 * Math.PI) / 4) * index) * 140,
                        y: Math.sin(((2 * Math.PI) / 4) * index) * 140,
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                        delay: index * 0.5,
                      }}
                    >
                      <img
                        src={`/images/tech/${tech.toLowerCase()}.svg`}
                        alt={tech}
                        className="w-8 h-8"
                      />
                    </motion.div>
                  ))}

                  {/* Profile Image */}
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

                  {/* Floating Badges */}
                  <motion.div
                    className="absolute -right-4 top-10 bg-white/90 px-4 py-2 rounded-full shadow-lg"
                    animate={{
                      y: [0, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <span className="text-sm font-semibold text-primary">Full Stack Dev</span>
                  </motion.div>

                  <motion.div
                    
                  >
                    {/* <span className="text-sm font-semibold text-primary">Problem Solver</span> */}
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Header;
