import { useState } from "react";

export default function NewTask({ addTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  function handleChange(event) {
    setEnteredTask(event.target.value);
  }

  function handleClick() {
    if (
      enteredTask === "" ||
      enteredTask === undefined ||
      enteredTask === null
    ) {
      alert("Value can't be empty.");
    } else {
      addTask(enteredTask);
      setEnteredTask("");
    }
  }

  return (
    <div className="flex items-center gap-4">
      <input
        className="w-64 px-2 py-1 rounded-sm bg-stone-200 "
        type="text"
        value={enteredTask}
        onChange={handleChange}
      ></input>
      <button
        className="px-2 border-2 rounded-sm border-green-500 text-green-500 hover:text-green-600 hover:border-green-600"
        onClick={handleClick}
      >
        + Add Task
      </button>
    </div>
  );
}
