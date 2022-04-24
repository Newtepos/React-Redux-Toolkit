import { createSlice } from "@reduxjs/toolkit";

const defaultProduct = {
  item: [],
  totalQuantity: 0,
  change: false
};

const productSlice = createSlice({
  name: "product",
  initialState: defaultProduct,
  reducers: {
    replaceCartItem(state, action) {
      const newItems = action.payload ? action.payload : [];
      if(newItems.length !== 0)
      {
        const totalQuantity = newItems.map(items => items.quantity).reduce((prev, amount) => prev + amount);
        state.totalQuantity = totalQuantity;
      } else {
        state.totalQuantity = 0;
      }

      state.item = newItems;
      
    },

    addItemToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);

      if (!existingItem) {
        state.item.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totolPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totolPrice = existingItem.totolPrice + newItem.price;
      }

      //UpdateItem in Cart
      state.totalQuantity++;
      state.change = true;
    },

    removeItemFromCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.item.find((item) => item.id === newItem.id);

      if (existingItem.quantity === 1) {
        const filteredItem = state.item.filter(
          (item) => item.id !== newItem.id
        );
        state.item = filteredItem;
      } else {
        existingItem.quantity--;
        existingItem.totolPrice = existingItem.totolPrice - existingItem.price;
      }

      //UpdateItem in Cart
      state.totalQuantity--;
      state.change = true;
    },
  },
});

export const productAction = productSlice.actions;
export default productSlice.reducer;
