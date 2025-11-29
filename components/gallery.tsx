const galleryImages = [
  { query: "Indian thali plate with multiple curries and rice brass plate", alt: "OM Special Thali" },
  { query: "Masala dosa with sambar and chutney South Indian breakfast", alt: "Crispy Masala Dosa" },
  { query: "Paneer butter masala curry with naan bread Indian food", alt: "Paneer Butter Masala" },
  { query: "Gobi manchurian dry Indo Chinese starter cauliflower", alt: "Gobi Manchurian" },
  { query: "Indian sweets gulab jamun ras malai dessert", alt: "Traditional Indian Sweets" },
  { query: "Indian restaurant interior warm lighting traditional", alt: "OM Restaurant Ambiance" },
]

export function Gallery() {
  return (
    <section id="gallery" className="py-20 bg-[#4A4A45]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F4F1EA] mb-4">A Visual Feast</h2>
          <div className="w-24 h-1 bg-[#C9A86A] mx-auto mb-6" />
          <p className="text-lg text-[#F4F1EA]/80 max-w-2xl mx-auto">
            Every dish tells a story. Here&apos;s a glimpse into the flavors that await you.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-lg group ${
                index === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className={`${index === 0 ? "aspect-square" : "aspect-[4/3]"}`}>
                <img
                  src={`/generic-placeholder-icon.png?height=${index === 0 ? 600 : 300}&width=${index === 0 ? 600 : 400}&query=${encodeURIComponent(image.query)}`}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                <span className="text-white font-medium">{image.alt}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
