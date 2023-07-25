import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const PRODUCTS_URL = 'http://localhost:5000/graphql';

const initialState = {
    products: [],
    status: "idle",
    error: null
}

export const fetchProducts = createAsyncThunk("products/fetch", async () => {
    try {
        const response = await axios.post(PRODUCTS_URL, {
            query: `
            query {
                getAllProducts {
                  id
                  title
                  tag
                  category
                  isNew
                  preview {
                    desktop
                    tablet
                    mobile
                  }
                  productImage {
                    desktop
                    tablet
                    mobile
                  }
                  info
                  price
                  quantity
                  features
                  accessories {
                    name
                    quantity
                  }
                  gallery {
                    desktop
                    tablet
                    mobile
                  }
                  cartImage
                }
              }
            `
        });
        // console.log(response.data.data.getAllProducts)
        return response.data.data.getAllProducts
    } catch (error) {
        console.error('Error fetching products:', error)
    }   
});


const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.products = []
                state.products = state.products.concat(action.payload)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
    }
})

export const selectAllProducts = (state) => state.products.products;
export const getProductsStatus = (state) => state.products.status;
export const getProductsError = (state) => state.products.error;

export default productsSlice.reducer;