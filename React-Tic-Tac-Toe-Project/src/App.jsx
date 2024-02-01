import GameBoard from "./components/GameBoard";
import Header from "./components/Header";
import Log from "./components/Log";
import Player from "./components/Player";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");
  function handleSelectSquare() {
    setActivePlayer((currActivePlayer) => {
      return currActivePlayer === "X" ? "O" : "X";
    });
  }
  return (
    <>
      {/* <Header></Header> */}
      <main>
        <div id="game-container">
          <ol id="players" className="highlight-player">
            <Player
              name="player 1"
              symbol="X"
              isActive={activePlayer === "X"}
            ></Player>
            <Player
              name="player 2"
              symbol="O"
              isActive={activePlayer === "O"}
            ></Player>
          </ol>
          <GameBoard
            onSelectSquare={handleSelectSquare}
            activePlayerSymbol={activePlayer}
          ></GameBoard>
        </div>
        <Log></Log>
      </main>
    </>
  );
}

export default App;
