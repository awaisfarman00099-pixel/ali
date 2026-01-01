"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Star } from "lucide-react"

export default function PricingSection() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const automationPackages = [
    {
      name: "The Ghost Starter",
      price: "Rs. 1,45,000",
      tagline: "Beginners ke liye best",
      badge: null,
      features: [
        "Complete Channel Setup",
        "2 Months Management",
        "Content: Monthly 15 Shorts + 4 Long Videos",
        "Stock Footage + AI Voice",
      ],
      color: "from-primary/20 to-accent/20",
    },
    {
      name: "The Storyteller",
      price: "Rs. 2,85,000",
      tagline: "Horror aur Story Channels ke liye",
      badge: "Best Seller",
      features: [
        "Premium Branding",
        "2 Months Management",
        "Content: Monthly 8 Animated Videos",
        "2D Animation + Characters + Human-like Voice",
      ],
      color: "from-accent/20 to-primary/20",
    },
    {
      name: "The Monopoly",
      price: "Rs. 5,75,000",
      tagline: "Investors ke liye jo scale karna chahte hain",
      badge: "VIP Investor",
      features: [
        "High-End Setup & Strategy",
        "2 Months Management",
        "Content: Monthly 12 Premium Videos",
        "3D Intros + Aggressive Growth Plan",
      ],
      color: "from-primary/20 to-secondary/20",
    },
  ]

  const videoPackages = [
    {
      name: "2D Ghost Factory",
      subtitle: "Full Video Package",
      description: "For Horror Stories, Moral Stories, Documentaries",
      price: "Rs. 6,000",
      priceNote: "Per Video (Standard Length: 5 se 8 Minute tak)",
      includes: [
        "Script: Complete suspense story (AI + Manual Tweaks)",
        "Voiceover: Premium AI Human-Like Voice (Male/Female)",
        "Visuals: 2D Animation (Characters, Movement, Backgrounds)",
        "Thumbnail: Click-Bait Thumbnail FREE (Bonus)",
      ],
      note: "Client Khush: Usay lagega Rs. 6,000 mein Script, Voice, Editing, aur Thumbnail sab mil raha hai. Bahar se karwaye to 10-15k lag jatay hain.",
    },
    {
      name: "The 3D Reality Forge",
      subtitle: "Full Videos",
      description: "Best for 3D Horror Stories, Funny Skits, Kids Content",
      price: "Rs. 10,000",
      priceNote: "Per Video (Standard Length: 5 se 6 Minute)",
      includes: [
        "Cinematic 3D Visuals: (iClone ya Blender ke environments)",
        "Custom Characters: (Client ki story ke mutabiq 3D characters)",
        "Camera Angles: (Movie jese camera movements)",
        "Full Audio: (Script + AI Voice + 3D Sound Effects)",
      ],
      note: null,
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-card/20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 -right-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* YouTube Automation Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">YouTube Automation Packages</h2>
          <p className="text-xl text-muted-foreground">
            Setup + 2 Months Management (Is mein Channel Setup, Branding, aur pehle 2 mahinay ka Content/Management shamil hai)
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {automationPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -8 }}
            >
              <Card
                className={`glass p-8 h-full hover:glow-gold transition-all duration-300 bg-gradient-to-br ${pkg.color} border border-white/20 relative ${
                  pkg.badge ? "ring-2 ring-accent/50" : ""
                }`}
              >
                {pkg.badge && (
                  <div className="absolute -top-3 right-4 bg-accent text-black px-4 py-1 rounded-full text-xs font-bold">
                    {pkg.badge}
                  </div>
                )}

                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.tagline}</p>
                    <div className="text-4xl font-bold text-accent">{pkg.price}</div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    {pkg.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button
                      className={`w-full ${
                        pkg.badge
                          ? "bg-accent hover:bg-accent/90 text-black"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      } font-bold`}
                    >
                      Get Started
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Video Packages Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-5xl sm:text-6xl font-bold">Video Production Services</h2>
          <p className="text-xl text-muted-foreground">Premium video packages for your content needs</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {videoPackages.map((pkg, index) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ translateY: -8 }}
            >
              <Card className="glass p-8 h-full hover:glow-gold transition-all duration-300 border border-white/20">
                <div className="space-y-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
                    <p className="text-sm text-accent font-semibold mb-2">{pkg.subtitle}</p>
                    <p className="text-sm text-muted-foreground mb-4">{pkg.description}</p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-accent">{pkg.price}</span>
                      <span className="text-sm text-muted-foreground">{pkg.priceNote}</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-4 border-t border-white/10">
                    <p className="text-sm font-semibold text-muted-foreground mb-2">
                      Is {pkg.price} mein Client ko kya milega?
                    </p>
                    {pkg.includes.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>

                  {pkg.note && (
                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <p className="text-sm text-muted-foreground italic">{pkg.note}</p>
                    </div>
                  )}

                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-bold">
                      Order Now
                    </Button>
                  </a>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
