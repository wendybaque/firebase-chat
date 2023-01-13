import React from "react";
import camera from "../assets/camera.png";
import add from "../assets/add.png";
import more from "../assets/more.png";
import Messages from "./Messages";
import Input from "./Input";
import { useContext } from "react";
import { ChatContext } from "../context/ChatContext";

const Chat = () => {

  const {data} = useContext(ChatContext);

  return (
    <div className="chat">
      <div className="chatinfo">
        <span>{data.user?.displayName}</span>
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
