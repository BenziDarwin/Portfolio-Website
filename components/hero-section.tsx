"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section className="min-h-[calc(100vh-4rem)] flex items-center">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-blue-400 dark:from-blue-400 dark:to-blue-600 text-transparent bg-clip-text">
            Ssali Benjamin
          </h1>
          <p className="text-2xl mb-8 text-gray-600 dark:text-gray-300">
            Software Engineer & Full-Stack Developer
          </p>
          <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
            Building elegant solutions to complex problems with modern technologies
          </p>
          <div className="flex justify-center space-x-4">
            <Button variant="outline" size="lg" className="gap-2">
              <Github className="w-5 h-5" />
              GitHub
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="gap-2">
              <Mail className="w-5 h-5" />
              Contact
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}