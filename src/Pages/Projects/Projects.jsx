/* eslint-disable react/no-unescaped-entities */
import { FaReact, FaNodeJs, FaExternalLinkAlt, FaInfoCircle } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import picture1 from "../../assets/E-learning-1.jpeg";
import picture2 from "../../assets/Group Study.png";
import picture3 from "../../assets/GadgetHeaven.jpeg";

const techIcons = {
  React: <FaReact className="text-blue-500 text-2xl" />,
  "Node.js": <FaNodeJs className="text-green-500 text-2xl" />,
  MongoDB: <DiMongodb className="text-green-700 text-2xl" />,
  "Tailwind CSS": <SiTailwindcss className="text-teal-400 text-2xl" />,
  Express: <SiExpress className="text-gray-600 text-2xl" />,
};

const projects = [
  {
    title: "E-Learning",
    image: picture1,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://e-learning-f11fe.web.app",
    link: "/project1-details",
  },
  {
    title: "Group Study",
    image: picture2,
    tech: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    liveDemo: "https://online-group-study-83565.web.app/",
    link: "/project2-details",
  },
  {
    title: "Gadget Heaven",
    image: picture3,
    tech: ["React", "Node.js", "Tailwind CSS"],
    liveDemo: "https://assignment08-gadgets-haven.netlify.app/",
    link: "/project3-details",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div id="projects" className="bg-[#0D0D2B] py-12">
      <motion.h2
        className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Featured Projects
      </motion.h2>
      <motion.p
        className="text-lg text-center text-gray-300 mb-12 px-6 sm:px-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Explore some of my latest projects, built with cutting-edge technologies.
      </motion.p>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative bg-[#1E1E50] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300 hover:shadow-[0_0_15px_6px_rgba(255,255,255,0.3)]"
            initial="hidden"
            animate="visible"
            variants={cardVariants}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-t-2xl"
            />
            <div className="p-6">
              <h3 className="text-2xl font-semibold text-white mb-3 hover:text-gradient-to-r from-purple-500 via-blue-500 to-pink-500 cursor-pointer">
                {project.title}
              </h3>
              <div className="flex gap-3 mb-6">
                {project.tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    title={tech}
                    className="bg-gray-800 px-3 py-1 rounded-lg text-white flex items-center gap-2 text-sm transform hover:scale-110 transition duration-200"
                    whileHover={{ scale: 1.1 }}
                  >
                    {techIcons[tech] || <span>{tech}</span>}
                  </motion.div>
                ))}
              </div>
              <div className="flex gap-4">
                <motion.a
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 px-4 rounded-lg shadow-lg hover:shadow-[0_0_10px_rgba(59,130,246,0.7)] transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaExternalLinkAlt className="text-lg" />
                  Live Demo
                </motion.a>
                <motion.button
                  onClick={() => navigate(project.link)}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 px-4 rounded-lg shadow-lg hover:shadow-[0_0_10px_rgba(147,51,234,0.7)] transition-all duration-300 font-medium flex items-center justify-center gap-2 text-sm"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FaInfoCircle className="text-lg" />
                  View Details
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;