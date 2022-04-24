import { configureStore } from "@reduxjs/toolkit";
import pageReducer from './pageSlice'
import productReducer from './productSlice'

const reduxStore = configureStore({
    reducer: {page: pageReducer, product: productReducer}
})

export default reduxStore;
