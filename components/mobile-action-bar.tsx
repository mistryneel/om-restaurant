"use client"

import { Phone, MessageCircle, Clock } from "lucide-react"

export function MobileActionBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-[#4A4A45] shadow-[0_-4px_20px_rgba(0,0,0,0.2)]">
      <div className="flex items-center justify-between px-2 py-2">
        {/* Call Button */}
        <a
          href="tel:+96823214266"
          className="flex-1 flex items-center justify-center gap-2 bg-[#C06C3D] text-white py-3 rounded-lg mx-1 font-medium"
        >
          <Phone className="w-5 h-5" />
          <span>Call</span>
        </a>

        {/* Hours Display */}
        <div className="flex items-center gap-1 text-[#F4F1EA] text-xs px-3">
          <Clock className="w-4 h-4 text-[#C9A86A]" />
          <span>7:30 AM - 10:30 PM</span>
        </div>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/96872479989"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-[#25D366] text-white py-3 rounded-lg mx-1 font-medium"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  )
}
