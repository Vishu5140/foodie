import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromFav } from "../Features/favSlice";

function Favourite() {
  const dispatch = useDispatch();
  const favItems = useSelector((state) => state.fav.favItems);

  const handleRemove = (id) => {
    dispatch(removeFromFav({ id }));
  };

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">
        Your Favourites ❤️
      </h1>

      {favItems.length === 0 ? (
        <p className="text-gray-500 text-center mt-20">
          No favourites added yet.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {favItems.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />

              {/* Content */}
              <div className="p-4 flex flex-col gap-2">
                <h2 className="font-semibold text-lg">{item.name}</h2>

                <p className="text-orange-600 font-bold text-lg">
                  ₹{item.price}
                </p>

                <button
                  onClick={() => handleRemove(item.id)}
                  className="mt-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favourite;
