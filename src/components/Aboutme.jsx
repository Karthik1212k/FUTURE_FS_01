import React from "react";
import { FaDownload } from "react-icons/fa";
import { motion } from "framer-motion";
import profile from "../assets/profile.jpg";

export default function AboutMe() {
  return (
    <section
      id="about"
      className="bg-[#1a1a1a] text-white py-16 px-4 sm:px-8 lg:px-20"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left - Image */}
        <motion.div
  className="flex justify-center"
  initial={{ opacity: 0, x: -50 }}
  whileInView={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="bg-[#2a2a2a] rounded-full p-3 shadow-lg shadow-orange-500/20">
    <motion.img
      src={profile}
      alt="Karthikeyan B"
      className="w-64 h-64 object-cover rounded-full border-4 border-orange-500 shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    />
  </div>
</motion.div>


        {/* Right - Text */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-2">About Me</h2>
          <p className="text-orange-400 font-medium mb-6">
            Frontend Developer | UI/UX Designer
          </p>
          <p className="text-gray-300 leading-relaxed mb-8">
            Hi, I’m <span className="font-semibold">Karthikeyan B</span>, a passionate frontend developer who enjoys
            crafting clean, user-friendly, and visually appealing web interfaces.
            I specialize in modern web technologies like <span className="text-orange-400">React.js</span>, 
            <span className="text-orange-400">Vite</span>, <span className="text-orange-400">Tailwind CSS</span> and have a strong eye for
            <span className="text-orange-400"> UI/UX design</span>.  
            <br /><br />
            Beyond coding, I have experience in <span className="text-orange-400">video editing</span> and visual storytelling,
            blending creativity with technology to deliver engaging user experiences.  
            I’m always excited to learn, adapt, and build solutions that make a difference.
          </p>

          {/* Download CV Button */}
          <motion.a
            href="/cv.pdf"
            download
            className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-lg transition duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload className="mr-2" /> Download CV
          </motion.a>

          {/* Contact Info */}
          <div className="mt-6 text-gray-400 text-sm">
            <p>Email: <span className="text-white">kkarthik2263@gmail.com</span></p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
