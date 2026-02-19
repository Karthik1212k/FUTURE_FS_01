
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaExternalLinkAlt, FaGithub, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import TiltedCard from "./TiltedCard";
import ElectricBorder from "./ElectricBorder";

export default function Projects() {
  const projectList = [
    {
      title: "Web Development - Rehabionics",
      description:
        "A professional medical technology website built for Rehabionics with a responsive and user-friendly design.",
      link: "https://www.rehabionics.in/",
      icon: <FaExternalLinkAlt />,
      image: "https://placehold.co/600x400/1a1a1a/FFF"
    },
    {
      title: "CI/CD Pipeline Project",
      description:
        "A complete CI/CD pipeline setup using GitHub Actions and Docker for automated deployment.",
      link: "https://github.com/AHISH2006/NAAN-MUDHALVAN",
      icon: <FaGithub />,
      image: "https://placehold.co/600x400/2a2a2a/FFF"
    },
    {
      title: "Mini e Commerce Website",
      description:
        "A mini e commerce web application with product listing, cart functionality, and responsive UI.",
      link: "https://github.com/Karthik1212k/FUTURE_FS_02",
      icon: <FaGithub />,
      image: "https://placehold.co/600x400/3a3a3a/FFF"
    },
    {
      title: "Rebrand a Famous Brand’s Website",
      description:
        "A redesigned version of a famous brand’s website focusing on modern UI, branding, and usability.",
      link: "https://github.com/Karthik1212k/FUTURE_FS_03",
      icon: <FaGithub />,
      image: "https://placehold.co/600x400/4a4a4a/FFF"
    },
    {
      title: "Object Invisibility using OpenCV",
      description:
        "A real-time computer vision project that creates an invisibility effect by detecting a red-colored object and replacing it with the background using OpenCV and Python.",
      link: "https://github.com/Karthik1212k/Invisibility-Cloak-OpenCV",
      icon: <FaGithub />,
      image: "https://placehold.co/600x400/5a5a5a/FFF"
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev === projectList.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev === 0 ? projectList.length - 1 : prev - 1));
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.8,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 300,
        damping: 30
      },
    },
    exit: (direction) => ({
      x: direction > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    }),
  };

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#05080c] to-black text-white py-16 flex flex-col justify-center items-center"
    >
      <div className="max-w-4xl mx-auto px-6 w-full">
        <motion.h1
          className="text-4xl font-bold text-center mb-3"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h1>

        <motion.p
          className="text-gray-400 text-center mb-10 text-sm"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Here are some of the projects I have worked on.
        </motion.p>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center">

          {/* Left Arrow */}
          <button
            onClick={prevSlide}
            className="absolute left-0 z-20 p-3 bg-gray-800/80 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 shadow-lg hidden md:block"
          >
            <FaChevronLeft size={24} />
          </button>

          {/* Cards Wrapper */}
          <div className="w-full max-w-lg mx-auto h-[350px] relative overflow-visible">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                className="absolute w-full h-full p-1"
              >
                <TiltedCard
                  imageSrc={projectList[currentIndex].image}
                  altText={projectList[currentIndex].title}
                  captionText={projectList[currentIndex].title}
                  containerHeight="100%"
                  containerWidth="100%"
                  imageHeight="100%"
                  imageWidth="100%"
                  rotateAmplitude={12}
                  scaleOnHover={1.05}
                  showMobileWarning={false}
                  showTooltip={true}
                  displayOverlayContent={true}
                  overlayContent={
                    <ElectricBorder
                      color="#F97316"
                      borderRadius={12}
                      className="bg-gray-900 h-full shadow-2xl transition-all duration-300"
                    >
                      <div className="h-full p-8 flex flex-col justify-between">
                        <div>
                          <h2 className="text-2xl font-bold mb-4 text-orange-400">
                            {projectList[currentIndex].title}
                          </h2>

                          <p className="text-gray-300 text-base leading-relaxed">
                            {projectList[currentIndex].description}
                          </p>
                        </div>

                        <div className="flex justify-end">
                          <a
                            href={projectList[currentIndex].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 text-white bg-orange-500 hover:bg-orange-600 px-5 py-2 rounded-lg font-medium transition-colors shadow-md"
                          >
                            {projectList[currentIndex].icon} View Project
                          </a>
                        </div>
                      </div>
                    </ElectricBorder>
                  }
                />
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Right Arrow */}
          <button
            onClick={nextSlide}
            className="absolute right-0 z-20 p-3 bg-gray-800/80 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition-all transform hover:scale-110 shadow-lg hidden md:block"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Mobile Navigation controls */}
        <div className="flex justify-center gap-6 mt-8 md:hidden">
          <button
            onClick={prevSlide}
            className="p-3 bg-gray-800 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
          >
            <FaChevronLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="p-3 bg-gray-800 rounded-full text-orange-400 hover:bg-orange-500 hover:text-white transition"
          >
            <FaChevronRight size={20} />
          </button>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projectList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > currentIndex ? 1 : -1);
                setCurrentIndex(index);
              }}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? "bg-orange-500" : "bg-gray-600 hover:bg-gray-400"
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
