"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How fast can I start earning?",
    answer:
      "Most students see their first earnings within 30-60 days of implementing the strategies taught in the course. The timeline depends on your dedication and how quickly you execute the system.",
  },
  {
    question: "Do I need to show my face or voice?",
    answer:
      "Absolutely not! The entire course is built around creating faceless, voiceless YouTube channels using AI, automation, and proven editing techniques. You'll never need to be on camera.",
  },
  {
    question: "What countries can I target?",
    answer:
      "The course primarily focuses on USA and UK traffic, which have the highest CPM and RPM rates globally. However, you can adapt the strategies for any English-speaking market.",
  },
  {
    question: "Can I access the course on mobile?",
    answer:
      "Yes! All course materials are fully accessible on mobile devices, tablets, and computers. Learn at your own pace, wherever you are.",
  },
  {
    question: "Is there a money-back guarantee?",
    answer:
      "Yes! We offer a 30-day money-back guarantee if you're not satisfied. We stand behind the quality of our training 100%.",
  },
  {
    question: "How long do I have access to the course?",
    answer:
      "Lifetime access! Once you enroll, you get unlimited access to all current and future course updates. This is a one-time investment.",
  },
]

export default function FAQSection() {
  const [expanded, setExpanded] = useState<number | null>(null)

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
          <h2 className="text-5xl sm:text-6xl font-bold">Frequently Asked Questions</h2>
          <p className="text-xl text-muted-foreground">Everything you need to know about the course</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <Card
                className="glass p-6 cursor-pointer hover:bg-white/15 transition-all group"
                onClick={() => setExpanded(expanded === index ? null : index)}
              >
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-balance group-hover:text-primary transition-colors">
                    {faq.question}
                  </h3>
                  <motion.div animate={{ rotate: expanded === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                  </motion.div>
                </div>

                <AnimatePresence>
                  {expanded === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-4 pt-4 border-t border-white/10"
                    >
                      <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
