export default function UserInput({ onReplace }) {
  return (
    <>
      <section id="user-input">
        <div className="input-group">
          <p>
            <label>INITIAL INVESTMENT</label>
            <input
              type="number"
              name="initialInvestment"
              id="initialInvestment"
              onChange={onReplace}
            />
          </p>

          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              name="annualInvestment"
              id="annualInvestment"
              onChange={onReplace}
            />
          </p>
        </div>
        <div className="input-group">
          <p>
            <label>EXPECTED RETURN</label>
            <input
              type="number"
              name="expectedReturn"
              id="expectedReturn"
              onChange={onReplace}
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              name="duration"
              id="duration"
              onChange={onReplace}
            />
          </p>
        </div>
      </section>
    </>
  );
}
