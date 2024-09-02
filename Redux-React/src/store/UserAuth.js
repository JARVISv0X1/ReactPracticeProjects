import { createSlice } from "@reduxjs/toolkit";

const initialState = { isAuthenticate: false };

export const userAuthSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    login(state) {
      state.isAuthenticate = true;
      console.log(state.isAuthenticate);
    },
    logout(state) {
      console.log(state.isAuthenticate);
      state.isAuthenticate = false;
    },
  },
});

export const userAuthAction = userAuthSlice.actions;
