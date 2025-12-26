"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const allReviews = [
  // Page 1 - 9 reviews
  {
    name: "Ahmed Hassan",
    role: "YouTube Creator",
    rating: 5,
    review:
      "This course is a game-changer! The strategies are clear, actionable, and actually work. I made my first $1000 in just 30 days.",
    image: "👨",
  },
  {
    name: "Sarah Khan",
    role: "Digital Marketer",
    rating: 5,
    review:
      "The best investment I ever made. The mentorship support is unmatched. Highly recommend to anyone serious about YouTube automation.",
    image: "👩",
  },
  {
    name: "Mike Williams",
    role: "Entrepreneur",
    rating: 5,
    review:
      "Finally, a course that delivers on its promises! The algorithm hacking module alone is worth 10x the price. Already making $2K/month.",
    image: "👨",
  },
  {
    name: "Priya Patel",
    role: "Content Creator",
    rating: 5,
    review:
      "I was skeptical at first, but the results speak for themselves. My first channel hit 50K subscribers in 2 months. Amazing!",
    image: "👩",
  },
  {
    name: "James Smith",
    role: "Business Owner",
    rating: 5,
    review:
      "Outstanding content and support. The community is incredibly active and supportive. This is the real deal.",
    image: "👨",
  },
  {
    name: "Linda Johnson",
    role: "Freelancer",
    rating: 5,
    review:
      "The automation techniques taught here have changed my entire business model. Now making passive income while I sleep!",
    image: "👩",
  },
  {
    name: "David Chen",
    role: "Software Developer",
    rating: 5,
    review:
      "As a technical person, I appreciate the detailed explanations. The AI tools integration is brilliant. Worth every penny!",
    image: "👨",
  },
  {
    name: "Emma Wilson",
    role: "Marketing Manager",
    rating: 5,
    review:
      "Best course investment ever! Doubled my income within 3 months. The support team is incredibly responsive and helpful.",
    image: "👩",
  },
  {
    name: "Carlos Rodriguez",
    role: "Content Strategist",
    rating: 5,
    review:
      "This course exceeded all my expectations. The practical strategies work immediately. Already recommended to 5 friends!",
    image: "👨",
  },

  // Page 2 - 9 reviews
  {
    name: "Jessica Lee",
    role: "Video Editor",
    rating: 5,
    review:
      "The video production automation section alone changed my life. Now I create 10x more content in half the time.",
    image: "👩",
  },
  {
    name: "Omar Ibrahim",
    role: "Entrepreneur",
    rating: 4,
    review:
      "Excellent course with very practical strategies. A few modules could use more examples, but overall fantastic value.",
    image: "👨",
  },
  {
    name: "Sophie Martin",
    role: "Influencer",
    rating: 5,
    review:
      "Nazakat is a true expert. His teaching style is engaging and easy to follow. I'm already implementing everything I learned.",
    image: "👩",
  },
  {
    name: "Marcus Johnson",
    role: "Freelancer",
    rating: 5,
    review:
      "Incredible ROI on this investment. Started my second channel and it's already generating revenue. Highly satisfied!",
    image: "👨",
  },
  {
    name: "Elena Rossi",
    role: "Digital Creator",
    rating: 5,
    review:
      "This course is pure gold. The monetization strategies are unique and highly effective. Best decision I made this year!",
    image: "👩",
  },
  {
    name: "Kevin Park",
    role: "Business Analyst",
    rating: 4,
    review:
      "Very comprehensive and well-structured course. Some advanced modules moved quite fast, but overall excellent quality.",
    image: "👨",
  },
  {
    name: "Rachel Green",
    role: "Content Creator",
    rating: 5,
    review:
      "The community support is amazing! People are genuinely helping each other succeed. Worth it just for the network.",
    image: "👩",
  },
  {
    name: "Amir Khan",
    role: "Marketing Entrepreneur",
    rating: 5,
    review:
      "This is the real deal. Not a get-rich-quick scheme, but a legitimate system that works. Already at $3K/month!",
    image: "👨",
  },
  {
    name: "Victoria Stone",
    role: "Producer",
    rating: 5,
    review:
      "Professional, well-explained, and incredibly valuable. Nazakat knows what he's talking about. Best course ever taken!",
    image: "👩",
  },

  // Page 3 - 9 reviews
  {
    name: "Rajesh Kumar",
    role: "Entrepreneur",
    rating: 5,
    review:
      "The techniques work! I've been following them for 2 months and already seeing significant results. Worth every dollar.",
    image: "👨",
  },
  {
    name: "Fatima Ahmed",
    role: "Digital Marketer",
    rating: 5,
    review:
      "Outstanding course structure. Every module builds on the previous one perfectly. Clear, concise, and actionable.",
    image: "👩",
  },
  {
    name: "Lucas Silva",
    role: "Creator",
    rating: 4,
    review:
      "Great content overall. The algorithm module is exceptional. Would have loved more on specific tools integration.",
    image: "👨",
  },
  {
    name: "Natasha Ivanova",
    role: "Content Strategist",
    rating: 5,
    review:
      "Phenomenal course! The strategies are cutting-edge and actually implementable. I'm seeing results already!",
    image: "👩",
  },
  {
    name: "Hassan Malik",
    role: "YouTube Strategist",
    rating: 5,
    review:
      "Nazakat's expertise shines through every lesson. This is industry-leading content at an unbeatable price point.",
    image: "👨",
  },
  {
    name: "Amanda Brooks",
    role: "Freelancer",
    rating: 5,
    review:
      "Life-changing course! My passive income is now my primary income. Can't thank Nazakat enough for sharing this.",
    image: "👩",
  },
  {
    name: "Yuki Tanaka",
    role: "Tech Entrepreneur",
    rating: 5,
    review:
      "The technical depth combined with practical application is perfect. I'm already 2 months ahead of my timeline.",
    image: "👨",
  },
  {
    name: "Sofia Garcia",
    role: "Marketing Specialist",
    rating: 5,
    review:
      "Professional quality throughout. Every lesson has actionable takeaways. This is what a premium course looks like.",
    image: "👩",
  },
  {
    name: "Thomas Wilson",
    role: "Business Owner",
    rating: 5,
    review:
      "Exceptional value! The monetization strategies alone paid for the course 10x over. Highly recommend to everyone!",
    image: "👨",
  },
]

