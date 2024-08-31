import { createStore } from "redux";

export const INCREMENT = "inc";
export const DECREMENT = "dec";

const counterreducer = (state = { counter: 0 }, action) => {
  if (action.type === INCREMENT) {
    console.log(state);
    return { counter: state.counter + 1 };
  }
  if (action.type === DECREMENT) {
    console.log(state);
    return { counter: state.counter - 1 };
  }
  return { counter: state.counter };
};

const store = createStore(counterreducer);

export default store;
