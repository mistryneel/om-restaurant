import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { WhyOm } from "@/components/why-om"
import { Vignette } from "@/components/vignette"
import { Menu } from "@/components/menu"
import { Gallery } from "@/components/gallery"
import { Location } from "@/components/location"
import { Footer } from "@/components/footer"
import { MobileActionBar } from "@/components/mobile-action-bar"

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#F4F1EA]">
      <Header />
      <Hero />
      <Vignette text="Long before the first factory whistle blows in Sanaya, our kitchen is awake. The fermentation of our Dosa batter is checked. The fresh milk is boiled for the day's Ras Malai. Since 2008, we have believed that the most important ingredient is time." />
      <WhyOm />
      <Menu />
      <Vignette text="Our spices do not come from packets. They are sourced whole, roasted in our kitchen, and ground daily. When you taste our Dal Makhani, you are tasting the dedication of a team that refuses to cut corners." />
      <Gallery />
      <Location />
      <Footer />
      <MobileActionBar />
    </main>
  )
}
