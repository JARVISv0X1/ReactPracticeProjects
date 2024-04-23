export default function ResultTable({ result }) {
  return (
    <>
      <table>
        <tr>
          <th>Question Id</th>
          <th>Question</th>
          <th>Your Answer</th>
          <th>Result</th>
        </tr>
        {result.map((finalResult) => {
          return (
            <tr>
              <td>{finalResult.qid}</td>
              <td>{finalResult.ques}</td>
              <td>{finalResult.ans}</td>
              <td>{finalResult.result}</td>
            </tr>
          );
        })}
      </table>
    </>
  );
}
