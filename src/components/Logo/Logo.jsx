import React from "react";
import "./Logo.css";
import { PiBuildingsFill } from "react-icons/pi";
const Logo = () => {
  return (
    <div className="logo">
      <div className="icon__container">
        <PiBuildingsFill />
      </div>
      <h1 className="name">
        Maymar <br />
        <span>Builders</span>
      </h1>
    </div>
  );
};

export default Logo;
