import React from "react";
import logo from "../assets/favicon.png";
import add from "../assets/add.webp";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Firebase Chat !</span>
        <img src={logo} alt="Firebase Chat !" className="img-logo" />
        <span className="title">Register</span>
        <form onSubmit={handleSubmit}>
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
