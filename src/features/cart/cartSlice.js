import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemLists: [],
    totalItemsQuantity: 0,
    isShowCart: false,
    isChanged: false,
  },
  reducers: {
    showCart(state) {
      state.isShowCart = !state.isShowCart;
    },
    replaceData(state, action) {
      state.itemLists = action.payload.itemLists;
      state.totalItemsQuantity = action.payload.totalItemsQuantity;
    },
    addToCart(state, action) {
      state.isChanged = true;
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
    removeFromCart(state, action) {
      state.isChanged = true;
      const id = action.payload;
      const existingItem = state.itemLists.find((item) => item.id === id);
      if (existingItem.quantity === 1) {
        state.itemLists = state.itemLists.filter((item) => item.id !== id);
        state.totalItemsQuantity--;
      } else {
        existingItem.quantity--;
        existingItem.totalPrice -= existingItem.price;
      }
    },
  },
});

export default cartSlice.reducer;
export const cartActions = cartSlice.actions;
