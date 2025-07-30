import { useEffect } from "react";
import { motion } from "framer-motion";
import video from '../assets/videos/3130182-uhd_3840_2160_30fps.mp4'
import Animate from "./Animate";
import AnimatedCards from "../pages/AnimatedCards";

const Home = () => {
  return (
    <>
    
    <div className="relative w-full h-screen overflow-hidden">
    
      <video
        autoPlay
        loop
        muted
        className="absolute w-full h-full object-cover z-0"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

   
      <div className="absolute top-0 left-0 w-full h-full flex justify-end items-center px-12 z-10">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="text-right"
        >
          <h1 className="text-5xl lg:text-7xl font-bold text-white drop-shadow-lg italic">
            Welcome to <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 font-extrabold">
              My Animated World
            </span>
          </h1>
          <p className="mt-4 text-lg lg:text-xl text-white/90 max-w-md">
            Building modern, responsive & animated web experiences with React & Tailwind CSS.
          </p>
        </motion.div>

        
      </div>
    </div>

     <Animate/>
     <AnimatedCards/>
    </>

   
  );
};

export default Home;
