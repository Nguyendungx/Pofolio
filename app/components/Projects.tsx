"use client"

import { motion } from "framer-motion"
import { projects } from "../data/projectsData"
import ProjectCard from "./ProjectCard"

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  return (
    <section id="projects" className="relative overflow-hidden">
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 max-w-3xl"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Portfolio</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-8">Selected <span className="text-gradient">Projects.</span></h3>
          <p className="text-xl text-[var(--fg-muted)] leading-relaxed">
            A collection of engineering-focused projects ranging from high-performance web applications 
            to complex enterprise desktop systems and Salesforce customizations.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {projects.map((project, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
              }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
