export default function GameOver({ winner, hasDraw, onSelect }) {
  return (
    <>
      <div id="game-over">
        <h1>GameOver</h1>
        {winner ? <p>{winner} Won</p> : ""}
        {(hasDraw && !winner) ? <p>Match Draw</p> : ""}
        <p>
          <button onClick={onSelect}>Rematch</button>
        </p>
      </div>
    </>
  );
}
