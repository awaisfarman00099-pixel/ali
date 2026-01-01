"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export default function AuthoritySection() {
  const stats = [
    { label: "Hours Training", value: "52+" },
    { label: "Power Modules", value: "6" },
    { label: "Students Mentored", value: "1000+" },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* 3D Avatar Placeholder */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="relative w-80 h-80 rounded-2xl overflow-hidden glass glow-red mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-secondary/30 flex items-center justify-center group cursor-pointer">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/40 transition-all duration-300"
              >
                <div className="w-20 h-20 rounded-full bg-primary/80 flex items-center justify-center">
                  <Play className="w-8 h-8 text-white fill-white" />
                </div>
              </motion.div>
              <div className="text-6xl font-bold text-primary/30">NA</div>
            </div>
          </motion.div>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="text-5xl sm:text-6xl font-bold mb-4"
              >
                Ale
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-2xl text-accent font-semibold"
              >
                YouTube Automation Empire Builder
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-lg text-muted-foreground mt-3"
              >
                Helping creators build faceless, automated YouTube channels generating dollar-based income
              </motion.p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ translateY: -4 }}
                >
                  <Card className="glass p-6 text-center hover:glow-gold transition-all duration-300 h-full">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: index * 0.2 }}
                      viewport={{ once: true }}
                      className="text-3xl sm:text-4xl font-bold text-accent mb-2"
                    >
                      {stat.value}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
