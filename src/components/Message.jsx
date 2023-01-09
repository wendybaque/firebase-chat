import React from "react";

const Message = () => {
  return (
    <div className="message owner">
      <div className="messageinfo">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/14/11/23/girl-2748687_960_720.jpg"
          alt="user avatar"
        />
        <span>date</span>
      </div>
      <div className="messagecontent">
        <p>Hello message</p>
        <img
          src="https://cdn.pixabay.com/photo/2017/09/14/11/23/girl-2748687_960_720.jpg"
          alt="user avatar"
        />
      </div>
    </div>
  );
};

export default Message;
