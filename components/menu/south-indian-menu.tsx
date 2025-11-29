const southIndianItems = [
  { name: "Masala Dosa", price: "0.600", description: "Crispy crepe with spiced potato filling." },
  { name: "Mysore Masala Dosa", price: "0.900", description: "Spicy red chutney spread with potato filling." },
  {
    name: "Ghee Roast",
    price: "0.700",
    description: "Plain dosa roasted with clarified butter (Ghee) for extra aroma.",
  },
  { name: "Paper Roast", price: "0.600", description: "Extra thin and crispy plain dosa." },
  { name: "Rava Masala Dosa", price: "0.800", description: "Semolina batter dosa with potato filling." },
  { name: "Onion Uttapam", price: "0.700", description: "Thick rice pancake topped with onions." },
  { name: "Tomato Uttapam", price: "0.700", description: "Thick rice pancake topped with fresh tomatoes." },
  { name: "Mixed Uttapam", price: "0.800", description: "Thick rice pancake with onions, tomatoes & chilies." },
  { name: "Idli Sambhar (2 Pcs)", price: "0.400", description: "Steamed rice cakes with lentil soup." },
  { name: "Medu Vada Sambhar (2 Pcs)", price: "0.500", description: "Fried lentil donuts, crispy and savory." },
  { name: "Idli Vada Combo", price: "0.500", description: "One idli and one vada with sambhar & chutney." },
  { name: "Pongal", price: "0.600", description: "South Indian rice and lentil comfort dish." },
]

export function SouthIndianMenu() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-8 inline-block">
        South Indian Classics
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {southIndianItems.map((item, index) => (
          <div key={index} className="p-4 border-b border-[#C9A86A]/40 hover:bg-white/50 transition-colors rounded">
            <div className="flex justify-between font-bold text-[#4A4A45]">
              <span>{item.name}</span>
              <span className="text-[#C9A86A]">{item.price}</span>
            </div>
            <p className="text-sm text-[#4A4A45]/75 mt-1">{item.description}</p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[#4A4A45]/70 italic">
        All South Indian items served with Sambhar & Coconut Chutney
      </p>
    </div>
  )
}
