import React from "react";
import logo from "../../me.JPG";
const Avatar = () => {
  return (
    <div>
      <img
        src={logo}
        alt="Meridja Nassim"
        className="avatar box-2"
        height="300"
      />
    </div>
  );
};

export default Avatar;
