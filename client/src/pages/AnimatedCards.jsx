import { motion } from "framer-motion";
import video from "../assets/videos/13794755_3840_2160_60fps.mp4";

const cardData = [
  {
    title: "3D Logo Animation",
    desc: "Smooth and modern logo animations for brands.",
  },
  {
    title: "UI Motion Effects",
    desc: "Elegant micro-interactions for web & apps.",
  },
  {
    title: "Intro Videos",
    desc: "Captivating animated intros for YouTube & more.",
  },
];

const AnimatedCards = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
      {/* 🎥 Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 🃏 Animated Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 py-20 z-10 max-w-7xl mx-auto">
        {cardData.map((card, index) => (
          <motion.div
            key={index}
            initial={{ y: 60, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              rotate: 1,
              boxShadow: "0 12px 25px rgba(255, 255, 255, 0.2)",
            }}
            className="min-h-[300px] flex flex-col justify-center items-center text-center rounded-3xl bg-white/10 backdrop-blur-lg p-8 text-white shadow-lg border border-white/20 hover:border-white/40 transition-all duration-300"
          >
            <h2 className="text-2xl font-bold mb-4">{card.title}</h2>
            <p className="text-base text-white/80">{card.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCards;
