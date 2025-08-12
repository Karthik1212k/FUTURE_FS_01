import React from "react";
import { motion } from "framer-motion";

export default function Services() {
  // Animation variants
  const cardVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="services"
      className="bg-black text-white py-20 px-6 md:px-20"
    >
      {/* Section title animation */}
      <motion.h2
        className="text-4xl font-bold text-center text-orange-400 mb-10"
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Services
      </motion.h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {[
          {
            title: "UI/UX Design",
            desc: "Creative and modern user interface designs for web and mobile apps.",
          },
          {
            title: "Web Development",
            desc: "Responsive and optimized websites using latest technologies.",
          },
          {
            title: "App Development",
            desc: "Build websites and applications that adapt seamlessly to all devices, ensuring fast load times and smooth performance.",
          },
        ].map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-orange-400/40 transition"
            variants={cardVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
          >
            <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
            <p className="text-gray-300">{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
