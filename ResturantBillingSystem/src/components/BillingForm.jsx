import React, { useState } from "react";
import dish from "../dish";
import ItemLists from "./ItemLists";
import ReciptReviewCard from "./ReciptReviewCard";

export default function BillingForm({ ...prop }) {
  let [date, setDate] = useState(0);
  let [totalBill, setTotalBill] = useState(0);
  let [reciptObject, setReciptObject] = useState([]);
  let [reciptDisplay, setReciptDisplay] = useState(false);
  let [showRecipt, setShowRecipt] = useState(false);
  let [showGenerateBill, setShowGenerateBill] = useState(false);

  function addItem(event) {
    setDate(new Date().toLocaleString());
    setShowRecipt((showReciptBtn) => (showReciptBtn ? false : ""));
    setShowGenerateBill((showGenerateBtn) => (showGenerateBtn ? true : true));
    let name = event.target.name;
    let dId = event.target.id;
    --dId;
    let value = event.target.value;
    if (value < 0) {
      alert("Value should not be less than 0.");
      return;
    } else {
      if (name === "Sigrets") {
        dish[dId].totalItems = event.target.value;
        console.log(` dish [${dId}].totalItems: ` + dish[dId].totalItems);
      } else if (name === "Wisky") {
        dish[dId].totalItems = event.target.value;
        console.log(` dish [${dId}].totalItems: ` + dish[dId].totalItems);
      } else if (name === "Rum") {
        dish[dId].totalItems = event.target.value;
        console.log(` dish [${dId}].totalItems: ` + dish[dId].totalItems);
      } else if (name === "Gin") {
        dish[dId].totalItems = event.target.value;
        console.log(` dish [${dId}].totalItems: ` + dish[dId].totalItems);
      }
    }
  }

  function calculateTotalBill({ dish }) {
    setShowGenerateBill((showGenerateBtn) => (showGenerateBtn ? false : false));
    //  billingObject = JSON.parse(billingObject);
    let total = 0;
    dish.map((items) => {
      if (items.dishName === "Sigrets") {
        total = total + items.totalItems * items.pricePerItem;
      } else if (items.dishName === "Wisky") {
        total = total + items.totalItems * items.pricePerItem;
      } else if (items.dishName === "Rum") {
        total = total + items.totalItems * items.pricePerItem;
      } else if (items.dishName === "Gin") {
        total = total + items.totalItems * items.pricePerItem;
      }
      return setTotalBill(total);
    });

    console.log("TotalBill: " + totalBill);
    setShowRecipt((showReciptBtn) => (showReciptBtn ? false : true));
  }

  function reciptDisplayManager(reciptObject) {
    setReciptObject(reciptObject);
    setShowRecipt((showReciptBtn) => (showReciptBtn ? false : true));
    setReciptDisplay((cardCurrState) => (cardCurrState ? false : true));
  }

  return (
    <>
      <table {...prop}>
        <thead>
          <tr>
            <th className="w-25">ID</th>
            <th className="w-25">Dish Name</th>
            <th className="w-25">Dish Price</th>
            <th className="w-25">Handle</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      {dish.map((dishItems) => {
        return (
          <>
            <table className="table">
              <tbody>
                <ItemLists
                  dName={dishItems.dishName}
                  dPrice={dishItems.pricePerItem}
                  dId={dishItems.id}
                  key={dishItems.id}
                  onChangeValue={addItem}
                  Input={true}
                  dTotal={dishItems.totalItems}
                ></ItemLists>
              </tbody>
            </table>
          </>
        );
      })}
      <div className="container d-flex align-items-sm-center">
        <h3 className="mx-auto mt-3">Total bill : {totalBill} INR</h3>
      </div>
      <div className="container d-flex align-items-sm-center">
        {showGenerateBill ? (
          <button
            onClick={() => calculateTotalBill({ dish })}
            className="btn btn-success mx-auto"
          >
            Generate Bill
          </button>
        ) : (
          ""
        )}
        {showRecipt ? (
          <button
            onClick={() => reciptDisplayManager({ dish })}
            className="btn btn-primary mx-auto"
          >
            Show Recipt
          </button>
        ) : (
          ""
        )}
      </div>

      <div className="container" id="reciptCard">
        <div className="row w-50 mx-auto">
          {reciptDisplay ? (
            <ReciptReviewCard
              onSelect={() => reciptDisplayManager(reciptObject)}
              TotalItems={reciptObject}
              totalBill={totalBill}
              date={date}
              className="mt-5 table"
            ></ReciptReviewCard>
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
}
