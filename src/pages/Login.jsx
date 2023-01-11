import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import logo from "../assets/favicon.png";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch (err) {
      setErr(true);
    }
  };

  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Firebase Chat !</span>
        <img src={logo} alt="Firebase Chat !" className="img-logo" />
        <span className="title">Login</span>
        <form onSubmit={handleSubmit}>
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <button>Signin</button>
          {err && <span>Something went wrong !</span>}
          <p>You don't have an account ? <Link to="/register">Register !</Link></p>
        </form>
      </div>
    </div>
  );
};

export default Login;
