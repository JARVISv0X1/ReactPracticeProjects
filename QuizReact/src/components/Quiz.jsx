import { useState } from "react";
import QuestionRendering from "./QuestionRendering";
export default function Quiz() {
  let [startQuiz, setStartQuiz] = useState(false);
  return (
    <>
      {startQuiz ? (
        <QuestionRendering></QuestionRendering>
      ) : (
        <button onClick={() => setStartQuiz(true)}>Start Quiz</button>
      )}
    </>
  );
}
