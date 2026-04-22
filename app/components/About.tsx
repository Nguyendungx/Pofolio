"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Code2, Cpu, Globe2, Rocket, Binary } from "lucide-react"
import { useRef } from "react"

const stats = [
  { label: "Years Experience", value: "1+" },
  { label: "Projects Completed", value: "15+" },
  { label: "Technologies", value: "10+" },
]

const features = [
  {
    icon: <Code2 className="text-[var(--accent)]" />,
    title: "Clean Architecture",
    description: "Building scalable applications with maintainable and well-documented codebases."
  },
  {
    icon: <Cpu className="text-[var(--accent)]" />,
    title: "Performance First",
    description: "Optimizing for speed and responsiveness to ensure the best user experience."
  },
  {
    icon: <Globe2 className="text-[var(--accent)]" />,
    title: "Full Stack Thinking",
    description: "Bridging the gap between frontend elegance and backend robustness."
  },
  {
    icon: <Rocket className="text-[var(--accent)]" />,
    title: "Modern Tech",
    description: "Leveraging the latest frameworks and tools to solve complex problems."
  }
]

export default function About() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  })

  const rotate = useTransform(scrollYProgress, [0, 1], [0, 360])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8])

  return (
    <section ref={sectionRef} id="about" className="relative overflow-hidden bg-[var(--bg-main)]">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Visual Side - Dynamic Geometric Element */}
          <motion.div 
            style={{ scale }}
            className="relative flex items-center justify-center aspect-square"
          >
            <motion.div 
              style={{ rotate }}
              className="absolute w-[80%] h-[80%] border-2 border-[var(--accent)]/20 rounded-[30% 70% 70% 30% / 30% 30% 70% 70%] opacity-50"
              animate={{
                borderRadius: ["30% 70% 70% 30% / 30% 30% 70% 70%", "70% 30% 30% 70% / 70% 70% 30% 30%", "30% 70% 70% 30% / 30% 30% 70% 70%"],
              }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
            />
            
            <div className="relative z-10 glass-panel p-12 text-center group cursor-default">
              <Binary size={80} className="text-[var(--accent)] mx-auto mb-6 group-hover:scale-110 transition-transform duration-500" />
              <h4 className="text-xl font-bold mb-2">Technical Mindset</h4>
              <p className="text-sm text-[var(--fg-subtle)]">Turning complex logic into elegant code.</p>
            </div>
            
            <div className="absolute inset-0 bg-gradient-to-tr from-[var(--accent)]/10 to-transparent blur-3xl rounded-full" />
          </motion.div>

          {/* Content Side */}
          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">About Me</h2>
              <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6 text-balance">
                Crafting digital experiences with <span className="text-gradient">precision and purpose.</span>
              </h3>
              <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
                I am a dedicated Software Developer based in Ho Chi Minh City, with a passion for creating 
                seamless user experiences across web and mobile platforms. My journey in tech is driven 
                by a relentless curiosity for how things work and a commitment to delivering 
                high-quality solutions.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="grid grid-cols-3 gap-8 border-y border-[var(--border)] py-8"
            >
              {stats.map((stat, i) => (
                <div key={i} className="group cursor-default">
                  <motion.div 
                    whileHover={{ y: -5 }}
                    className="text-3xl font-bold text-[var(--fg-main)] group-hover:text-[var(--accent)] transition-colors"
                  >
                    {stat.value}
                  </motion.div>
                  <div className="text-[10px] uppercase tracking-wider text-[var(--fg-subtle)]">{stat.label}</div>
                </div>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.3 + (i * 0.1) }}
                  viewport={{ once: true }}
                  className="flex flex-col gap-2 p-6 rounded-2xl hover:bg-[var(--bg-subtle)] transition-colors group"
                >
                  <div className="p-2 w-fit rounded-lg bg-[var(--bg-subtle)] border border-[var(--border)] group-hover:border-[var(--accent)]/50 transition-colors">
                    {feature.icon}
                  </div>
                  <h4 className="font-semibold group-hover:text-[var(--accent)] transition-colors">{feature.title}</h4>
                  <p className="text-sm text-[var(--fg-subtle)] leading-relaxed">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
