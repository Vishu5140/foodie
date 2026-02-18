import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  favItems: JSON.parse(localStorage.getItem("favItems")) || [],
};

const favSlice = createSlice({
  name: "fav",
  initialState,
  reducers: {

    //  ADD TO FAVOURITES
    addToFav(state, action) {
      const newItem = action.payload;
      const existingItem = state.favItems.find(
        (item) => item.id === newItem.id
      );

      if (!existingItem) {
        state.favItems.push(newItem);
        localStorage.setItem(
          "favItems",
          JSON.stringify(state.favItems)
        );
      }
    },

    // REMOVE FROM FAVOURITES
    removeFromFav(state, action) {
      state.favItems = state.favItems.filter(
        (item) => item.id !== action.payload.id
      );

      localStorage.setItem(
        "favItems",
        JSON.stringify(state.favItems)
      );
    },

    // CLEAR ALL FAVOURITES (OPTIONAL)
    clearFav(state) {
      state.favItems = [];
      localStorage.removeItem("favItems");
    },
  },
});

export const { addToFav, removeFromFav, clearFav } = favSlice.actions;
export default favSlice.reducer;
