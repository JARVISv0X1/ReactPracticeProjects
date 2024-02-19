import { useState } from "react";
import Player from "./components/Player.jsx";

function App() {
  let [playerName, setPlayerName] = useState("unknown entity");
  function updatePlayerName(updatedName) {
    setPlayerName(updatedName);
  }
  return (
    <>
      <Player playerName={playerName} onSelect={updatePlayerName} />
      <div id="challenges"></div>
    </>
  );
}

export default App;
