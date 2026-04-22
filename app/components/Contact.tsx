"use client"

import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Linkedin, Send, ArrowRight } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-[var(--bg-surface)]">
      <div className="absolute inset-0 grid-overlay opacity-10 pointer-events-none" />
      
      <div className="section-container relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Header & Contact Info */}
          <div className="lg:col-span-5 flex flex-col gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[var(--accent)] mb-4">Contact</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="text-gradient">Connect.</span></h3>
              <p className="text-lg text-[var(--fg-muted)] leading-relaxed">
                I'm currently open to new opportunities and interesting collaborations. 
                Whether you have a question or just want to say hi, I'll try my best to get back to you!
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col gap-6"
            >
              {[
                { icon: <Mail size={20} />, label: "Email", value: "nguyendungx.work@gmail.com", href: "mailto:nguyendungx.work@gmail.com" },
                { icon: <Phone size={20} />, label: "Phone", value: "(+84) 916 149 123", href: "tel:+84916149123" },
                { icon: <MapPin size={20} />, label: "Location", value: "Thu Duc City, Ho Chi Minh City", href: "#" },
              ].map((item, i) => (
                <a 
                  key={i} 
                  href={item.href}
                  className="flex items-center gap-6 p-4 rounded-2xl border border-transparent hover:border-[var(--border)] hover:bg-[var(--bg-subtle)] transition-all group"
                >
                  <div className="p-3 rounded-xl bg-[var(--bg-subtle)] text-[var(--accent)] group-hover:bg-[var(--accent)] group-hover:text-black transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-[10px] uppercase tracking-widest font-bold text-[var(--fg-subtle)] mb-1">{item.label}</div>
                    <div className="text-[var(--fg-main)] font-medium group-hover:text-[var(--accent)] transition-colors">{item.value}</div>
                  </div>
                </a>
              ))}
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex gap-4"
            >
              <a href="#" className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                <Github size={20} />
              </a>
              <a href="#" className="p-3 rounded-full border border-[var(--border)] hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all">
                <Linkedin size={20} />
              </a>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 md:p-12 relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-[var(--accent)]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
               
               <form className="relative z-10 flex flex-col gap-8">
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--fg-subtle)] ml-4">Full Name</label>
                     <input 
                       type="text" 
                       placeholder="Your name"
                       className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] transition-colors text-sm"
                     />
                   </div>
                   <div className="flex flex-col gap-2">
                     <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--fg-subtle)] ml-4">Email Address</label>
                     <input 
                       type="email" 
                       placeholder="your@email.com"
                       className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-2xl px-6 py-4 outline-none focus:border-[var(--accent)] transition-colors text-sm"
                     />
                   </div>
                 </div>
                 
                 <div className="flex flex-col gap-2">
                   <label className="text-[10px] uppercase tracking-widest font-bold text-[var(--fg-subtle)] ml-4">Message</label>
                   <textarea 
                     rows={6}
                     placeholder="How can I help you?"
                     className="bg-[var(--bg-subtle)] border border-[var(--border)] rounded-3xl px-6 py-4 outline-none focus:border-[var(--accent)] transition-colors text-sm resize-none"
                   />
                 </div>
                 
                 <button className="btn-primary w-fit group flex items-center gap-3">
                   Send Message
                   <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                 </button>
               </form>
            </div>
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-32 pt-12 border-t border-[var(--border)] flex flex-col md:flex-row justify-between items-center gap-6"
        >
          <div className="text-sm text-[var(--fg-subtle)] uppercase tracking-widest">
            © 2026 Dung Nguyen. Built with Precision.
          </div>
          <div className="flex gap-8 text-[10px] uppercase tracking-[0.2em] font-bold text-[var(--fg-subtle)]">
            <a href="#about" className="hover:text-[var(--accent)] transition-colors">About</a>
            <a href="#experience" className="hover:text-[var(--accent)] transition-colors">Experience</a>
            <a href="#projects" className="hover:text-[var(--accent)] transition-colors">Projects</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
