import React from "react";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <div id="education" className="min-h-screen flex items-center justify-center bg-[#0D0D2B] text-white px-4 py-4">
      <div className="w-full max-w-3xl text-center">
        {/* Education Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-12"
        >
          My Educational Background
        </motion.h2>

        {/* Education Cards */}
        <div className="space-y-10">
          {/* B.Sc in CSE */}
          <motion.div
            initial={{ opacity: 0, x: -200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="p-8 rounded-lg shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-semibold text-white mb-3">B.Sc in CSE</h3>
            <p className="text-gray-200 text-xl">Port City International University</p>
            <p className="text-gray-300 mt-2 text-lg">Graduated: 2024 </p>
          </motion.div>

          {/* HSC */}
          <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="p-8 rounded-lg shadow-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-semibold text-white mb-3">HSC</h3>
            <p className="text-gray-200 text-xl">Feni Government College</p>
            <p className="text-gray-300 mt-2 text-lg">Graduated: 2019</p>
          </motion.div>

          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="p-8 rounded-lg shadow-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 transform hover:scale-105 transition-transform"
          >
            <h3 className="text-3xl font-semibold text-white mb-3">SSC</h3>
            <p className="text-gray-200 text-xl">Wahidunnesa Secondary School</p>
            <p className="text-gray-300 mt-2 text-lg">Graduated: 2017</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
