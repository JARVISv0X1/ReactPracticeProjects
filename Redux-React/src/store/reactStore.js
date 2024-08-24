import { createStore } from "redux";

const counterreducer = (state = { counter: 0 }, action) => {
  if (action.type === "inc") {
    console.log(state);
    return { counter: state.counter + 1 };
  }
  if (action.type === "dec") {
    console.log(state);
    return { counter: state.counter - 1 };
  }
  return { counter: state.counter };
};

const store = createStore(counterreducer);

export default store;
