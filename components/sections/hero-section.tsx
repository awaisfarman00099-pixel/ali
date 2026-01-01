"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function HeroSection() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const badges = ["52+ Hours Training", "USA / UK RPM Focus", "100% Mentorship Support"]

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-background flex items-center justify-center pt-20 pb-20">
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 -right-40 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 -left-40 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-12">
          {/* Trust Badges Row */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap gap-4 justify-center items-center"
          >
            {badges.map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2 px-4 py-2 rounded-full glass"
              >
                <CheckCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium text-foreground">{badge}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Power Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-balance">
              Build a YouTube Automation{" "}
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Empire
              </span>
              <br />
              <span className="text-muted-foreground">Without Showing Your Face or Voice</span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-xl sm:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto"
            >
              2026 AI + Automation System for Dollar Income
            </motion.p>
          </motion.div>

          {/* Full-Width Video Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full aspect-video rounded-2xl overflow-hidden group"
          >
            <div className="absolute inset-0 glass glow-red">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20" />
              <div className="absolute inset-1 border border-accent/30 rounded-xl" />
              <div className="flex items-center justify-center h-full">
                <div className="text-center space-y-4">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                    className="mx-auto w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center"
                  >
                    <div className="w-16 h-16 rounded-full border-4 border-primary border-t-accent flex items-center justify-center">
                      <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </motion.div>
                  <p className="text-lg text-muted-foreground">VSL Coming Soon</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Primary CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-10 rounded-full w-full sm:w-auto"
              >
                Enroll Now
              </Button>
            </a>

            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                variant="outline"
                className="border-2 border-accent text-accent hover:bg-accent/10 font-bold text-lg h-14 px-10 rounded-full w-full sm:w-auto bg-transparent"
              >
                Contact on WhatsApp
              </Button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
