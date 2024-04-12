import { useState } from "react";
import "./App.css";
import AllPlaces from "./components/AllPlaces";
import SelectedPlaces from "./components/SelectedPlaces";
import { AVAILABLE_PLACES } from "./data";

function App() {
  let [selectedPlaces, setSelectedPlaces] = useState([]);
  function addPlaceToSelectedPlace(id) {
    const isPlaceSelected = selectedPlaces.some((place) => place.id === id);

    if (isPlaceSelected) {
      alert("Place already selected");
      return;
    }

    // Find the place to add
    const placeToAdd = AVAILABLE_PLACES.find((place) => place.id === id);

    if (placeToAdd) {
      // Add the place to selectedPlaces
      setSelectedPlaces((prevSelectedPlaces) => [
        ...prevSelectedPlaces,
        placeToAdd,
      ]);
    } else {
      console.error("Place not found");
    }

    console.log(selectedPlaces);
  }

  function removePlaceFromSelectedPlace(id) {
    const placeToAdd = selectedPlaces.filter((place) => place.id !== id);
    if (placeToAdd) {
      setSelectedPlaces(() => placeToAdd);
    } else {
      console.error("Place not found");
    }
  }
  return (
    <>
      {selectedPlaces.length > 0 ? (
        <SelectedPlaces
          onSelect={removePlaceFromSelectedPlace}
          selectedPlace={selectedPlaces}
        ></SelectedPlaces>
      ) : (
        "No Place Selected"
      )}
      <AllPlaces onSelect={addPlaceToSelectedPlace}></AllPlaces>
    </>
  );
}

export default App;
