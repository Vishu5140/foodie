import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../Features/cartSlice";
import { addToFav } from "../Features/favSlice";

function NonContent() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [nonfood, setNonfood] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    axios
      .get("https://nonveg.vercel.app/api/nonveg")
      .then((res) => {
        const item = res.data.nonfood.find(
          (item) => String(item.id) === id
        );
        setNonfood(item);
      })
      .catch((err) => console.error(err));
  }, [id]);

  if (!nonfood) {
    return (
      <p className="text-center text-red-500 mt-10">
        Food item not found
      </p>
    );
  }

  const increaseQty = () => setQuantity(quantity + 1);
  const decreaseQty = () => setQuantity(quantity > 1 ? quantity - 1 : 1);
  const totalPrice = nonfood.price * quantity;

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 via-white to-rose-100 flex items-center justify-center px-4 py-10">

      <div className="relative w-full max-w-sm sm:max-w-md bg-white/70 backdrop-blur-xl rounded-2xl shadow-xl overflow-hidden">

        {/* ❤️ Favourite */}
        <button
          onClick={() => {
            setIsFav(!isFav);
            dispatch(
              addToFav({
                id: nonfood.id,
                name: nonfood.name,
                price: nonfood.price,
                image: nonfood.path,
                quantity,
              })
            );
            navigate("/favourite");
          }}
          className={`absolute top-4 right-4 z-10
            w-10 h-10 rounded-full flex items-center justify-center
            border transition-all duration-300
            ${
              isFav
                ? "bg-red-500 text-white"
                : "bg-white text-red-500 border-red-400 hover:bg-red-500 hover:text-white"
            }
          `}
        >
          Fav
        </button>

        {/* 🖼️ Image */}
        <img
          src={nonfood.path}
          alt={nonfood.name}
          className="w-full h-52 sm:h-60 object-cover"
        />

        {/* 📄 Content */}
        <div className="p-5">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            {nonfood.name}
          </h1>

          <p className="text-gray-600 mt-2 text-sm">
            Delicious non-veg dish prepared with rich spices.
          </p>

          {/* 💰 Price */}
          <p className="text-2xl font-semibold text-orange-600 mt-4">
            ₹{totalPrice}
          </p>

          {/* 🔢 Quantity */}
          <div className="flex items-center justify-between mt-5">
            <span className="text-gray-600 font-medium">Quantity</span>

            <div className="flex items-center gap-3">
              <button
                onClick={decreaseQty}
                className="w-9 h-9 rounded-full bg-gray-200"
              >
                −
              </button>

              <span className="font-semibold">{quantity}</span>

              <button
                onClick={increaseQty}
                className="w-9 h-9 rounded-full bg-orange-500 text-white"
              >
                +
              </button>
            </div>
          </div>

          {/* 🛒 Add to Cart */}
          <button
            onClick={() => {
              dispatch(
                addToCart({
                  id: nonfood.id,
                  name: nonfood.name,
                  price: nonfood.price,
                  image: nonfood.path,
                  quantity,
                })
              );
              navigate("/cartlist");
            }}
            className="mt-6 w-full py-3 rounded-xl 
                       bg-linear-to-r from-orange-500 to-rose-500 
                       text-white font-semibold"
          >
            Add to Cart • ₹{totalPrice}
          </button>
        </div>
      </div>
    </div>
  );
}

export default NonContent;
