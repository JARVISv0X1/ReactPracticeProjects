import { useEffect, useState } from "react";
import iniitialGameBoard from "../iniitialGameBoard";
export default function GameBoard({ onSelectSquare, activePlayerSymbol }) {
  const [gameBoard, setGameBoard] = useState(iniitialGameBoard);
  let [playerWin, setPlayerWin] = useState("");
  let [chanceCount, setChanceCount] = useState(0);

  useEffect(() => {
    // to check row
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[i][0] !== null &&
        gameBoard[i][0] === gameBoard[i][1] &&
        gameBoard[i][1] === gameBoard[i][2]
      ) {
        setPlayerWin(() => activePlayerSymbol);
      }
    }
    // to check col
    for (let i = 0; i < 3; i++) {
      if (
        gameBoard[0][i] !== null &&
        gameBoard[0][i] === gameBoard[1][i] &&
        gameBoard[1][i] === gameBoard[2][i]
      ) {
        setPlayerWin(() => activePlayerSymbol);
      }
    }

    if (
      gameBoard[0][0] !== null &&
      gameBoard[0][0] === gameBoard[1][1] &&
      gameBoard[1][1] === gameBoard[2][2]
    ) {
      setPlayerWin(() => activePlayerSymbol);
    }
    if (
      gameBoard[0][2] !== null &&
      gameBoard[0][2] === gameBoard[1][1] &&
      gameBoard[1][1] === gameBoard[2][0]
    ) {
      setPlayerWin(() => activePlayerSymbol);
    }
  }, [gameBoard]);

  function handleSelectSquare(rowIndex, colIndex) {
    setChanceCount(() => ++chanceCount);
    setGameBoard((prevGameBoard) => {
      const updateGameBoard = [
        ...prevGameBoard.map((innerArray) => [...innerArray]),
      ];
      console.log(
        `updateGameBoard[${rowIndex}][${colIndex}]: ${updateGameBoard[rowIndex][colIndex]}`
      );
      if (playerWin === "") {
        if (chanceCount < 9) {
          if (updateGameBoard[rowIndex][colIndex] === null) {
            updateGameBoard[rowIndex][colIndex] = activePlayerSymbol;
            onSelectSquare();
            return updateGameBoard;
          } else {
            alert("This position is already taken");
            return updateGameBoard;
          }
        } else {
          alert("Match Draw.");
          return updateGameBoard;
        }
      } else {
        alert("Game Over.");
        return updateGameBoard;
      }
    });
  }

  return (
    <>
      {playerWin === "" ? (
        ""
      ) : (
        <h1 id="playerWinText">
          Player Win: {activePlayerSymbol === "X" ? "O" : "X"}
        </h1>
      )}
      <ol id="game-board">
        {gameBoard.map((row, rowIndex) => {
          return (
            <>
              <li key={rowIndex}>
                <ol>
                  {row.map((playerSymbol, colIndex) => {
                    return (
                      <>
                        <li key={colIndex}>
                          <button
                            onClick={() =>
                              handleSelectSquare(rowIndex, colIndex)
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
