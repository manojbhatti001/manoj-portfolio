import React, { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const formVariants = {
    hidden: { 
      opacity: 0,
      scale: 0.8,
      rotateY: 45
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const inputVariants = {
    hidden: { 
      x: -50,
      opacity: 0
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        className="container mx-auto px-6"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: -20 },
            visible: { 
              opacity: 1, 
              y: 0,
              transition: { duration: 0.5 }
            }
          }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-8 text-gray-900 dark:text-white">
            Get In <span className="text-primary">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>
        </motion.div>

        <motion.div 
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg
                     border border-gray-200 dark:border-gray-700"
          variants={formVariants}
        >
          <form className="space-y-6">
            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Your Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg 
                         border border-gray-200 dark:border-gray-600
                         text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-400
                         focus:border-primary dark:focus:border-primary
                         focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20
                         outline-none transition-colors duration-200"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Your Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg 
                         border border-gray-200 dark:border-gray-600
                         text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-400
                         focus:border-primary dark:focus:border-primary
                         focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20
                         outline-none transition-colors duration-200"
              />
            </motion.div>

            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 text-sm font-medium">
                Your Message
              </label>
              <textarea
                placeholder="Your message here..."
                rows="4"
                className="w-full p-3 bg-gray-50 dark:bg-gray-700 rounded-lg 
                         border border-gray-200 dark:border-gray-600
                         text-gray-900 dark:text-white
                         placeholder-gray-400 dark:placeholder-gray-400
                         focus:border-primary dark:focus:border-primary
                         focus:ring-2 focus:ring-primary/20 dark:focus:ring-primary/20
                         outline-none transition-colors duration-200"
              ></textarea>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full p-4 bg-primary hover:bg-primary/90
                       text-white font-medium rounded-lg
                       transform transition-all duration-200
                       focus:ring-2 focus:ring-primary/20
                       shadow-lg hover:shadow-xl"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Contact;
