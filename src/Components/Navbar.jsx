/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"; // Added useNavigate and Link
import logo from "../assets/R-logo.jpg";
import { FaSnowflake } from "react-icons/fa";
import { SnowfallContext } from "../Snowfall/SnowfallContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("/");
  const { isSnowfallActive, toggleSnowfall } = useContext(SnowfallContext);
  const navigate = useNavigate(); // For programmatic navigation

  const links = [
    { href: "/", label: "Home" }, // Changed from #home to /
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach((link) => {
        // Handle root path (/) separately
        if (link.href === "/") {
          if (scrollPosition < 100) {
            setActiveLink("/");
          }
          return;
        }

        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;

          if (
            scrollPosition >= sectionTop - 100 &&
            scrollPosition < sectionTop + sectionHeight - 100
          ) {
            setActiveLink(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [links]);

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    setActiveLink(href);
    setIsOpen(false); // Close mobile menu

    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-[#0D0D2B] text-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 sm:px-10">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" onClick={() => setActiveLink("/")}>
              <img src={logo} alt="Logo" className="h-10" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-200 hover:text-sky-500 hover:underline hover:underline-offset-8 
                  ${
                    activeLink === link.href
                      ? "text-purple-500 underline underline-offset-8"
                      : "text-white"
                  }`}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <motion.button
              onClick={toggleSnowfall}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center
                ${
                  isSnowfallActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 text-gray-400 shadow-sm shadow-gray-700/50"
                }`}
              aria-label="Toggle snowfall"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={
                  isSnowfallActive
                    ? {
                        rotate: [0, 360],
                        transition: { repeat: Infinity, duration: 4, ease: "linear" },
                      }
                    : {}
                }
              >
                <FaSnowflake className="text-xl" />
              </motion.div>
            </motion.button>
            <a
              href="https://drive.google.com/file/d/1daDcBddFZlK4QQDtgh_UFvIJlM60b7sK/view?usp=sharing"
              download
              className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-200 ${
                  isOpen ? "transform rotate-45 translate-y-1.5" : "mb-1.5"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-200 ${
                  isOpen ? "opacity-0" : "mb-1.5"
                }`}
              />
              <div
                className={`w-6 h-0.5 bg-white transition-all duration-200 ${
                  isOpen ? "transform -rotate-45 -translate-y-1.5" : ""
                }`}
              />
            </button>
          </div>
        </div>

        <div
          className={`md:hidden transition-all duration-500 ease-out transform ${
            isOpen
              ? "translate-y-0 opacity-100 max-h-96 py-4"
              : "-translate-y-20 opacity-0 max-h-0 overflow-hidden"
          }`}
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-center transition-colors duration-200 hover:underline hover:underline-offset-8 
                  ${
                    activeLink === link.href ? "text-purple-500" : "text-white"
                  }`}
                onClick={(e) => handleLinkClick(link.href, e)}
              >
                {link.label}
              </a>
            ))}
            <motion.button
              onClick={toggleSnowfall}
              className={`p-3 rounded-full transition-all duration-300 flex items-center justify-center mx-auto
                ${
                  isSnowfallActive
                    ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/50"
                    : "bg-gray-800 text-gray-400 shadow-sm shadow-gray-700/50"
                }`}
              aria-label="Toggle snowfall"
              whileHover={{
                scale: 1.2,
                boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
              }}
              whileTap={{ scale: 0.9 }}
            >
              <motion.div
                animate={
                  isSnowfallActive
                    ? {
                        rotate: [0, 360],
                        transition: { repeat: Infinity, duration: 4, ease: "linear" },
                      }
                    : {}
                }
              >
                <FaSnowflake className="text-xl" />
              </motion.div>
            </motion.button>
            <a
              href="https://drive.google.com/file/d/1daDcBddFZlK4QQDtgh_UFvIJlM60b7sK/view?usp=sharing"
              download
              className="bg-purple-500 text-white px-4 py-2 rounded-lg text-sm text-center hover:bg-opacity-90 transition-colors"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;