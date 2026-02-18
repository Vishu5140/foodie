import React from 'react';
import { aboutFeatures } from "./aboutlist";

function About() {
  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-rose-50 to-yellow-50 text-gray-800 ">
      {/* Added ml-64 to offset sidebar width */}

      {/* Hero Section */}
      <section className="relative bg-linear-to-r from-orange-400 to-rose-400 text-white py-16 px-6 md:px-20 rounded-b-3xl shadow-lg">
        <h1 className="text-3xl md:text-4xl font-bold mb-3">
          About Foodies 🍔
        </h1>
        <p className="text-base md:text-lg max-w-2xl">
          Delivering happiness on a plate! Our mission is to serve fresh, 
          delicious, and wholesome meals right to your doorstep with a touch 
          of love and care.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          {aboutFeatures.map((feature) => (
            <div
              key={feature.id}
              className="flex items-start gap-3 bg-white/30 backdrop-blur-xl p-5 rounded-xl shadow-md transition-transform hover:scale-105 hover:shadow-lg cursor-pointer"
            >
              <div className="text-3xl">{feature.icon}</div>
              <div>
                <h3 className="text-lg font-bold">{feature.title}</h3>
                <p className="text-gray-100 mt-1 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-6 md:px-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-orange-600">
            Our Story
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Foodies started with a simple idea: to make good food accessible 
            and enjoyable for everyone. We partner with local chefs and 
            restaurants to bring a variety of cuisines to your table, 
            ensuring quality, taste, and freshness in every bite.
          </p>
        </div>
      </section>

      {/* Dynamic Card Section */}
      <section className="py-16 px-6 md:px-20 bg-linear-to-r from-yellow-50 via-orange-50 to-rose-50">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-orange-600">
          Why Choose Us
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {aboutFeatures.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-xl p-5 text-center transition-transform hover:scale-105 hover:shadow-2xl cursor-pointer"
            >
              <div className="text-4xl mb-3">{item.icon}</div>
              <h3 className="text-lg font-bold mb-1">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 px-6 md:px-20 bg-linear-to-r from-orange-500 to-rose-500 text-white rounded-t-3xl text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          Ready to order?
        </h2>
        <p className="text-base md:text-lg mb-6">
          Explore our menu and get your favorite meals delivered hot and fast.
        </p>
        <a
          href="/menu/veg"
          className="inline-block px-6 py-3 rounded-full bg-white text-orange-500 font-bold shadow-lg hover:scale-105 hover:shadow-xl transition-transform"
        >
          View Menu
        </a>
      </section>
    </div>
  );
}

export default About;
