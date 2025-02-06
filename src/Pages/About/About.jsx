import React from "react";
import { motion } from "framer-motion";
import { FaLaptopCode, FaGamepad, FaMusic, FaGlobe } from "react-icons/fa";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0D0D2B] text-white px-4">
      <div className="w-full max-w-3xl text-center">
        
        {/* About Me Content */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-6">
            About Me
          </h2>
          
          {/* Introduction Section */}
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            Hi there! I'm <span className="text-purple-400 font-semibold">Rizbi Ahmmad</span>, a passionate 
            **Frontend Developer** who loves building **modern, interactive, and user-friendly web applications**. 
            My programming journey started with curiosity, and now it’s a key part of my life. I’m always excited to explore new technologies and bring creative ideas to life through code.
          </p>

          {/* My Programming Journey Section */}
          <motion.div
            className="mt-6 p-5 rounded-lg shadow-xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">My Programming Journey 🚀</h3>
            <p className="text-gray-200 mt-2">
              I started learning web development with **HTML & CSS**, then discovered **JavaScript**, which changed everything. 
              My journey accelerated when I got introduced to **React.js**, a powerful library that empowered me to build complex and interactive UIs. I’ve since expanded my skill set to include **Tailwind CSS** for styling and **MongoDB** for database management. 
              Today, I’m focused on crafting fast, efficient, and beautiful web experiences.
            </p>
          </motion.div>

          {/* What I Love Building Section */}
          <motion.div
            className="mt-6 p-5 rounded-lg shadow-xl bg-gradient-to-r from-teal-400 via-blue-500 to-purple-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">What I Love Building 💻</h3>
            <p className="text-gray-200 mt-2">
              I enjoy creating **beautiful UI/UX designs**, building **responsive applications**, and ensuring **seamless user experiences**. 
              As a frontend developer, I focus on delivering **intuitive interfaces** that engage users. While frontend is my main area, I also have a growing interest in **backend technologies** like **Node.js & Express** to develop full-stack applications.
            </p>
          </motion.div>

          {/* Hobbies Section */}
          <motion.div
            className="mt-6 p-5 rounded-lg shadow-xl bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">Beyond Coding 🎨</h3>
            <p className="text-gray-200 mt-2">
              When I’m not writing code, I like to spend time indulging in hobbies that fuel my creativity and passion. Here are a few things I enjoy doing outside of work:
            </p>
            <div className="flex flex-wrap gap-4 mt-3 justify-center">
              {/* Hobby Items */}
              {[
                { name: "Gaming", icon: <FaGamepad className="text-green-300" /> },
                { name: "Music", icon: <FaMusic className="text-blue-300" /> },
                { name: "Exploring Tech", icon: <FaLaptopCode className="text-purple-300" /> },
                { name: "Traveling", icon: <FaGlobe className="text-yellow-300" /> }
              ].map((hobby, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-r from-[#141e30] to-[#243b55] px-4 py-2 rounded-lg text-gray-200 flex items-center gap-2 text-sm shadow-md"
                  whileHover={{ scale: 1.1 }}
                >
                  {hobby.icon} {hobby.name}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Personality Showcase Section */}
          <motion.div
            className="mt-6 p-5 rounded-lg shadow-xl bg-gradient-to-r from-pink-400 via-purple-500 to-indigo-600"
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-xl font-semibold text-white">A Little About Me ✨</h3>
            <p className="text-gray-200 mt-2">
              Outside of programming, I’m a firm believer that creativity thrives in many areas. Whether it’s **painting**, **music**, or **gaming**, I try to bring my unique personality to everything I do. I’m always looking to learn new things and apply them in creative ways. My curiosity drives me to explore, and my love for problem-solving keeps me engaged.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
