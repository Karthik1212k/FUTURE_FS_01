import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";
import profile from "../assets/profile.jpg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkClasses = "text-orange-500 hover:text-blue-500 cursor-pointer";

  // Added "projects" to the menu sections
  const menuItems = ["home", "about", "skills", "projects", "contact"];

  return (
    <nav className="bg-black shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo + Menu Button */}
          <div className="flex-shrink-0 flex items-center">
            <button onClick={() => setMenuOpen(true)} className="sm:hidden mr-2">
              <FaBars size={24} className="text-white" />
            </button>
            <img src={profile} alt="Logo" className="rounded-full w-10 h-10" />
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            {menuItems.map((section) => (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                duration={500}
                spy={true}
                offset={-80}
                className={linkClasses}
                activeClass="text-blue-500 font-bold"
                tabIndex={0}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-black shadow-lg transform transition-transform duration-200 ease-in-out ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-4 right-4"
          aria-label="Close menu"
        >
          <FaTimes size={24} className="text-white" />
        </button>

        <div className="px-4 py-6 space-y-4">
          {menuItems.map((section) => (
            <ScrollLink
              key={section}
              to={section}
              smooth={true}
              duration={500}
              spy={true}
              offset={-80}
              onClick={() => setMenuOpen(false)}
              className={`${linkClasses} block`}
              activeClass="text-blue-500 font-bold"
              tabIndex={0}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </ScrollLink>
          ))}
        </div>
      </div>
    </nav>
  );
}
