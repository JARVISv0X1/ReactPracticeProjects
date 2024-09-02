import Counter from "./components/Counter";
import Header from "./components/Header";
import Auth from "./components/Auth";
import UserProfile from "./components/UserProfile";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function App() {
  const isAuth = useSelector((state) => state.userAuth.isAuthenticate);
  const [auth, setAuth] = useState(isAuth);
  useEffect(() => {
    setAuth(() => isAuth);
  }, [isAuth]);
  return (
    <>
      <Header></Header>
      {auth ? <UserProfile /> : <Auth></Auth>}
      <Counter />
    </>
  );
}

export default App;
