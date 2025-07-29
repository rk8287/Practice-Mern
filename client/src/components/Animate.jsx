// src/pages/Animate.jsx
import React from 'react';
import { motion } from 'framer-motion';
import video from '../assets/videos/3163534-uhd_3840_2160_30fps.mp4';

function Animate() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Contrast */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-10" />

      {/* Text Overlay with continuous animation */}
      <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center px-6 z-20 text-center">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1.05, opacity: 1 }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: 'reverse' }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight drop-shadow-xl"
        >
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500">
            Animation World
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 1.5 }}
          className="mt-6 text-lg md:text-xl text-white/90 max-w-2xl mx-auto font-medium"
        >
          Explore stunning animated UI designs, smooth transitions, and visually appealing web elements. Your creative journey begins here!
        </motion.p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-8 py-3 bg-gradient-to-r from-red-500 to-yellow-400 text-white font-bold text-lg rounded-full shadow-lg hover:shadow-xl transition duration-300"
        >
          Explore Animations
        </motion.button>
      </div>
    </div>
  );
};

export default Animate;
