import React from "react";

const Search = () => {
  return (
    <div className="search">
      <div className="searchform">
        <input type="text" placeholder="find a user"/>
      </div>
      <div className="userchat">
        <img
          src="https://cdn.pixabay.com/photo/2017/09/14/11/23/girl-2748687_960_720.jpg"
          alt="user avatar"
        />
        <div className="userchatinfo">
          <span className="displayname">Jane</span>
        </div>
      </div>
    </div>
  );
};

export default Search;
