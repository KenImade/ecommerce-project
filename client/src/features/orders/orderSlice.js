import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_ORDER = `
  mutation AddOrder($user: UserInput!, $items: [ItemInput!]!, $total: Float!) {
    addOrder(user: $user, items: $items, total: $total) {
      id
    }
  }
`;

export const postOrder = createAsyncThunk('order/postOrder', async (orderData) => {
  const response = await axios.post(process.env.REACT_APP_BACKEND_ENDPOINT, {
    query: ADD_ORDER,
    variables: orderData,
  });
  console.log(response.data)
  return response.data;
});

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    order: {},
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(postOrder.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(postOrder.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.order = action.payload;
      })
      .addCase(postOrder.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default orderSlice.reducer;