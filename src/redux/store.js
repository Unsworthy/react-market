import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice"
import cartReducer from "./cartSlice"

export default configureStore({
    reducer: {
        cart: cartReducer,
        product: productReducer
    }
})