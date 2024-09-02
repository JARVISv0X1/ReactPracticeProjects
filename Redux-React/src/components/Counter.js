import classes from "./Counter.module.css";
// import store from "../store/reactStore";
import { useDispatch, useSelector } from "react-redux";
import { counterAction } from "../store/counterReducer";

const Counter = () => {
  const { counter } = useSelector((state) => state.counterState);
  console.log(counter);
  const dispatch = useDispatch();

  const incrementHandler = () => {
    dispatch(counterAction.increment());
  };
  const decrementHandler = () => {
    dispatch(counterAction.decrement());
  };
  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={incrementHandler}>inc Counter</button>
      <button onClick={decrementHandler}>dec Counter</button>
    </main>
  );
};

export default Counter;
