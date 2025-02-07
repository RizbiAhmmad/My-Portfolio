import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#0D0D2B] text-center py-4">
      <motion.p
        className="text-sm font-medium bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-transparent bg-clip-text"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        © {new Date().getFullYear()} Rizbi Ahmmad. All rights reserved.
      </motion.p>
    </footer>
  );
};

export default Footer;
