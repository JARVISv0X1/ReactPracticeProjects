import classes from "./Auth.module.css";
import { userAuthAction } from "../store/UserAuth";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  function handleLogin() {
    dispatch(userAuthAction.login());
  }
  return (
    <main className={classes.auth}>
      <section id="login">
        <div>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button onClick={handleLogin}>Login</button>
        </div>
      </section>
    </main>
  );
};

export default Auth;
