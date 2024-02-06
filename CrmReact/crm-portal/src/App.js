import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import ProtectedRouter from "./protectedRouters/ProtectedRouter";
import AdminHome from "./component/AdminHome";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route
            path="/adminHome"
            element={<ProtectedRouter Component={AdminHome} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
