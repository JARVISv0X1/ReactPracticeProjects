import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <>
      <dialog ref={ref} className="result-modal">
        <h2>You {result}</h2>
        <p>
          {` The target time was `}
          <strong>{`${targetTime} secound${targetTime > 1 ? "s" : ""}`}</strong>
        </p>
        <p>
          You stop the timer with {targetTime} secound
          {targetTime > 1 ? "s" : undefined} left.
        </p>
        <form>
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;
