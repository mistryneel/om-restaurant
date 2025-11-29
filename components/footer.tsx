import { Phone, MessageCircle, MapPin } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#4A4A45] text-[#F4F1EA] pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="grid md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 bg-[#C06C3D] rounded-full flex items-center justify-center">
                <span className="text-white font-serif text-2xl font-bold">ॐ</span>
              </div>
              <div>
                <span className="font-serif text-xl font-bold">OM</span>
                <span className="text-[#C9A86A] text-xs block">Vegetarian Restaurant</span>
              </div>
            </div>
            <p className="text-[#F4F1EA]/70 text-sm leading-relaxed">
              Al-Bayader International Kitchen
              <br />
              Serving Salalah since 2008
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-[#C9A86A] mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-[#C9A86A] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#story" className="hover:text-[#C9A86A] transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#menu" className="hover:text-[#C9A86A] transition-colors">
                  Menu
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#C9A86A] transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#location" className="hover:text-[#C9A86A] transition-colors">
                  Find Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-[#C9A86A] mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A86A]" />
                <a href="tel:+96823214266" className="hover:text-[#C9A86A]">
                  +968 2321 4266
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#C9A86A]" />
                <a
                  href="https://wa.me/96872479989"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C9A86A]"
                >
                  +968 7247 9989
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A86A] mt-0.5" />
                <span className="text-[#F4F1EA]/70">
                  Sanaya Industrial Area
                  <br />
                  Salalah, Oman
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#F4F1EA]/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#F4F1EA]/60">
          <p>© {currentYear} OM Vegetarian Restaurant. All rights reserved.</p>
          <p>100% Pure & Vegetarian • No Meat • No Eggs</p>
        </div>
      </div>
    </footer>
  )
}
