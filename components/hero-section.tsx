"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4 w-full sm:w-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
            Ssali Benjamin
          </h1>
          <p className="text-xl sm:text-2xl mb-6 sm:mb-8 text-gray-600 dark:text-gray-300">
            Software Engineer & Full-Stack Developer
          </p>
          <p className="text-base sm:text-lg mb-6 sm:mb-8 text-gray-600 dark:text-gray-400">
            Building elegant solutions to complex problems with modern technologies
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

