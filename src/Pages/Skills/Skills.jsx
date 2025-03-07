import React from "react";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaGithub, FaServer } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoVisualStudio } from "react-icons/bi"; // VSCode Icon

const Skills = () => {
  return (
    <div id="skills" className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D2B] text-white px-6">
      <div className="w-full max-w-4xl text-center">
        {/* Skills Header */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center py-12"
        >
          My Skills
        </motion.h2>

        {/* Frontend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Frontend Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center">
            {/* Frontend Icons */}
            {[
              { name: "HTML5", icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
              { name: "CSS3", icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
              { name: "JavaScript", icon: <FaJs className="text-yellow-500 text-4xl" /> },
              { name: "React", icon: <FaReact className="text-cyan-500 text-4xl" /> },
              { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400 text-4xl" /> } // Tailwind CSS
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-[#141e30] to-[#243b55] p-4 rounded-lg shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Backend Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Backend Development</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center">
            {/* Backend Icons */}
            {[
              { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-4xl" /> },
              { name: "MongoDB", icon: <FaDatabase className="text-green-700 text-4xl" /> },
              { name: "Express", icon: <FaServer className="text-gray-400 text-4xl" /> }
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-[#141e30] to-[#243b55] p-4 rounded-lg shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-3xl font-semibold text-white mb-4">Tools & Technologies</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-8 justify-center">
            {/* Tools Icons */}
            {[
              { name: "Git", icon: <FaGitAlt className="text-red-500 text-4xl" /> },
              { name: "GitHub", icon: <FaGithub className="text-black text-4xl" /> },
              { name: "VSCode", icon: <BiLogoVisualStudio className="text-blue-500 text-4xl" /> } // VSCode Icon
            ].map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center justify-center bg-gradient-to-r from-[#141e30] to-[#243b55] p-4 rounded-lg shadow-lg text-white"
                whileHover={{ scale: 1.1 }}
              >
                {skill.icon}
                <span className="mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;
