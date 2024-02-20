import { useState } from "react";
import Player from "./components/Player.jsx";
import TimerChallange from "./components/TimerChallange.jsx";

function App() {
  let [playerName, setPlayerName] = useState("unknown entity");
  function updatePlayerName(updatedName) {
    setPlayerName(updatedName);
  }
  
  return (
    <>
      <Player playerName={playerName} onSelect={updatePlayerName} />
      <div id="challenges">
        <TimerChallange title={"Easy"} targetTime={1} />
        <TimerChallange title={"Not Easy"} targetTime={5} />
        <TimerChallange title={"Getting tough"} targetTime={10} />
        <TimerChallange title={"Pros only"} targetTime={15} />
      </div>
    </>
  );
}

export default App;
