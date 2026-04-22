"use client"

import { motion } from "framer-motion"
import { experiences } from "../data/experienceData"

export default function Experience() {
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
    <section id="experience" className="relative overflow-hidden bg-[var(--bg-surface)]">
      {/* Background Decorative Grid */}
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      <div className="absolute inset-0 binary-bg" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Journey</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Work <span className="text-gradient">Experience.</span></h3>
        </motion.div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-[1px] bg-[var(--border)] -translate-x-1/2 hidden md:block" />
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex flex-col gap-12"
          >
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className={`relative flex flex-col md:flex-row gap-8 md:gap-0 ${
                  i % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 rounded-full bg-[var(--accent)] -translate-x-1/2 border-4 border-[var(--bg-surface)] z-20 hidden md:block" />
                
                {/* Content Card */}
                <div className="md:w-1/2 flex flex-col px-0 md:px-12">
                  <div className={`p-8 glass-panel hover:border-[var(--accent)]/50 transition-colors group ${
                    i % 2 === 0 ? "md:text-left" : "md:text-right"
                  }`}>
                    <div className="text-sm font-mono text-[var(--accent)] mb-2">{exp.date}</div>
                    <h4 className="text-2xl font-bold mb-1">{exp.role}</h4>
                    <div className="text-[var(--fg-muted)] font-semibold mb-6">{exp.company}</div>
                    
                    <ul className={`space-y-3 text-sm text-[var(--fg-subtle)] leading-relaxed ${
                      i % 2 === 0 ? "" : "md:flex md:flex-col md:items-end"
                    }`}>
                      {exp.tasks.map((task, j) => (
                        <li key={j} className="flex gap-3">
                          {i % 2 === 0 ? <div className="h-1.5 w-1.5 rounded-full bg-[var(--border)] mt-1.5 shrink-0" /> : null}
                          <span className={i % 2 === 0 ? "text-left" : "md:text-right"}>{task}</span>
                          {i % 2 !== 0 ? <div className="h-1.5 w-1.5 rounded-full bg-[var(--border)] mt-1.5 shrink-0 hidden md:block" /> : <div className="h-1.5 w-1.5 rounded-full bg-[var(--border)] mt-1.5 shrink-0 md:hidden" />}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* Empty spacer for the other side on desktop */}
                <div className="md:w-1/2 hidden md:block" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
