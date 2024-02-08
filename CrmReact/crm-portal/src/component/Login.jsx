import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from "js-cookie";
import loaderGif from "../assests/lodingIcons/giphy.gif";
import "../assests/css/loader.css";
import "../index.css";

export default function Login() {
  const navigate = useNavigate();
  let [loaderImg, setLoaderImg] = useState(false);
  let [loginData, setLoginData] = useState({
    emailId: "",
    password: "",
  });

  function handleInput(event) {
    let { id, value } = event.target;

    setLoginData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }
  function userLogin(event) {
    event.preventDefault();
    setLoaderImg(() => true);
    axios({
      // Endpoint to login
      url: "http://localhost:8081/user/login",
      method: "POST",
      // Attaching the form data
      data: loginData,
    })
      .then((res) => {
        console.log(res.data.responseMessage);
        let resUtype = res.data.userType;
        let responseMessage = res.data.responseMessage;
        if (responseMessage === "validUser") {
          Cookies.set("userName", loginData.emailId);
          Cookies.set("userAuth", true);
          Cookies.set("userType", resUtype);
          navigate("/home");
        } else {
          setLoaderImg(() => false);
          toast(responseMessage);
        }
      })
      .catch((err) => {
        setLoaderImg(() => false);
        console.log(err);
      });
  }
  return (
    <div className="container">
      {loaderImg ? (
        <div className="row loader">
          <img src={loaderGif} alt="" />
        </div>
      ) : (
        <form className="mx-auto w-50" onSubmit={userLogin}>
          <div className="mb-3 mt-3 ">
            <h1 className="text-center">Login</h1>
            <label className="form-label">Email address</label>
            <input
              type="email"
              className="form-control"
              id="emailId"
              aria-describedby="emailHelp"
              onChange={handleInput}
              defaultValue={""}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              onChange={handleInput}
              defaultValue={""}
            />
          </div>
          {/* <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label">Check me out</label>
        </div> */}
          <div className="container">
            <div className="row">
              <div className="col-6">
                <button type="submit" className="btn btn-primary">
                  Login Up
                </button>
              </div>
              <div className="col-6">
                <button type="submit" className="btn btn-success">
                  <a href="/signUp" className="text-white text-decoration-0">
                    Sign Up
                  </a>
                </button>
              </div>
            </div>
          </div>
        </form>
      )}

      <ToastContainer />
    </div>
  );
}
