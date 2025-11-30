'use client'

import Link from "next/link"
import { MapPin, Clock } from "lucide-react"
import { motion } from "motion/react"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-100">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('/groovepaper.png')`,
            backgroundRepeat: 'repeat',
          }}
        />
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.div
              className="inline-flex items-center gap-2 bg-[#C9A86A]/20 text-[#4A4A45] px-4 py-2 rounded-full mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <span className="text-[#C06C3D] font-bold">✦</span>
              <span className="text-sm font-medium">100% Vegetarian</span>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-sans font-semibold text-[#4A4A45] leading-tight mb-6 text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              The Heart of Vegetarian Dining in <span className="text-[#C06C3D]">Salalah</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-[#4A4A45]/80 mb-8 leading-relaxed max-w-xl mx-auto lg:mx-0 text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              Serving the Sanaya Industrial Area with soulful Indian cuisine since 2008. From our family to yours,
              experience the warmth of authentic vegetarian traditions.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Link
                href="#menu"
                className="inline-flex items-center justify-center gap-2 bg-[#C06C3D] text-white px-8 py-4 rounded-full hover:bg-[#a85a32] transition-colors font-semibold text-lg shadow-lg shadow-[#C06C3D]/30"
              >
                View the Menu
              </Link>
              <a
                href="https://maps.google.com/?q=OM+Vegetarian+Restaurant+Salalah"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-[#4A4A45] text-[#4A4A45] px-8 py-4 rounded-full hover:bg-[#4A4A45] hover:text-[#F4F1EA] transition-colors font-semibold text-lg"
              >
                <MapPin className="w-5 h-5" />
                Get Directions
              </a>
            </motion.div>

            <motion.div
              className="flex items-center justify-center lg:justify-start gap-6 text-[#4A4A45]/70"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-[#C9A86A]" />
                <span>7:30 AM - 10:30 PM</span>
              </div>
              <div className="hidden sm:block w-1 h-1 bg-[#C9A86A] rounded-full" />
              <span className="hidden sm:block">7 Days a Week</span>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Decorative Ring */}
              <div className="absolute inset-0 border-4 border-[#C9A86A]/30 rounded-full animate-pulse" />
              <div className="absolute inset-4 border-2 border-dashed border-[#C9A86A]/50 rounded-full" />

              {/* Main Image Container */}
              <div className="absolute inset-8 rounded-full overflow-hidden shadow-2xl">
                <img
                  src="/indian-vegetarian-thali-with-colorful-curries--ric.jpg"
                  alt="OM Special Thali - A complete Indian vegetarian meal"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#4A4A45] text-[#F4F1EA] px-6 py-3 rounded-full shadow-lg">
                <span className="font-serif font-bold">Since 2008</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#4A4A45]/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-[#4A4A45]/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-[#C06C3D] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  )
}
