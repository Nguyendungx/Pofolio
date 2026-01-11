"use client"

import { GraduationCap, MapPin, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState } from "react"

export default function Education() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const images = [
    "/z7420889333893_dfc5c0a22ab38f2799dfa212b3590010.jpg",
    "/z7420889341758_5c7a6826fbc93561586666992c11db74.jpg",
    "/z7420889347044_379882bb5e7bb385c3c43d1e071733ed.jpg",
    "/z7420889348180_4ffe8c0ead1b1b8cc59cc6d81a732a4b.jpg",
  ]

  const rotatedImage = "/z7420889341758_5c7a6826fbc93561586666992c11db74.jpg"

  return (
    <section id="education" className="py-20 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-blue-400">Education</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-400 mx-auto"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          />
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          <motion.div
            className="bg-black/50 p-8 rounded-xl border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.01 }}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

            <div className="flex items-start gap-6 relative z-10">
              <div className="bg-blue-400 p-3 rounded-full shadow-lg shadow-blue-400/20">
                <GraduationCap size={32} className="text-black" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-400 mb-2">Engineer's Degree in Software Technology</h3>
                <h4 className="text-lg font-semibold text-white mb-3">HCMC University of Technology and Education</h4>

                <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4">
                  <div className="flex items-center text-gray-400">
                    <MapPin size={16} className="mr-2" />
                    Ho Chi Minh City, Vietnam
                  </div>
                  <div className="text-gray-400 bg-gray-800/50 px-3 py-1 rounded-full text-sm border border-gray-700">2021 - 2025</div>
                </div>

                <div className="bg-gray-800 p-4 rounded-lg inline-block border border-gray-700">
                  <span className="text-blue-300 font-semibold">GPA: </span>
                  <span className="text-white text-lg font-bold">3.21 / 4.0</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.15
                }
              }
            }}
          >
            {images.map((src, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, scale: 0.8 },
                  visible: { opacity: 1, scale: 1 }
                }}
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedImage(src)}
                className="relative aspect-video rounded-xl overflow-hidden border border-gray-800 group shadow-lg cursor-pointer"
              >
                <div className={`relative w-full h-full ${src === rotatedImage ? "-rotate-90 scale-150" : ""}`}>
                  <Image
                    src={src}
                    alt={`Education Image ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <span className="text-white font-medium">Click to view</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0, rotate: 0 }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: selectedImage === rotatedImage ? -90 : 0
              }}
              exit={{ scale: 0.5, opacity: 0, rotate: 0 }}
              className="relative max-w-5xl w-full h-[80vh] rounded-lg overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={selectedImage}
                alt="Enlarged education image"
                fill
                className="object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className={`absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-white/20 transition-colors z-50`}
                style={{ transform: selectedImage === rotatedImage ? "rotate(90deg)" : "none" }}
              >
                <X size={24} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
