import React from "react";
import "../../assets/Style/Theme/Banner.css";
import BannerImage from "../../assets/Image/Banner/Banner.jpg";

function MainBanner(props) {
  return (
    <div className="d-flex justify-content-around align-items-center">
      <img className="banner" src={BannerImage} alt="imge of banner" />
      <div className="text">{props.bannerName}</div>
    </div>
  );
}

export default MainBanner;
