// src/components/Aboutme.jsx
import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import MagneticButton from "./MagneticButton";

export default function AboutMe() {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <section
      id="about"
      className="bg-[#1a1a1a] text-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-3xl mx-auto flex justify-center">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.h2 className="text-3xl font-bold mb-2" variants={itemVariants}>
            About Me
          </motion.h2>

          <motion.p className="text-orange-400 font-medium mb-6" variants={itemVariants}>
            Junior MERN Stack Developer | React Native Developer
          </motion.p>

          <motion.p className="text-gray-300 leading-relaxed mb-8" variants={itemVariants}>
            Hi, I’m <span className="font-semibold">Karthikeyan B</span>, a motivated
            <span className="text-orange-400"> MERN Stack </span> and
            <span className="text-orange-400"> React Native Developer</span>
            with a strong foundation in MongoDB, Express.js, React.js, Node.js,
            and cross-platform mobile development.
            <br /><br />
            I have hands-on experience in building
            <span className="text-orange-400"> responsive web interfaces</span>,
            developing <span className="text-orange-400">RESTful APIs</span>,
            and creating mobile applications for
            <span className="text-orange-400"> Android & iOS </span>
            using React Native. I focus on clean code, performance,
            and delivering smooth user experiences.
            <br /><br />
            I’m a quick learner with a strong interest in
            <span className="text-orange-400"> UI/UX design</span>,
            problem-solving, and modern application development, currently
            seeking internship or entry-level opportunities to grow and
            contribute to real-world projects.
          </motion.p>

          {/* Download CV Button */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <MagneticButton
              href="/Karthikeyan_B_Junior_MERN_Stack_Developer_CV.pdf"
              download
            >
              <FaDownload className="mr-2" /> Download CV
            </MagneticButton>
          </motion.div>

          {/* Contact Info */}
          <motion.div className="mt-6 text-gray-400 text-sm space-y-1" variants={itemVariants}>
            <p>
              Email: <span className="text-white">kkarthik2263@gmail.com</span>
            </p>
            <p>
              Phone: <span className="text-white">+91 7339181902</span>
            </p>
            <p>
              Education: <span className="text-white">
                B.Tech (AI & DS), Suguna College of Engineering
              </span>
            </p>
            <p>
              University: <span className="text-white">Anna University (2023–2027)</span>
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
