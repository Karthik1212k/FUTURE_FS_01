import React, { useState } from "react";
import axios from "axios";

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
      // ✅ Change URL to serverless API route for Vercel
      await axios.post("/api/contact", formData);
      alert("✅ Message sent successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        serviceInterest: "",
        timeline: "",
        message: ""
      });
    } catch (error) {
      console.error(error);
      alert("❌ Failed to send message");
    }
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Contact Form Section */}
      <section className="max-w-5xl mx-auto py-12 px-4">
        <h1 className="text-3xl font-bold text-center mb-2">Contact me</h1>
        <p className="text-gray-400 text-center mb-8">
          Cultivating Connections: Reach Out And Connect With Me
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700"
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700"
            required
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700"
          />

          <select
            name="serviceInterest"
            value={formData.serviceInterest}
            onChange={handleChange}
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700"
          >
            <option value="">Service Of Interest</option>
            <option value="Web Development">Web Development</option>
            <option value="Mobile App Development">Mobile App Development</option>
            <option value="UI/UX Design">UI/UX Design</option>
            <option value="Other">Other</option>
          </select>

          <input
            type="text"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            placeholder="Timeline"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 md:col-span-1"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Project Details..."
            rows="4"
            className="bg-gray-900 p-3 rounded-md outline-none border border-gray-700 md:col-span-1"
          ></textarea>

          <div className="md:col-span-2 flex justify-end">
            <button
              type="submit"
              className="border border-gray-500 px-6 py-2 rounded-md hover:bg-orange-500 hover:border-orange-500 transition"
            >
              Send
            </button>
          </div>
        </form>
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
