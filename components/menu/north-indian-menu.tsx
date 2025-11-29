const paneerItems = [
  { name: "Paneer Butter Masala", price: "1.800" },
  { name: "Palak Paneer", price: "1.800" },
  { name: "Kadai Paneer", price: "1.800" },
  { name: "Paneer Tikka Masala", price: "2.000" },
  { name: "Shahi Paneer", price: "1.800" },
  { name: "Matar Paneer", price: "1.600" },
]

const vegCurries = [
  { name: "Aloo Gobi", price: "1.500" },
  { name: "Malai Kofta", price: "1.600" },
  { name: "Dal Makhani", price: "1.800" },
  { name: "Chana Masala", price: "1.400" },
  { name: "Mix Veg Curry", price: "1.500" },
  { name: "Mushroom Masala", price: "1.800" },
]

const breads = [
  { name: "Butter Roti", price: "0.150" },
  { name: "Plain Naan", price: "0.200" },
  { name: "Butter Naan", price: "0.250" },
  { name: "Garlic Naan", price: "0.300" },
  { name: "Laccha Paratha", price: "0.300" },
  { name: "Stuffed Paratha", price: "0.400" },
]

const rice = [
  { name: "Jeera Rice", price: "1.000" },
  { name: "Veg Pulao", price: "1.200" },
  { name: "Veg Biryani", price: "1.500" },
  { name: "Paneer Biryani", price: "1.800" },
]

export function NorthIndianMenu() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-8 inline-block">
        North Indian Curries
      </h3>
      <p className="mb-6 text-[#4A4A45] italic">Note: North Indian items take 15-25 minutes depending on rush.</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* Paneer Specialties */}
        <div className="bg-white/40 p-6 rounded border border-[#C9A86A]/20">
          <h4 className="text-xl font-serif font-bold text-[#C06C3D] mb-4">Paneer Specialties</h4>
          <div className="space-y-3">
            {paneerItems.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Vegetable Curries */}
        <div className="bg-white/40 p-6 rounded border border-[#C9A86A]/20">
          <h4 className="text-xl font-serif font-bold text-[#C06C3D] mb-4">Vegetable Curries</h4>
          <div className="space-y-3">
            {vegCurries.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Breads */}
        <div className="bg-white/40 p-6 rounded border border-[#C9A86A]/20">
          <h4 className="text-xl font-serif font-bold text-[#C06C3D] mb-4">Breads (Roti & Naan)</h4>
          <div className="space-y-3">
            {breads.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Rice */}
        <div className="bg-white/40 p-6 rounded border border-[#C9A86A]/20">
          <h4 className="text-xl font-serif font-bold text-[#C06C3D] mb-4">Rice & Biryani</h4>
          <div className="space-y-3">
            {rice.map((item, index) => (
              <div key={index} className="flex justify-between">
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
