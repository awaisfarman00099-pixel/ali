"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Zap } from "lucide-react"

export default function HeaderTimerSection() {
  const [timeLeft, setTimeLeft] = useState<{
    hours: number
    minutes: number
    seconds: number
  }>({ hours: 4, minutes: 0, seconds: 0 })

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev

        if (seconds > 0) {
          seconds--
        } else if (minutes > 0) {
          minutes--
          seconds = 59
        } else if (hours > 0) {
          hours--
          minutes = 59
          seconds = 59
        } else {
          return { hours: 4, minutes: 0, seconds: 0 }
        }

        return { hours, minutes, seconds }
      })
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-background via-primary/15 to-background border-b border-primary/50 backdrop-blur-xl shadow-2xl shadow-primary/20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-6">
          {/* Left side - Icon and text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center sm:text-left flex-1"
          >
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              >
                <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
              </motion.div>
              <span className="text-xs sm:text-sm font-semibold text-primary uppercase tracking-wider">
                Limited Time Offer
              </span>
            </div>
            <h3 className="text-base sm:text-xl font-bold text-balance text-white leading-snug">
              Learn YouTube Automation Today or Regret <span className="text-primary">6 Months Later</span>
              <span className="text-primary">!</span>
            </h3>
          </motion.div>

          {/* Right side - Timer and CTA */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto justify-center sm:justify-end"
          >
            {/* Timer with improved styling */}
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
              className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-gradient-to-r from-primary/30 to-primary/10 border border-primary/60 backdrop-blur-md shadow-lg shadow-primary/20"
            >
              <span className="text-sm sm:text-base font-bold text-primary">
                ⏱ {String(timeLeft.hours).padStart(2, "0")}:{String(timeLeft.minutes).padStart(2, "0")}:
                {String(timeLeft.seconds).padStart(2, "0")}
              </span>
              <span className="text-xs text-primary font-semibold hidden sm:inline">Left</span>
            </motion.div>

            {/* CTA Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-bold whitespace-nowrap shadow-lg shadow-primary/40 transition-all">
                  Enroll Now →
                </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}
