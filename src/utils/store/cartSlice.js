import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const exitItemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id // Assuming you're using the item id as the unique identifier
      );
      if (exitItemIndex >= 0) {
        // Item already exists, update the quantity
        state.items[exitItemIndex].quantity += 1;
      } else {
        // Item doesn't exist, add a new item
        const updatedItem = {
          ...action.payload,
          quantity: 1,
          itemCards: action.payload.itemCards || [], // Ensure itemCards is defined
        };
        state.items.push(updatedItem);
      }
    },

    removeItem: (state, action) => {
      // Remove item from state.items based on item id
      state.items = state.items.filter((item) => item.id !== action.payload);

      // Optionally, you could also remove items if itemCards is empty, depending on your requirement:
      // state.items = state.items.filter((item) => item.itemCards.length > 0);
    },

    clearCart: (state) => {
      state.items = []; // Clear all items in the cart
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
