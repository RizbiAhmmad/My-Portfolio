import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
  FaReact,
  FaDatabase,
  FaNodeJs,
} from "react-icons/fa";
import { SiFirebase, SiTailwindcss } from "react-icons/si";
import image from "../../assets/photo 2.jpeg";
import { Typewriter } from "react-simple-typewriter";

const Banner = () => {
  return (
    <div
      id="home"
      className="min-h-screen flex items-center bg-[#0D0D2B] text-white"
    >
      <div className="container mx-auto px-10 flex flex-col-reverse lg:flex-row items-center gap-10 lg:justify-between">
        {/* Left Side - Text Content */}
        <motion.div
          className="text-center lg:text-left max-w-xl"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Welcome Message */}
          <h2 className="text-2xl lg:text-3xl font-semibold text-gray-300 mb-4">
            Hi, I'm{" "}
            <span className="text-purple-500">
              <Typewriter words={["Rizbi Ahmmad"]} loop={Infinity} cursor />
            </span>
          </h2>
          <motion.p
            className="text-lg text-gray-400 mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Passionate about building interactive, scalable, and modern web
            applications.
          </motion.p>
          {/* Tagline */}
          <motion.div
            className="bg-[#1E1E50] px-4 py-1 inline-block rounded-full text-sm mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            🚀 Ready to Innovate
          </motion.div>
          <h1 className="text-5xl lg:text-6xl font-bold">
            <span className="text-white">Frontend</span>{" "}
            <span className="text-purple-500">Developer</span>
          </h1>
          <p className="text-lg mt-3 text-purple-400">
            <Typewriter
              words={["MERN Stack Expert", "JavaScript & React Enthusiast"]}
              loop={Infinity}
              cursor
            />
          </p>
          <p className="mt-4 text-gray-400">
            "Designing dynamic, intuitive, and engaging websites that deliver
            seamless digital experiences."
          </p>
          {/* Tech Stack Badges with Icons */}
          <div className="flex flex-wrap gap-3 mt-5">
            {[{ name: "React", icon: <FaReact className="text-blue-500" /> },
              {
                name: "Tailwind",
                icon: <SiTailwindcss className="text-teal-400" />,
              },
              {
                name: "Firebase",
                icon: <SiFirebase className="text-yellow-500" />,
              },
              {
                name: "Node.js",
                icon: <FaNodeJs className="text-green-500" />,
              },
              {
                name: "MongoDB",
                icon: <FaDatabase className="text-green-500" />,
              },
            ].map((tech, index) => (
              <motion.span
                key={index}
                className="px-4 py-2 bg-[#1E1E50] rounded-full text-gray-300 text-sm flex items-center gap-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
              >
                {tech.icon} {tech.name}
              </motion.span>
            ))}
          </div>
          {/* Action Buttons */}
          <div className="mt-6 flex gap-4 justify-center">
            <a href="/resume.pdf" download>
              <motion.button
                className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Resume ↗
              </motion.button>
            </a>
            <a href="mailto:contact.rizbi123@gmail.com">
              <motion.button
                className="px-6 py-3 bg-[#1E1E50] text-gray-300 rounded-lg font-medium flex items-center gap-2"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                Contact ✉️
              </motion.button>
            </a>
          </div>
          {/* Social Icons */}
          <div className="mt-6 flex gap-6 justify-center text-gray-400 text-2xl">
            <motion.a
              href="https://github.com/RizbiAhmmad"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://www.linkedin.com/in/rizbi-ahmmad-064481304/"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="https://wa.me/01815109616"
              target="_blank"
              whileHover={{ scale: 1.2 }}
            >
              <FaWhatsapp className="text-green-500" />
            </motion.a>
          </div>
        </motion.div>

        {/* Right Side - Image/Illustration */}
        <motion.div
          className="w-full lg:w-[40%] flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={image}
            alt="Profile"
            className="w-[400px] max-w-full object-contain"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.6 }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;
