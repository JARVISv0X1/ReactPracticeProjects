import { useState, useEffect } from "react";
import Header from "./component/Header";
import ResultTable from "./component/ResultTable";
import UserInput from "./component/UserInput";

function App() {
  let [investmentData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });

  function handleInput(e) {
    const { name, value } = e.target;
    if (value < 1) {
      alert("Invalid Entry");
    } else {
      setInvestmentData((prev) => {
        return {
          ...prev,
          [name]: value,
        };
      });
    }
  }

  return (
    <>
      <Header />
      <UserInput onReplace={handleInput} />
      <ResultTable resultData={{ ...investmentData }} />
    </>
  );
}

export default App;
