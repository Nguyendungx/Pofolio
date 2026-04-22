"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Code2, Braces, Layers, Globe } from "lucide-react"

const SNIPPETS = [
  {
    id: "react",
    title: "React Hook",
    icon: <Code2 size={18} />,
    language: "typescript",
    code: `const usePortfolioScroll = (threshold = 0.5) => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * threshold;
      // Intersection logic here...
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return activeSection;
};`
  },
  {
    id: "dotnet",
    title: ".NET Service",
    icon: <Braces size={18} />,
    language: "csharp",
    code: `public async Task<ServiceResponse<ProjectDto>> GetProjectById(int id)
{
    var project = await _context.Projects
        .Include(p => p.Technologies)
        .FirstOrDefaultAsync(p => p.Id == id);

    if (project == null) 
        return Response.Fail<ProjectDto>("Project not found");

    return Response.Ok(_mapper.Map<ProjectDto>(project));
}`
  },
  {
    id: "apex",
    title: "Apex Trigger",
    icon: <Layers size={18} />,
    language: "apex",
    code: `trigger AccountTrigger on Account (after update) {
    if (Trigger.isAfter && Trigger.isUpdate) {
        AccountHandler.handleIndustryChange(
            Trigger.new, 
            Trigger.oldMap
        );
    }
}`
  }
]

export default function CodeShowcase() {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[var(--accent)]/5 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Snippet Laboratory</h2>
          <h3 className="text-4xl md:text-5xl font-bold">Behind the <span className="text-gradient">Source Code.</span></h3>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Sidebar Tabs */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {SNIPPETS.map((snippet, i) => (
              <button
                key={snippet.id}
                onClick={() => setActiveTab(i)}
                className={`flex items-center gap-4 p-4 rounded-2xl border transition-all duration-300 text-left ${
                  activeTab === i 
                    ? "bg-[var(--accent)]/10 border-[var(--accent)]/50 text-[var(--accent)]" 
                    : "bg-white/5 border-transparent text-[var(--fg-muted)] hover:bg-white/10"
                }`}
              >
                {snippet.icon}
                <span className="font-bold text-sm">{snippet.title}</span>
              </button>
            ))}
          </div>

          {/* Code Window */}
          <div className="lg:col-span-9 glass-panel">
            <div className="px-6 py-4 bg-white/5 border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe size={14} className="text-[var(--fg-subtle)]" />
                <span className="text-xs font-mono text-[var(--fg-subtle)]">
                  dung-nguyen/{SNIPPETS[activeTab].id}-logic.ts
                </span>
              </div>
              <div className="text-[10px] font-mono text-[var(--accent)] uppercase tracking-widest">
                Read-Only
              </div>
            </div>
            
            <div className="p-8 overflow-x-auto min-h-[300px]">
              <AnimatePresence mode="wait">
                <motion.pre
                  key={activeTab}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="font-mono text-sm leading-relaxed text-[var(--fg-muted)]"
                >
                  <code>{SNIPPETS[activeTab].code}</code>
                </motion.pre>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
