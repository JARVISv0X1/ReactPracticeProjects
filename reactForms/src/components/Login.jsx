import { useRef, useState } from "react";

export default function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  function formSubmit(e) {
    e.preventDefault();
    console.log(loginData);
  }
  function validateInput(e) {
    let { name, value } = e.target;

    setLoginData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  const emailIsInValid =
    loginData.email !== "" && !loginData.email.includes("@");
  return (
    <form onSubmit={formSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            onChange={validateInput}
            value={loginData.email}
          />
          <div className="control-error">
            {emailIsInValid && <p>Email should contain @</p>}
          </div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={validateInput}
            value={loginData.password}
          />
        </div>
      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button className="button">Login</button>
      </p>
    </form>
  );
}