export default function ReviewsSection() {
  const [currentPage, setCurrentPage] = useState(0)
  const reviewsPerPage = 9
  const totalPages = 3

  const startIndex = currentPage * reviewsPerPage
  const endIndex = startIndex + reviewsPerPage
  const currentReviews = allReviews.slice(startIndex, endIndex)

  const averageRating = 4.7

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
          <h2 className="text-5xl sm:text-6xl font-bold">Student Reviews</h2>
          <div className="flex items-center justify-center gap-3">
            <div className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(averageRating) ? "fill-accent text-accent" : "text-muted-foreground"}`}
                />
              ))}
            </div>
            <span className="text-lg font-semibold text-accent">{averageRating}</span>
            <span className="text-muted-foreground">({allReviews.length} reviews)</span>
          </div>
          <p className="text-xl text-muted-foreground">Trusted by creators worldwide</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentReviews.map((review, index) => (
            <motion.div
              key={`page-${currentPage}-${index}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              whileHover={{ translateY: -4 }}
            >
              <Card className="glass p-6 h-full hover:glow-gold transition-all duration-300 flex flex-col">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{review.image}</div>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: i * 0.1 }}
                    >
                      <Star className="w-4 h-4 fill-accent text-accent" />
                    </motion.div>
                  ))}
                </div>

                {/* Review text */}
                <p className="text-muted-foreground leading-relaxed flex-grow italic">"{review.review}"</p>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center justify-center gap-4 mt-12"
        >
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => (p - 1 + totalPages) % totalPages)}
            className="border-primary/50 hover:bg-primary/10"
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          <div className="flex gap-2">
            {Array.from({ length: totalPages }).map((_, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setCurrentPage(i)}
                className={`w-10 h-10 rounded-full font-semibold transition-all ${
                  currentPage === i
                    ? "bg-primary text-primary-foreground"
                    : "bg-white/10 text-muted-foreground hover:bg-white/20"
                }`}
              >
                {i + 1}
              </motion.button>
            ))}
          </div>

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage((p) => (p + 1) % totalPages)}
            className="border-primary/50 hover:bg-primary/10"
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </motion.div>

        {/* Page indicator */}
        <div className="text-center mt-6 text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>
    </section>
  )
}
