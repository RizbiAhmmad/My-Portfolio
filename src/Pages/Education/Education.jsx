import React from "react";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool, FaGraduationCap } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    degree: "B.Sc in CSE",
    institution: "Port City International University",
    year: "Graduated: 2024",
    icon: <FaGraduationCap className="text-5xl text-yellow-300" />,
    gradient: "from-purple-600 to-blue-500",
  },
  {
    id: 2,
    degree: "HSC",
    institution: "Feni Government College",
    year: "Graduated: 2019",
    icon: <FaUniversity className="text-5xl text-pink-300" />,
    gradient: "from-teal-500 to-blue-600",
  },
  {
    id: 3,
    degree: "SSC",
    institution: "Wahidunnesa Secondary School",
    year: "Graduated: 2017",
    icon: <FaSchool className="text-5xl text-orange-300" />,
    gradient: "from-yellow-500 to-red-500",
  },
];

const Education = () => {
  return (
    <div
      id="education"
      className="min-h-fit flex flex-col items-center justify-center bg-[#0D0D2B] text-white px-6 "
    >
      {/* Animated Header */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center py-12"
      >
        My Educational Journey
      </motion.h2>

      {/* Education Cards - Full Screen (3 Cards in One Row) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
        {educationData.map((edu, index) => (
          <motion.div
            key={edu.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: index * 0.3 }}
            className={`relative p-8 rounded-xl shadow-lg bg-gradient-to-r ${edu.gradient} 
                        flex flex-col items-center justify-center text-center 
                        transform transition-all duration-300 hover:scale-105`}
          >
            {/* Icon */}
            <div className="mb-4 p-4 bg-white/20 rounded-full">{edu.icon}</div>

            {/* Content */}
            <h3 className="text-2xl font-semibold text-white mb-2">{edu.degree}</h3>
            <p className="text-gray-200 text-lg">{edu.institution}</p>
            <p className="text-gray-300 mt-2">{edu.year}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Education;
