import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../Features/cartSlice";

const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const handleRemove = (id) => {
    dispatch(removeFromCart({ id }));
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Your cart is empty 🛒
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-orange-50 p-6">
      <h1 className="text-3xl font-bold mb-6 text-orange-600">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between bg-white rounded-xl p-4 shadow"
          >
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 object-cover rounded-lg"
              />
              <div>
                <h2 className="font-semibold text-lg">{item.name}</h2>
                <p className="text-gray-600">Qty: {item.quantity}</p>
                <p className="text-orange-600 font-bold">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            </div>
            <button
              onClick={() => handleRemove(item.id)}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 flex justify-end items-center gap-4">
        <span className="text-xl font-semibold">Total:</span>
        <span className="text-2xl font-bold text-orange-600">₹{totalAmount}</span>
      </div>
    </div>
  );
};

export default CartPage;
