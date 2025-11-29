import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter_Tight } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "OM Vegetarian Restaurant | Pure Indian Cuisine Since 2008 | Salalah, Oman",
  description:
    "OM Vegetarian Restaurant in Salalah, Oman. 100% pure vegetarian Indian cuisine serving the Sanaya Industrial Area since 2008. Authentic Thalis, South Indian, North Indian & Indo-Chinese dishes. Jain-friendly options available.",
  keywords: [
    "vegetarian restaurant Salalah",
    "Indian food Oman",
    "pure veg restaurant",
    "thali Salalah",
    "Sanaya restaurant",
    "Jain food Oman",
    "South Indian food Salalah",
    "dosa idli",
    "paneer dishes",
    "OM restaurant",
  ],
  authors: [{ name: "OM Vegetarian Restaurant" }],
  icons: {
    icon: "/om-restaurant-logo.png",
  },
  openGraph: {
    title: "OM Vegetarian Restaurant | Salalah, Oman",
    description: "100% Pure Vegetarian Indian Cuisine. Serving the Sanaya Industrial Area since 2008.",
    type: "website",
    locale: "en_OM",
  },
  generator: 'v0.app'
}

export const viewport: Viewport = {
  themeColor: "#C06C3D",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${interTight.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
