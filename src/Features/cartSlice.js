import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || [],
  totalAmount: JSON.parse(localStorage.getItem("totalAmount")) || 0,
  totalQuantity: JSON.parse(localStorage.getItem("totalQuantity")) || 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
  const newItem = action.payload;
  const existingItem = state.cartItems.find(item => item.id === newItem.id);

  if (existingItem) {
    existingItem.quantity += newItem.quantity;
  } else {
    state.cartItems.push({...newItem});
  }

  state.totalQuantity += newItem.quantity;
  state.totalAmount += newItem.price * newItem.quantity;

  // Persist in localStorage
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
  localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
},

removeFromCart(state, action) {
  const index = state.cartItems.findIndex(item => item.id === action.payload.id);
  if (index !== -1) {
    state.totalAmount -= state.cartItems[index].price * state.cartItems[index].quantity;
    state.totalQuantity -= state.cartItems[index].quantity;
    state.cartItems.splice(index, 1);

    // Persist in localStorage
    localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
    localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
  }
},


    // Optional: Decrease quantity
   decreaseQuantity(state, action) {
  const existingItem = state.cartItems.find(
    (item) => item.id === action.payload.id
  );

  if (existingItem) {
    if (existingItem.quantity > 1) {
      // Decrease quantity
      existingItem.quantity -= 1;
      state.totalQuantity -= 1;
      state.totalAmount -= existingItem.price;
    } else {
      // If quantity is 1, remove the item completely
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload.id
      );
      state.totalQuantity -= 1;
      state.totalAmount -= existingItem.price;
    }
  }

 
  localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
  localStorage.setItem("totalQuantity", JSON.stringify(state.totalQuantity));
  localStorage.setItem("totalAmount", JSON.stringify(state.totalAmount));
},

  },
});

export const { addToCart, removeFromCart, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
