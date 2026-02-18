import {configureStore} from "@reduxjs/toolkit";
import cartReducer from "../Features/cartSlice";
import favReducer from "../Features/favSlice";
export const store = configureStore({
    reducer:{
        cart:cartReducer,
        fav:favReducer,
    },
})