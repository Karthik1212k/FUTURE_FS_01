import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-[#1a1a1a] text-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-3xl mx-auto flex justify-center">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>

          <p className="text-orange-400 font-medium mb-6">
            Junior MERN Stack Developer | React Native Developer
          </p>

          <p className="text-gray-300 leading-relaxed mb-8">
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
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/Karthikeyan_B_Junior_MERN_Stack_Developer_CV.pdf"
            download
            className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" /> Download CV
          </motion.a>

          {/* Contact Info */}
          <div className="mt-6 text-gray-400 text-sm space-y-1">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
