import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [], // Array of { productId, name, price, image, quantity }
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { productId, name, price, image } = action.payload;
      const existingItem = state.items.find(
        (item) => item.productId === productId
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          productId,
          name,
          price,
          image,
          quantity: 1,
        });
      }
    },
    incrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.productId === action.payload
      );
      if (item) {
        item.quantity += 1;
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.items.find(
        (item) => item.productId === action.payload
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter(
        (item) => item.productId !== action.payload
      );
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const {
  addToCart,
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
