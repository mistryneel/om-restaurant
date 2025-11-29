"use client"

import { useState } from "react"
import { ThaliMenu } from "./menu/thali-menu"
import { SouthIndianMenu } from "./menu/south-indian-menu"
import { ChineseMenu } from "./menu/chinese-menu"
import { NorthIndianMenu } from "./menu/north-indian-menu"
import { SattvicMenu } from "./menu/sattvic-menu"
import { DessertsAndBeverages } from "./menu/desserts-beverages"

const menuCategories = [
  { id: "thali", label: "Thalis" },
  { id: "south", label: "South Indian" },
  { id: "north", label: "North Indian" },
  { id: "chinese", label: "Chinese" },
  { id: "sattvic", label: "Jain/Sattvic" },
  { id: "desserts", label: "Sweets & Drinks" },
]

export function Menu() {
  const [activeCategory, setActiveCategory] = useState("thali")

  return (
    <section id="menu" className="py-20 bg-[#F4F1EA]">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A4A45] mb-4">The Grand Menu</h2>
          <div className="w-24 h-1 bg-[#C9A86A] mx-auto mb-6" />
          <p className="text-lg text-[#4A4A45]/80 max-w-2xl mx-auto text-pretty">
            Exploring over 100 varieties of pure vegetarian delicacies. From the rustic breads of the North to the
            fermented crepes of the South.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {menuCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-[#C06C3D] text-white shadow-lg"
                  : "bg-white text-[#4A4A45] hover:bg-[#C9A86A]/20 border border-[#C9A86A]/30"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Menu Content */}
        <div className="min-h-[500px]">
          {activeCategory === "thali" && <ThaliMenu />}
          {activeCategory === "south" && <SouthIndianMenu />}
          {activeCategory === "north" && <NorthIndianMenu />}
          {activeCategory === "chinese" && <ChineseMenu />}
          {activeCategory === "sattvic" && <SattvicMenu />}
          {activeCategory === "desserts" && <DessertsAndBeverages />}
        </div>
      </div>
    </section>
  )
}
