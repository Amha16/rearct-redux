import { configureStore } from "@reduxjs/toolkit";
import uiSlice from "./ui-Slice";
import cartSlice from "./cart-slice";
const store = configureStore({
    reducer: {ui: uiSlice.reducer , cart:cartSlice}
});

export default store;