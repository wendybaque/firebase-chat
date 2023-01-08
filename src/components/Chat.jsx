import React from "react";
import camera from "../assets/camera.png";
import add from "../assets/add.png";
import more from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";

const Chat = () => {
  return (
    <div className="chat">
      <div className="chatinfo">
        <span>username</span>
        <div className="chaticons">
          <img src={camera} alt="" />
          <img src={add} alt="" />
          <img src={more} alt="" />
        </div>
      </div>
      <Messages />
      <Input />
    </div>
  );
};

export default Chat;
