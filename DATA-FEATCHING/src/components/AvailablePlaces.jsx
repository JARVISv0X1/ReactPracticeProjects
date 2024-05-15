import { useEffect, useState } from "react";
import Places from "./Places.jsx";
export default function AvailablePlaces({ onSelectPlace }) {
  const [availablePlaces, setAvailablePlaces] = useState([]);
  let [loader, setLoader] = useState(false);
  const [error, SetError] = useState();
  useEffect(() => {
    setLoader(true);
    fetchPlaces();
  }, []);

  async function fetchPlaces() {
    const response = await fetch("http://localhost:3000/places");
    const resData = await response.json();
    setAvailablePlaces(resData.places);
    setLoader(false);
  }
  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      loader={loader}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
