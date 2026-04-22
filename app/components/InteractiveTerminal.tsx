"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Terminal as TerminalIcon, ChevronRight } from "lucide-react"

const COMMANDS = {
  help: "Available commands: about, skills, contact, clear, projects, ls",
  about: "Dung Nguyen - Software Engineer based in HCM City. Specialized in .NET, React, and Salesforce.",
  skills: "Frontend: React, Next.js, TS | Backend: .NET Core, Node.js | CRM: Salesforce Apex/LWC",
  contact: "Email: nguyendungx.work@gmail.com | LinkedIn: linkedin.com/in/dungnguyen",
  projects: "Running project_manager.sh... Found 4 major projects. Type 'ls' to see files.",
  ls: "experience.pdf  projects.git  skills.json  contact.txt",
}

export default function InteractiveTerminal() {
  const [history, setHistory] = useState<string[]>(["Welcome to Dung's OS v1.0.0", "Type 'help' to see available commands."])
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [history])

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault()
    const cmd = input.toLowerCase().trim()
    
    if (cmd === "clear") {
      setHistory([])
    } else if (cmd in COMMANDS) {
      setHistory([...history, `> ${input}`, COMMANDS[cmd as keyof typeof COMMANDS]])
    } else if (cmd !== "") {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type 'help' for assistance.`])
    }
    
    setInput("")
  }

  return (
    <section className="py-20 bg-[var(--bg-main)]">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto overflow-hidden rounded-2xl border border-[var(--border)] bg-black/40 backdrop-blur-md shadow-2xl"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-3 bg-white/5 border-b border-[var(--border)]">
            <div className="flex items-center gap-3">
              <TerminalIcon size={16} className="text-[var(--fg-subtle)]" />
              <span className="text-xs font-mono text-[var(--fg-subtle)] uppercase tracking-widest">Main Terminal — 80×24</span>
            </div>
            <div className="flex gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30" />
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30" />
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="h-[400px] overflow-y-auto p-6 font-mono text-sm leading-relaxed"
          >
            {history.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-[var(--accent)] mt-2" : "text-[var(--fg-muted)]"}>
                {line}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2 mt-4">
              <ChevronRight size={16} className="text-[var(--accent)]" />
              <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                spellCheck={false}
                autoComplete="off"
                className="flex-1 bg-transparent border-none outline-none text-[var(--fg-main)] caret-[var(--accent)]"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
