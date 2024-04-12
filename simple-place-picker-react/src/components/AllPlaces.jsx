import { AVAILABLE_PLACES } from "../data";
export default function AllPlaces({ onSelect }) {
  return (
    <>
      <div className="container">
        <div className="row mt-5">All Places:</div>
        <div className="row mt-5">
          {AVAILABLE_PLACES.map((places) => {
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
