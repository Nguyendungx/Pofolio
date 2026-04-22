"use client"

import { motion, Variants } from "framer-motion"
import { Code2, Database, Layout, Smartphone, Cloud, Terminal } from "lucide-react"

const skillCategories = [
  {
    title: "Frontend",
    icon: <Layout className="text-[var(--accent)]" />,
    skills: ["ReactJS", "Next.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Framer Motion"]
  },
  {
    title: "Mobile",
    icon: <Smartphone className="text-[var(--accent)]" />,
    skills: ["React Native", "Flutter", "Mobile UI Design", "Cross-platform Dev"]
  },
  {
    title: "Backend",
    icon: <Database className="text-[var(--accent)]" />,
    skills: ["Node.js", "Express", ".NET Core", "Entity Framework", "RESTful APIs"]
  },
  {
    title: "Enterprise",
    icon: <Cloud className="text-[var(--accent)]" />,
    skills: ["Salesforce Apex", "LWC", "Visualforce", "CRM Customization"]
  },
  {
    title: "Database",
    icon: <Terminal className="text-[var(--accent)]" />,
    skills: ["PostgreSQL", "SQL Server", "MySQL", "Data Migration"]
  },
  {
    title: "Tools & Others",
    icon: <Code2 className="text-[var(--accent)]" />,
    skills: ["Git / GitLab", "Docker", "CI/CD", "Postman", "Agile/Scrum"]
  }
]

export default function Skills() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  }

  return (
    <section id="skills" className="relative overflow-hidden bg-[var(--bg-main)]">
      {/* Background Decorative Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-0 left-1/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-0 left-2/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
        <div className="absolute top-0 left-3/4 w-[1px] h-full bg-gradient-to-b from-transparent via-[var(--border)] to-transparent" />
      </div>
      <div className="absolute inset-0 binary-bg" />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-20 text-center md:text-left"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Expertise</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Technical <span className="text-gradient">Arsenal.</span></h3>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="p-8 glass-panel group relative flex flex-col h-full"
            >
              {/* Animated corner accent */}
              <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="absolute top-[-50%] right-[-50%] w-full h-full bg-[var(--accent)]/10 rotate-45" />
              </div>

              <div className="flex items-center gap-4 mb-6">
                <motion.div 
                  whileHover={{ rotate: 15 }}
                  className="p-3 rounded-xl bg-[var(--bg-subtle)] border border-[var(--border)] group-hover:border-[var(--accent)]/30 transition-colors"
                >
                  {category.icon}
                </motion.div>
                <h4 className="text-xl font-bold">{category.title}</h4>
              </div>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {category.skills.map((skill, j) => (
                  <motion.span 
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 bg-[var(--bg-subtle)] border border-[var(--border)] text-[10px] uppercase tracking-widest text-[var(--fg-muted)] rounded-full group-hover:text-[var(--fg-main)] transition-colors group-hover:border-[var(--accent)]/20"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
