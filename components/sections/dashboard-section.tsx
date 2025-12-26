"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Lock } from "lucide-react"

export default function DashboardSection() {
  const whatsappLink =
    "https://wa.me/923067743193?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const dashboardFeatures = [
    "All 6 modules organized by progression",
    "Video lessons with transcripts",
    "Progress tracking & certificates",
    "Resource downloads & tools",
    "Private community access",
    "Live mentorship sessions",
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          {/* Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl blur-2xl" />
            <Card className="glass p-8 overflow-hidden relative z-10">
              <div className="space-y-6">
                {/* Header */}
                <div className="flex justify-between items-center">
                  <div className="text-sm font-semibold text-muted-foreground">Your Learning Dashboard</div>
                  <div className="flex gap-2">
                    {[1, 2, 3].map((i) => (
                      <motion.div
                        key={i}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, delay: i * 0.2, repeat: Number.POSITIVE_INFINITY }}
                        className="w-2 h-2 rounded-full bg-primary"
                      />
                    ))}
                  </div>
                </div>

                {/* Module list simulation */}
                <div className="space-y-4">
                  {["Architect Phase", "Ghost Factory", "Algorithm Hacker"].map((module, index) => (
                    <motion.div
                      key={module}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <div className="flex-1">
                        <p className="text-sm font-medium">{module}</p>
                        <div className="h-1 bg-white/10 rounded-full mt-2 w-full overflow-hidden">
                          <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: `${(index + 1) * 30}%` }}
                            transition={{ duration: 1, delay: 0.2 }}
                            viewport={{ once: true }}
                            className="h-full bg-accent"
                          />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* CTA Overlay */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute inset-0 rounded-2xl bg-black/40 backdrop-blur-sm flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
                >
                  <div className="text-center space-y-4">
                    <Lock className="w-12 h-12 text-primary mx-auto" />
                    <p className="text-sm text-white font-semibold">Unlock Your Dashboard</p>
                  </div>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-5xl sm:text-6xl font-bold mb-4">Inside Your Dashboard</h2>
              <p className="text-xl text-muted-foreground">
                Organized lessons, tracking tools, community access, and exclusive resources all in one place
              </p>
            </div>

            <div className="space-y-4">
              {dashboardFeatures.map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4"
                >
                  <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                  <p className="text-lg">{feature}</p>
                </motion.div>
              ))}
            </div>

            <motion.div whileHover={{ scale: 1.05 }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-8"
                >
                  Get Access Now
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
