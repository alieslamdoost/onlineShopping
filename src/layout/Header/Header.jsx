import React from "react";
import Logo from "../../components/Logo/Logo";
import Icon from "../../components/Icon/Icon";
import HeaderLinks from "./HeaderLinks";
import { BsCart3, BsHeart, BsPerson } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "../../assets/Style/Theme/Header.css";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="d-flex justify-content-between align-items-center px-5 py-2 bg-gray">
      <div className="logo">
        <Logo />
      </div>
      <div className="navbar">
        <HeaderLinks />
      </div>
      <div className="d-flex">
        <div onClick={() => navigate("/Favorite")} className="userLogin">
          <Icon className="p-12" icon={<BsHeart />} />
        </div>
        <div onClick={() => navigate("/Shop")} className="userLogin">
          <Icon className="p-12" icon={<BsCart3 />} />
        </div>
        <div onClick={() => navigate("/Login")} className="userLogin">
          <Icon className="p-12" icon={<BsPerson />} />
        </div>
      </div>
    </header>
  );
}

export default Header;
