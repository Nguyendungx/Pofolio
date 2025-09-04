// ExperienceItem.tsx
import { motion } from "framer-motion"
import { Calendar } from "lucide-react"

interface ExperienceItemProps {
  role: string
  company: string
  date: string
  tasks: string[]
  index: number
}

export default function ExperienceItem({ role, company, date, tasks, index }: ExperienceItemProps) {
  const itemVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.2 },
    },
  }

  return (
    <motion.div className="relative flex items-start mb-8" variants={itemVariants}>
      {/* Timeline dot */}
      <motion.div
        className="absolute left-6 w-4 h-4 bg-blue-400 rounded-full border-4 border-black z-10"
        whileHover={{ scale: 1.2 }}
        animate={{
          boxShadow: [
            "0 0 0 0 rgba(59, 130, 246, 0.4)",
            "0 0 0 10px rgba(59, 130, 246, 0)",
            "0 0 0 0 rgba(59, 130, 246, 0)",
          ],
        }}
        transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
      />

      {/* Content */}
      <div className="ml-16 w-full">
        <motion.div
          className="bg-gray-900 p-6 rounded-lg border border-blue-900/30 hover:border-blue-400/50 transition-all duration-300 relative overflow-hidden group"
          whileHover={{
            scale: 1.02,
            boxShadow: "0 20px 40px rgba(59, 130, 246, 0.15)",
          }}
        >
          {/* Animated background gradient */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-blue-400/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ x: "-100%" }}
            whileHover={{ x: "0%" }}
            transition={{ duration: 0.5 }}
          />

          <div className="relative z-10">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
              <div>
                <motion.h3 className="text-xl font-bold text-blue-400 mb-1" whileHover={{ scale: 1.05 }}>
                  {role}
                </motion.h3>
                <h4 className="text-lg font-semibold text-white">{company}</h4>
              </div>
              <div className="flex items-center text-gray-400 mt-2 sm:mt-0">
                <Calendar size={16} className="mr-2" />
                {date}
              </div>
            </div>

            <motion.ul
              className="text-gray-300 space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {tasks.map((task, i) => (
                <motion.li
                  key={i}
                  className="flex items-start"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <span className="text-blue-400 mr-3 mt-1.5 text-sm">▶</span>
                  {task}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}
