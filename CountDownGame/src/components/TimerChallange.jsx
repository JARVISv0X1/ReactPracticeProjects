import { useState, useRef } from "react";
import ResultModal from "./ResultModal";
export default function TimerChallange({ title, targetTime }) {
  const [startTimer, setStartTimer] = useState(false);
  const [endTimer, setEndTimer] = useState(false);
  let timer = useRef();
  const dialog = useRef();

  function handleStart() {
    timer.current = setTimeout(() => {
      setEndTimer(true);
      dialog.current.showModal();
    }, targetTime * 1000);
    setStartTimer(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    console.log("timer.current: " + timer.current);
    setEndTimer(false);
    setStartTimer(false);
    console.log("TimerStoped");
  }
  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="Lost" />
      <section className="challenge">
        <h1>{title}</h1>
        {/* {endTimer ? <p> You Lost</p> : undefined} */}
        <p className="challenge-time">
          {targetTime} secound{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={startTimer ? handleStop : handleStart}>
            {startTimer ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={startTimer ? "active" : undefined}>
          {startTimer ? "Times Running..." : "Timer Inactive"}
        </p>
      </section>
    </>
  );
}
