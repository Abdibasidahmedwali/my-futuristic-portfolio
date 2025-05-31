// src/components/Hero.jsx

import React from "react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-gray-900 text-white px-6 md:px-12 py-20 dark:bg-black">
      <div className="max-w-5xl w-full flex flex-col md:flex-row items-center gap-12">
        <img src="me.png" alt="Abdibasid" className="w-48 h-48 md:w-64 md:h-64 rounded-full shadow-lg transform transition-transform hover:scale-110"
        style={{ filter: "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))" }}
        />
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Hey, I'm <span className="text-yellow-400">Abdibasid</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-200">
            I'm a developer who loves <span className="text-green-400 font-bold">coding</span>,
            playing <span className="text-blue-400 font-bold">football</span>, battling minds in <span className="text-pink-400 font-bold">chess</span>,
            vibing with the <span className="text-teal-400 font-bold">Qur'an</span>, and repping the beautiful land of <span className="text-red-500 font-bold">Somalia 🇸🇴</span>.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all">
              🚀 Hire Me
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all">
              📫 Contact
            </button>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 to-indigo-700 text-white font-semibold rounded-xl shadow-lg hover:scale-105 transition-all">
              💻 My Projects
            </button>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-10">
  Tailwind is ALIVE! 🐉✨
</div>

      </div>
    </section>
    
  );
};

export default Hero;
