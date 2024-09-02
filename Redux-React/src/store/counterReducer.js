import { createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, toggleCounter: true };

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
});

export const counterAction = counterSlice.actions;
