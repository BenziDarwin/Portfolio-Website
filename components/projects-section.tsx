"use client";

import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "Blogging Portfolio Website",
    description: "A personal blogging portfolio website to showcase projects and write articles.",
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // A desktop setup with blogging vibe
    technologies: ["React", "Firebase"],
    liveUrl: "https://sabrinakitaka.org"
  },
  {
    title: "Event Planning and Management App",
    description: "A mobile app designed for organizing and managing events efficiently.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // People planning an event
    technologies: ["React Native", "Golang"],
    liveUrl: "https://festivityhub.app"
  },
  {
    title: "Recruitment Website",
    description: "A web platform for streamlining the recruitment process with advanced search features.",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Laptop with hiring keywords
    technologies: ["React", "Spring Boot"],
    githubUrl: "https://github.com/Crimson-Recruitment/Web-Platform"
  },
  {
    title: "Game Engine",
    description: "An experimental game engine built using Rust and Vulkan for high-performance graphics.",
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Computer with a game dev environment
    technologies: ["Rust", "Vulkan"],
    githubUrl: "https://github.com/Immersion-s-Control-Engine/ICE-Project"
  },
  {
    title: "Blockchain-based E-Banking System",
    description: "A secure e-banking system utilizing blockchain technology and smart contracts.",
    image: "https://images.unsplash.com/photo-1631864031824-d636e1dc5292?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Your chosen image
    technologies: ["Next.js", "Firebase", "Smart Contracts"],
    liveUrl: "https://blocksafe.vercel.app"
  },
  {
    title: "Python Trading Bot",
    description: "A simple trading bot developed in Python for automating trading strategies.",
    image: "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400", // Stock market charts
    technologies: ["Python", "MT5"],
    githubUrl: "https://github.com/BenziDarwin/S-D-Algo-Python-Forex-Bot"
  }
];



export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900/50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} {...project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}