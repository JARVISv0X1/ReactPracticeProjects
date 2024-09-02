import classes from "./Auth.module.css";
import { userAuthAction } from "../store/UserAuth";
import { useDispatch } from "react-redux";
const Auth = () => {
  const dispatch = useDispatch();
  function handleLogin(e) {
    e.preventDefault();
    dispatch(userAuthAction.login());
  }
  return (
    <main className={classes.auth}>
      <section id="login">
        <form onSubmit={handleLogin}>
          <div className={classes.control}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" />
          </div>
          <div className={classes.control}>
            <label htmlFor="password">Password</label>
            <input type="password" id="password" />
          </div>
          <button>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
