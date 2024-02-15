import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function ProtectedRouter({ Component, usTpe }) {
  let [isAuthenticated, setIsAuthenticated] = useState(Cookies.get("userAuth"));
  const navigate = useNavigate();
  useEffect(() => {
    const userAuth = Cookies.get("userAuth");
    console.log("userAuth: " + userAuth);
    setIsAuthenticated(() => userAuth);
    if (isAuthenticated === false || isAuthenticated === undefined) {
      navigate("/login");
    }

    console.log("isAuthenticated: " + localStorage.getItem("userAuth"));
  }, [isAuthenticated]);

  return (
    <>
      {" "}
      <Component usTpe={usTpe}></Component>
    </>
  );
}