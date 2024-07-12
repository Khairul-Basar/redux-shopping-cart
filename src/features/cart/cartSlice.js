import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemLists: [],
    totalItemsQuantity: 0,
    isShowCart: false,
  },
  reducers: {
    showCart(state, action) {
      state.isShowCart = true;
    },
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemLists.find(
        (item) => item.id === newItem.id
      );
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice += newItem.price;
      } else {
        state.itemLists.push({
          id: newItem.id,
          name: newItem.name,
          quantity: 1,
          price: newItem.price,
          totalPrice: newItem.price,
        });
        state.totalItemsQuantity++;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
