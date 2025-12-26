"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { VideoIcon, PaletteIcon, BotIcon as RobotIcon, CameraIcon, HeadsetIcon } from "lucide-react"

const services = [
  {
    icon: VideoIcon,
    title: "YouTube Automation Setup",
    description: "Complete end-to-end channel setup and optimization",
    color: "text-primary",
  },
  {
    icon: PaletteIcon,
    title: "2D Animation Service",
    description: "Professional 2D cartoon animation production",
    color: "text-accent",
  },
  {
    icon: RobotIcon,
    title: "3D Animation Service",
    description: "High-quality 3D character animation",
    color: "text-primary",
  },
  {
    icon: RobotIcon,
    title: "AI Avatar & Voice Setup",
    description: "Realistic AI avatars and voice synthesis tools",
    color: "text-accent",
  },
  {
    icon: CameraIcon,
    title: "YouTube Shorts Automation",
    description: "Automated YouTube Shorts production at scale",
    color: "text-primary",
  },
  {
    icon: HeadsetIcon,
    title: "100% Mentorship Support",
    description: "Dedicated mentor support and 1-on-1 guidance",
    color: "text-accent",
  },
]

export default function ServicesSection() {
  const whatsappLink =
    "https://wa.me/923067743193?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

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
          <h2 className="text-5xl sm:text-6xl font-bold">Services You Also Get</h2>
          <p className="text-xl text-muted-foreground">Premium tools and support included with enrollment</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ translateY: -8 }}
              >
                <Card className="glass p-8 h-full hover:glow-gold transition-all duration-300 flex flex-col group">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`text-6xl mb-4 ${service.color} group-hover:scale-125 transition-transform`}
                  >
                    <Icon className="w-16 h-16" />
                  </motion.div>
                  <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground flex-grow">{service.description}</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="mt-4 pt-4 border-t border-white/10"
                  >
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full border-accent text-accent bg-transparent hover:bg-accent/10"
                      >
                        Learn More
                      </Button>
                    </a>
                  </motion.div>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
