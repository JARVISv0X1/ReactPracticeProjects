export default function UserInput({ onReplace, values }) {
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
              value={values.initialInvestment}
              onChange={onReplace}
              required
            />
          </p>

          <p>
            <label>ANNUAL INVESTMENT</label>
            <input
              type="number"
              name="annualInvestment"
              id="annualInvestment"
              value={values.annualInvestment}
              onChange={onReplace}
              required
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
              value={values.expectedReturn}
              onChange={onReplace}
              required
            />
          </p>
          <p>
            <label>DURATION</label>
            <input
              type="number"
              name="duration"
              id="duration"
              value={values.duration}
              onChange={onReplace}
              required
            />
          </p>
        </div>
      </section>
    </>
  );
}
