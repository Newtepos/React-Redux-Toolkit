import { createSlice } from "@reduxjs/toolkit";

const defaultPage = { isDisplayShoppingCart: true, notification: null };

const pageSlice = createSlice({
  name: 'page',
  initialState: defaultPage,
  reducers: {
    toogle(state) {
      state.isDisplayShoppingCart = !state.isDisplayShoppingCart;
    },

    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.title,
        message: action.payload.message
      }
    },

    resetNotification(state) {
      state.notification = null
    }
  },
});


export const pageAction = pageSlice.actions;

export default pageSlice.reducer