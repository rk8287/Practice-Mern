import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiUser, FiLogIn, FiLogOut, FiDollarSign } from "react-icons/fi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, []);

  const handleLogin = () => {
    localStorage.setItem("user", "true");
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    setIsLoggedIn(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/5 border-b border-white/10 shadow-md"
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex items-center gap-2"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ repeat: Infinity, duration: 10, ease: "linear" }}
          >
            <svg
              className="w-8 h-8 text-pink-400"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"
              />
            </svg>
          </motion.div>
        <Link to={'/'}>  <h1 className="text-xl md:text-2xl font-bold text-white">
            <span className="text-pink-400">Unicorn</span>.Studios
          </h1></Link>
        </motion.div>

     
        <nav className="flex items-center gap-6 text-sm md:text-base font-medium">
          {isLoggedIn ? (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-green-300 hover:text-white transition"
              >
                <FiDollarSign className="animate-bounce" />
               <Link to={'/price'}> Pricing</Link>
              </motion.button>

              <motion.button
                whileHover={{ rotate: 5 }}
                onClick={handleLogout}
                className="flex items-center gap-2 text-red-400 hover:text-white transition"
              >
                <FiUser />
                Logout
              </motion.button>
            </>
          ) : (
            <>
              <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleLogin}
                className="flex items-center gap-2 text-blue-300 hover:text-white transition"
              >
                <FiLogIn />
                Login
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 text-purple-300 hover:text-white transition"
              >
                <FiUser />
                Register
              </motion.button>
            </>
          )}
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
