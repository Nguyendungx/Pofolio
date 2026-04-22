"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github, Terminal, Circle } from "lucide-react"
import type { Project } from "../data/projectsData"
import Image from "next/image"

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  // Map project titles to image filenames
  const getImagePath = (title: string) => {
    if (title.includes("Vehicle")) return "/project-dealership.png";
    if (title.includes("Human Resource")) return "/project-hrm.png";
    if (title.includes("Salesforce")) return "/project-salesforce.png";
    if (title.includes("CRM")) return "/project-crm.png";
    return null;
  };

  const imagePath = getImagePath(project.title);

  return (
    <div className="glass-panel group hover:border-[var(--accent)]/50 transition-all duration-500 flex flex-col h-full bg-gradient-to-br from-[var(--bg-surface)] to-[var(--bg-main)]">
      {/* Terminal Style Header */}
      <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between bg-black/20">
        <div className="flex gap-1.5">
          <Circle size={10} className="fill-red-500/50 text-transparent" />
          <Circle size={10} className="fill-yellow-500/50 text-transparent" />
          <Circle size={10} className="fill-green-500/50 text-transparent" />
        </div>
        <div className="text-[10px] font-mono text-[var(--fg-subtle)] truncate px-4">
          {project.title.toLowerCase().replace(/\s+/g, '-')}.exe
        </div>
        <Terminal size={12} className="text-[var(--fg-subtle)]" />
      </div>

      {/* Card Header/Visual */}
      <div className="p-1">
        <div className="aspect-[16/9] bg-[var(--bg-subtle)] rounded-xl relative overflow-hidden flex items-center justify-center border border-[var(--border)]">
          {imagePath ? (
            <Image 
              src={imagePath} 
              alt={project.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
          ) : (
            <Terminal size={64} className="text-[var(--fg-subtle)] opacity-20 group-hover:scale-110 group-hover:text-[var(--accent)] transition-all duration-700" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-main)] via-transparent to-transparent opacity-60" />
          
          <div className="absolute top-4 left-4 flex gap-2">
            {project.tech.split(",").slice(0, 3).map((t, i) => (
              <span key={i} className="px-3 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-[10px] uppercase tracking-wider rounded-full text-white">
                {t.trim()}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-8 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-4">
          <div>
            <div className="text-[var(--accent)] text-xs font-bold uppercase tracking-widest mb-1">{project.period}</div>
            <h3 className="text-2xl font-bold leading-tight group-hover:text-[var(--accent)] transition-colors">{project.title}</h3>
          </div>
        </div>

        <p className="text-[var(--fg-muted)] mb-8 line-clamp-3 text-sm leading-relaxed">
          {project.description}
        </p>

        {/* Features List */}
        <div className="space-y-3 mb-8 flex-grow">
          <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--fg-subtle)]">Key Contributions</h4>
          <ul className="space-y-2">
            {project.features.slice(0, 3).map((feature, i) => (
              <li key={i} className="flex gap-2 text-xs text-[var(--fg-subtle)] leading-snug">
                <div className="h-1 w-1 rounded-full bg-[var(--accent)] mt-1.5 shrink-0" />
                {feature}
              </li>
            ))}
          </ul>
        </div>

        {/* Links */}
        <div className="flex items-center gap-4 pt-6 border-t border-[var(--border)]">
          {project.links.demo && (
            <a 
              href={project.links.demo} 
              className="text-sm font-bold flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              Live Demo <ExternalLink size={14} />
            </a>
          )}
          {(project.links.web || project.links.frontend || project.links.backend) && (
            <a 
              href={project.links.web || project.links.frontend || project.links.backend} 
              className="text-sm font-bold flex items-center gap-2 hover:text-[var(--accent)] transition-colors"
            >
              GitHub <Github size={14} />
            </a>
          )}
          {!project.links.demo && !project.links.web && !project.links.frontend && !project.links.backend && (
            <span className="text-[10px] uppercase tracking-widest text-[var(--fg-subtle)] italic">
              Proprietary Enterprise Software
            </span>
          )}
        </div>
      </div>
    </div>
  )
}
