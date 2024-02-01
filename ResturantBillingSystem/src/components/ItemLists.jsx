export default function ItemLists({
  dId,
  dName,
  dPrice,
  key,
  onChangeValue,
  Input,
  dTotal,
}) {
  // function setTotalItem(event) {
  //   onChangeValue(event);
  // }
  return (
    <>
      <tr key={key}>
        <td className="w-25">{dId}</td>
        <td className="w-25">{dName}</td>
        <td className="w-25">{dPrice}</td>
        <td className="w-25">
          <div className="container mt-2 w-75 mx-auto">
            {Input ? (
              <input
                className="form-control"
                name={dName}
                defaultValue={""}
                onChange={onChangeValue}
                id={dId}
                placeholder="Enter total no. of Items"
              ></input>
            ) : (
              dTotal
            )}
          </div>
        </td>
        {Input ? "" : <td className="w-25">{dPrice * dTotal} INR</td>}
      </tr>
    </>
  );
}
