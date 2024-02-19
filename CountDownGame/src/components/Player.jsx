import { useRef } from "react";

export default function Player({ playerName, onSelect }) {
  let playerNewName = useRef();

  function saveUpdatedName(playerNewName) {
    if (playerNewName.current.value !== "") {
      let uName = playerNewName.current.value;
      onSelect(uName.toUpperCase());
      playerNewName.current.value = "";
    } else {
      onSelect("unknown entity");
    }
  }
  return (
    <section id="player">
      <h2>Welcome {playerName}</h2>
      <p>
        <input type="text" ref={playerNewName} />
        <button onClick={() => saveUpdatedName(playerNewName)}>Set Name</button>
      </p>
    </section>
  );
}
