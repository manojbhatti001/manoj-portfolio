import React from 'react';
import { motion } from 'framer-motion';

const Certifications = () => {
  const certifications = [
    {
      title: "Full Stack Web Development",
      issuer: "KODU Powered By Dhurina",
      date: "October 2024",
      skills: ["MERN Stack", "Web Development", "Database Management"],
      credential: "KODU-2024-FSW-1234"
    },
    {
      title: "React.js Advanced Concepts",
      issuer: "Udemy",
      date: "August 2024",
      skills: ["React.js", "Redux", "Performance Optimization"],
      credential: "UC-12345678"
    },
    // Add more certifications as needed
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="glass-card p-6 hover-card
                         bg-white dark:bg-gray-800 
                         border border-gray-200 dark:border-gray-700
                         shadow-lg dark:shadow-gray-900/30"
            >
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">
                {cert.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {cert.issuer} • {cert.date}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {cert.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm 
                             bg-gray-100 dark:bg-gray-700
                             text-gray-800 dark:text-gray-200 
                             rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Credential ID: {cert.credential}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;