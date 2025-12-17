// src/components/Projects.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function Projects() {
  const projectList = [
    {
      title: "Web Development - Rehabionics",
      description:
        "A professional medical technology website built for Rehabionics with a responsive and user-friendly design.",
      link: "https://www.rehabionics.in/",
      icon: <FaExternalLinkAlt />,
    },
    {
      title: "CI/CD Pipeline Project",
      description:
        "A complete CI/CD pipeline setup using GitHub Actions and Docker for automated deployment.",
      link: "https://github.com/AHISH2006/NAAN-MUDHALVAN",
      icon: <FaGithub />,
    },
    {
      title: "Mini e Eommerce Website",
      description:
        "A mini e commerce web application with product listing, cart functionality, and responsive UI.",
      link: "https://github.com/Karthik1212k/FUTURE_FS_02",
      icon: <FaGithub />,
    },
    {
      title: "Rebrand a Famous Brand’s Website",
      description:
        "A redesigned version of a famous brand’s website focusing on modern UI, branding, and usability.",
      link: "https://github.com/Karthik1212k/FUTURE_FS_03",
      icon: <FaGithub />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.15,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#05080c] to-black text-white py-16"
    >
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.h1
            className="text-4xl font-bold text-center mb-3"
            variants={cardVariants}
          >
            My Projects
          </motion.h1>

          <motion.p
            className="text-gray-400 text-center mb-10 text-sm"
            variants={cardVariants}
          >
            here are some of the projects i have worked on.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-6">
            {projectList.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 rounded-md p-5 border border-gray-700 hover:border-orange-500 hover:scale-105 transition-transform duration-300"
                variants={cardVariants}
              >
                <h2 className="text-lg font-semibold mb-2 text-orange-400">
                  {project.title}
                </h2>

                <p className="text-gray-300 text-sm mb-3">
                  {project.description}
                </p>

                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-orange-400 text-sm hover:text-pink-500 transition"
                >
                  {project.icon} view project
                </a>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
