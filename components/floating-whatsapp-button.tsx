"use client"

import { motion } from "framer-motion"

export default function FloatingWhatsAppButton() {
  const whatsappLink =
    "https://wa.me/447907859528?text=Hi%20Nazakat%20Ali%2C%20I%27m%20interested%20in%20your%20YouTube%20Automation%20course!"

  return (
    <motion.div
      className="fixed bottom-6 right-6 z-50"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.5, type: "spring" }}
      whileHover={{ scale: 1.1 }}
    >
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary text-white shadow-2xl hover:shadow-primary/50 transition-all duration-300"
      >
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-5.031 1.378c-3.055 2.017-5.044 5.594-5.044 9.524 0 1.659.327 3.262.996 4.793l.136.273-1.579 5.753 5.9-1.5.464.277a9.884 9.884 0 004.764 1.205h.005c5.316 0 9.67-4.354 9.67-9.67 0-2.593-.558-5.111-1.664-7.538-1.129-2.528-2.849-4.74-5.008-6.3-2.191-1.604-4.905-2.493-7.52-2.493z" />
        </svg>
      </a>
    </motion.div>
  )
}
