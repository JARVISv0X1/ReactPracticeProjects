import logoImg from "../assets/quiz-logo.png";
import "../index.css";

export default function Header() {
  return (
    <header>
      <img src={logoImg} width="10%"></img>
      <h1>React Quiz</h1>
    </header>
  );
}
