// ProjectCard.tsx
import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Project } from "./projectsData"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <motion.div
      className="bg-black/50 rounded-xl p-8 border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
      variants={projectVariants}
      whileHover={{ scale: 1.02, boxShadow: "0 25px 50px rgba(59, 130, 246, 0.15)" }}
    >
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        initial={{ rotate: 0 }}
        whileHover={{ rotate: 1 }}
        transition={{ duration: 0.5 }}
      />

      <div className="grid md:grid-cols-2 gap-8 relative z-10">
        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-between mb-4">
            <motion.h3 className="text-2xl font-bold text-blue-400" whileHover={{ scale: 1.05 }}>
              {project.title}
            </motion.h3>
            <span className="text-sm text-gray-400">{project.period}</span>
          </div>

          <div className="mb-4">
            <span className="text-blue-300 font-semibold">Role: </span>
            <span className="text-gray-300">{project.role}</span>
          </div>

          <div className="mb-6">
            <span className="text-blue-300 font-semibold">Tech Stack: </span>
            <span className="text-gray-300">{project.tech}</span>
          </div>

          <motion.p
            className="text-gray-300 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {project.description}
          </motion.p>

          {/* LINKS */}
          <motion.div
            className="flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            {project.links.web && (
              <motion.a
                href={project.links.web}
                className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors duration-300 relative overflow-hidden group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <ExternalLink size={16} className="relative z-10" />
                <span className="relative z-10">Web</span>
              </motion.a>
            )}

            {project.links.mobile && (
              <motion.a
                href={project.links.mobile}
                className="flex items-center gap-2 bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Mobile
              </motion.a>
            )}

            {project.links.frontend && (
              <motion.a
                href={project.links.frontend}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Frontend
              </motion.a>
            )}

            {project.links.backend && (
              <motion.a
                href={project.links.backend}
                className="flex items-center gap-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Github size={16} />
                Backend
              </motion.a>
            )}

            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-4 py-2 rounded-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ExternalLink size={16} />
                Demo
              </motion.a>
            )}
          </motion.div>
        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <h4 className="text-lg font-semibold text-blue-400 mb-4">Key Features:</h4>
          <ul className="space-y-2">
            {project.features.map((feature, featureIndex) => (
              <motion.li
                key={featureIndex}
                className="text-gray-300 text-sm flex items-start"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.6 + featureIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <motion.span
                  className="text-blue-400 mr-2 mt-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: featureIndex * 0.2,
                  }}
                >
                  •
                </motion.span>
                {feature}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.div>
  )
}
