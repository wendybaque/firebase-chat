import React from 'react';
import attach from "../assets/file.png";
import img from "../assets/image.png";

const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something...' />
      <div className="send">
        <img src={attach} alt="Add a file" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor='file'>
          <img src={img} alt="Add a photo" />
        </label>
        <button>send</button>
      </div>
    </div>
  )
}

export default Input