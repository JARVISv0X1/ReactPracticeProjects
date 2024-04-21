export default function SelectedPlaces({ onSelect, selectedPlace }) {
  return (
    <>
      <div className="container">
        <div className="row ">Selected Places:</div>
        <div className="row mt-5">
          {selectedPlace.map((places) => {
            return (
              <div
                key={places.id}
                onClick={() => onSelect(places.id)}
                className="col-3"
              >
                <img
                  src={places.image.src}
                  className="img-fluid"
                  alt={places.image.alt}
                />
                <span>{places.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
