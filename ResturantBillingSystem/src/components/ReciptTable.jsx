import ItemLists from "./ItemLists";
export default function ReciptTable({ noOfItems, ...prop }) {
  const { dish } = noOfItems;
  return (
    <>
      <table {...prop}>
        <thead>
          <tr>
            <th className="w-25">ID</th>
            <th className="w-25">Dish Name</th>
            <th className="w-25">Dish Price</th>
            <th className="w-25">Total Items</th>
            <th className="w-25">Amount</th>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
      <table className="table">
        <tbody>
          {dish
            .filter((item) => item.totalItems > 0) // Filter out items with totalItems <= 0
            .map((item) => (
              <ItemLists
                key={item.id}
                dName={item.dishName}
                dPrice={item.pricePerItem}
                dId={item.id}
                Input={false}
                dTotal={item.totalItems}
              />
            ))}
        </tbody>
      </table>
    </>
  );
}
