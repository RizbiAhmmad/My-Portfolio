import { motion } from "framer-motion";
import banner from "../../assets/E-learning.jpeg";
import { FaReact, FaNodeJs, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { Link } from "react-router-dom";

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400 text-2xl" /> },
  { name: "MongoDB", icon: <DiMongodb className="text-green-600 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-2xl" /> },
  { name: "Express", icon: <SiExpress className="text-gray-500 text-2xl" /> },
];

const Project1Details = () => {
  return (
    <div id="project1-details" className="mt-5 px-6 max-w-7xl mx-auto">
      {/* Back Button */}
      <Link to={'/'}>
        <button className="btn py-1 px-3 bg-purple-600 cursor-pointer rounded-2xl text-white font-bold my-3 flex justify-center items-center gap-2 fixed z-10">
          <FaArrowLeft /> BACK
        </button>
      </Link>

      {/* Hero Section */}
      <motion.div
        className="relative"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={banner}
          alt="E-Learning Hero"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Live Demo</h3>
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <motion.a
            href="https://e-learning-f11fe.web.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLink className="text-lg" />
            Live Project
          </motion.a>
          <motion.a
            href="https://github.com/RizbiAhmmad/E-Learning-Website-Client"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-gray-700 to-gray-900 text-white py-3 px-6 rounded-lg shadow-lg hover:shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm"
            whileHover={{ scale: 1.1, y: -3 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaGithub className="text-lg" />
            GitHub
          </motion.a>
        </div>
      </div>

      {/* Project Overview */}
      <motion.h2
        className="text-3xl font-bold text-purple-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        E-Learning Platform
      </motion.h2>
      <p className="text-lg text-black mb-8 leading-relaxed">
        E-Learning is an interactive platform designed to help students and teachers connect through online courses, providing seamless authentication, course management, and secure payments.
      </p>

      {/* Tech Stack */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Tech Stack</h3>
        <div className="flex gap-4 justify-center flex-wrap">
          {techIcons.map((tech, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center justify-center"
              whileHover={{ scale: 1.2 }}
            >
              {tech.icon}
              <span className="text-sm text-gray-400 mt-1">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Features</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>🔒 Role-based authentication for students, teachers, and admins</li>
          <li>📚 Browse, enroll, and manage courses effortlessly</li>
          <li>🎓 Teacher and admin dashboards for easy management</li>
          <li>💳 Secure Stripe payment integration</li>
          <li>📊 Real-time course tracking and interactive learning experience</li>
        </ul>
      </div>

      {/* Challenges Faced */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Challenges Faced</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>🔧 Implementing role-based authentication securely</li>
          <li>💰 Integrating Stripe for seamless payments</li>
          <li>📡 Managing real-time data fetching with React Query</li>
          <li>⚡ Optimizing performance and reducing API response times</li>
        </ul>
      </div>

      {/* Potential Improvements & Future Plans */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>🛠 Adding more interactive classroom features (live video, quizzes, etc.)</li>
          <li>🌍 Expanding language support for a global audience</li>
        </ul>
      </div>
    </div>
  );
};

export default Project1Details;