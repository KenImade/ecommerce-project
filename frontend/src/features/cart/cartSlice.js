import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const SALES_URL = 'http://localhost:3500/sales';

const initialState = {
    cart: [],
}

export const postSale = createAsyncThunk("sales/post", async (sale) => {
    const response = await axios.post(SALES_URL, sale)
    return response.data;
})

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
    },
    extraReducers(builder) {
        builder.addCase(postSale.fulfilled, (state, action) => {
            console.log("Sale completed")
        })
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