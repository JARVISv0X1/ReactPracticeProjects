import quizCompleteLogo from "../assets/quiz-complete.png";
import question from "../questions";

export default function Summary({ useranswers }) {
  return (
    <div id="summary">
      <img src={quizCompleteLogo} alt="quizCompleteLogo" />
      <h2>QuizCompleted</h2>
      <div id="summary-stats"></div>
      <ol>
        {useranswers.map((ans, index) => {
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{question[index].text}</p>
              <p className="user-answer">{ans.answer}</p>
              {ans.answer === null ? (
                <p className="user-answer">Skiped</p>
              ) : question[index].answers[0] === ans.answer ? (
                <p className="user-answer">Correct</p>
              ) : (
                <p className="user-answer">Wrong</p>
              )}
            </li>
          );
        })}
      </ol>
    </div>
  );
}
