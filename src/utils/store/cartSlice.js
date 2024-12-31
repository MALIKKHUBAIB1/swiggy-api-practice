import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
      //mutating out state this is allowed in redux it will manage underthehood
      const exitItemIndex = state.items.findIndex(
        (item) => item.title === action.payload.title
      );

      if (exitItemIndex >= 0) {
        state.items[exitItemIndex].quantity += 1;
      } else {
        const updatedItem = {
          ...action.payload,
          quantity: 1,
        };
        state.items.push(updatedItem);
      }
    },
    removeItem: (state, action) => {
      state.items = state.items.map((item) => {
        return {
          ...item,
          itemCards: item.itemCards.filter(
            (itemCard) => itemCard.card.info.id !== action.payload
          ),
        };
      });
      state.items = state.items.filter((item) => item.itemCards.length > 0);
    },
    clearCart: (state) => {
      state.items.length = 0;
      //return {items: []} this is also fine
    },
  },
});
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
