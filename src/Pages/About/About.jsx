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
        className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center"
      >
        About Me
      </motion.h2>

      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
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
          <p className="text-gray-300 text-lg leading-relaxed">
            I'm <span className="text-purple-400 font-semibold">Rizbi Ahmmad</span>, a Frontend Developer passionate about crafting modern, interactive, and user-friendly web applications.  
          </p>

          {/* Programming Journey */}
          <p className="text-gray-300 mt-3">
            My journey began with HTML & CSS, then JavaScript sparked my curiosity. Learning React.js transformed my approach, making development more structured and exciting. Now, I specialize in React, Tailwind CSS, and MongoDB, always striving to build efficient and visually appealing applications.
          </p>

          {/* Work Preference */}
          <p className="text-gray-300 mt-3">
            I enjoy building beautiful, responsive, and dynamic interfaces that enhance user experiences. Bringing ideas to life through code is what excites me the most.
          </p>

          {/* Hobbies & Interests */}
          <p className="text-gray-300 mt-3">
            Beyond coding, I love gaming, exploring new technologies, listening to music, and traveling. These hobbies keep me creative and inspire my work.
          </p>

          {/* Hobby Icons */}
          <div className="mt-4 flex flex-wrap gap-3 justify-center md:justify-start">
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