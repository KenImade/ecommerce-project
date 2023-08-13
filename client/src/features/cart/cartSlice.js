import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cart: [],
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, action) => {
            const itemInCart = state.cart.find(item => item.id === action.payload.id)
            if (itemInCart) {
                itemInCart.quantity += action.payload.quantity
            } else {
                state.cart.push(action.payload)
            }
        },
        removeItem: (state, action) => {
            state.cart = state.cart.filter(item => item.id !== action.payload.id)
        },
        increaseQuantity: (state, action) => {
            const item = state.cart.find((item, index) => item.id === action.payload.id);
            item.quantity++;
        },
        decreaseQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload.id);
            item.quantity === 1 ? item.quantity = 1 : item.quantity--;
        },
        removeAllItems: (state, action) => {
            state.cart = []
        },
    }
})

export const {
    addItem,
    removeItem,
    increaseQuantity,
    decreaseQuantity,
    removeAllItems
} = cartSlice.actions;

export const getCart = (state) => state.cart.cart;

export default cartSlice.reducer;