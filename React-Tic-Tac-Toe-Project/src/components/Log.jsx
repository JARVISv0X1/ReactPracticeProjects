export default function Log({ turns }) {
  return (
    <>
      <ol id="log">
        {turns.map((item) => {
          return (
            <>
              <li>{` ${item.player} Player Selected : ${item.square.row},${item.square.col}`}</li>
            </>
          );
        })}
      </ol>
    </>
  );
}
