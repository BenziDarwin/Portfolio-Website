"use client";

import { motion } from "framer-motion";
import { Code2 } from "lucide-react";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export function Navbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 backdrop-blur-lg border-b border-blue-100/20"
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2 text-blue-600 dark:text-blue-400">
          <Code2 className="w-8 h-8" />
          <span className="font-bold text-xl">Benjamin</span>
        </Link>
        
        <div className="flex items-center space-x-8">
          <Link href="#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">About</Link>
          <Link href="#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Projects</Link>
          <Link href="#contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Contact</Link>
          <ThemeToggle />
        </div>
      </nav>
    </motion.header>
  );
}