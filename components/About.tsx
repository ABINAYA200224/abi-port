"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { GraduationCap, Briefcase, Code } from "lucide-react"

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const skills = [
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Node.js",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "AWS",
    "Docker",
    "Git",
    "Figma",
  ]

  const experiences = [
    {
      title: "Full Stack Developer",
      company: "Mako IT Lab",
      period: "2023 - Present (1+ years)",
      description:
        "Developing full-stack applications using modern technologies and leading frontend development projects.",
    },
    {
      title: "Frontend Developer Intern",
      company: "Flyers Soft",
      period: "2023 (6 months)",
      description: "Completed internship focusing on React development and UI/UX implementation.",
    },
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate full-stack developer with a love for creating beautiful and functional web applications
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <GraduationCap className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Education</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Computer Science Engineering</strong>
                <br />
                Rover Engineering College
                <br />
                2019 - 2023
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                <Code className="w-8 h-8 text-purple-600 mr-3" />
                <h3 className="text-xl font-semibold">Current Role</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-300">
                <strong>Full Stack Developer</strong>
                <br />
                Specializing in React, Next.js, and modern web technologies
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-semibold mb-6">Experience</h3>
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.2 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-start">
                  <Briefcase className="w-6 h-6 text-purple-600 mr-3 mt-1" />
                  <div>
                    <h4 className="text-lg font-semibold">{exp.title}</h4>
                    <p className="text-purple-600 font-medium">{exp.company}</p>
                    <p className="text-sm text-gray-500 mb-2">{exp.period}</p>
                    <p className="text-gray-600 dark:text-gray-300">{exp.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-center mb-8">Skills & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
