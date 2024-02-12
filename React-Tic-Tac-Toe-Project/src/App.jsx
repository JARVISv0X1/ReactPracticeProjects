import GameBoard from "./components/GameBoard";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";
import { WINNING_COMBINATIONS } from "./winning-combinations";
import iniitialGameBoard from "./iniitialGameBoard";
import GameOver from "./components/GameOver";

function deriveActivePlayer(gameTurn) {
  let currentPlayer = "X";
  if (gameTurn.length > 0 && gameTurn[0].player === "X") {
    currentPlayer = "O";
  }
  return currentPlayer;
}

function App() {
  const [gameTurn, setGameTurn] = useState([]);
  let activePlayer = deriveActivePlayer(gameTurn);

  let gameBoard = [...iniitialGameBoard.map((array) => [...array])];
  let winner;
  let hasDraw = gameTurn.length === 9 && !winner;

  for (let turn of gameTurn) {
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }

  for (const combinations of WINNING_COMBINATIONS) {
    const firstSquareSymbol =
      gameBoard[combinations[0].row][combinations[0].column];
    const secoundSquareSymbol =
      gameBoard[combinations[1].row][combinations[1].column];
    const thirdSquareSymbol =
      gameBoard[combinations[2].row][combinations[2].column];

    if (
      firstSquareSymbol &&
      firstSquareSymbol === secoundSquareSymbol &&
      firstSquareSymbol === thirdSquareSymbol
    ) {
      winner = firstSquareSymbol;
    }
  }

  function handleSelectSquare(rowIndex, colIndex) {
    setGameTurn((prevTurns) => {
      let currentPlayer = deriveActivePlayer(prevTurns);

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ];
      return updatedTurns;
    });
  }
  function resetGame() {
    setGameTurn([]);
  }
  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="player 1"
              symbol={"X"}
              isActive={activePlayer === "X"}
            ></Player>
            <Player
              name="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            ></Player>
          </ol>
          {(winner || hasDraw) && (
            <GameOver winner={winner} hasDraw={hasDraw} onSelect={resetGame} />
          )}
          <GameBoard
            onSelectSquare={handleSelectSquare}
            board={gameBoard}
            hasWinner={winner}
          ></GameBoard>
          <div id="resetBtn">
            <p>
              <button onClick={resetGame}>Rematch</button>
            </p>
          </div>
        </div>
        <Log turns={gameTurn}></Log>
      </main>
    </>
  );
}

export default App;
