/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import logo from "../assets/R-logo.jpg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const links = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      links.forEach((link) => {
        const section = document.querySelector(link.href);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          
          if (scrollPosition >= sectionTop - 100 && scrollPosition < sectionTop + sectionHeight - 100) {
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

  return (
    <nav className="bg-[#0D0D2B] text-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          {/* Left Side - Logo and Name */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Logo" className="h-10" />
            <span className="text-xl font-bold">Rizbi Ahmmad</span>
          </div>

          {/* Right Side - Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold transition-colors duration-200 hover:text-sky-500 hover:underline hover:underline-offset-8 
                  ${activeLink === link.href ? "text-purple-500 underline underline-offset-8" : "text-white"}`}
                onClick={() => setActiveLink(link.href)}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none p-2 rounded-lg hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              <div className={`w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'transform rotate-45 translate-y-1.5' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'opacity-0' : 'mb-1.5'}`} />
              <div className={`w-6 h-0.5 bg-white transition-all duration-200 ${isOpen ? 'transform -rotate-45 -translate-y-1.5' : ''}`} />
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-500 ease-out transform ${
            isOpen
              ? 'translate-y-0 opacity-100 max-h-64 py-4'
              : '-translate-y-20 opacity-0 max-h-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-semibold text-center transition-colors duration-200 hover:underline hover:underline-offset-8 
                  ${activeLink === link.href ? "text-purple-500" : "text-white"}`}
                onClick={() => {
                  setActiveLink(link.href);
                  setIsOpen(false);
                }}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
