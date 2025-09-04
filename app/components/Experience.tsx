// ExperienceSection.tsx
"use client"

import { motion } from "framer-motion"
import ExperienceItem from "./ExperienceItem"
import { experiences } from "../data/experienceData"

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Professional <span className="text-blue-400">Experience</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
        </motion.div>

        {/* Timeline container */}
        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>

            {/* Render all experience items */}
            {experiences.map((exp, index) => (
              <ExperienceItem
                key={index}
                index={index}
                role={exp.role}
                company={exp.company}
                date={exp.date}
                tasks={exp.tasks}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
