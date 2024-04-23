import { useState } from "react";
import question from "../questions";
export default function Quiz() {
  let [userAnswers, setUserAnswers] = useState([]);

  const activeQuestionIndex = userAnswers.length;
  function handleSelectAnswer(selectedAnswer) {
    setUserAnswers((prevUserAnswers) => {
      return [
        ...prevUserAnswers,
        {
          question: question[activeQuestionIndex].text,
          answer: selectedAnswer,
        },
      ];
    });
  }
  return (
    <div id="quiz">
      <div id="question">
        <h2>{question[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {question[activeQuestionIndex].answers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button onClick={() => handleSelectAnswer(answer)}>
                  {answer}
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
