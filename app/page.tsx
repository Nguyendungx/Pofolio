"use client"

import { motion } from "framer-motion"
import Hero from "./components/Hero"
import About from "./components/About"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Skills from "./components/Skills"
import Education from "./components/Education"
import Contact from "./components/Contact"
import Navigation from "./components/Navigation"
import InteractiveTerminal from "./components/InteractiveTerminal"
import CodeShowcase from "./components/CodeShowcase"

export default function Portfolio() {
  return (
    <main className="relative">
      <Navigation />
      <Hero />
      <InteractiveTerminal />
      <About />
      <Experience />
      <Projects />
      <Skills />
      <CodeShowcase />
      <Education />
      <Contact />
    </main>
  )
}
