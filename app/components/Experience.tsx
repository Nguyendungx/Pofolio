"use client"

import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

export default function Experience() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="experience" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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

        <motion.div
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Timeline container */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-400"></div>

            {/* Experience item */}
            <motion.div className="relative flex items-start mb-8" variants={itemVariants}>
              {/* Timeline dot */}
              <motion.div
                className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-black z-10"
                whileHover={{ scale: 1.2 }}
                animate={{
                  boxShadow: [
                    "0 0 0 0 rgba(59, 130, 246, 0.4)",
                    "0 0 0 10px rgba(59, 130, 246, 0)",
                    "0 0 0 0 rgba(59, 130, 246, 0)",
                  ],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                }}
              />

              {/* Content */}
              <div className="ml-16 w-full">
                <motion.div
                  className="bg-gray-900 p-6 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
                  }}
                >
                  {/* Animated background gradient */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: "0%" }}
                    transition={{ duration: 0.5 }}
                  />

                  <div className="relative z-10">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <div>
                        <motion.h3 className="text-xl font-bold text-blue-400 mb-1" whileHover={{ scale: 1.05 }}>
                          Frontend Intern
                        </motion.h3>
                        <h4 className="text-lg font-semibold text-white">FPT Software</h4>
                      </div>
                      <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
                        <Calendar size={16} className="mr-2" />
                        June 2024 - Aug 2024
                      </div>
                    </div>

                    <motion.ul
                      className="text-gray-300 space-y-3"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.1 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Developed and maintained reusable components for the Claim Request project using ReactJS
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.2 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Integrated RESTful APIs to handle data retrieval and submission across modules
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.3 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Utilized TypeScript to improve code quality, scalability, and maintainability
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Applied Ant Design, ShadCN UI, and Tailwind CSS to build consistent and responsive UI
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Used Zustand for efficient and lightweight state management
                      </motion.li>
                      <motion.li
                        className="flex items-start"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 }}
                        viewport={{ once: true }}
                      >
                        <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                        Collaborated closely with the team to ensure seamless feature integration
                      </motion.li>
                    </motion.ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
