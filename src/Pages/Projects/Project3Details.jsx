import { motion } from "framer-motion";
import { FaReact, FaGithub, FaLink, FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import { SiTailwindcss } from "react-icons/si";
import banner from "../../assets/GadgetHeaven.jpeg";

const techIcons = [
  { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-300 text-2xl" /> },
  { name: "React Toastify", icon: <span className="text-orange-400 text-xl">🔥</span> },
];

const Project3Details = () => {
  return (
    <div id="project3-details" className="mt-5 px-6 max-w-7xl mx-auto">
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
          alt="Gadget Heaven"
          className="w-full rounded-2xl shadow-lg mb-8"
        />
      </motion.div>

      {/* Live Demo Section */}
      <div className="mb-8 text-center">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Live Demo</h3>
        <div className="flex justify-center gap-6 mb-6 flex-wrap">
          <motion.a
            href="https://assignment08-gadgets-haven.netlify.app/"
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
            href="https://github.com/RizbiAhmmad/Gadget-Heaven-Website"
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
        Gadget Heaven: E-Commerce Platform
      </motion.h2>
      <p className="text-lg text-black mb-8 leading-relaxed">
        Gadget Heaven is an interactive e-commerce platform where users can browse gadgets, add products to their cart and wishlist, and enjoy a smooth shopping experience. The platform demonstrates core React fundamentals, such as state management, context API, and local storage for data persistence.
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
          <li>✅ Browse a variety of gadgets with detailed specifications</li>
          <li>✅ Add/remove products to/from cart and wishlist</li>
          <li>✅ Data persistence with LocalStorage</li>
          <li>✅ Fully responsive design with Tailwind CSS</li>
          <li>✅ Animated buttons & UI elements for smooth transitions</li>
          
        </ul>
      </div>

      {/* Challenges Faced */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Challenges Faced</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>⚙️ Managing state with Context API efficiently</li>
          <li>📱 Ensuring a seamless responsive design across all devices</li>
          <li>💾 Implementing data persistence with LocalStorage</li>
        </ul>
      </div>

      {/* Potential Improvements & Future Plans */}
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4 text-purple-500">Potential Improvements & Future Plans</h3>
        <ul className="list-disc pl-5 text-black space-y-2">
          <li>🚀 Add a search feature for better product discovery</li>
          <li>💳 Integrate payment gateway for a complete shopping experience</li>
          <li>📊 Enhance the review system with product insights</li>
        </ul>
      </div>
    </div>
  );
};

export default Project3Details;