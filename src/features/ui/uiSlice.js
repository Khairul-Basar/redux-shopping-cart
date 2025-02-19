import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    notification: null,
  },
  reducers: {
    showNotification(state, action) {
      state.notification = {
        message: action.payload.message,
        type: action.payload.type,
        open: action.payload.open,
      };
    },
  },
});

export default uiSlice.reducer;
export const uiActions = uiSlice.actions;
