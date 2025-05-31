// src/components/Footer.jsx
import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 50 }}
      className="bg-black text-white p-6 mt-10"
    >
      <div className="text-center space-y-3">
        <p className="text-lg font-semibold">Thanks for visiting my portfolio! 🎉</p>
        <p>
          I love coding 💻, playing chess ♟️, football ⚽, reading Quran 📖, and repping Somalia 🇸🇴!
        </p>
        <div className="flex justify-center space-x-4">
          <a href="https://facebook.com" target="_blank" className="hover:text-blue-500">Facebook</a>
          <a href="https://instagram.com" target="_blank" className="hover:text-pink-500">Instagram</a>
          <a href="https://tiktok.com" target="_blank" className="hover:text-green-400">TikTok</a>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
