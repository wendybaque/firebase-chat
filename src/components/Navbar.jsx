import React from "react";
import logo from "../assets/favicon.png";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="Firebase Chat !" className="img-logo" />
      <span className="logo">Firebase Chat !</span>
      <div className="user">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/14/11/23/girl-2748687_960_720.jpg"
          alt="Avatar"
        />
        <span>Johanna</span>
        <button onClick={() => signOut(auth)}>Logout</button>
      </div>
    </div>
  );
};

export default Navbar;
