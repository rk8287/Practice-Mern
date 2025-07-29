import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaUser, FaLock, FaEnvelope } from 'react-icons/fa';
import videoBg from '../assets/videos/2887463-hd_1920_1080_25fps.mp4';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => setIsLogin(!isLogin);

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
      >
        <source src={videoBg} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="flex items-center justify-center min-h-screen px-4">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-lg bg-white/10 backdrop-blur-xl p-10 rounded-3xl border border-white/20 shadow-2xl"
        >
          <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 mb-8 animate-pulse">
            {isLogin ? 'Welcome Back!' : 'Join Us Today!'}
          </h2>

          <form className="space-y-6">
            {!isLogin && (
              <div className="relative">
                <FaUser className="absolute left-3 top-3 text-white/60" />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-white/60" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
            <div className="relative">
              <FaLock className="absolute left-3 top-3 text-white/60" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 rounded-xl bg-white/5 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-blue-500 text-white py-3 rounded-xl font-semibold text-lg hover:scale-105 transition-transform"
            >
              {isLogin ? 'Login' : 'Register'}
            </button>
          </form>

          <p className="text-sm text-white/70 mt-6 text-center">
            {isLogin ? "Don't have an account?" : 'Already registered?'}{' '}
            <button
              onClick={toggleForm}
              className="text-purple-300 hover:underline font-medium"
            >
              {isLogin ? 'Register here' : 'Login here'}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
