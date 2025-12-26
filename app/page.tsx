"use client"

import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import HeaderTimerSection from "@/components/header-timer-section"
import HeroSection from "@/components/sections/hero-section"
import AuthoritySection from "@/components/sections/authority-section"
import WhyWorksSection from "@/components/sections/why-works-section"
import ReviewsSection from "@/components/sections/reviews-section"
import OwnerSection from "@/components/sections/owner-section"
import CurriculumSection from "@/components/sections/curriculum-section"
import ServicesSection from "@/components/sections/services-section"
import PricingSection from "@/components/sections/pricing-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import CommunitySection from "@/components/sections/community-section"
import DashboardSection from "@/components/sections/dashboard-section"
import FAQSection from "@/components/sections/faq-section"
import FinalCTASection from "@/components/sections/final-cta-section"
import FloatingWhatsAppButton from "@/components/floating-whatsapp-button"

export default function Home() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <main className="w-full overflow-hidden">
          <HeaderTimerSection />
          <div className="pt-20">
            <HeroSection />
            <ReviewsSection />
            <AuthoritySection />
            <OwnerSection />
            <WhyWorksSection />
            <CurriculumSection />
            <ServicesSection />
            <PricingSection />
            <TestimonialsSection />
            <CommunitySection />
            <DashboardSection />
            <FAQSection />
            <FinalCTASection />
          </div>
          <FloatingWhatsAppButton />
        </main>
      )}
    </AnimatePresence>
  )
}
