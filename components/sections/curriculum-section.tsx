"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Lock } from "lucide-react"

const modules = [
  {
    title: "Architect Phase",
    description: "Foundation & Strategy",
    content: [
      "YouTube algorithm fundamentals",
      "Niche selection strategies",
      "Audience research methods",
      "Content planning framework",
      "Monetization prerequisites",
    ],
  },
  {
    title: "Ghost Factory (AI Production)",
    description: "Creating Content at Scale",
    content: [
      "AI video generation tools (Synthesia, HeyGen, D-ID)",
      "Script writing automation",
      "Thumbnail creation with AI",
      "Bulk content production workflow",
      "Video editing automation",
    ],
  },
  {
    title: "Algorithm Hacker",
    description: "Mastering the Algorithm",
    content: [
      "Algorithm manipulation tactics",
      "CTR optimization formulas",
      "Watch time strategies",
      "Viral content triggers",
      "Retention curve mastery",
    ],
  },
  {
    title: "Execution Vault",
    description: "Deployment & Management",
    content: [
      "Channel setup & optimization",
      "Batch uploading strategies",
      "Community management systems",
      "Channel scaling automation",
      "Team building for automation",
    ],
  },
  {
    title: "Money Matrix",
    description: "Monetization Strategies",
    content: [
      "Multiple revenue stream setup",
      "AdSense optimization & appeals",
      "Sponsorship landing & pitching",
      "Affiliate marketing integration",
      "Digital product creation",
    ],
  },
  {
    title: "War Zone",
    description: "Advanced Tactics",
    content: [
      "Competition analysis framework",
      "Trend hijacking methods",
      "Rapid scaling techniques",
      "Crisis management & recovery",
      "Advanced SEO & metadata",
    ],
  },
]

export default function CurriculumSection() {
  const [expanded, setExpanded] = useState<number | null>(0)
  const [locked, setLocked] = useState<Set<number>>(new Set())

  const whatsappLink =
    "https://wa.me/923067743193?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const toggleLock = (index: number) => {
    const newLocked = new Set(locked)
    if (newLocked.has(index)) {
      newLocked.delete(index)
    } else {
      newLocked.add(index)
    }
    setLocked(newLocked)
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Course Curriculum</h2>
          <p className="text-xl text-muted-foreground">6 Mega Modules to Master YouTube Automation</p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => {
            const isLocked = locked.has(index)

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card
                  className="glass p-6 hover:bg-white/15 transition-all group cursor-pointer relative overflow-hidden"
                  onClick={() => {
                    if (!isLocked) {
                      setExpanded(expanded === index ? null : index)
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <motion.h3 className="text-xl font-bold mb-1" whileHover={{ x: 4 }}>
                        {module.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === index && !isLocked ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      {isLocked && <Lock className="w-5 h-5 text-primary flex-shrink-0" />}
                      {!isLocked && <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isLocked && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/40 backdrop-blur-sm rounded-lg flex items-center justify-center z-20"
                      >
                        <div className="text-center space-y-4 px-6 py-8 w-full h-full flex flex-col items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Lock className="w-10 h-20 text-primary" />
                          </motion.div>
                          <div className="space-y-2">
                            <p className="text-base text-white font-semibold">Full Content Locked</p>
                            <p className="text-sm text-muted-foreground">Contact us to unlock this module</p>
                          </div>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs mt-1 mb-33"
                          >
                            <Button className="bg-accent hover:bg-accent/90 text-black font-semibold px-6 py-2 w-full text-sm">
                              Chat on WhatsApp
                            </Button>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {expanded === index && !isLocked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {module.content.map((item) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="text-accent text-lg mt-0.5 flex-shrink-0">✓</span>
                              <span className="text-muted-foreground">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Lock/Unlock button */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-6 pt-6 border-t border-white/10 flex justify-center"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLock(index)
                            }}
                            className="border-primary/50 text-primary hover:bg-primary/10"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            Lock Content
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
