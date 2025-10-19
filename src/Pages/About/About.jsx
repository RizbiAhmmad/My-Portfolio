import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaMusic, FaGlobe } from "react-icons/fa";
import image from "../../assets/Image1.jpg";

const About = () => {
  return (
    <div id="about" className="min-h-screen flex flex-col items-center justify-center bg-[#0D0D2B] text-white px-6 py-6">
      
      {/* Centered Heading */}
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-8 text-4xl font-bold text-center text-transparent bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 bg-clip-text"
      >
        About Me
      </motion.h2>

      <div className="grid items-center w-full max-w-5xl grid-cols-1 gap-10 md:grid-cols-2">
        
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <img 
            src={image}
            alt="Rizbi Ahmmad" 
            className="w-80 h-[28rem]  object-cover border-4 border-purple-500 shadow-lg shadow-purple-500/50 hover:shadow-purple-500/70 transition-shadow duration-300 rounded-4xl"
          />
        </motion.div>

        {/* About Me Details */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center md:text-left"
        >
          {/* Introduction */}
          <p className="text-lg leading-relaxed text-gray-300">
            I'm <span className="font-semibold text-purple-400">Rizbi Ahmmad</span>, a MERN Stack Developer passionate about crafting modern, interactive, and user-friendly web applications.  
          </p>

          {/* Programming Journey */}
          <p className="mt-3 text-gray-300">
            My journey began with HTML & CSS, then JavaScript sparked my curiosity. Learning React.js transformed my approach, making development more structured and exciting. Now, I specialize in React, Tailwind CSS, and MongoDB, always striving to build efficient and visually appealing applications.
          </p>

          {/* Work Preference */}
          <p className="mt-3 text-gray-300">
            I enjoy building beautiful, responsive, and dynamic interfaces that enhance user experiences. Bringing ideas to life through code is what excites me the most.
          </p>

          {/* Hobbies & Interests */}
          <p className="mt-3 text-gray-300">
            Beyond coding, I love gaming, exploring new technologies, listening to music, and traveling. These hobbies keep me creative and inspire my work.
          </p>

          {/* Hobby Icons */}
          <div className="flex flex-wrap justify-center gap-3 mt-4 md:justify-start">
            {[
              { name: "Gaming", icon: <FaGamepad className="text-green-300" /> },
              { name: "Music", icon: <FaMusic className="text-blue-300" /> },
              { name: "Tech Exploring", icon: <FaLaptopCode className="text-purple-300" /> },
              { name: "Traveling", icon: <FaGlobe className="text-yellow-300" /> }
            ].map((hobby, index) => (
              <motion.div
                key={index}
                className="bg-[#141e30] px-3 py-1 rounded-lg text-gray-200 flex items-center gap-2 text-sm shadow-md"
                whileHover={{ scale: 1.1 }}
              >
                {hobby.icon} {hobby.name}
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;