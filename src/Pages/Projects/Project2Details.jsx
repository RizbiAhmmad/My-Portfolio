import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiTailwindcss } from "react-icons/si";
import banner from "../../assets/DreamBPL.jpeg";

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-2xl" /> },
  { name: "React Toastify", icon: <span className="text-orange-400 text-xl">🔥</span> },
];

const Project2Details = () => {
  return (
    <div id="project2-details" className="mt-5 px-6 max-w-7xl mx-auto">
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
          alt="Dream-BPL Hero"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Live Demo</h3>
        <div className="flex justify-center gap-4 mb-6 flex-wrap">
          <a
            href="https://a7-rizbi-dream-bpl.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline flex justify-center items-center gap-2 hover:text-purple-400"
          >
            <FaLink /> Live Project
          </a>
          <a
            href="https://github.com/RizbiAhmmad/Dream-BPL_Website"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="text-3xl hover:text-purple-400" />
          </a>
        </div>
      </div>

      {/* Project Overview */}
      <motion.h2
        className="text-3xl font-bold text-purple-500 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Dream-BPL: Player Selection App
      </motion.h2>
      <p className="text-lg text-black mb-8 leading-relaxed">
        The Player Selection App allows users to choose players within a set budget. Users can manage their team, track coin balance in real-time, and receive instant notifications for their actions.
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
          <li>📝 Select up to 6 players for your team</li>
          <li>💰 Real-time coin balance tracking</li>
          <li>⚠️ Prevents overspending beyond budget</li>
          <li>🔔 Instant toast notifications for actions</li>
          <li>📱 Fully responsive UI for all devices</li>
        </ul>
      </div>

      {/* Challenges Faced */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Challenges Faced</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>⚙️ Implementing real-time coin tracking without lag</li>
          <li>📱 Ensuring smooth responsiveness across different screen sizes</li>
          <li>🔧 Managing efficient state updates while preventing unnecessary re-renders</li>
        </ul>
      </div>

      {/* Potential Improvements & Future Plans */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>🚀 Adding AI-based player recommendations</li>
          <li>💳 Introducing in-app purchases for premium features</li>
          <li>📊 Enhancing the UI/UX with animations and dark mode</li>
        </ul>
      </div>
    </div>
  );
};

export default Project2Details;
