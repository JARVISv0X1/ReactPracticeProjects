import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./counterReducer";
import { cartSlice } from "./cartSlice";
import { userAuthSlice } from "./UserAuth";

const store = configureStore({
  reducer: {
    counterState: counterSlice.reducer,
    cartState: cartSlice.reducer,
    userAuth: userAuthSlice.reducer,
  },
});

export default store;
