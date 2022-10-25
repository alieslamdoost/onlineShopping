import React from "react";
import Icon from "../../components/Icon/Icon";
import Logo from "../../components/Logo/Logo";
import ManagementHeaderLinks from "./ManagementHeaderLinks";
import { BsBoxArrowInLeft } from "react-icons/bs";

function ManagementHeader(props) {
  return (
    <div className="bg-light p-4">
      <div className="d-flex justify-content-around align-items-center">
        <Logo />
        <ManagementHeaderLinks />
        <div className="d-flex align-items-center justify-content-between">
          خروج از حساب کاربری
          <Icon icon={<BsBoxArrowInLeft />} />
        </div>
      </div>
    </div>
  );
}

export default ManagementHeader;
