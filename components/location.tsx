import { Phone, MessageCircle, MapPin, Clock, Navigation } from "lucide-react"

export function Location() {
  return (
    <section id="location" className="py-20 bg-[#F4F1EA]">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#4A4A45] mb-4">Find Us</h2>
          <div className="w-24 h-1 bg-[#C9A86A] mx-auto mb-6" />
          <p className="text-lg text-[#4A4A45]/80 max-w-2xl mx-auto">
            Located in the heart of Sanaya Industrial Area, we are your oasis of authentic vegetarian cuisine.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d61043.14264140496!2d54.00542506277485!3d17.014033079857867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3dd15f4702f7d969%3A0xfe1315dd2d2916bd!2sOM%20vegetarian%20restaurant!5e0!3m2!1sen!2sus!4v1764458136405!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="OM Restaurant Location"
            />
          </div>

          {/* Contact Details */}
          <div className="space-y-6">
            {/* Address Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C9A86A]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-[#C06C3D]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#4A4A45] text-lg mb-2">Address</h3>
                  <p className="text-[#4A4A45]/80 leading-relaxed">
                    OM Vegetarian Restaurant
                    <br />
                    (Al-Bayader International Kitchen)
                    <br />
                    A, Taqniyah St. New ROP Road
                    <br />
                    Industrial Area Sanaya
                    <br />
                    Salalah, Oman
                  </p>
                  <a
                    href="https://maps.google.com/?q=OM+Vegetarian+Restaurant+Salalah"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[#C06C3D] font-medium mt-3 hover:underline"
                  >
                    <Navigation className="w-4 h-4" />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-white p-6 rounded-xl shadow-md border border-[#C9A86A]/20">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-[#C9A86A]/20 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-[#C06C3D]" />
                </div>
                <div>
                  <h3 className="font-bold text-[#4A4A45] text-lg mb-2">Opening Hours</h3>
                  <p className="text-[#4A4A45]/80">
                    <span className="font-medium">Daily:</span> 7:30 AM – 10:30 PM
                  </p>
                  <p className="text-[#4A4A45]/60 text-sm mt-1">Open 7 days a week, including holidays</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="grid grid-cols-2 gap-4">
              <a
                href="tel:+96823214266"
                className="flex items-center justify-center gap-3 bg-[#C06C3D] text-white px-6 py-4 rounded-xl hover:bg-[#a85a32] transition-colors font-semibold shadow-lg shadow-[#C06C3D]/20"
              >
                <Phone className="w-5 h-5" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">Call Us</span>
                  <span>23214266</span>
                </div>
              </a>
              <a
                href="https://wa.me/96872479989"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-[#25D366] text-white px-6 py-4 rounded-xl hover:bg-[#1fb855] transition-colors font-semibold shadow-lg shadow-[#25D366]/20"
              >
                <MessageCircle className="w-5 h-5" />
                <div className="text-left">
                  <span className="block text-xs opacity-80">WhatsApp</span>
                  <span>72479989</span>
                </div>
              </a>
            </div>

            {/* Note */}
            <p className="text-center text-[#4A4A45]/60 text-sm italic">
              For large orders or catering inquiries, please call us directly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
