import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaCode, FaBrain, FaLightbulb, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiReact, SiNodedotjs, SiMongodb } from 'react-icons/si';

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  React.useEffect(() => {
    if (inView) {
      controls.start('visible');
    }
  }, [controls, inView]);

  const skillIcons = {
    "JavaScript": <SiJavascript className="text-yellow-400" />,
    "React": <SiReact className="text-blue-400" />,
    "Node.js": <SiNodedotjs className="text-green-500" />,
    "MongoDB": <SiMongodb className="text-green-400" />
  };

  const personalDetails = [
    { label: "Name", value: "Manoj Bhatti" },
    { label: "Phone", value: "9992576972" },
    { label: "Email", value: "mbhatti9912@gmail.com" },
    { label: "Address", value: "Hisar, Haryana" },
    { label: "Languages", value: "English, Hindi" },
  ];

  const experiences = [
    {
      role: "Frontend Developer",
      company: "International Influencing News Social Media Advertisement Federation.",
      duration: "2025 - Present",
      description: "Leading development of enterprise web applications using MERN stack."
    },
    {
      role: "Full Stack Developer",
      company: "Kodu-Powered by Dhurina.",
      duration: "2024 - 2025",
      description: "Developed and maintained multiple client projects using React and Node.js."
    }
  ];

  return (
    <section id="about" className="py-24 px-4 md:px-8 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-6xl mx-auto"
      >
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="text-sm font-semibold text-primary dark:text-primary tracking-wider uppercase mb-3 block">
            Discover My Story
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-8" />
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer experience in building
            scalable web applications and delivering exceptional digital experiences.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column - Personal Info */}
          <div className="lg:col-span-4">
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden">
              <div className="p-6">
                {/* Profile Image */}
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-primary/20">
                    <img 
                      src="/images/manoj.jpg" 
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Personal Details */}
                <div className="space-y-4">
                  {personalDetails.map((detail, index) => (
                    <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 dark:border-gray-700">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">{detail.label}:</span>
                      <span className="text-gray-900 dark:text-white">{detail.value}</span>
                    </div>
                  ))}
                </div>

                {/* Download CV Button */}
                <motion.a
                  href="/pdf/Manoj.pdf"  // Updated path to the PDF file in the public/pdf folder.
                  className="mt-8 block w-full py-3 px-6 text-center bg-primary text-white rounded-lg
                           hover:bg-primary/90 transition-all font-medium"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Download CV
                </motion.a>
              </div>
            </div>
          </div>

          {/* Right Column - Experience & Skills */}
          <div className="lg:col-span-8 space-y-8">
            {/* About Text */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">My Journey</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                With a strong foundation in both front-end and back-end development,
                I specialize in building robust web applications that solve real-world
                problems. My approach combines technical expertise with creative
                problem-solving to deliver solutions that exceed expectations.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I'm passionate about staying current with the latest technologies
                and best practices in web development, constantly expanding my
                skillset to deliver cutting-edge solutions.
              </p>
            </div>

            {/* Experience */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4 pb-6">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white">{exp.role}</h4>
                    <p className="text-primary dark:text-primary font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">{exp.duration}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Skills */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
                {Object.entries(skillIcons).map(([skill, icon]) => (
                  <motion.div
                    key={skill}
                    className="group relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="relative z-10 flex items-center gap-3 p-4 rounded-xl
                                  bg-white dark:bg-gray-800 
                                  border border-gray-100 dark:border-gray-700
                                  hover:border-primary/30 
                                  shadow-sm hover:shadow-md
                                  transition-all duration-300">
                      {/* Animated background gradient */}
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5 
                                    opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      {/* Icon with glow effect */}
                      <div className="relative">
                        <span className="text-2xl sm:text-3xl relative z-10 transition-transform duration-300 
                                     group-hover:scale-110">{icon}</span>
                        <div className="absolute inset-0 bg-current opacity-20 blur-sm scale-150 
                                    group-hover:opacity-30 transition-opacity duration-300" />
                      </div>

                      {/* Skill name */}
                      <span className="font-medium text-sm sm:text-base text-gray-900 dark:text-white 
                                   relative z-10">{skill}</span>

                      {/* Corner accent */}
                      <div className="absolute -right-2 -top-2 w-8 h-8 bg-gradient-to-br from-primary/20 to-transparent 
                                    rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </div>

            
                
              
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
