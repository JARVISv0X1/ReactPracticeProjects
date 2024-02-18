import { useState, useEffect } from "react";
import Header from "./component/Header";
import ResultTable from "./component/ResultTable";
import UserInput from "./component/UserInput";
import { formatter } from "./util/investment";

function App() {
  let [investmentData, setInvestmentData] = useState({
    initialInvestment: 1000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = investmentData.duration >= 1;
  function handleInput(e) {
    const { name, value } = e.target;
    setInvestmentData((prev) => {
      return {
        ...prev,
        [name]: +value,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onReplace={handleInput} values={investmentData} />
      {inputIsValid ? (
        <ResultTable resultData={investmentData} formatter={formatter} />
      ) : (
        <p className="center">Please enter a duration greater than 0</p>
      )}
    </>
  );
}

export default App;
