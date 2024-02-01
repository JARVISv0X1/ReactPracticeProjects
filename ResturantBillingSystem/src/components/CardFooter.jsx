export default function CardFooter({ totalBill }) {
  return (
    <>
      <div className="containerFluid text-end">
        <span><h3>
          Total bill: <strong>{totalBill}</strong> INR
        </h3></span>
      </div>
    </>
  );
}
