import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiTailwindcss, SiMongodb, SiExpress, SiFirebase } from "react-icons/si";
import banner from "../../assets/Group Study.png";

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-2xl" /> },
  { name: "Express.js", icon: <SiExpress className="text-gray-400 text-2xl" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
  { name: "Firebase", icon: <SiFirebase className="text-yellow-400 text-2xl" /> },
];

const Project2Details = () => {
  return (
    <div id="project-group-study" className="mt-5 px-6 max-w-7xl mx-auto">
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
          alt="Group Study Hero"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Live Demo</h3>
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <motion.a
            href="https://online-group-study-83565.web.app/"
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
            href="https://github.com/RizbiAhmmad/Online-Group-Study-Website-Client"
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
        📚 Group Study - Collaborative Learning Platform
      </motion.h2>
      <p className="text-lg text-black mb-8 leading-relaxed">
        Group Study is a collaborative platform designed to connect students for effective learning.
        Users can join study groups, submit assignments, and get real-time feedback—all within a secure and responsive interface.
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
          <li>🔐 Secure user authentication with Firebase and JWT</li>
          <li>🔒 Private routes for authorized access only</li>
          <li>📄 Assignment submission & tracking</li>
          <li>👨‍👩‍👧‍👦 Create & join study groups</li>
          <li>📝 Evaluation system with feedback & grades</li>
          <li>⏳ Pending assignments tracker</li>
          <li>🌙 Light/Dark mode toggle</li>
          <li>📱 Fully responsive UI for all devices</li>
        </ul>
      </div>

      {/* Challenges Faced */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Challenges Faced</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>⚙️ Managing user roles (students vs teachers)</li>
          <li>📤 Real-time assignment tracking & submission validation</li>
          <li>🎯 Building a secure, scalable authentication system</li>
        </ul>
      </div>

      {/* Future Plans */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>📊 Add group analytics and leaderboard system</li>
          <li>🤖 AI-based study partner recommendations</li>
          <li>🎯 Role-based dashboard with analytics</li>
          <li>🎨 Better animations using Framer Motion and Lottie</li>
        </ul>
      </div>
    </div>
  );
};

export default Project2Details;