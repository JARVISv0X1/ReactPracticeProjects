import { useRef, forwardRef, useImperativeHandle, useState } from "react";

const ResultModal = forwardRef(function ResultModal(
  { targetTime, remainingTime, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  const userLost = remainingTime <= 0;
  const formatedReamainingTime = (remainingTime / 1000).toFixed(2);
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);
  return (
    <>
      <dialog ref={dialog} className="result-modal" onClose={onReset}>
        {userLost && <h2>You Lost</h2>}
        {!userLost && <h2>You Won</h2>}
        {!userLost && <h2>You Score : {score}</h2>}
        <p>
          {` The target time was `}
          <strong>{`${targetTime} secound${targetTime > 1 ? "s" : ""}`}</strong>
        </p>

        <p>
          You stop the timer by {formatedReamainingTime} secound
          {targetTime > 1 ? "s" : undefined} left.
        </p>

        <form method="dialog" onSubmit={onReset}>
          <button>Close</button>
        </form>
      </dialog>
    </>
  );
});

export default ResultModal;
