import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import AdminHome from "./AdminComponents/AdminHome";
import CustomerHome from "../component/CustomerComponents/CustomerHome";
export default function Home() {
  const [uType, setUType] = useState(0);
  console.log("Inside HomeComponent");

  useEffect(() => {
    console.log("Inside Home Component useEffect");
    setUType(() => Cookies.get("userType"));
  }, [setUType]);
  return (
    <>
      {uType === "admin" ? (
        <AdminHome></AdminHome>
      ) : (
        <CustomerHome></CustomerHome>
      )}
    </>
  );
}
