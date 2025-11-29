const soups = [
  { name: "Sweet Corn Soup", price: "0.800" },
  { name: "Manchow Soup", price: "0.800" },
  { name: "Hot & Sour Soup", price: "0.800" },
  { name: "Tomato Soup", price: "0.600" },
]

const starters = [
  { name: "Gobi Manchurian (Dry)", price: "1.800" },
  { name: "Gobi Manchurian (Gravy)", price: "1.800" },
  { name: "Paneer 65", price: "1.800" },
  { name: "Chilli Paneer (Dry)", price: "1.800" },
  { name: "Chilli Mushroom", price: "1.800" },
  { name: "Veg Spring Roll", price: "1.200" },
  { name: "Veg Momos (Steam)", price: "1.500" },
  { name: "Veg Momos (Fried)", price: "1.500" },
  { name: "Tandoori Momos", price: "2.000" },
  { name: "Crispy Corn", price: "1.500" },
]

const mainCourse = [
  { name: "Veg Fried Rice", price: "1.200" },
  { name: "Schezwan Fried Rice", price: "1.400" },
  { name: "Paneer Fried Rice", price: "1.600" },
  { name: "Veg Noodles", price: "1.200" },
  { name: "Hakka Noodles", price: "1.400" },
  { name: "Schezwan Noodles", price: "1.400" },
]

export function ChineseMenu() {
  return (
    <div>
      <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-8 inline-block">
        Indo-Chinese Favorites
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Soups */}
        <div>
          <h4 className="text-lg font-bold text-[#4A4A45] mb-4 uppercase tracking-widest">Soups</h4>
          <ul className="space-y-4">
            {soups.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-dashed border-[#4A4A45]/20 pb-2"
              >
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Starters */}
        <div>
          <h4 className="text-lg font-bold text-[#4A4A45] mb-4 uppercase tracking-widest">Dry Starters</h4>
          <ul className="space-y-4">
            {starters.map((item, index) => (
              <li
                key={index}
                className="flex justify-between items-center border-b border-dashed border-[#4A4A45]/20 pb-2"
              >
                <span className="text-[#4A4A45]">{item.name}</span>
                <span className="font-bold text-[#C9A86A]">{item.price}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Course */}
      <div className="mt-10">
        <h4 className="text-lg font-bold text-[#4A4A45] mb-4 uppercase tracking-widest">Rice & Noodles</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {mainCourse.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center p-3 bg-white/50 rounded border border-[#C9A86A]/20"
            >
              <span className="text-[#4A4A45]">{item.name}</span>
              <span className="font-bold text-[#C9A86A]">{item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
