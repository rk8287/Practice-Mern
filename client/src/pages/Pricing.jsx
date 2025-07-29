import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import bgVideo from '../assets/videos/3027640-uhd_3840_2160_25fps.mp4';

const plans = [
  {
    name: "Basic",
    price: "$49",
    duration: "per project",
    features: [
      "1 Animation",
      "Standard Quality",
      "3 Days Delivery",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Pro",
    price: "$129",
    duration: "per project",
    features: [
      "3 Animations",
      "HD Quality",
      "2 Days Delivery",
      "Priority Support",
    ],
    popular: true,
  },
  {
    name: "Ultimate",
    price: "$249",
    duration: "per project",
    features: [
      "Unlimited Animations",
      "4K Ultra HD",
      "24 Hr Delivery",
      "Dedicated Designer",
    ],
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
    
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={bgVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      
      <div className="absolute top-0 left-0 w-full h-full bg-black/40 z-[-1]" />

      
      <div className="py-20 px-4 text-white relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Choose Your <span className="text-pink-400">Animation</span> Plan
        </motion.h1>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.05,
                rotate: plan.popular ? 0.5 : 0,
                boxShadow: plan.popular
                  ? "0 0 30px rgba(255, 99, 212, 0.4)"
                  : "0 0 15px rgba(255,255,255,0.2)",
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.3 }}
              className={`rounded-3xl p-8 border backdrop-blur-xl bg-white/10 border-white/20 text-white relative transition-all ${
                plan.popular
                  ? "border-pink-400 bg-gradient-to-b from-white/10 to-pink-600/10"
                  : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute top-4 right-4 bg-pink-500 text-sm px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h2 className="text-3xl font-bold text-center mb-4">{plan.name}</h2>
              <p className="text-center text-4xl font-extrabold mb-1">
                {plan.price}
              </p>
              <p className="text-center text-sm text-white/70 mb-6">
                {plan.duration}
              </p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-white/90">
                    <FaCheckCircle className="text-green-400" />
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-xl hover:scale-105 transition-transform">
                {plan.popular ? "Get Started Now" : "Choose Plan"}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
