"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronDown, Lock } from "lucide-react"

const modules = [
  {
    title: "🏛️ Module 1: The Architect Phase (Mindset & Core Research",
    description: "Foundation & Strategy",
    content: [
      "The 2026 Vision & Welcome: Digital Mafia Boss ka roadmap aur execution plan.",
      "    Fatal Mistakes: Pre-monetized channels aur VPN/IP shadow-ban warnings.",
      "    Action Plan (Time vs Money): Bootstrapper vs Investor roadmaps.",
      "    Personal Brand vs Faceless: Model selection aur scaling plans.",

      "Understanding Algorithm Metrics: 2026 math of CTR, AVD, aur RPM.",
      "Niche Selection (68+ Blueprints): High-RPM USA/UK niches ka breakdown.",
      "The Recycle 4S Formula: Search, Study, Supplement, Scaling framework.",
      "The Kipling Method (5W1H): Deep data mining aur curiosity loops.",
      "The Outlier Theory: Viral gaps dhoondna aur hijack karna (Live Research).",
      "The Truth About Competition: Interest-based gaps aur competitor weaknesses.",
      "YouTube as Digital Real Estate: Recession-free business aur passive income system.",
      "Psychology of the 'Why': Creator vs Consumer mindset aur discipline.",

    ],
  },
  {
    title: "🏛️ Module 2: The Ghost Factory (AI Production)",
    description: "Creating Content at Scale",
      content: [
"      Advanced Scripting Psychology: Word-to-word vs Bullet style.",
"      The Kipling Scripting Protocol: 5W1H se suspense paida karna.",  
"      AI Training & Prompt Engineering: ChatGPT/Poppy ko signature style mein train karna.",
"      The 30-Second Trap: Visual aur Verbal hooks ka combo.",
"      Storytelling & Manipulation: Hero vs Villain framing aur emotional waves.",
"      Google Veo 3 Cinematic Mastery: Text-to-video prompts aur camera control.",
"      HeyGen Digital Twin: Lip-sync perfection aur human touch.",
"      ElevenLabs Emotional Mapping: Voice cloning mein 'Gussa' aur 'Dard' daalna.",
"      2D Horror & Documentary Workflow: Scary Pumpkin style aur AI animation.",
"      The Pattern Interrupt Strategy: Har 5 second mein visual change aur SFX.",
"      Thumbnail Warfare: Photoshop + AI psychology aur color gaps.",
"      The 24-Hour Production Pipeline: Content automate karne ka factory system.",
    ]
  },
  {
    title: "🏛️ Module 3: The Algorithm Hacker (Growth & Virality )",
    description: "Mastering the Algorithm",
    content: [  
      "Decoding the 2026 Prediction Engine: Browse Features vs Suggested ka math.",
      "The Outlier Growth Strategy: Live data mining se viral topics hijack karna.",
      "CTR Warfare: Psychological attack title aur thumbnail par.",
      "The Retention Trap: Re-hooks aur viewer dimaag lock karne ki science.",
      "Pattern Interrupts & Visual SFX for AVD: Average View Duration 80% plus.",
      "The 4S Formula for Viral Loops: Ek viral video se 10 aur nikalne ka tareeqa.",
      "Trendjacking 2.0: AI speed se news hijacking aur prediction.",
      "The Binge-Watch Loop: Session time mastery aur viewer ko jaal mein phansana.",
      "Shorts to Long-form Synergy: Dopamine stacking aur audience funnel.",
      "Analytics Decoding: YouTube Studio ke 'Hidden Metrics' parhna.",
      "International Localization: Pakistan se USA/UK/Germany target karna (HeyGen Dubbing).",
      "Exponential Scaling: Portfolio management (1 to 10 channels).",
    ],
  },
  {
    title: "🚀 Module 4: The Execution Vault (The 'Secret Warfare' Edition)",
    description: "Deployment & Management",
    content: [
          "Framework #1: Search Hijacking: Negative keywords se traffic divert karna.",

    "Framework #2: The Viral Parasite: Thumbnail/Hook data chori kar ke upgrade karna.",
      "Framework #3: The Dopamine Trap: Infinite loop shorts manipulation.",
      "Framework #4: 2D Horror (Anxiety Stacking): Low-frequency sound warfare.",
      "Framework #5: AI Documentary (Manipulation): Comment section mein 'Ladhayi' karwana.",
      "Framework #6: Synthetic Charisma: HeyGen authority hacks (Luxury backgrounds).",
      "Metadata Warfare: Intent cloaking aur algorithm traps.",
      "The Tier-1 Hijack: Cultural cloaking (USA slang aur culture fit).",
      "The 33 Videos Stress Test: Data killing aur channel reboot system.",
      "Optimal Scheduling: USA state-wise peak targetting.",
      "VOD Pumping: Shorts se long-form ko 'Shock' dena.",
      "The Recycle 4S Live Execution: Real-time production workflow.",
      "Copyright Fair-Use Exploitation: Visual masking aur 5-second rule hacks.",
      "The Hybrid Monetization Execution: Invisible affiliate hooks.",
    ],
  },
  {
    title: "💰 Module 5: The Money Matrix & Scaling (Ganda Sach Edition)",
    description: "Monetization Strategies",
    content: [
        "RPM Hacking: Wealth keywords se high-ticket ads trigger karna.",
        "Invisible Selling: Psychological affiliate funnels script ke andar.",
      "The AI Guy Model: Digital assets, E-books, aur Paid Cults.",
      "The Sweatshop Model: Labor arbitrage ($50 production vs $1000 sale).",
      "Building the A-Team: Experts hire aur manage karne ka system.",
      "The Hands-Off CEO: Trello/Asana autopilot pipeline.",
      "Proxy & IP Warfare: Dedicated Residential Proxies aur VPS hacks.",
      "Shock Therapy: Dead channels ko 'Nuke' kar ke revive karna.",
      "Analytics Window Dressing: Channel flipping se pehle graphs 'Sajana.'",
      "The $50,000 Exit: Empire Flippers/Flippa par asset bechna.",
      "Portfolio Theory: 1 to 10 channels ka risk diversification.",
      "The Agency Model: Doosre YouTubers ko service bechna ($2000 retainer).",
      "Selling Services Agency: Scripting aur production agency (Off-platform).",
      "Quality vs Quantity: 2026 final verdict aur ROI math.",
      "The CEO Mindset: Burnout aur chaos management.",
    ],
  },
  {
    title: "🛡️ Module 6: The War Zone (Safety, Mistakes & Action Plan)",
    description: "Advanced Tactics",
    content: [
        " The Pre-Monetized Channel Scam: Device ID tracking aur history traps.",
      "VPN vs Proxy Warfare: Anti-detect browsers ka deadly combo.",
      "The Niche-Switching Disaster: Trust score aur pivot protocol.",
      "Reused Content & AI Voice 'Jhol': Breath sounds aur background hiss hacks.",
      "The 5-Second Rule: Audio pitching aur visual stealth.",
      "Title & Thumbnail Silent Killers: Click-Gap aur shadow-ban fixes.",
      "The Outsourcing Nightmare: Team security aur permission protocols.",
      "Shock Therapy Live: External traffic injection se channel jagana.",
      "The 'No Money' Action Plan: Bootstrapping from $0 to $1,000.",
      "The 'No Time' Action Plan: Investing and Autopilot for owners.",
      "The 33 Videos Consistency Shield: Evaluation period ko khatam karna.",
      "Analytics Performance Hijacking: Visual pattern interrupts fit karna.",
      "Metadata Strategy: USA prime-time trigger math.",
      "Selling Services: Premium agency outreach scripts.",
      "The 12-Month Empire Roadmap: Graduation aur Digital Mafia Boss retirement.",
      ],
  },
]

