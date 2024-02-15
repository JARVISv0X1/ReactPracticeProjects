import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({ resultData }) {
  const tableResult = calculateInvestmentResults({ ...resultData });
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
            return (
              <>
                <tr>
                  <td>{tableData.year}</td>
                  <td>{tableData.valueEndOfYear}</td>
                  <td>{tableData.interest}</td>
                  <td>{tableData.year}</td>
                  <td>
                    {tableData.annualInvestment +
                      parseFloat(resultData.initialInvestment)}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
