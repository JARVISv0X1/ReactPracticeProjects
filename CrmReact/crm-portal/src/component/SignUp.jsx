import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loaderGif from "../assests/lodingIcons/giphy.gif";
import "../assests/css/loader.css";
import "../index.css";
export default function SignUp() {
  const navigate = useNavigate();
  let [loaderImg, setLoaderImg] = useState(false);
  let [registerUserData, setRegisterUserData] = useState({
    emailId: "",
    password: "",
    firstName: "",
    lastName: "",
    userName: "",
    mobile: "",
  });
  function handleInput(event) {
    let { id, value } = event.target;

    setRegisterUserData((prev) => ({
      ...prev,
      [id]: value,
    }));
  }

  function RegisterUser(event) {
    event.preventDefault();
    setLoaderImg(() => true);
    axios({
      // Endpoint to login
      url: "http://localhost:8081/user/registerUser",
      method: "POST",
      // Attaching the form data
      data: registerUserData,
    })
      .then((res) => {
        console.log(res.data.responseMessage);
        let responseMessage = res.data.responseMessage;
        if (responseMessage === "Registration Successfull") {
          toast(responseMessage + " Kindly Login.");
          navigate("/login");
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
    <>
      <div className="container">
        {loaderImg ? (
          <div className="row loader">
            <img src={loaderGif} alt="" />
          </div>
        ) : (
          <form className="mx-auto w-50" onSubmit={RegisterUser}>
            <div className="mb-3 mt-3 ">
              <h1 className="text-center">Register</h1>
              <div className="containerfluid">
                <div className="row">
                  <div className="col-6">
                    <label className="form-label">First Name</label>
                  </div>
                  <div className="col-6">
                    <label className="form-label">Last Name</label>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      onChange={handleInput}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-6">
                    <input
                      type="text"
                      className="form-control"
                      id="lastName"
                      aria-describedby="emailHelp"
                      onChange={handleInput}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Mobile Number</label>
                  </div>
                  <div className="col-12">
                    <input
                      type="tel"
                      pattern="[0-9]{10}"
                      className="form-control"
                      id="mobile"
                      onInput={(e) => {
                        let numericValue = e.target.value.replace(/\D/g, "");
                        numericValue = numericValue.slice(0, 10);
                        e.target.value = numericValue;
                        handleInput(e);
                      }}
                      defaultValue={""}
                    />
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Email address</label>
                  </div>
                  <div className="col-12">
                    <input
                      type="email"
                      className="form-control"
                      id="emailId"
                      aria-describedby="emailHelp"
                      onChange={handleInput}
                      defaultValue={""}
                    />
                  </div>
                  <div className="col-12">
                    <div id="emailHelp" className="form-text">
                      We'll never share your email with anyone else.
                    </div>
                  </div>
                </div>
                <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">New Password</label>
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={handleInput}
                      defaultValue={""}
                    />
                  </div>
                </div>
                {/* <div className="row mb-3">
                  <div className="col-12">
                    <label className="form-label">Confirm Password</label>
                  </div>
                  <div className="col-12">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      onChange={handleInput}
                      defaultValue={""}
                    />
                  </div>
                </div> */}
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                    </div>
                    <div className="col-6">
                      <button type="submit" className="btn btn-success">
                        <a
                          href="/login"
                          className="text-white text-decoration-0"
                        >
                          Login Up
                        </a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        )}

        <ToastContainer />
      </div>
    </>
  );
}
