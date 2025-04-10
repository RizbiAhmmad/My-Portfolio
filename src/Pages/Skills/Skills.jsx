import React from "react";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaGitAlt,
  FaGithub,
  FaServer,
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi";

const skills = [
  { icon: <FaHtml5 className="text-orange-500 text-2xl" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-blue-500 text-2xl" />, name: "CSS3" },
  { icon: <FaJs className="text-yellow-400 text-2xl" />, name: "JavaScript" },
  { icon: <FaReact className="text-cyan-400 text-2xl" />, name: "React" },
  { icon: <SiTailwindcss className="text-teal-300 text-2xl" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-green-500 text-2xl" />, name: "Node.js" },
  { icon: <FaServer className="text-gray-300 text-2xl" />, name: "Express" },
  { icon: <FaDatabase className="text-green-700 text-2xl" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-red-500 text-2xl" />, name: "Git" },
  { icon: <FaGithub className="text-white text-2xl" />, name: "GitHub" },
  { icon: <BiLogoVisualStudio className="text-blue-500 text-2xl" />, name: "VSCode" },
];

const Skills = () => {
  return (
    <div 
      id="skills" 
      className="min-h-screen flex items-center justify-center bg-[#0D0D2B] text-white px-4 py-12 md:py-20 relative overflow-hidden"
    >
      {/* Orbit Circle */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="relative w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]"
      >
        {skills.map((skill, index) => {
          const radius = window.innerWidth < 640 ? 100 : window.innerWidth < 768 ? 150 : window.innerWidth < 1024 ? 200 : 250;
          const angle = (index / skills.length) * 2 * Math.PI;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={index}
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: `translate(${x}px, ${y}px) translate(-50%, -50%)`,
              }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 aspect-square bg-[#131B3A] rounded-full flex items-center justify-center shadow-[0_0_12px_4px_rgba(99,102,241,0.6)] hover:shadow-[0_0_20px_8px_rgba(99,102,241,1)] transition duration-300 ease-in-out">
                {skill.icon}
              </div>
              <span className="text-[10px] sm:text-xs mt-1 sm:mt-2 text-gray-300 whitespace-nowrap">{skill.name}</span>
            </div>
          );
        })}
      </motion.div>

      {/* Center Text */}
      <div className="absolute text-center px-4">
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text">My Skills</h3>
        {/* <p className="text-xs sm:text-sm text-gray-400 mt-1">Tools that make my projects come to life</p> */}
        <div className="h-1 w-24 sm:w-32 mx-auto mt-2 bg-gradient-to-r from-green-400 to-purple-400 rounded-full shadow-sm"></div>
      </div>
    </div>
  );
};

export default Skills;