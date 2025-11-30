import { Leaf, UtensilsCrossed, ScrollText, MapPin } from "lucide-react"

const features = [
  {
    icon: Leaf,
    title: "100% Vegetarian",
    description:
      "A kitchen free from meat and eggs. We offer specific Jain options (No Onion, No Garlic) for those who seek spiritual purity in their diet.",
  },
  {
    icon: UtensilsCrossed,
    title: "The Unlimited Thali",
    description:
      "Salalah's most celebrated value. A complete meal with rotating curries, dals, and breads that ensures you never leave hungry.",
  },
  {
    icon: ScrollText,
    title: "100+ Menu Options",
    description:
      "From the coast of Kerala to the fields of Punjab. Our menu covers the breadth of the Indian subcontinent.",
  },
  {
    icon: MapPin,
    title: "The Sanaya Sanctuary",
    description: "Located centrally in the Industrial Area, providing a cool, quiet respite from the workday heat.",
  },
]

export function WhyOm() {
  return (
    <section id="story" className="py-20 bg-[#4A4A45]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#F4F1EA] mb-4">Why Choose OM?</h2>
          <div className="w-24 h-1 bg-[#C9A86A] mx-auto mb-6" />
          <p className="text-lg text-[#F4F1EA]/80 max-w-2xl mx-auto text-pretty">
            For over fifteen years, we have been the trusted vegetarian destination for families, professionals, and
            food lovers in Salalah.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 bg-[#F4F1EA]/5 rounded-xl border border-[#C9A86A]/20 hover:border-[#C9A86A]/50 transition-colors group"
            >
              <div className="w-16 h-16 bg-[#C9A86A]/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-[#C9A86A]/30 transition-colors">
                <feature.icon className="w-8 h-8 text-[#C9A86A]" />
              </div>
              <h3 className="text-xl font-bold text-[#F4F1EA] mb-3">{feature.title}</h3>
              <p className="text-[#F4F1EA]/70 leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Our Story Section */}
        <div className="mt-20 bg-[#F4F1EA]/5 rounded-2xl p-8 md:p-12 border border-[#C9A86A]/20">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-[#C9A86A] font-medium uppercase tracking-widest text-sm">Our Story</span>
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-[#F4F1EA] mt-2 mb-6">
                A Legacy of Flavor Since 2008
              </h3>
              <div className="space-y-4 text-[#F4F1EA]/80 leading-relaxed">
                <p>
                  In the shifting sands of Salalah&apos;s industrial growth, one flavor has remained constant.
                  Established in 2008, OM Vegetarian Restaurant (Al-Bayader International Kitchen) began with a singular
                  promise: to bring the authentic, uncompromised taste of the Indian home to the heart of Sanaya.
                </p>
                <p>
                  We were born not just to feed, but to nourish. For over a decade and a half, we have watched the
                  skyline of Salalah rise, fuelled by the engineers, laborers, and families who gather at our tables.
                </p>
                <p className="font-medium text-[#C9A86A]">
                  We are not just a restaurant; we are a witness to history, serving the same comfort today as we did on
                  day one.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-xl overflow-hidden">
                <img
                  src="/indian-restaurant-kitchen-with-chef-preparing-vege.jpg"
                  alt="OM Restaurant Kitchen"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-[#C06C3D] text-white px-6 py-4 rounded-lg shadow-lg">
                <span className="text-3xl font-serif font-bold">15+</span>
                <span className="block text-sm">Years of Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
