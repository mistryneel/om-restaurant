const thalis = [
  {
    name: "Gujarati Thali",
    price: "1.200",
    takeaway: "1.400",
    description:
      "A balanced spread featuring 2 Curries, 1 Pulse/Sabzi, 1 Dal, 6 Rotis, Rice, Fresh Salad, Buttermilk, and Sweets.",
    note: "Dine-in Only • Sharing Not Allowed",
    featured: false,
  },
  {
    name: "North Indian Thali",
    price: "1.800",
    takeaway: "2.000",
    description:
      "A robust meal featuring Paneer Curry, Dal Makhani, Seasonal Veg, Papad, 6 Roti, Rice, Buttermilk, and Sweets.",
    note: "Served Once • Dine-in Only",
    featured: false,
  },
  {
    name: "OM Special Thali",
    price: "2.500",
    takeaway: null,
    description: "The ultimate feast. A premium selection of our finest North Indian delicacies, served royally.",
    note: "Preparation Time: 20 mins",
    featured: true,
  },
  {
    name: "North Indian Mini Thali",
    price: "1.400",
    takeaway: "1.500",
    description: "A lighter version for a quick, satisfying lunch. Includes essential North Indian staples.",
    note: null,
    featured: false,
  },
]

export function ThaliMenu() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-8 inline-block">
        Signature Thalis (The Complete Meal)
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {thalis.map((thali, index) => (
          <div
            key={index}
            className={`p-6 rounded-lg transition-all ${
              thali.featured
                ? "border-2 border-[#C9A86A] bg-[#F4F1EA] shadow-md relative overflow-hidden"
                : "border border-[#C9A86A] bg-white/50 hover:shadow-lg"
            }`}
          >
            {thali.featured && (
              <div className="absolute top-0 right-0 bg-[#C06C3D] text-white text-xs px-3 py-1 font-bold rounded-bl">
                CHEF&apos;S CHOICE
              </div>
            )}

            <div className="flex justify-between items-baseline mb-2">
              <h4 className="text-xl font-bold text-[#4A4A45]">{thali.name}</h4>
              <span className="text-xl font-bold text-[#C06C3D]">OMR {thali.price}</span>
            </div>

            {thali.note && <p className="text-sm text-[#4A4A45] mb-3 italic">{thali.note}</p>}

            <p className="text-[#4A4A45]/90">{thali.description}</p>

            {thali.takeaway && (
              <div className="mt-4 pt-4 border-t border-[#C9A86A]/30">
                <div className="flex justify-between text-sm">
                  <span className="text-[#4A4A45]">Takeaway (In Containers)</span>
                  <span className="font-bold text-[#C06C3D]">OMR {thali.takeaway}</span>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Host's Pledge */}
      <div className="mt-12 bg-[#4A4A45] text-[#F4F1EA] p-8 rounded-xl">
        <h4 className="text-xl font-serif font-bold mb-4 text-[#C9A86A]">The Host&apos;s Pledge</h4>
        <p className="leading-relaxed text-pretty">
          At OM, we believe the Thali is an infinite circle of flavor. Our owners founded this establishment on the
          principle that a hungry soul cannot be productive. This is why our signature Thalis are designed to be
          boundless. When you dine with us, you are family, and in an Indian home, the plate is never empty.
        </p>
      </div>
    </div>
  )
}
