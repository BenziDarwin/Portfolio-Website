"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { ContactForm } from "./contact-form";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
            Get in Touch
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-12">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ y: -5 }}
              className="py-6 px-3 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              onClick={() => window.open("mailto:ssalibenjamin0402@gmail.com", "_blank")}
            >
              <Mail className="w-8 h-8 mb-4 mx-auto text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">ssalibenjamin0402@gmail.com</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              onClick={() => window.open("tel:+256773457817", "_blank")}
            >
              <Phone className="w-8 h-8 mb-4 mx-auto text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+256 773 457 817</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
              onClick={() => window.open("https://www.linkedin.com/in/benzidarwin", "_blank")}
            >
              <MessageSquare className="w-8 h-8 mb-4 mx-auto text-pink-600 dark:text-pink-400" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">@BenziDarwin</p>
            </motion.div>
          </div>
          
          <div className="mt-12">
            <ContactForm />
          </div>
        </motion.div>
      </div>
    </section>
  );
}