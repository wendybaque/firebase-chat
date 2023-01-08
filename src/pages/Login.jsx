import React from "react";
import logo from "../assets/favicon.png";

const Login = () => {
  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Firebase Chat !</span>
        <img src={logo} alt="Firebase Chat !" className="img-logo" />
        <span className="title">Login</span>
        <form>
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <button>Signin</button>
          <p>You don't have an account ? Register !</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
