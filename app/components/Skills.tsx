"use client"

import { motion } from "framer-motion"
import { useState } from "react"

export default function Skills() {
  const [isVisible, setIsVisible] = useState(false)

  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "ReactJS", level: 90 },
        { name: "NextJS", level: 80 },
        { name: "React Native", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "JavaScript", level: 90 },
        { name: "Redux Toolkit", level: 80 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Backend & Database",
      skills: [
        { name: "NodeJS", level: 80 },
        { name: "ExpressJS", level: 80 },
        { name: "Java", level: 70 },
        { name: "MongoDB", level: 70 },
        { name: "PostgreSQL", level: 70 },
        { name: "Firebase", level: 80 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "JWT", level: 85 },
        { name: "Zustand", level: 80 },
        { name: "Socket.IO", level: 75 },
        { name: "Swagger", level: 80 },
        { name: "Docker", level: 70 },
      ],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="skills" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="grid grid-cols-12 gap-4 h-full">
          {[...Array(144)].map((_, i) => (
            <motion.div
              key={i}
              className="bg-blue-400"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-blue-400">Skills</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          onViewportEnter={() => setIsVisible(true)}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-gray-900 p-6 rounded-xl border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
              variants={cardVariants}
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
              }}
            >
              {/* Animated background effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.5 }}
              />

              <motion.h3
                className="text-xl font-bold text-blue-400 mb-6 text-center relative z-10"
                whileHover={{ scale: 1.05 }}
              >
                {category.title}
              </motion.h3>

              <div className="space-y-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: skillIndex * 0.1 + index * 0.2,
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <motion.span
                        className="text-blue-400"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 1 + skillIndex * 0.1 }}
                        viewport={{ once: true }}
                      >
                        {skill.level}%
                      </motion.span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full relative"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: 0.5 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        viewport={{ once: true }}
                      >
                        <motion.div
                          className="absolute inset-0 bg-white/30 rounded-full"
                          animate={{
                            x: ["-100%", "100%"],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Number.POSITIVE_INFINITY,
                            ease: "linear",
                            delay: 1 + skillIndex * 0.2,
                          }}
                        />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
