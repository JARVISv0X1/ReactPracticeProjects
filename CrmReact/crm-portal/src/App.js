import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import ProtectedRouter from "./protectedRouters/ProtectedRouter";
import AdminHome from "./component/AdminComponents/AdminHome";
import Logout from "./component/Logout";
import Home from "./component/Home";
import NotFound404 from "./component/NotFound404";
import SignUp from "./component/SignUp";
import Cookies from "js-cookie";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound404 />}></Route>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/signUp" element={<SignUp />}></Route>
          <Route
            path="/home"
            element={
              <ProtectedRouter
                Component={Home}
                usTpe={Cookies.get("userType")}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
