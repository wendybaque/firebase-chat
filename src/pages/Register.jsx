import React from "react";

const Register = () => {
  return (
    <div className="formcontainer">
      <div className="formwrapper">
        <span className="logo">Firebase Chat !</span>
        <span className="title">Register</span>
        <form>
          <input type="text" placeholder="display name" />
          <input type="email" name="" id="" placeholder="email" />
          <input type="password" name="" id="" placeholder="password" />
          <label htmlFor="file">
            <img src="" alt="" />
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
