"use client";

import { motion } from "framer-motion";
import { Mail, MessageSquare, Phone } from "lucide-react";
import { Button } from "./ui/button";

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
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Mail className="w-8 h-8 mb-4 mx-auto text-purple-600 dark:text-purple-400" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">contact@example.com</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <Phone className="w-8 h-8 mb-4 mx-auto text-blue-600 dark:text-blue-400" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">+1 234 567 890</p>
            </motion.div>
            
            <motion.div
              whileHover={{ y: -5 }}
              className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg"
            >
              <MessageSquare className="w-8 h-8 mb-4 mx-auto text-pink-600 dark:text-pink-400" />
              <h3 className="font-semibold mb-2">Social</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">@ssalibenjamin</p>
            </motion.div>
          </div>
          
          <Button className="mt-12" size="lg">
            Send Message
          </Button>
        </motion.div>
      </div>
    </section>
  );
}