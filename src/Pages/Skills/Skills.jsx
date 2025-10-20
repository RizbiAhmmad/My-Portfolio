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
  { icon: <FaHtml5 className="text-2xl text-orange-500" />, name: "HTML5" },
  { icon: <FaCss3Alt className="text-2xl text-blue-500" />, name: "CSS3" },
  { icon: <FaJs className="text-2xl text-yellow-400" />, name: "JavaScript" },
  { icon: <FaReact className="text-2xl text-cyan-400" />, name: "React" },
  { icon: <SiTailwindcss className="text-2xl text-teal-300" />, name: "Tailwind" },
  { icon: <FaNodeJs className="text-2xl text-green-500" />, name: "Node.js" },
  { icon: <FaServer className="text-2xl text-gray-300" />, name: "Express" },
  { icon: <FaDatabase className="text-2xl text-green-700" />, name: "MongoDB" },
  { icon: <FaGitAlt className="text-2xl text-red-500" />, name: "Git" },
  { icon: <FaGithub className="text-2xl text-white" />, name: "GitHub" },
  { icon: <BiLogoVisualStudio className="text-2xl text-blue-500" />, name: "VSCode" },
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
      <div className="absolute px-4 text-center">
        <h3 className="text-xl font-bold text-transparent sm:text-2xl md:text-3xl bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text">My Skills</h3>
        {/* <p className="mt-1 text-xs text-gray-400 sm:text-sm">Tools that make my projects come to life</p> */}
        <div className="w-24 h-1 mx-auto mt-2 rounded-full shadow-sm sm:w-32 bg-gradient-to-r from-green-400 to-purple-400"></div>
      </div>
    </div>
  );
};

export default Skills;