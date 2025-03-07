import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMail, AiOutlinePhone, AiOutlineHome } from "react-icons/ai";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaWhatsapp,
} from "react-icons/fa";
import emailjs from "emailjs-com"; // Correct import statement

const Contact = () => {
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_t2njmdr", // Replace with your service ID
        "template_fvwup37", // Replace with your template ID
        formData, // Send the form data
        "rT2q42PyPhpEJru44" // Replace with your user ID
      )
      .then(
        (response) => {
          console.log("Success!", response.status, response.text);
          setShowModal(true); // Show success modal

          // Hide the modal after 3 seconds
          setTimeout(() => {
            setShowModal(false);
          }, 3000);
        },
        (error) => {
          console.error("Failed...", error);
          // Optionally show an error message to the user
        }
      );

    // Optionally reset the form after submission
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const SuccessModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    >
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-lg text-black font-semibold">
          Email Sent Successfully!
        </h2>
        <p>Your message has been sent. I will get back to you soon.</p>
      </div>
    </motion.div>
  );

  return (
    <div id="contact" className="bg-[#0D0D2B]">
      <div className="w-9/12 p-11 mx-auto rounded-lg shadow-lg font-exo-2">
        {/* Success Modal */}
        {showModal && <SuccessModal />}
        {/* Overall Section Heading and Subheading */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-500 via-blue-500 to-pink-500 text-transparent bg-clip-text mb-8 text-center">
            Get in Touch
          </h2>
          <p className="text-lg text-gray-400">
            Feel free to reach out for any inquiries or collaborations!
          </p>
        </div>

        {/* Flex Container for Form and Contact Info */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Left side - Contact Form */}
          <div className="w-full md:w-1/2 p-4">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 text-white bg-gray-800"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary placeholder-gray-500 text-white bg-gray-800"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full p-3 border placeholder-gray-500 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary text-white bg-gray-800"
                rows="4"
                required
              />
              <button
                type="submit"
                className="w-full bg-primary text-white py-3 border border-purple-700 rounded-md hover:bg-[#e0003d] hover:text-white transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right side - Contact Info with Icons */}
          <div className="w-full md:w-1/2 p-4 space-y-6 text-white">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex items-center space-x-4"
            >
              <AiOutlineMail className="text-white text-3xl" />
              <div>
                <p className="text-lg font-semibold">Email:</p>
                <p>contact.rizbi123@gmail.com</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7 }}
              className="flex items-center space-x-4"
            >
              <AiOutlinePhone className="text-white text-3xl" />
              <div>
                <p className="text-lg font-semibold">Phone:</p>
                <p>+8801815109616</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9 }}
              className="flex items-center space-x-4"
            >
              <AiOutlineHome className="text-white text-3xl" />
              <div>
                <p className="text-lg font-semibold">Address:</p>
                <p>Mirsarai, Chittagong, Bangladesh</p>
              </div>
            </motion.div>

            {/* Social Media Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="flex justify-center space-x-6"
            >
              <a
                href="https://wa.me/+8801815109616"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="text-white text-3xl" />
              </a>
              <a
                href="https://github.com/RizbiAhmmad"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-white text-3xl" />
              </a>
             
              <a
                href="https://www.linkedin.com/in/rizbi-ahmmad-064481304/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-white text-3xl" />
              </a>
              <a
                href="https://www.facebook.com/mdakashkhan444/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="text-white text-3xl" />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
