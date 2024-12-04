"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart } from "lucide-react";

export function Footer() {
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="font-bold text-xl mb-2">Ssali Benjamin</h3>
            <p className="text-gray-600 dark:text-gray-400">Full-Stack Developer</p>
          </div>
          <div className="flex space-x-6">
            <a href="https://github.com" className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com" className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-400 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="mailto:contact@example.com" className="text-gray-600 hover:text-pink-600 dark:text-gray-400 dark:hover:text-pink-400 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400 flex items-center justify-center">
          Made with <Heart className="w-4 h-4 mx-1 text-red-500" /> by Ssali Benjamin © {new Date().getFullYear()}
        </div>
      </div>
    </motion.footer>
  );
}