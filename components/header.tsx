"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Phone, Menu, X } from "lucide-react"
import { DistortedGlass } from "@/components/ui/distorted-glass"

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#story", label: "Our Story" },
  { href: "#menu", label: "Menu" },
  { href: "#gallery", label: "Gallery" },
  { href: "#location", label: "Find Us" },
]

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={"fixed top-5 left-0 right-0 z-50 transition-all duration-300 bg-transparent"}>
      <DistortedGlass className={`mx-auto px-4 max-w-6xl absolute inset-0 h-20 block rounded-full transition-opacity ${isScrolled ? 'opacity-100 bg-[#F4F1EA]/50 shadow-sm' : 'opacity-0'}`} />

      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between h-20 relative z-10">
          {/* Logo */}
          <Link href="#home" className="flex items-center gap-2">
            <img
              src="/om-restaurant-logo.png"
              alt="OM Restaurant Logo"
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="hidden sm:block">
              <span className="text-[#4A4A45] font-serif text-xl font-bold">OM</span>
              <span className="text-[#4A4A45] text-xs block -mt-1">Since 2008</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#4A4A45] hover:text-[#C06C3D] transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Call Button */}
          <a
            href="tel:+96823214266"
            className="hidden md:flex items-center gap-2 bg-[#C06C3D] text-white px-5 py-2.5 rounded-full hover:bg-[#a85a32] transition-colors font-medium"
          >
            <Phone className="w-4 h-4" />
            <span>Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#4A4A45]"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#C9A86A]/30">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[#4A4A45] hover:text-[#C06C3D] transition-colors font-medium py-2"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="tel:+96823214266"
                className="flex items-center justify-center gap-2 bg-[#C06C3D] text-white px-5 py-3 rounded-full hover:bg-[#a85a32] transition-colors font-medium mt-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
