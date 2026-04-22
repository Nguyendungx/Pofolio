"use client"

import { motion } from "framer-motion"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const educationData = [
  {
    degree: "Software Technology",
    school: "HCMC University of Technology and Education",
    period: "2021 - 2025",
    location: "Ho Chi Minh City, Vietnam",
    description: "Focused on computer science fundamentals, software architecture, and modern web development technologies. Achieved a GPA of 3.21/4.0."
  }
]

export default function Education() {
  return (
    <section id="education" className="relative overflow-hidden bg-[var(--bg-main)]">
      <div className="absolute inset-0 binary-bg" />
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Academic</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Background <span className="text-gradient">Education.</span></h3>
        </motion.div>

        <div className="max-w-4xl">
          {educationData.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="glass-panel p-8 md:p-12 group hover:border-[var(--accent)]/50 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                <div className="flex flex-col gap-4">
                  <div className="p-3 w-fit rounded-xl bg-[var(--bg-subtle)] text-[var(--accent)]">
                    <GraduationCap size={32} />
                  </div>
                  <div>
                    <h4 className="text-3xl font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">{edu.degree}</h4>
                    <div className="text-xl text-[var(--fg-muted)] font-semibold">{edu.school}</div>
                  </div>
                  <p className="text-[var(--fg-subtle)] leading-relaxed max-w-2xl mt-4">
                    {edu.description}
                  </p>
                </div>
                
                <div className="flex flex-col gap-4 text-sm text-[var(--fg-subtle)] shrink-0">
                  <div className="flex items-center gap-3">
                    <Calendar size={18} className="text-[var(--accent)]" />
                    {edu.period}
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin size={18} className="text-[var(--accent)]" />
                    {edu.location}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
