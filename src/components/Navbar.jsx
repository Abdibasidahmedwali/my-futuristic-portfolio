// src/components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg">
      <h1 className="text-2xl font-bold">My Futuristic Portfolio</h1>
      <ul className="flex space-x-4">
        <li><a href="#about" className="hover:text-yellow-300">About</a></li>
        <li><a href="#projects" className="hover:text-yellow-300">Projects</a></li>
        <li><a href="#contact" className="hover:text-yellow-300">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
