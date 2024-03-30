import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./appSlices/cartSlice";

const appStore = configureStore({
  reducer: {
    cart: cartSlice
  }
})

export default appStore;