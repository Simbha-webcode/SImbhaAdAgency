import React from "react";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.footer
      className="bg-gray-900 text-white py-6 text-center text-sm dark:bg-black dark:text-gray-300"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 flex flex-col items-center">
        {/* Contact Icons */}
        <motion.div
          className="flex space-x-6 mb-3 items-center justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5, ease: "easeOut" }}
        >
          {/* WhatsApp Link */}
          <motion.a
            href="https://wa.me/918790359681?text=Hi%20Simbha%20Team%2C%20I'm%20interested%20in%20your%20advertising%20services!"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
            aria-label="Chat on WhatsApp"
          >
            <FaWhatsapp className="text-lg" />
            <span>WhatsApp</span>
          </motion.a>

          {/* Email Button */}
          <motion.button
            onClick={() => window.open("mailto:Simbhaadagency.info@gmail.com", "_self")}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
            className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors focus:outline-none"
            aria-label="Send Email"
          >
            <FaEnvelope className="text-lg" />
            <span>Email</span>
          </motion.button>
        </motion.div>

        {/* Copyright */}
        <motion.p
          className="text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-yellow-400 font-medium">SimbhaAdAgency</span>. All rights reserved.
        </motion.p>
      </div>
    </motion.footer>
  );
};

export default Footer;
