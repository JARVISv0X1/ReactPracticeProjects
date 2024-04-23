import { useEffect, useState } from "react";
import question from "../questions";
import ResultTable from "./ResultTable";

export default function QuestionRendering() {
  let [questionNo, setQuestionNumber] = useState(0);
  let [activeQuestion, setActiveQuestion] = useState(question[questionNo]);
  let [selQuesAnswer, setSelQuesAnswer] = useState([]);
  let [result, setResult] = useState(false);
  useEffect(() => {
    // console.log("newQuesNo: " + questionNo);
    // console.log("activeQuestion: " + activeQuestion);
    setActiveQuestion(() => {
      return question[questionNo];
    });
    console.log(selQuesAnswer);
  }, [questionNo]);

  function selectedAnswer(qId, ques, answer) {
    let id = qId;
    let secQues = ques;
    let selAnswer = answer;
    if (selAnswer === activeQuestion.answers[0]) {
      setSelQuesAnswer((prevAns) => {
        return [
          ...prevAns,
          { qid: id, ques: secQues, ans: selAnswer, result: "right" },
        ];
      });
    } else {
      setSelQuesAnswer((prevAns) => {
        return [
          ...prevAns,
          { qid: id, ques: secQues, ans: selAnswer, result: "wrong" },
        ];
      });
    }

    // console.log(selQuestion, selAnswer);
    console.log(questionNo + " " + question.length);
    if (questionNo < question.length - 1) {
      console.log(questionNo + " " + question.length);
      setQuestionNumber((prevQuesNo) => {
        // console.log("prevQuesNo: " + prevQuesNo);
        return prevQuesNo + 1;
      });
    } else {
      alert("Quiz Over");
      setResult(true);
      setQuestionNumber((prevQuesNo) => {
        // console.log("prevQuesNo: " + prevQuesNo);
        return prevQuesNo * 0;
      });
    }
  }
  return (
    <>
      <ul>
        {activeQuestion.text}
        {activeQuestion.answers.map((answer, index) => {
          return (
            <li key={index}>
              <button
                onClick={() =>
                  selectedAnswer(activeQuestion.id, activeQuestion.text, answer)
                }
              >
                {answer}
              </button>
            </li>
          );
        })}
      </ul>
      {result ? <ResultTable result={selQuesAnswer}></ResultTable> : ""}
    </>
  );
}
