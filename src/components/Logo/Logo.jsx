import React from "react";
import Image from "../../assets/Image/Logo/Logo.png";

function Logo() {
  return (
    <img
      className="d-flex justify-content-center align-items-center"
      width={"150px"}
      height={"auto"}
      src={Image}
      alt="logo image"
    />
  );
}

export default Logo;
