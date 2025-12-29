"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"

const allReviews = [
  // Page 1
  {
    name: "Ahmed Ali",
    role: "YouTube Creator",
    rating: 5,
    review: "Yeh course bohot hi useful hai! Strategies clear hain aur kaam karti hain. Maine pehla $1000 sirf 30 din mein kamaya.",
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
  {
    name: "Fatima Khan",
    role: "Digital Marketer",
    rating: 5,
    review: "Sab se acha investment jo maine kiya. Mentorship support unmatched hai. YouTube automation mein serious logon ko recommend karungi.",
    image: "https://randomuser.me/api/portraits/women/11.jpg",
  },
  {
    name: "Hassan Raza",
    role: "Entrepreneur",
    rating: 5,
    review: "Aakhirkar, ek course jo apne promises deliver karta hai! Algorithm hacking module hi 10x price ke worth hai. Ab $2K/month kama raha hoon.",
    image: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Ayesha Malik",
    role: "Content Creator",
    rating: 5,
    review: "Shuru mein thoda skeptical tha, lekin results khud bolte hain. Mera pehla channel 2 mahine mein 50K subscribers par pohanch gaya. Amazing!",
    image: "https://randomuser.me/api/portraits/women/13.jpg",
  },
  {
    name: "Bilal Shah",
    role: "Business Owner",
    rating: 5,
    review: "Outstanding content aur support. Community bohot active aur helpful hai. Yeh asli deal hai.",
    image: "https://randomuser.me/api/portraits/men/14.jpg",
  },
  {
    name: "Sana Qureshi",
    role: "Freelancer",
    rating: 5,
    review: "Automation techniques ne mera business model badal diya. Ab main passive income kamata hoon jab main sota hoon!",
    image: "https://randomuser.me/api/portraits/women/15.jpg",
  },
  {
    name: "Usman Iqbal",
    role: "Software Developer",
    rating: 5,
    review: "Technical insan hone ke nate, detailed explanations bohot achi lagi. AI tools integration brilliant hai. Har penny ke worth.",
    image: "https://randomuser.me/api/portraits/men/16.jpg",
  },
  {
    name: "Mariam Saeed",
    role: "Marketing Manager",
    rating: 5,
    review: "Best course investment! 3 mahine mein income double ho gayi. Support team bohot responsive aur helpful hai.",
    image: "https://randomuser.me/api/portraits/women/17.jpg",
  },
  {
    name: "Omar Farooq",
    role: "Content Strategist",
    rating: 5,
    review: "Course ne meri expectations exceed kar di. Practical strategies foran kaam karti hain. 5 doston ko already recommend kiya!",
    image: "https://randomuser.me/api/portraits/men/18.jpg",
  },

  // Page 2
  {
    name: "Hina Riaz",
    role: "Video Editor",
    rating: 5,
    review: "Video production automation section ne meri life change kar di. Ab main 10x zyada content half time mein create karti hoon.",
    image: "https://randomuser.me/api/portraits/women/19.jpg",
  },
  {
    name: "Ali Hassan",
    role: "Entrepreneur",
    rating: 4,
    review: "Excellent course, practical strategies ke saath. Kuch modules mein examples aur honi chahiye the, lekin overall bohot acha value hai.",
    image: "https://randomuser.me/api/portraits/men/20.jpg",
  },
  {
    name: "Sadia Khan",
    role: "Influencer",
    rating: 5,
    review: "Nazakat bohot expert hain. Unka teaching style engaging aur easy to follow hai. Jo seekha implement kar raha hoon.",
    image: "https://randomuser.me/api/portraits/women/21.jpg",
  },
  {
    name: "Fahad Malik",
    role: "Freelancer",
    rating: 5,
    review: "Incredible ROI. Dusra channel start kiya aur already revenue generate kar raha hai. Highly satisfied!",
    image: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Zoya Ahmed",
    role: "Digital Creator",
    rating: 5,
    review: "Course pure gold hai. Monetization strategies unique aur highly effective hain. Yeh saal ka best decision!",
    image: "https://randomuser.me/api/portraits/women/23.jpg",
  },
  {
    name: "Shahbaz Iqbal",
    role: "Business Analyst",
    rating: 4,
    review: "Comprehensive aur well-structured course. Kuch advanced modules thodi fast move hue, lekin overall excellent quality.",
    image: "https://randomuser.me/api/portraits/men/24.jpg",
  },
  {
    name: "Areeba Tariq",
    role: "Content Creator",
    rating: 5,
    review: "Community support amazing hai! Log genuinely ek dusre ko help kar rahe hain. Sirf network ke liye bhi worth hai.",
    image: "https://randomuser.me/api/portraits/women/25.jpg",
  },
  {
    name: "Amir Khan",
    role: "Marketing Entrepreneur",
    rating: 5,
    review: "Yeh asli deal hai. Get-rich-quick scheme nahi, lekin ek legitimate system jo kaam karta hai. Already $3K/month!",
    image: "https://randomuser.me/api/portraits/men/26.jpg",
  },
  {
    name: "Maria Shah",
    role: "Producer",
    rating: 5,
    review: "Professional, well-explained, aur incredibly valuable. Nazakat ko pata hai kya kar rahe hain. Best course ever taken!",
    image: "https://randomuser.me/api/portraits/women/27.jpg",
  },

  // Page 3
  {
    name: "Rizwan Ali",
    role: "Entrepreneur",
    rating: 5,
    review: "Techniques kaam karti hain! 2 mahine follow kiya aur already significant results dekh raha hoon. Worth every dollar.",
    image: "https://randomuser.me/api/portraits/men/28.jpg",
  },
  {
    name: "Fatima Noor",
    role: "Digital Marketer",
    rating: 5,
    review: "Outstanding course structure. Har module perfectly previous par build karta hai. Clear, concise, aur actionable.",
    image: "https://randomuser.me/api/portraits/women/29.jpg",
  },
  {
    name: "Owais Farhan",
    role: "Creator",
    rating: 4,
    review: "Great content overall. Algorithm module exceptional hai. Tools integration pe aur content chahiye tha.",
    image: "https://randomuser.me/api/portraits/men/30.jpg",
  },
  {
    name: "Nida Aslam",
    role: "Content Strategist",
    rating: 5,
    review: "Phenomenal course! Strategies cutting-edge aur implementable hain. Already results dekh raha hoon!",
    image: "https://randomuser.me/api/portraits/women/31.jpg",
  },
  {
    name: "Hassan Malik",
    role: "YouTube Strategist",
    rating: 5,
    review: "Nazakat ka expertise har lesson mein shine karta hai. Industry-leading content aur unbeatable price point.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Amina Riaz",
    role: "Freelancer",
    rating: 5,
    review: "Life-changing course! Mera passive income ab primary income hai. Nazakat ka shukriya!",
    image: "https://randomuser.me/api/portraits/women/33.jpg",
  },
  {
    name: "Yasir Tanveer",
    role: "Tech Entrepreneur",
    rating: 5,
    review: "Technical depth aur practical application perfect hai. Abhi se 2 mahine ahead hoon timeline ke.",
    image: "https://randomuser.me/api/portraits/men/34.jpg",
  },
  {
    name: "Sofia Ahmed",
    role: "Marketing Specialist",
    rating: 5,
    review: "Professional quality throughout. Har lesson ke actionable takeaways hain. Yeh hi premium course ka look hai.",
    image: "https://randomuser.me/api/portraits/women/35.jpg",
  },
  {
    name: "Tariq Mahmood",
    role: "Business Owner",
    rating: 5,
    review: "Exceptional value! Monetization strategies ne course ka 10x return de diya. Sabko recommend karunga!",
    image: "https://randomuser.me/api/portraits/men/36.jpg",
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
          <p className="text-xl text-muted-foreground">Creators Pakistan aur worldwide pe trust karte hain</p>
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
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover"/>
                    <div>
                      <h3 className="font-bold">{review.name}</h3>
                      <p className="text-xs text-muted-foreground">{review.role}</p>
                    </div>
                  </div>
                </div>

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

        <div className="text-center mt-6 text-sm text-muted-foreground">
          Page {currentPage + 1} of {totalPages}
        </div>
      </div>
    </section>
  )
}
