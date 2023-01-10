import React from "react";
import logo from "../assets/favicon.png";
import add from "../assets/add.webp";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db, storage } from "../firebase";
import { useState } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { doc, setDoc } from "firebase/firestore";

const Register = () => {
  const [err, setErr] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const displayName = e.target[0].value;
    const email = e.target[1].value;
    const password = e.target[2].value;
    const file = e.target[3].files[0];

    try {
      //Create user
      const res = await createUserWithEmailAndPassword(auth, email, password);

      //Create a unique image name
      const date = new Date().getTime();
      const storageRef = ref(storage, `${displayName + date}`);

      await uploadBytesResumable(storageRef, file).then(() => {
        getDownloadURL(storageRef).then(async (downloadURL) => {
          try {
            //Update profile
            await updateProfile(res.user, {
              displayName,
              photoURL: downloadURL,
            });
            //create user on firestore
            await setDoc(doc(db, "users", res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL: downloadURL,
            });

            //create empty user chats on firestore
            // await setDoc(doc(db, "userChats", res.user.uid), {});
          } catch (err) {
            console.log(err);
            setErr(true);
          }
        });
      });
    } catch (err) {
      setErr(true);
    }
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
          <input
            type="password"
            name=""
            id=""
            placeholder="password (6 characters minimum)"
          />
          <label htmlFor="file">
            <img src={add} alt="add a profile pic" />
            <span>Add an avatar</span>
          </label>
          <input style={{ display: "none" }} type="file" name="" id="file" />
          <button>Signup</button>
          {err && <span>Something went wrong !</span>}
          <p>Do you have an account ? Signin !</p>
        </form>
      </div>
    </div>
  );
};

export default Register;
