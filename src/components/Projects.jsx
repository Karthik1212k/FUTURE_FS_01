// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "Web Development - Rehabionics",
      description:
        "A professional medical technology website built for Rehabionics, focusing on advanced rehabilitation solutions with a responsive, user-friendly design.",
      link: "https://www.rehabionics.in/",
      icon: <FaExternalLinkAlt />,
    },
    {
      title: "CI/CD Pipeline Project",
      description:
        "A complete CI/CD pipeline setup with GitHub Actions, Docker, and automated deployment for faster and more reliable software delivery.",
      link: "https://github.com/AHISH2006/NAAN-MUDHALVAN",
      icon: <FaGithub />,
    },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#05080c] to-black text-white py-16"
    >
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-4"
            variants={cardVariants}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="text-gray-400 text-center mb-12"
            variants={cardVariants}
          >
            Here are some of the projects I have worked on.
          </motion.p>

          <div className="grid md:grid-cols-2 gap-8">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-lg shadow-lg p-6 border border-gray-700 hover:border-orange-500 hover:scale-105 transition-transform duration-300"
                variants={cardVariants}
              >
                <h2 className="text-2xl font-semibold mb-2 text-orange-400">
                  {project.title}
                </h2>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 hover:text-pink-500 transition"
                >
                  {project.icon} View Project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
