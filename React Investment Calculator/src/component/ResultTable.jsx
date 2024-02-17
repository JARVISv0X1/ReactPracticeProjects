import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ resultData, formatter }) {
  console.log(resultData);
  const tableResult = calculateInvestmentResults(resultData);
  const initialInvestment =
    tableResult[0].valueEndOfYear -
    tableResult[0].interest -
    tableResult[0].annualInvestment;
  console.log(tableResult);
  return (
    <>
      <table id="result">
        <thead>
          <tr>
            <td>Year</td>
            <td>Investment Value</td>
            <td>Interest(Year)</td>
            <td>Total Interest</td>
            <td>Invested Capital</td>
          </tr>
        </thead>
        <tbody>
          {tableResult.map((tableData) => {
            const totalInterest =
              tableData.valueEndOfYear -
              tableData.annualInvestment * tableData.year -
              initialInvestment;
            const totalAmountInvested =
              tableData.valueEndOfYear - totalInterest;
            return (
              <>
                <tr key={tableData.year}>
                  <td>{tableData.year}</td>
                  <td>{formatter.format(tableData.valueEndOfYear)}</td>
                  <td>{formatter.format(tableData.interest)}</td>
                  <td>{formatter.format(totalInterest)}</td>
                  <td>{formatter.format(totalAmountInvested)}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
