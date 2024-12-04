"use client";

import { ProjectCard } from "./project-card";

const projects = [
  {
    title: "AI-Powered Task Manager",
    description: "A smart task management system that uses AI to prioritize and categorize tasks automatically.",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&q=80&w=2072",
    technologies: ["Next.js", "OpenAI", "TypeScript", "Tailwind CSS"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management and analytics.",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80&w=2070",
    technologies: ["React", "Node.js", "MongoDB", "Redux"],
    githubUrl: "https://github.com"
  },
  {
    title: "Real-time Chat Application",
    description: "A modern chat application with real-time messaging, file sharing, and voice calls.",
    image: "https://images.unsplash.com/photo-1461988320302-91bde64fc8e4?auto=format&fit=crop&q=80&w=2070",
    technologies: ["Socket.io", "React", "Express", "WebRTC"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Fitness Tracking App",
    description: "A comprehensive fitness tracking application with workout plans and progress visualization.",
    image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=2070",
    technologies: ["React Native", "Firebase", "TypeScript"],
    githubUrl: "https://github.com"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with detailed forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?auto=format&fit=crop&q=80&w=2070",
    technologies: ["Vue.js", "D3.js", "Weather API"],
    githubUrl: "https://github.com",
    liveUrl: "https://demo.com"
  },
  {
    title: "Blog Platform",
    description: "A modern blogging platform with markdown support and SEO optimization.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=2070",
    technologies: ["Next.js", "MDX", "PostgreSQL"],
    githubUrl: "https://github.com"
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