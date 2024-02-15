import { useState, useEffect } from "react";
import Header from "./component/Header";
import ResultTable from "./component/ResultTable";

function App() {
  let [investmentData, setInvestmentData] = useState({
    initialInvestment: "",
    annualInvestment: "",
    expectedReturn: "",
    duration: "",
  });
  useEffect(() => {}, [investmentData]);

  function handleInput(e) {
    const { name, value } = e.target;
    if (value < 1) {
      alert("Invalid Entry");
    } else {
      setInvestmentData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  }

  return (
    <>
      <Header onReplace={handleInput} />
      <ResultTable resultData={{ ...investmentData }} />
    </>
  );
}

export default App;
