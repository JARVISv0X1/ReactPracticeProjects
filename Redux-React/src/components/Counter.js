import classes from "./Counter.module.css";
// import store from "../store/reactStore";
import { useDispatch, useSelector } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const toggleCounterHandler = (val) => {
    dispatch({ type: val });
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <button onClick={() => toggleCounterHandler("inc")}>inc Counter</button>
      <button onClick={() => toggleCounterHandler("dec")}>dec Counter</button>
    </main>
  );
};

export default Counter;
