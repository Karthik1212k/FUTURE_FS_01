// src/components/Home.jsx
import React from "react";
import { motion } from "framer-motion";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import profile from "../assets/profile.jpg";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-b from-[#0a0f14] via-[#05080c] to-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-12 gap-10 items-center">

        {/* LEFT: Text Content */}
        <motion.div
          className="md:col-span-7 lg:col-span-6"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <p className="text-gray-400 mb-2 text-lg">Hi, I am</p>

          <h3 className="text-3xl font-semibold text-orange-400 mb-1">
            Karthikeyan B
          </h3>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-tight bg-gradient-to-r from-orange-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
            MERN STACK DEVELOPER
          </h1>

          {/* Social Icons */}
          <motion.div
            className="flex gap-5 mt-5 text-gray-400 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <motion.a
              href="https://www.instagram.com/just.me_karthik"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f97316" }}
            >
              <FaInstagram />
            </motion.a>

            <motion.a
              href="https://www.linkedin.com/in/12karthikeyanb"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f97316" }}
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              href="https://github.com/Karthik1212k"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: "#f97316" }}
            >
              <FaGithub />
            </motion.a>
          </motion.div>

          {/* Buttons */}
          <motion.div
            className="flex items-center gap-6 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            {/* LinkedIn */}
            <motion.a
              href="https://www.linkedin.com/in/12karthikeyanb"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-lg font-semibold shadow-lg border border-transparent bg-gradient-to-r from-orange-500 to-pink-500 hover:from-pink-500 hover:to-orange-500 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Connect With Me
            </motion.a>

            {/* CV */}
            <motion.a
              href="/Karthikeyan_B_Junior_MERN_Stack_Developer_CV.pdf"
              download
              className="px-6 py-3 rounded-lg font-semibold shadow-lg border border-gray-600 hover:border-orange-400 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </motion.a>
          </motion.div>
        </motion.div>

        {/* RIGHT: Profile Image (FIXED – NO WARPING) */}
        <motion.div
          className="md:col-span-5 lg:col-span-6 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative group">
            <div className="w-64 md:w-96 aspect-square rounded-full overflow-hidden border-4 border-orange-500 shadow-lg shadow-orange-500/30 transition-transform duration-500 group-hover:scale-105">
              <img
                src={profile}
                alt="Karthikeyan B"
                className="w-full h-full object-cover object-top scale-105"
              />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
