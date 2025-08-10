"use client"

import { motion } from "framer-motion"

export default function About() {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-64 h-64 border border-blue-400 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-400 rounded-full" />
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-400">Me</span>
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
          className="grid md:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants}>
            <motion.div
              className="w-80 h-80 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center relative"
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)",
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-blue-300 to-blue-700 rounded-full"
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 20,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <div className="relative z-10 text-6xl font-bold text-white">DN</div>

              {/* Floating particles around avatar */}
              {[...Array(8)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-white rounded-full"
                  style={{
                    top: `${20 + Math.sin((i * 45 * Math.PI) / 180) * 140}px`,
                    left: `${20 + Math.cos((i * 45 * Math.PI) / 180) * 140}px`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Number.POSITIVE_INFINITY,
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>

          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h3
              className="text-2xl font-semibold text-blue-400"
              whileInView={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            >
              Web Developer
            </motion.h3>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              A motivated Web Developer with hands-on experience in ReactJS, JavaScript, NodeJS, and React Native. I
              have completed a 3-month internship at FPT Software as a Frontend Developer, where I worked on real-world
              projects using ReactJS, TypeScript, Ant Design, and ShadCN.
            </motion.p>

            <motion.p
              className="text-gray-300 leading-relaxed"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              I contributed to the development of responsive and user-friendly web interfaces, familiar with
              component-based architecture, API integration, and modern UI/UX practices. I actively collaborate with
              team members to ensure scalable and maintainable code while continuously expanding my knowledge of current
              web technologies and best practices.
            </motion.p>

            <motion.div
              className="grid grid-cols-2 gap-4 pt-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div
                className="bg-black/50 p-4 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.1)",
                }}
              >
                <h4 className="text-blue-400 font-semibold mb-2">Experience</h4>
                <p className="text-gray-300">3+ Months</p>
              </motion.div>

              <motion.div
                className="bg-black/50 p-4 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300"
                variants={cardVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 20px rgba(59, 130, 246, 0.1)",
                }}
              >
                <h4 className="text-blue-400 font-semibold mb-2">Projects</h4>
                <p className="text-gray-300">5+ Completed</p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
