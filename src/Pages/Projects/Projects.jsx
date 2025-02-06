/* eslint-disable react/no-unescaped-entities */
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiTailwindcss, SiExpress } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import picture1 from "../../assets/E-learning.jpeg";
import picture2 from "../../assets/DreamBPL.jpeg";
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
    tech: ["React", "Node.js","Express", "MongoDB", "Tailwind CSS"],
    link: "/project1-details",
  },
  {
    title: "DreamBPL",
    image: picture2,
    tech: ["React","Node.js", "Tailwind CSS"],
    link: "/project2-details",
  },
  {
    title: "Gadget Heaven",
    image: picture3,
    tech: ["React","Node.js", "Tailwind CSS"],
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
    <div id="projects" className="bg-[#0D0D2B] py-16">
      <motion.h2
        className="text-4xl font-extrabold text-center text-purple-500 mb-4"
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
            className="relative bg-[#1E1E50] rounded-2xl shadow-xl overflow-hidden transform hover:scale-105 transition duration-300"
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
              <h3 className="text-2xl font-semibold text-white mb-3">{project.title}</h3>
              <div className="flex gap-3 mb-4">
                {project.tech.map((tech, idx) => (
                  <motion.div
                    key={idx}
                    title={tech}
                    className="bg-gray-800 px-3 py-1 rounded-lg text-white flex items-center gap-2 text-sm"
                    whileHover={{ scale: 1.1 }}
                  >
                    {techIcons[tech] || <span>{tech}</span>}
                  </motion.div>
                ))}
              </div>
              <motion.button
                onClick={() => navigate(project.link)}
                className="w-full bg-purple-600 text-white py-3 rounded-lg shadow-md hover:bg-opacity-90 transition font-medium"
                whileHover={{ y: -3 }}
              >
                View Project
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
