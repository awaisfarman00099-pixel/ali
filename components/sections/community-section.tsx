"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

const communityMessages = [
  { author: "Admin", message: "🎯 New scaling strategy just uploaded!", role: "admin" },
  { author: "User123", message: "Just hit 100k subscribers! 🚀", role: "user" },
  { author: "Admin", message: "Amazing! Keep crushing those goals!", role: "admin" },
  { author: "Sarah_YT", message: "Made $5K this month from one channel", role: "user" },
  { author: "Admin", message: "Incredible! Share your wins here!", role: "admin" },
  { author: "Mike_Content", message: "Algorithm hacking is a game-changer", role: "user" },
]

export default function CommunitySection() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20joining%20the%20community!"

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background overflow-hidden">
      <div className="absolute left-0 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Live Community Buzz</h2>
          <p className="text-xl text-muted-foreground">
            Active students sharing wins daily – real-time community engagement
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
            className="inline-block px-4 py-2 rounded-full bg-primary/20 border border-primary/30"
          >
            <span className="text-sm text-primary font-semibold">● Live Activity</span>
          </motion.div>
        </motion.div>

        <div className="space-y-4 max-h-96 overflow-hidden relative mb-8">
          <motion.div
            animate={{ y: [0, -200, -400, 0] }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="space-y-4"
          >
            {[...communityMessages, ...communityMessages, ...communityMessages].map((msg, index) => (
              <motion.div
                key={`${msg.author}-${index}`}
                className={`flex ${msg.role === "admin" ? "justify-start" : "justify-end"}`}
              >
                <Card
                  className={`glass p-4 max-w-xs ${
                    msg.role === "admin" ? "bg-primary/15 border-primary/30" : "bg-accent/15 border-accent/30"
                  } hover:glow-gold transition-all`}
                >
                  <div className="text-sm font-semibold mb-2 flex items-center gap-2">
                    {msg.role === "admin" ? (
                      <>
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        <span className="text-primary">Ale</span>
                      </>
                    ) : (
                      <>
                        <span className="w-2 h-2 rounded-full bg-accent" />
                        <span className="text-foreground">{msg.author}</span>
                      </>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">{msg.message}</p>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          {/* Fade effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-6"
        >
          <p className="text-muted-foreground text-sm">Join 1000+ students in our active community</p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                size="lg"
                className="bg-[#25D366] hover:bg-[#20BA5A] text-white font-bold text-lg h-14 px-10 flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Join on WhatsApp
              </Button>
            </motion.div>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
