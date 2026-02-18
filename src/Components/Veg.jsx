import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import PremiumLoader from "/Loader/PremiumLoader";

function Veg() {
  const navigate = useNavigate();
  const [foodData, setFoodData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Loader delay
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  // Fetch veg food data
  useEffect(() => {
    axios
      .get("https://food-api-1-c6e6.onrender.com/api/food")
      .then((response) => {
        setFoodData(response.data.food);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAdd = (item) => {
    alert(`Added ${item.name}`);
    navigate(`/menu/veg/${item._id || item.id}`);
  };

  if (loading) return <PremiumLoader />;

  return (
    <div className="px-4 md:px-8 py-6">
      {/* Page Header */}
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-green-700">
          🥦 Veg Feast
        </h1>
        <p className="text-gray-500 mt-3 max-w-xl mx-auto">
          Wholesome, fresh & flavour-rich vegetarian dishes prepared with
          quality ingredients for a healthy and satisfying meal experience.
        </p>
      </div>

      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-700">
          🌱 Popular Veg Items
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          Customer favourites loved for their taste and freshness
        </p>
      </div>

      {/* Food Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {foodData.map((item) => (
          <div
            key={item._id || item.id}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={item.image || item.path || "/placeholder.jpg"}
                alt={item.name}
                className="h-44 w-full object-cover group-hover:scale-105 transition duration-300"
              />
              <span className="absolute top-3 left-3 bg-green-600 text-white text-xs px-3 py-1 rounded-full">
                Veg
              </span>
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-lg text-gray-800 truncate">
                {item.name}
              </h3>

              <div className="flex justify-between items-center mt-4">
                <span className="text-orange-600 text-lg font-bold">
                  ₹{item.price}
                </span>

                <button
                  className="px-4 py-1.5 text-sm bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                  onClick={() => handleAdd(item)}
                >
                  Add +
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Note */}
      <div className="mt-12 text-center text-sm text-gray-400">
        *Pure vegetarian dishes. Images are for representation purposes only.
      </div>
    </div>
  );
}

export default Veg;
