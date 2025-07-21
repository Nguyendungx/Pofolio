"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react"

export default function Contact() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="contact" className="py-20 bg-black relative overflow-hidden">
      {/* Animated background elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-full opacity-10"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      >
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-blue-400 rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-blue-400 rounded-full" />
        <div className="absolute top-3/4 left-3/4 w-16 h-16 border border-blue-400 rounded-full" />
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
            Get In <span className="text-blue-400">Touch</span>
          </h2>
          <motion.div
            className="w-24 h-1 bg-blue-400 mx-auto mb-6"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          />
          <motion.p
            className="text-gray-300 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
          >
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work
            together!
          </motion.p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="space-y-8" variants={itemVariants}>
            <h3 className="text-2xl font-bold text-blue-400 mb-6">Contact Information</h3>

            <div className="space-y-6">
              <motion.a
                href="mailto:nguyendungx.work@gmail.com"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="bg-blue-400 p-3 rounded-full group-hover:bg-blue-500 transition-colors duration-300 relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Mail size={24} className="text-black" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold">Email</h4>
                  <p className="text-gray-300">nguyendungx.work@gmail.com</p>
                </div>
              </motion.a>

              <motion.a
                href="tel:+84916149123"
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 group relative overflow-hidden"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div
                  className="bg-blue-400 p-3 rounded-full group-hover:bg-blue-500 transition-colors duration-300 relative z-10"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                >
                  <Phone size={24} className="text-black" />
                </motion.div>
                <div className="relative z-10">
                  <h4 className="text-white font-semibold">Phone</h4>
                  <p className="text-gray-300">(+84) 916 149 123</p>
                </div>
              </motion.a>

              <motion.div
                className="flex items-center gap-4 p-4 bg-gray-900 rounded-lg border border-blue-900/30"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 30px rgba(59, 130, 246, 0.2)",
                }}
              >
                <div className="bg-blue-400 p-3 rounded-full">
                  <MapPin size={24} className="text-black" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Location</h4>
                  <p className="text-gray-300">Thu Duc City, Ho Chi Minh City</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="bg-gray-900 p-8 rounded-xl border border-blue-900/30 relative overflow-hidden"
            variants={itemVariants}
            whileHover={{
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.1)",
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-400/5 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-500"
              initial={{ scale: 0 }}
              whileHover={{ scale: 1 }}
              transition={{ duration: 0.5 }}
            />

            <h3 className="text-2xl font-bold text-blue-400 mb-6 relative z-10">Send Message</h3>
            <form className="space-y-6 relative z-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <motion.input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white transition-all duration-300"
                  placeholder="Your Name"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <motion.input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white transition-all duration-300"
                  placeholder="your.email@example.com"
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <motion.textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-black border border-gray-700 rounded-lg focus:border-blue-400 focus:outline-none text-white resize-none transition-all duration-300"
                  placeholder="Your message..."
                  whileFocus={{
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(59, 130, 246, 0.3)",
                  }}
                ></motion.textarea>
              </motion.div>

              <motion.button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-300 flex items-center justify-center gap-2 relative overflow-hidden group"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.div
                  className="absolute inset-0 bg-blue-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: "0%" }}
                  transition={{ duration: 0.3 }}
                />
                <Send size={20} className="relative z-10" />
                <span className="relative z-10">Send Message</span>
              </motion.button>
            </form>
          </motion.div>
        </motion.div>

        <motion.div
          className="text-center mt-16 pt-8 border-t border-gray-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 mb-4">© 2025 Dung Nguyen. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition-colors duration-300"
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.3 }}
            >
              <Linkedin size={24} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
