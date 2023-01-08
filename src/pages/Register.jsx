import React from "react";
import logo from "../assets/favicon.png";
import add from "../assets/add.webp";

const Register = () => {
  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Firebase Chat !</span>
        <img src={logo} alt="Firebase Chat !" className="img-logo" />
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <label htmlFor="file">
            <img src={add} alt="add a profile pic" />
            <span>Add an avatar</span>
          </label>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <button>Signup</button>
          <p>Do you have an account ? Signin !</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
