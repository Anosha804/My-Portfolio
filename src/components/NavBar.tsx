import React from "react";
import { FiMenu } from "react-icons/fi";

const NavBar = () => {
  return (
    <nav className="relative">
      {/* Container for logo and navigation */}
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        {/* Logo positioned in the top-left */}
        <div
          className="w-20 h-20 bg-no-repeat bg-contain"
          style={{ backgroundImage: "url('/logo.png')" }}
        ></div>

        {/* Navigation Links aligned to the right */}
        <ul className="flex gap-8 lg:gap-12">
          <li><a href="#hero" className="menuLink text-lg transition duration-300"> Home</a></li>
          <li><a href="#projects" className="menuLink text-lg transition duration-300">Projects</a></li>
          <li><a href="#skills"className="menuLink text-lg transition duration-300">Skills </a></li>
          <li><a href="#about" className="menuLink text-lg transition duration-300">About </a></li>
          <li><a href="#contact"className="menuLink text-lg transition duration-300"> Contact</a></li>
        </ul>

        {/* Mobile menu icon */}
        <FiMenu className="md:hidden" size={30} />
      </div>
    </nav>
  );
};

export default NavBar;
