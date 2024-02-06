import { useEffect } from "react";
import Cookies from "js-cookie";

export default function Logout() {
  useEffect(() => {
    Cookies.remove("userAuth");
  }, []);
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="logout">
            <h1>Logout Success</h1>
            <button className="btn btn-success">
              <a href="/login">Login</a>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
