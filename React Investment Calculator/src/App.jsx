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

  function handleInput(e) {
    const { name, value } = e.target;
    if (value < 0) {
      alert(`${name} Invalid Entry`);
      setInvestmentData((prev) => {
        return {
          ...prev,
          [name]: 0,
        };
      });
    } else {
      setInvestmentData((prev) => {
        return {
          ...prev,
          [name]: +value,
        };
      });
    }
  }

  return (
    <>
      <Header />
      <UserInput onReplace={handleInput} values={investmentData} />
      <ResultTable resultData={investmentData} formatter={formatter} />
    </>
  );
}

export default App;
