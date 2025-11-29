const sattvicItems = [
  { name: "Chilly Paneer (No Onion/Garlic)", price: "1.800" },
  { name: "Aloo Palak", price: "1.600" },
  { name: "Khatta Meetha Paneer", price: "1.800" },
  { name: "Dal Fry", price: "1.400" },
  { name: "Aloo Jeera", price: "1.400" },
  { name: "Paneer Bhurji (Jain)", price: "1.800" },
  { name: "Jeera Rice", price: "1.000" },
  { name: "Plain Roti", price: "0.100" },
]

export function SattvicMenu() {
  return (
    <div>
      <div className="bg-white p-8 rounded-lg border-2 border-[#C9A86A] shadow-inner">
        <div className="flex items-center mb-6">
          <div className="bg-[#C06C3D] text-white rounded-full w-12 h-12 flex items-center justify-center mr-4 font-bold text-xl">
            V
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#4A4A45]">Sattvic Selection</h3>
            <p className="text-[#4A4A45]/70">No Onion • No Garlic • Jain Friendly</p>
          </div>
        </div>

        <p className="text-[#4A4A45]/80 mb-8 leading-relaxed">
          For our patrons who follow a Sattvic diet or Jain traditions, we offer a carefully curated selection of dishes
          prepared without onion and garlic. Please inform our staff about your dietary requirements when ordering.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {sattvicItems.map((item, index) => (
            <div key={index} className="text-center p-4 bg-[#F4F1EA] rounded">
              <span className="block font-bold text-[#4A4A45] mb-1">{item.name}</span>
              <span className="text-[#C06C3D] font-semibold">{item.price}</span>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 bg-[#C9A86A]/10 rounded-lg">
          <p className="text-sm text-[#4A4A45] text-center italic">
            💡 Most items on our menu can be prepared Jain-style upon request. Please ask our staff for modifications.
          </p>
        </div>
      </div>
    </div>
  )
}
