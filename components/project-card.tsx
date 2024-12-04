"use client";

import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl?: string;
  index: number;
}

export function ProjectCard({ title, description, image, technologies, githubUrl, liveUrl, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-sm bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" size="sm" asChild>
            <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
              <Github className="w-4 h-4" />
              Code
            </a>
          </Button>
          {liveUrl && (
            <Button variant="outline" size="sm" asChild>
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </motion.div>
  );
}