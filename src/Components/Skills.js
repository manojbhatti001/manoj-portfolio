import React from 'react';
import { motion } from 'framer-motion';
import { techLogos } from '../assets/logos';

const Skills = () => {
  const skills = [
    {
      category: "Frontend Development",
      items: ["HTML5", "CSS3/SCSS", "JavaScript", "React", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      category: "Backend Development",
      items: ["Node.js", "Express.js", "MongoDB", "REST API"]
    },
    {
      category: "DevOps & Tools",
      items: ["Git", "GitHub", "Postman", "VS Code", "Webpack"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  return (
    <section id="skills" className="py-24 relative bg-background dark:bg-background-dark">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-text-primary dark:text-text-primary-dark">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-text-secondary dark:text-text-secondary-dark max-w-2xl mx-auto">
            A comprehensive toolkit of technologies I use to build modern web applications
          </p>
        </motion.div>

        {/* Skills Cards Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-6xl mx-auto grid gap-8"
        >
          {skills.map((skillGroup) => (
            <motion.div
              key={skillGroup.category}
              variants={itemVariants}
              className="bg-accent/50 dark:bg-accent-dark/50 backdrop-blur-sm 
                       rounded-xl p-8 border border-accent dark:border-accent-dark
                       shadow-lg"
            >
              <div className="flex items-center mb-6">
                <h3 className="text-2xl font-bold text-text-primary dark:text-text-primary-dark">
                  {skillGroup.category}
                </h3>
                <div className="h-px flex-grow ml-6 bg-gradient-to-r from-primary/50 to-transparent dark:from-primary/30" />
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {skillGroup.items.map((skill) => (
                  <motion.div 
                    key={skill}
                    whileHover={{ scale: 1.05 }}
                    className="skill-card group"
                  >
                    <div className="flex flex-col items-center gap-2 p-4 rounded-xl 
                                bg-background/80 dark:bg-background-dark/80 
                                border border-accent dark:border-accent-dark
                                group-hover:border-primary/30 
                                transition-all duration-300"
                    >
                      {techLogos[skill] && (
                        <img 
                          src={techLogos[skill]} 
                          alt={skill} 
                          className="w-12 h-12 object-contain 
                                   dark:filter dark:brightness-90 dark:contrast-125"
                        />
                      )}
                      <span className="text-sm font-medium text-text-primary dark:text-text-primary-dark">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;