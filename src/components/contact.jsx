
import React, { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceInterest: "",
    timeline: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/contact", formData);

      if (response.data.success) {
        alert("✅ Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceInterest: "",
          timeline: "",
          message: ""
        });
      } else {
        alert("❌ Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      if (error.response && error.response.data && error.response.data.message) {
        alert(`❌ Error: ${error.response.data.message}`);
      } else {
        alert("❌ Failed to send message. Check your connection.");
      }
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between" id="contact">
      {/* Contact Form Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <motion.h1
          className="text-3xl font-bold text-center mb-2"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Contact me
        </motion.h1>
        <motion.p
          className="text-gray-400 text-center mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Cultivating Connections: Reach Out And Connect With Me
        </motion.p>

        <motion.form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 transition-colors"
            required
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 transition-colors"
            required
          />

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 transition-colors"
          />

          <motion.select
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 transition-colors"
          >
            <option value="">Service Of Interest</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </motion.select>

          <motion.input
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Timeline"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 md:col-span-1 transition-colors"
          />

          <motion.textarea
            whileFocus={{ scale: 1.02, borderColor: "#f97316" }}
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project Details..."
            rows="4"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 md:col-span-1 transition-colors"
          ></motion.textarea>

          <div className="md:col-span-2 flex justify-end">
            <motion.button
              type="submit"
              whileHover={{ scale: 1.05, backgroundColor: "#f97316", borderColor: "#f97316" }}
              whileTap={{ scale: 0.95 }}
              className="border border-gray-500 px-6 py-2 rounded-md transition-colors"
            >
              Send
            </motion.button>
          </div>
        </motion.form>
      </section>

      {/* Footer Section */}
      <footer className="bg-black border-t border-gray-800 py-8 text-center">
        <nav className="flex justify-center space-x-6 mb-4">
          <a href="#home" className="hover:text-orange-500">Home</a>
          <a href="#services" className="hover:text-orange-500">Services</a>
          <a href="#about" className="hover:text-orange-500">About me</a>
          <a href="#contact" className="hover:text-orange-500">Contact me</a>
        </nav>

        <div className="flex justify-center space-x-4 mb-4">
          <a href="#"><i className="fab fa-instagram text-2xl"></i></a>
          <a href="#"><i className="fab fa-linkedin text-2xl"></i></a>
          <a href="#"><i className="fab fa-dribbble text-2xl"></i></a>
          <a href="#"><i className="fab fa-behance text-2xl"></i></a>
        </div>

        <div className="flex justify-center space-x-6 text-gray-400 mb-2">
          <span>📧 kkarthik2263@gmail.com</span>
          <span>📞 +91 7339181902</span>
        </div>

        <p className="text-gray-600 text-sm">
          Designed by @Karthikeyan B | Frontend Developer
        </p>
      </footer>
    </div>
  );
}
