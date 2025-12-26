"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Users, DollarSign, Shield } from "lucide-react"

const problems = [
  {
    icon: Users,
    title: "Camera-Shy Creators",
    description: "No need to show your face or be on camera. Automate everything.",
    color: "text-primary",
  },
  {
    icon: DollarSign,
    title: "Low RPM Solved",
    description: "Target high-paying USA & UK audiences. Earn more per view.",
    color: "text-accent",
  },
  {
    icon: Shield,
    title: "Copyright Safe",
    description: "Proven methods to avoid copyright strikes and monetization issues.",
    color: "text-primary",
  },
]

export default function WhyWorksSection() {
  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Who This Is For</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Perfect for creators who want to automate, earn more, and keep their privacy
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {problems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -8 }}
              >
                <Card className="glass p-8 h-full hover:glow-red transition-all duration-300 flex flex-col">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`text-6xl mb-4 ${item.color}`}
                  >
                    <Icon className="w-16 h-16" />
                  </motion.div>
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground flex-grow">{item.description}</p>
                </Card>
              </motion.div>
            )
          })}
        </div>

        {/* Not For Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold mb-6 text-muted-foreground">This Is NOT For:</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Lazy People", "Shortcut Seekers", "Non-Committed Individuals"].map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="px-6 py-3 rounded-full bg-primary/10 border border-primary/30 text-foreground"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
