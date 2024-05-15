import { useCallback, useState } from "react";
import question from "../questions";
import QuestionTimer from "./QuestionTimer";
import Summary from "./Summary";
export default function Quiz() {
  let [userAnswers, setUserAnswers] = useState([]);
  let [answerSelected, setAnswerSelected] = useState(false);
  const activeQuestionIndex = userAnswers.length;
  const quizIsCompleted = activeQuestionIndex === question.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    if (
      selectedAnswer !== "" ||
      selectedAnswer !== null ||
      selectedAnswer !== undefined
    ) {
      setAnswerSelected(true);
    } else {
      setAnswerSelected(false);
    }
    setUserAnswers((prevUserAnswers) => {
      return [
        ...prevUserAnswers,
        {
          answer: selectedAnswer,
        },
      ];
    });
  },
  []);

  const handleSkipAnswer = useCallback(
    () => handleSelectAnswer(null),
    [handleSelectAnswer]
  );

  if (quizIsCompleted) {
    return <Summary useranswers={userAnswers}></Summary>;
  }

  const suffeledAnswers = [...question[activeQuestionIndex].answers];
  suffeledAnswers.sort(() => Math.random() - 0.5);
  return (
    <div id="quiz">
      <div id="question">
        <QuestionTimer
          key={activeQuestionIndex}
          onTimeout={handleSkipAnswer}
          timeout={10000}
        ></QuestionTimer>
        <h2>{question[activeQuestionIndex].text}</h2>
        <ul id="answers">
          {suffeledAnswers.map((answer) => {
            return (
              <li key={answer} className="answer">
                <button
                  className={answerSelected ? "selected" : ""}
                  onClick={() => handleSelectAnswer(answer)}
                >
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
