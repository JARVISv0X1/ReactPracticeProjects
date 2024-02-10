export default function GameBoard({ onSelectSquare, board, hasWinner }) {
  return (
    <>
      <ol id="game-board">
        {board.map((row, rowIndex) => {
          return (
            <>
              <li key={rowIndex}>
                <ol>
                  {row.map((playerSymbol, colIndex) => {
                    return (
                      <>
                        <li key={colIndex}>
                          <button
                            onClick={() => onSelectSquare(rowIndex, colIndex)}
                            disabled={
                              playerSymbol != null ||
                              hasWinner != null ||
                              hasWinner != undefined
                            }
                          >
                            {playerSymbol}
                          </button>
                        </li>
                      </>
                    );
                  })}
                </ol>
              </li>
            </>
          );
        })}
      </ol>
    </>
  );
}
