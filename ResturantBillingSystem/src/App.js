import "./App.css";
import BillingForm from "./components/BillingForm";
function App() {
  return (
    <>
      <div className="mx-auto container">
        <h1 className="mx-auto mt-1 text-center">Resturant Billing system</h1>
        <BillingForm className="mt-5 table"></BillingForm>
      </div>
    </>
  );
}

export default App;
