import { useState } from "react";

export default function Player({ name, symbol, isActive }) {
  let [isEditing, setIsEditing] = useState(false);
  let [playerName, setPlayerName] = useState(name);
  function handelChangePlayerNameValue(event) {
    setPlayerName(event.target.value);
  }

  function handleEditClick() {
    setIsEditing((editing) => !editing);
  }

  return (
    <>
      <li className={isActive ? "active" : ""}>
        <span className="player">
          {isEditing ? (
            <input
              type="text"
              className="player-name"
              onChange={handelChangePlayerNameValue}
              value={playerName}
              required
            ></input>
          ) : (
            <span className="player-name">{playerName}</span>
          )}
          <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </li>
    </>
  );
}
