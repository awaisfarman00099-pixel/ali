"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function PricingSection() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const features = [
    "52+ Hours of Training",
    "6 Power Modules",
    "AI & Animation Tools",
    "Lifetime Access",
    "100% Mentorship Support",
    "Private Community",
    "30-Day Money-Back Guarantee",
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Limited Time Offer</h2>
          <p className="text-xl text-muted-foreground">Secure your spot before seats run out</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <Card className="glass p-12 text-center space-y-8 glow-red border-accent/20">
            <motion.div
              animate={{ rotate: -3, y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Number.POSITIVE_INFINITY }}
              className="absolute -top-6 right-8 bg-primary text-primary-foreground px-6 py-2 rounded-full text-sm font-bold shadow-lg"
            >
              ⚡ Limited Seats Available
            </motion.div>

            <div className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center justify-center gap-4">
                  <span className="text-4xl font-bold line-through text-muted-foreground">$997</span>
                  <span className="text-sm bg-primary/20 text-primary px-4 py-2 rounded-full font-semibold">
                    Original Price
                  </span>
                </div>

                <motion.div
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="space-y-2"
                >
                  <div className="text-6xl sm:text-7xl font-bold text-transparent bg-gradient-to-r from-primary via-accent to-primary bg-clip-text">
                    50% OFF
                  </div>
                  <p className="text-3xl font-bold text-accent">Now Just $498</p>
                </motion.div>

                <p className="text-lg text-muted-foreground">
                  Access all 6 modules, premium tools, and lifetime support
                </p>
              </div>

              {/* Features List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 pb-4 border-y border-white/10">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-sm"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span>{feature}</span>
                  </motion.div>
                ))}
              </div>

              <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="block">
                  <Button
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14"
                  >
                    Start Your Journey – Contact on WhatsApp
                  </Button>
                </a>
              </motion.div>

              <p className="text-sm text-muted-foreground">📱 Click the button to start on WhatsApp</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
