import { FaHammer } from "react-icons/fa";
import { motion } from "framer-motion";

const Logo = () => {
  return (
    <motion.div
      className="flex items-center space-x-2 text-gray-900 dark:text-gray-400
      px-1 hover:scale-105 transition-all duration-200"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Metal Beam or Anvil Icon */}
      <div className="relative w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-500 rounded-lg flex items-center justify-center shadow-lg">
        <FaHammer className="text-white text-2xl animate-bounce" />
        {/* Weld Sparks */}
        <motion.div
          className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full top-6 right-1 animate-ping duration-200"
          animate={{ opacity: [1, 0], scale: [1, 2] }}
          transition={{ repeat: Infinity, duration: 1.2 }}
        />
      </div>
      
      {/* Company Name */}
      <motion.h1 
      className=" font-header text-2xl font-extrabold tracking-wide uppercase cursor-pointer hover:animate-pulse duration-200 "
      initial={{ opacity: 0, y: -20 }}
      animate={{opacity:1, y:0}}>
        MetalWorks
      </motion.h1>
    </motion.div>
  );
};

export default Logo;
