"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"

const studentStories = [
  {
    name: "Ahmed Hassan",
    earnings: "$15,000",
    timeframe: "In 90 Days",
    content:
      "This course completely changed my perspective. Started with zero experience and now managing 3 profitable channels!",
    image: "👨‍💻",
    color: "from-primary/20 to-accent/20",
  },
  {
    name: "Sara Khan",
    earnings: "$8,000/month",
    timeframe: "5 Channels",
    content:
      "Never thought I could run multiple channels faceless. The system is incredibly powerful and well-structured.",
    image: "👩‍💼",
    color: "from-accent/20 to-primary/20",
  },
  {
    name: "Mike Williams",
    earnings: "$25,000/month",
    timeframe: "2 Channels",
    content:
      "The algorithm hacking module alone is worth 10x the course price. Highly recommend to anyone serious about YouTube!",
    image: "👨‍🔬",
    color: "from-primary/20 to-secondary/20",
  },
  {
    name: "Priya Patel",
    earnings: "$12,500",
    timeframe: "First Month",
    content: "I was skeptical but the results are incredible. My first channel hit 50K subscribers in just 2 months!",
    image: "👩‍🎓",
    color: "from-secondary/20 to-accent/20",
  },
  {
    name: "James Chen",
    earnings: "$20,000",
    timeframe: "Quarter 1",
    content:
      "The mentorship support is unmatched. Having direct access to Nazakat made all the difference in my success.",
    image: "👨‍💼",
    color: "from-primary/20 to-accent/20",
  },
  {
    name: "Linda Rodriguez",
    earnings: "$18,500/month",
    timeframe: "3 Channels",
    content:
      "Now making passive income while I sleep! The automation techniques have completely transformed my business.",
    image: "👩‍💻",
    color: "from-accent/20 to-primary/20",
  },
  {
    name: "David Thompson",
    earnings: "$10,000",
    timeframe: "60 Days",
    content: "The curriculum is comprehensive and easy to follow. Went from 0 to profitable YouTube automation expert!",
    image: "👨‍🎬",
    color: "from-primary/20 to-secondary/20",
  },
  {
    name: "Jessica Lee",
    earnings: "$16,000/month",
    timeframe: "4 Channels",
    content: "This course teaches the real strategies that actually work. No fluff, just pure actionable content.",
    image: "👩‍🚀",
    color: "from-secondary/20 to-accent/20",
  },
  {
    name: "Carlos Martinez",
    earnings: "$22,500",
    timeframe: "4 Months",
    content: "Best investment I've made. The community is supportive and everyone is crushing their goals!",
    image: "👨‍🎨",
    color: "from-accent/20 to-secondary/20",
  },
]

export default function TestimonialsSection() {
  const whatsappLink =
    "https://wa.me/923067743193?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Student Success Stories</h2>
          <p className="text-xl text-muted-foreground">Real results from students just like you</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studentStories.map((story, index) => (
            <motion.div
              key={`${story.name}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -8 }}
            >
              <Card
                className={`glass p-6 h-full hover:glow-gold transition-all duration-300 bg-gradient-to-br ${story.color} border border-white/20`}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="text-4xl mb-2">{story.image}</div>
                    <h3 className="font-bold text-lg">{story.name}</h3>
                  </div>
                  <TrendingUp className="w-6 h-6 text-accent" />
                </div>

                {/* Earnings highlight */}
                <motion.div
                  animate={{ scale: [1, 1.02, 1] }}
                  transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                  className="bg-primary/20 rounded-lg p-3 mb-4 border border-primary/30"
                >
                  <div className="text-sm text-muted-foreground mb-1">Earned</div>
                  <div className="text-2xl font-bold text-accent">{story.earnings}</div>
                  <div className="text-xs text-muted-foreground mt-1">{story.timeframe}</div>
                </motion.div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Story */}
                <p className="text-muted-foreground leading-relaxed flex-grow mb-4 italic">"{story.content}"</p>

                {/* CTA Button */}
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-accent text-accent bg-accent/5 hover:bg-accent/15"
                  >
                    Chat on WhatsApp
                  </Button>
                </a>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground mb-6">
            These are just a few of the many students achieving incredible results. You could be next!
          </p>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg h-14 px-10"
            >
              Join Our Success Stories
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
