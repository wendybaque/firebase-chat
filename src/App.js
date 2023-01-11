import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import "./style.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const {currentUser} = useContext(AuthContext);

  console.log(currentUser)
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />}></Route>
            <Route path="login" element={<Login />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
