import React from 'react'
import { useNavigate } from 'react-router'

function Overview() {
  const navigate = useNavigate()

  return (
    <div className="relative bg-gray-900 text-gray-200 overflow-x-hidden">

      {/* EXIT BUTTON */}
      <button
        onClick={() => navigate('/welcome')}
        className="fixed top-6 right-6 z-50 
                   px-5 py-2 rounded-full 
                   bg-transparent border border-cyanGlow text-cyanGlow
                   hover:bg-cyanGlow hover:text-black
                   hover:shadow-[0_0_20px_#22ffff]
                   transition-all duration-300"
      >
        ✕ Exit
      </button>

      {/* HERO SECTION */}
      <section className="min-h-screen flex items-center justify-center text-center px-6">
        <div className="animate-fadeIn">
          <h1 className="text-5xl md:text-6xl font-bold text-cyanGlow drop-shadow-[0_0_20px_#22ffff]">
            Fresh Food. Bold Flavors.
          </h1>
          <p className="max-w-xl mx-auto mt-6 text-gray-400">
            Experience delicious meals crafted with love, premium ingredients,
            and unforgettable taste.
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="mt-10 px-8 py-3 bg-cyanGlow text-black font-semibold rounded-full 
                       hover:scale-105 hover:shadow-[0_0_25px_#22ffff] transition"
          >
            Explore Menu
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyanGlow mb-4">About Us</h2>
        <p className="text-gray-400 leading-relaxed">
          We serve freshly prepared meals using high-quality ingredients,
          combining hygiene, taste, and affordability to give you an amazing
          food experience.
        </p>
      </section>

      {/* POPULAR DISHES */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyanGlow mb-10">
          Popular Dishes
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            { title: "Spicy Burger", desc: "Juicy patty with secret sauce." },
            { title: "Loaded Pizza", desc: "Cheesy and rich in flavor." },
            { title: "Healthy Bowl", desc: "Nutritious & delicious combo." },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-darkCard p-6 rounded-2xl 
                         hover:-translate-y-3 hover:shadow-[0_0_30px_rgba(34,255,255,0.2)]
                         transition duration-300"
            >
              <h3 className="text-xl font-semibold text-cyanGlow mb-2">
                {item.title}
              </h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyanGlow mb-10">
          Why Choose Us
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {["Fresh Ingredients", "Fast Delivery", "Affordable Pricing"].map(
            (reason, index) => (
              <div
                key={index}
                className="bg-darkCard p-6 rounded-2xl border border-transparent
                           hover:border-cyanGlow transition"
              >
                <h3 className="text-lg font-semibold text-cyanGlow mb-2">
                  {reason}
                </h3>
                <p className="text-gray-400">
                  Quality food made with care and consistency.
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* OFFER */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <div className="bg-linear-to-r from-[#020617] to-[#0f172a] 
                        rounded-3xl p-12 text-center">
          <h2 className="text-3xl font-semibold text-cyanGlow mb-4">
            🔥 Special Offer
          </h2>
          <p className="text-gray-400 mb-6">
            Get 20% off on your first order. Limited time only!
          </p>
          <button
            onClick={() => navigate('/menu')}
            className="px-8 py-3 bg-cyanGlow text-black font-semibold rounded-full
                       hover:scale-105 hover:shadow-[0_0_25px_#22ffff] transition"
          >
            Order Now
          </button>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-10 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-semibold text-cyanGlow mb-10">
          What Our Customers Say
        </h2>

        <div className="grid sm:grid-cols-2 gap-8">
          {[
            "Absolutely delicious! Best food experience ever.",
            "Fresh, fast and full of flavor. Highly recommended!",
          ].map((review, index) => (
            <div
              key={index}
              className="bg-darkCard p-6 rounded-2xl border-l-4 border-cyanGlow italic"
            >
              {review}
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-8 border-t border-gray-800 text-gray-500">
        © 2026 Food Website • Crafted with ❤️
      </footer>
    </div>
  )
}

export default Overview
