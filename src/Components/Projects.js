import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Quiz Application",
      description: "An interactive and user-friendly platform that enables users to create, share, and take quizzes across various topics, featuring real-time scoring, performance analytics, and customizable question formats to enhance learning, engagement, and knowledge assessment.",
      technologies: ["MongoDB", "Express.js", "React", "Node.js"],
      liveDemo: "https://quiz-reactjs-five.vercel.app/",
      github: "",
      image: "/images/quiz.webp"
    },
    {
      title: "Product Management System",
      description: "A comprehensive and efficient platform designed to streamline the end-to-end lifecycle of products—from creation and inventory tracking to sales analytics and performance monitoring—empowering teams to manage, optimize, and scale their product operations with ease and precision.",
      technologies: ["React", "Tailwind CSS", "MongoDB", "Git"],
      liveDemo: "https://products-ten-alpha.vercel.app/",
      github: "https://github.com/manojbhatti001/Products",
      image: "/images/products.webp"
    },
    {
      title: "Blood Donation App",
      description: "An innovative and compassionate platform designed to seamlessly connect blood donors with patients in urgent need, enabling timely, location-based matching of compatible blood types while promoting community awareness, donor engagement, and lifesaving support through streamlined technology.",
      technologies: ["React", "Tailwind CSS", "Framer Motion", "JavaScript"],
      liveDemo: "https://thebloodhero.com/",
      github: "https://github.com/manojbhatti001/Blood-Donation",
      image: "/images/blood-donation.jpg"
    },
    {
      title: "Skill Sharing Platform",
      description: "A dynamic community-driven platform that empowers individuals to share, discover, and exchange skills by connecting learners with local experts, fostering collaboration, personal growth, and a culture of mutual support through intuitive, tech-enabled matchmaking and scheduling features.",
      technologies: ["React", "Tailwind CSS", "React-Framer", "Lucide-React"],
      liveDemo: "https://skill-sharing-platform-umber.vercel.app/",
      github: "https://github.com/manojbhatti001/skill-sharing-platform",
      image: "/images/skill-sharing.jpg"
    }
  ];

  return (
    <section id="projects" className="relative bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 py-24">
      {/* Gradient decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-60 h-60 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Explore my latest work and creative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white dark:bg-gray-800 rounded-[2rem] overflow-hidden 
                       shadow-md hover:shadow-xl transition-all duration-300
                       border border-gray-100 dark:border-gray-700
                       hover:scale-[1.02]"
            >
              <div className="h-48 bg-gray-100 dark:bg-gray-700 relative overflow-hidden rounded-t-[2rem]">
                <img 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 
                           group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 
                             group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 text-xs bg-gray-50 dark:bg-gray-700/50 
                               text-primary dark:text-primary-light rounded-full
                               border border-gray-100 dark:border-gray-600
                               hover:bg-primary/10 transition-colors duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-full text-sm font-semibold
                             text-center shadow-md shadow-primary/20
                             hover:bg-primary-dark transition-all duration-300
                             hover:shadow-lg hover:shadow-primary/30"
                  >
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-primary text-primary 
                             dark:text-white rounded-full text-sm font-semibold text-center 
                             hover:bg-primary/10 transition-all duration-300"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
