const sweets = [
  { name: "Ras Malai", price: "0.300" },
  { name: "Gulab Jamun", price: "0.200" },
  { name: "Gajar Halwa (Carrot)", price: "0.400" },
  { name: "Kheer (Rice Pudding)", price: "0.400" },
  { name: "Moong Dal Halwa", price: "0.500" },
]

const beverages = [
  { name: "Masala Chai", price: "0.200" },
  { name: "Coffee", price: "0.300" },
  { name: "Buttermilk (Chaas)", price: "0.300" },
  { name: "Lassi (Sweet/Salt)", price: "0.500" },
  { name: "Mango Lassi", price: "0.600" },
]

const juices = [
  { name: "Mango Juice (L)", price: "1.000" },
  { name: "Orange Juice (L)", price: "1.000" },
  { name: "Pineapple Juice (L)", price: "1.000" },
  { name: "Avocado Juice (L)", price: "1.000" },
  { name: "Mixed Fruit Juice (L)", price: "1.200" },
  { name: "Special Mojito (Blue Lagoon)", price: "1.000" },
]

export function DessertsAndBeverages() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {/* Sweets */}
      <div>
        <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-6 inline-block">
          Sweets (Mithai)
        </h3>
        <ul className="space-y-4">
          {sweets.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-[#4A4A45]">{item.name}</span>
              <span className="font-bold text-[#C9A86A]">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Hot Beverages */}
      <div>
        <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-6 inline-block">
          Beverages
        </h3>
        <ul className="space-y-4">
          {beverages.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-[#4A4A45]">{item.name}</span>
              <span className="font-bold text-[#C9A86A]">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Fresh Juices */}
      <div>
        <h3 className="text-2xl font-bold text-[#C06C3D] border-b-2 border-[#C9A86A] pb-2 mb-6 inline-block">
          Fresh Juices
        </h3>
        <ul className="space-y-4">
          {juices.map((item, index) => (
            <li key={index} className="flex justify-between">
              <span className="text-[#4A4A45]">{item.name}</span>
              <span className="font-bold text-[#C9A86A]">{item.price}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
