import { createSlice } from "@reduxjs/toolkit";
import product1 from "../assets/Dm-1.jpg";
import product2 from "../assets/Imperium.jpg";
import product3 from "../assets/gp-ph.jpg";

export const productSlice = createSlice({
    name: "product",
    initialState: [

        {
            id: 1,
            product_name: "Aemodir",
            description: "Aemodir adalah produk terbaru dari kami",
            stock: 100,
            price: 200000,
            product_type: "Account",
            product_image: product1,
        },
        {
            id: 2,
            product_name: "imperium",
            description: "Imperium adalah produk terbaru dari kami",
            stock: 1,
            price: 200000,
            product_type: "Account",
            product_image: product2,
        },
        {
            id: 3,
            product_name: "gh-ph",
            description: "gh-ph adalah produk terbaru dari kami",
            stock: 1,
            price: 200000,
            product_type: "Account",
            product_image: product3,
        },

    ],
    reducers: {
        addToCartProduct: (state, payload) => {
            const findProduct = state.find(p => p.id === payload.payload.id)

            if (findProduct.stock === 0) {
                alert("this account is sold")
                return
            }
            state?.map(s => {
                if (s.id === findProduct.id) {
                    s.stock -= 1
                }
            })
        }
    }
})

export const { addToCartProduct } = productSlice.actions
export default productSlice.reducer