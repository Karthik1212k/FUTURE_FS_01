// src/components/Skills.jsx
import React, { useState, useEffect } from "react";
import {
  CircularProgressbar,
  buildStyles
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

// Import brand icons
import {
  SiFigma,
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiPython
} from "react-icons/si";
import { FaReact } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { id: 1, name: "UI/UX (Figma)", value: 100, icon: <SiFigma size={30} color="#F24E1E" /> },
    {
      id: 2,
      name: "HTML / CSS",
      value: 100,
      icon: (
        <div style={{ display: "flex", gap: "4px", justifyContent: "center" }}>
          <SiHtml5 size={30} color="#E34F26" />
          <SiCss3 size={30} color="#1572B6" />
        </div>
      )
    },
    { id: 3, name: "JavaScript", value: 90, icon: <SiJavascript size={30} color="#F7DF1E" /> },
    { id: 4, name: "React", value: 85, icon: <SiReact size={30} color="#61DAFB" /> },
    { id: 5, name: "Node.js", value: 75, icon: <SiNodedotjs size={30} color="#68A063" /> },
    { id: 6, name: "Python", value: 70, icon: <SiPython size={30} color="#3776AB" /> },
    { id: 7, name: "React Native", value: 80, icon: <FaReact size={30} color="#61DAFB" /> }
  ];

  // Detect when section is visible
  const { ref, inView } = useInView({
    triggerOnce: true, // Run only once
    threshold: 0.2 // 20% visible
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section ref={ref} className="bg-black text-white py-12" id="skills">
      {/* Heading */}
      <motion.h2
        className="text-center text-3xl font-bold text-orange-500 mb-10"
        initial={{ opacity: 0, y: -20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      {/* Skills Grid */}
      <motion.div
        className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.id}
            skill={skill}
            animate={inView}
            variants={itemVariants}
          />
        ))}
      </motion.div>
    </section>
  );
}

// Separate Skill Card Component for animation
function SkillCard({ skill, animate, variants }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (animate) {
      let start = 0;
      const interval = setInterval(() => {
        start += 2; // speed of animation
        if (start >= skill.value) {
          start = skill.value;
          clearInterval(interval);
        }
        setProgress(start);
      }, 20); // update every 20ms
      return () => clearInterval(interval);
    }
  }, [animate, skill.value]);

  return (
    <motion.div
      variants={variants}
      whileHover={{ scale: 1.1 }}
      className="p-4 rounded-xl hover:bg-gray-900 transition-colors duration-300"
    >
      <div className="relative w-24 h-24 mx-auto mb-4 flex items-center justify-center">
        <CircularProgressbar
          value={progress}
          styles={buildStyles({
            pathColor: "#ff5e00ff",
            trailColor: "#2e2e2e",
          })}
        />
        <div className="absolute">{skill.icon}</div>
      </div>
      <p className="text-orange-500 font-bold">{progress}%</p>
      <p className="text-gray-300">{skill.name}</p>
    </motion.div>
  );
}
