"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Code2, Database, Globe, Laptop, Briefcase, GraduationCap, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Image Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5"
          >
            <div className="sticky top-24">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden mb-6 shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1537511446984-935f663eb1f4?auto=format&fit=crop&q=80&w=2070"
                  alt="Ssali Benjamin"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex justify-between items-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <div className="text-center flex-1">
                  <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">5+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Years Experience</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-3xl font-bold text-purple-600 dark:text-purple-400">50+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Projects</p>
                </div>
                <div className="text-center flex-1">
                  <p className="text-3xl font-bold text-pink-600 dark:text-pink-400">20+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Clients</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400 text-transparent bg-clip-text">
              About Me
            </h2>
            
            <div className="prose prose-lg dark:prose-invert mb-8">
              <p className="text-gray-600 dark:text-gray-300">
                I'm a passionate Software Engineer with a deep love for creating innovative solutions. 
                With over 5 years of experience in full-stack development, I've had the privilege of 
                working on diverse projects that have shaped my expertise in building scalable, 
                efficient, and user-friendly applications.
              </p>
            </div>

            {/* Experience Timeline */}
            <div className="space-y-6 mb-8">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                Experience
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: "Senior Software Engineer",
                    company: "Tech Innovators Inc.",
                    period: "2021 - Present"
                  },
                  {
                    title: "Full Stack Developer",
                    company: "Digital Solutions Ltd.",
                    period: "2019 - 2021"
                  }
                ].map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                  >
                    <h4 className="font-semibold text-lg">{exp.title}</h4>
                    <p className="text-gray-600 dark:text-gray-400">{exp.company}</p>
                    <p className="text-sm text-blue-600 dark:text-blue-400">{exp.period}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Skills Grid */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Code2 className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                    <h4 className="font-semibold">Frontend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Next.js", "Vue", "TypeScript"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-800 dark:text-purple-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Database className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    <h4 className="font-semibold">Backend</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["Node.js", "Python", "PostgreSQL", "MongoDB"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Laptop className="w-6 h-6 text-pink-600 dark:text-pink-400" />
                    <h4 className="font-semibold">Mobile</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["React Native", "Flutter", "iOS", "Android"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-800 dark:text-pink-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <Globe className="w-6 h-6 text-green-600 dark:text-green-400" />
                    <h4 className="font-semibold">Cloud & DevOps</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {["AWS", "Firebase", "Docker", "CI/CD"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}