"use client"

import { motion, Variants, useScroll, useTransform } from "framer-motion"
import { ArrowUpRight, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"
import { useRef } from "react"

export default function Hero() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <section ref={containerRef} className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-20">
      {/* Dynamic Background Layer */}
      <div className="absolute inset-0 grid-overlay opacity-20 pointer-events-none" />
      <div className="absolute inset-0 noise-overlay pointer-events-none" />
      <div className="absolute inset-0 binary-bg" />
      
      {/* Animated Orbs */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute top-[10%] right-[5%] w-[40vw] h-[40vw] bg-[var(--accent)]/10 rounded-full blur-[120px] pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div 
        style={{ y: y2 }}
        className="absolute bottom-[10%] left-[5%] w-[30vw] h-[30vw] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="section-container relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
        >
          {/* Main Content Area */}
          <div className="lg:col-span-7">
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-subtle)] border border-[var(--border)] mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]"></span>
              </span>
              <span className="text-xs font-medium tracking-wider uppercase text-[var(--fg-subtle)]">
                Available for new opportunities
              </span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-6xl md:text-8xl lg:text-[10rem] font-bold leading-[0.85] mb-8"
            >
              <span className="block">DUNG</span>
              <span className="block text-[var(--accent)]">NGUYEN</span>
            </motion.h1>

            <motion.div variants={itemVariants} className="max-w-2xl">
              <p className="text-xl md:text-2xl text-[var(--fg-muted)] leading-relaxed mb-10">
                A software engineer specializing in building high-performance web and mobile applications with 
                <span className="text-[var(--fg-main)]"> .NET, React, and Salesforce.</span>
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <a href="mailto:nguyendungx.work@gmail.com" className="btn-primary flex items-center gap-2 group">
                Work with me
                <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <a href="#projects" className="btn-secondary">
                View Projects
              </a>
            </motion.div>
          </div>

          {/* Visual Side with Parallax Image */}
          <motion.div 
            style={{ y: y2, opacity }}
            className="lg:col-span-5 hidden lg:block"
          >
            <div className="relative group">
               <div className="absolute inset-0 bg-[var(--accent)]/20 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
               <div className="glass-panel p-2 relative z-10 rotate-3 group-hover:rotate-0 transition-transform duration-700">
                 <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--bg-subtle)]">
                   <Image 
                     src="/hero.png" 
                     alt="Tech Illustration" 
                     fill
                     className="object-cover"
                     priority
                   />
                 </div>
               </div>
               
               {/* Floating Badges */}
               <motion.div 
                 animate={{ y: [0, -10, 0] }}
                 transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                 className="absolute -top-6 -right-6 glass-panel px-4 py-2 text-xs font-bold border-[var(--accent)]/50"
               >
                 .NET 8
               </motion.div>
               <motion.div 
                 animate={{ y: [0, 10, 0] }}
                 transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                 className="absolute -bottom-6 -left-6 glass-panel px-4 py-2 text-xs font-bold border-[var(--accent)]/50"
               >
                 REACT 19
               </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 right-12 hidden md:flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-[var(--fg-subtle)] rotate-90 origin-right translate-y-8">
          Scroll
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[var(--border)] to-transparent" />
      </motion.div>
    </section>
  )
}
