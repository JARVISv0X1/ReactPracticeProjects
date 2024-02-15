import calculatorLogo from "../assets/investment-calculator-logo.png";

export default function Header({ onReplace }) {
  return (
    <>
      <div id="header">
        <img src={calculatorLogo} alt="Logo" />
        <h1>Investment Calculator</h1>
        <div id="user-input">
          <div className="input-group">
            <label>INITIAL INVESTMENT</label>
            <input
              type="text"
              name="initialInvestment"
              id="initialInvestment"
              onChange={onReplace}
            />

            <label>ANNUAL INVESTMENT</label>
            <input
              type="text"
              name="annualInvestment"
              id="annualInvestment"
              onChange={onReplace}
            />
          </div>
          <div className="input-group">
            <label>EXPECTED RETURN</label>
            <input
              type="text"
              name="expectedReturn"
              id="expectedReturn"
              onChange={onReplace}
            />

            <label>DURATION</label>
            <input
              type="text"
              name="duration"
              id="duration"
              onChange={onReplace}
            />
          </div>
        </div>
      </div>
    </>
  );
}
