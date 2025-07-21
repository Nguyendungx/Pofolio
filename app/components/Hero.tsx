"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown, Mail, Phone, Sparkles } from "lucide-react"

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const [windowSize, setWindowSize] = useState<{ width: number; height: number } | null>(null)

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-gradient-to-br from-black via-gray-900 to-blue-900 overflow-hidden">
      {/* Animated background particles */}
      {windowSize && (
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400 rounded-full"
              initial={{
                x: Math.random() * windowSize.width,
                y: Math.random() * windowSize.height,
                opacity: 0,
              }}
              animate={{
                y: [null, -100, -200],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute top-20 left-20 w-20 h-20 border border-blue-400/30 rotate-45"
        animate={{
          rotate: [45, 405],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-20 right-20 w-16 h-16 bg-blue-400/10 rounded-full"
        animate={{
          y: [-20, 20, -20],
          x: [-10, 10, -10],
        }}
        transition={{
          duration: 6,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="mb-8" variants={itemVariants}>
          <motion.div
            className="relative inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur-xl opacity-30"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 3,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            />
            <div className="relative w-32 h-32 mx-auto bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center border-4 border-blue-300/50">
              <span className="text-4xl font-bold text-white">DN</span>
              <motion.div
                className="absolute -top-2 -right-2"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              >
                <Sparkles className="w-6 h-6 text-yellow-400" />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        <motion.h1 className="text-5xl md:text-7xl font-bold mb-4" variants={itemVariants}>
          <motion.span
            className="text-white inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            DUNG
          </motion.span>{" "}
          <motion.span
            className="text-blue-400 inline-block"
            whileHover={{
              scale: 1.1,
              textShadow: "0 0 20px rgba(59, 130, 246, 0.8)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            NGUYEN
          </motion.span>
        </motion.h1>

        <motion.h2 className="text-2xl md:text-3xl text-blue-300 mb-6" variants={itemVariants}>
          <motion.span
            animate={{
              backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="bg-gradient-to-r from-blue-300 via-blue-400 to-blue-300 bg-clip-text text-transparent bg-[length:200%_100%]"
          >
            FRONTEND DEVELOPER
          </motion.span>
        </motion.h2>

        <motion.p
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8"
          variants={itemVariants}
        >
          A motivated Frontend Developer with hands-on experience in ReactJS, JavaScript, NodeJS, and React Native
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          variants={itemVariants}
        >
          <motion.a
            href="mailto:nguyendungx.work@gmail.com"
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg transition-colors duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={{ x: "-100%" }}
              whileHover={{ x: "0%" }}
              transition={{ duration: 0.3 }}
            />
            <Mail size={20} className="relative z-10" />
            <span className="relative z-10">Get In Touch</span>
          </motion.a>

          <motion.a
            href="tel:+84916149123"
            className="flex items-center gap-2 border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black px-6 py-3 rounded-lg transition-all duration-300 relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Phone size={20} className="relative z-10" />
            <span className="relative z-10">(+84) 916 149 123</span>
          </motion.a>
        </motion.div>

        <motion.div className="text-gray-400" variants={itemVariants}>
          Thu Duc City, Ho Chi Minh City
        </motion.div>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 2,
          repeat: Number.POSITIVE_INFINITY,
          ease: "easeInOut",
        }}
      >
        <ChevronDown size={32} className="text-blue-400" />
      </motion.div>
    </section>
  )
}