export default function CurriculumSection() {
  const [expanded, setExpanded] = useState<number | null>(0)
  const [locked, setLocked] = useState<Set<number>>(new Set())

  const whatsappLink =
    "https://wa.me/923067743193?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  const toggleLock = (index: number) => {
    const newLocked = new Set(locked)
    if (newLocked.has(index)) {
      newLocked.delete(index)
    } else {
      newLocked.add(index)
    }
    setLocked(newLocked)
  }

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
          <h2 className="text-5xl sm:text-6xl font-bold">Course Curriculum</h2>
          <p className="text-xl text-muted-foreground">6 Mega Modules to Master YouTube Automation</p>
        </motion.div>

        <div className="space-y-4">
          {modules.map((module, index) => {
            const isLocked = locked.has(index)

            return (
              <motion.div
                key={module.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card
                  className="glass p-6 hover:bg-white/15 transition-all group cursor-pointer relative overflow-hidden"
                  onClick={() => {
                    if (!isLocked) {
                      setExpanded(expanded === index ? null : index)
                    }
                  }}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <motion.h3 className="text-xl font-bold mb-1" whileHover={{ x: 4 }}>
                        {module.title}
                      </motion.h3>
                      <p className="text-sm text-muted-foreground">{module.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === index && !isLocked ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-center gap-2"
                    >
                      {isLocked && <Lock className="w-5 h-5 text-primary flex-shrink-0" />}
                      {!isLocked && <ChevronDown className="w-5 h-5 text-primary flex-shrink-0" />}
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {isLocked && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/40 backdrop-blur-sm rounded-lg flex items-center justify-center z-20"
                      >
                        <div className="text-center space-y-4 px-6 py-8 w-full h-full flex flex-col items-center justify-center">
                          <motion.div
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                          >
                            <Lock className="w-10 h-20 text-primary" />
                          </motion.div>
                          <div className="space-y-2">
                            <p className="text-base text-white font-semibold">Full Content Locked</p>
                            <p className="text-sm text-muted-foreground">Contact us to unlock this module</p>
                          </div>
                          <a
                            href={whatsappLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full max-w-xs mt-1 mb-33"
                          >
                            <Button className="bg-accent hover:bg-accent/90 text-black font-semibold px-6 py-2 w-full text-sm">
                              Chat on WhatsApp
                            </Button>
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {expanded === index && !isLocked && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="mt-6 pt-6 border-t border-white/10"
                      >
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {module.content.map((item) => (
                            <motion.li
                              key={item}
                              initial={{ opacity: 0, x: -10 }}
                              animate={{ opacity: 1, x: 0 }}
                              className="flex items-start space-x-3"
                            >
                              <span className="text-accent text-lg mt-0.5 flex-shrink-0">✓</span>
                              <span className="text-muted-foreground blur-sm">{item}</span>
                            </motion.li>
                          ))}
                        </ul>

                        {/* Lock/Unlock button */}
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="mt-6 pt-6 border-t border-white/10 flex justify-center"
                        >
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={(e) => {
                              e.stopPropagation()
                              toggleLock(index)
                            }}
                            className="border-primary/50 text-primary hover:bg-primary/10"
                          >
                            <Lock className="w-4 h-4 mr-2" />
                            Lock Content
                          </Button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
