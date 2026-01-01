"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, TrendingUp } from "lucide-react"

const studentStories = [
  {
    name: "Kamran Bhatti",
    earnings: "$500/month",
    timeframe: "In 90 Days",
    content:
"Main Saudi mein job karta hu. Maine pehlay 2 bar Pakistan mein paisay bhej kar dhoka khaya hai. Bohat darr ke Ale bhai ki team ko 'Starter Package' ke paisay bheje thay. Lekin yaar, pehli baar kisi ne waqt par kaam deliver kiya. Channel setup, logo, banner... sab professional. Jo overseas Pakistani invest karna chahte hain, ye banda trustworthy hai. --🏠 Kamran Bhatti, Riyadh (KSA)🏠",

    image: "/image/16.jpeg",
    color: "from-primary/20 to-accent/20",
  },
  {
    name: "Malik Zeeshan",
    earnings: "$800/month",
    timeframe: "5 Channels",
    content:
      "Property bikwanay ke liye YouTube channel chal gaya. Mera Real Estate ka kaam hai. Ale bhai ki team ne mujhe kaha ke property ki videos inke style mein banwain. Inhon ne jo Drone shots ki editing aur Script likhi, us se mujhe direct leads aana shuru ho gayin. Maine sirf views ke liye channel banwaya tha, lekin yahan to business barh gaya. Highly Recommended! —-🏠  Malik Zeeshan, Property Dealer (Lahore)🏠",
    image: "/image/17.jpeg",
    color: "from-accent/20 to-primary/20",
  },
  {
    name: "Ahsan Mir",
    earnings: "$700/month",
    timeframe: "2 Channels",
    content:
      "Test ke liye 1 video di thi, ab pura channel inke paas hai. Mujhe laga ye bhi baqi agencies ki tarah hongay jo template use karte hain. Maine check karne ke liye sirf 1 Video ka order diya. Jab output aya to main heran reh gaya—Editing, Sound Design, aur Storytelling bilkul TV Documentary jesi thi. Usi waqt maine 'Empire Builder' package sign kar liya. —-🏠 Ahsan Mir, Tech YouTuber 🏠",
    image: "/image/18.jpeg",
    color: "from-primary/20 to-secondary/20",
  },
  {
    name: "Sameer Gaming",
    earnings: "$600/month",
    timeframe: "First Month",
    content: "Gaming videos mein wo 'Funny' element daal diya. Meri gaming videos bohat boring hoti thin. Ale ki team ne jo memes aur sound effects add kiye, meri Audience Retention 30% se 80% par chali gayi. Ab log comment karte hain ke 'Bhai editor ko salary double do'. Best service for gamers! -—🏠 Sameer Gaming, Karachi 🏠",
    image: "/image/19.jpeg",
    color: "from-secondary/20 to-accent/20",
  },
  {
    name: "Hafiz Abdullah",
    earnings: "$900/month",
    timeframe: "Quarter 1",
    content:
      "Waqiyat ko zinda kar diya. Main Islamic stories banata hu. Pehlay sirf tasweeren lagata tha. Phir maine '2D Ghost Factory' se animation karwai. Inhon ne jangon (battles) ke scenes aur characters ko jis tarah animate kiya, wo bilkul respectful aur engaging tha. Meri videos ab viral ja rahi hain kyunke visuals strong hain.—-🏠 Hafiz Abdullah, Content Creator 🏠",
    image: "/image/20.jpeg",
    color: "from-primary/20 to-accent/20",
  },
  {
    name: "Rao Awais",
    earnings: "$785/month",
    timeframe: "3 Channels",
    content:
      "Silicon Valley wali vibe di hai.Humein apni software company ke liye ek modern 3D Intro chahiye tha. Local designers samajh nahi pa rahe thay. Ale bhai ki 'Reality Forge' team ne pehli try mein hi perfect bana diya. Bohot sleek aur professional kaam hai.TechSolutions Ltd",
    image: "/image/21.jpeg",
    color: "from-accent/20 to-primary/20",
  },
  {
    name: "Omer R",
    earnings: "$950/month",
    timeframe: "60 Days",
    content: "Sales double ho gayin is Ad ke baad. Humne apne Shoe Brand ke liye 3D ad banwaya. Jese joota hawa mein ghoomta hai aur lighting parti hai... wo shot dekh kar customer foran click karta hai. Facebook Ads par humara ROAS (Return on Ad Spend) barh gaya hai. Thank you Ale bhai for this quality.",
    image: "/image/22.jpeg",
    color: "from-primary/20 to-secondary/20",
  },
  {
    name: "Faisal Khan",
    earnings: "$1000/month",
    timeframe: "4 Channels",
    content: "Suspense create karna koi in se seekhay.Crime stories mein atmosphere banana parta hai. Inki team ne jo dark visuals aur background music use kiya, us ne video mein jaan daal di. Client service bhi bohat achi hai, jo changes maine kahe wo foran kar diye. —-🏠 Faisal Khan, Crime Alert Channel 🏠",
    image: "/image/8.jpeg",
    color: "from-secondary/20 to-accent/20",
  },
  {
    name: "Mrs. Nida",
    earnings: "$700/month",
    timeframe: "4 Months",
    content: "Bachon ke liye best cartoons banaye.Kids content mein competition bohat hai. Mujhe unique look chahiye thi. Ale bhai ki team ne Cartoon Animator use kar ke jo characters banaye, wo bilkul TV quality ke thay. Ab bachay meri videos baar baar dekhte hain. Quality 10/10 hai.",
    image: "/image/9.jpeg",
    color: "from-accent/20 to-secondary/20",
  },
]

export default function TestimonialsSection() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

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
          <h2 className="text-5xl sm:text-6xl font-bold">The Client Vault</h2>
          <p className="text-xl text-muted-foreground">We don't sell services. We build assets that pay you while you sleep.</p>
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
                    <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover mb-2" />
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
