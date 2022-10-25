import React from "react";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import BannerWatch from "../../assets/Image/BannerWatch/BannerWatch.png";
import "../../assets/Style/Theme/Home.css";

function BannerHome(props) {
  const navigate = useNavigate();
  return (
    <div className="my-5 bg-light">
      <div className="d-flex justify-content-center align-items-center bg-light container">
        <div className="d-flex flex-3 flex-column flex-justify-center align-items-start px-4">
          <div className="py-5 fs-1">بهترین نوع خود را انتخاب کن</div>
          <div className="py-5 fs-6 text-end">
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
            استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در
            .ستون و سطرآنچنان که لازم است
          </div>
          <div className="py-5">
            <Button
              variant="warning"
              className="buyButton"
              onClick={() => navigate("/Products")}
            >
              خرید
            </Button>
          </div>
        </div>
        <div className="d-flex flex-1">
          <img
            alt="banner image"
            src={BannerWatch}
            width={"auto"}
            height={"1024px"}
            className="imageAni"
          />
        </div>
      </div>
    </div>
  );
}

export default BannerHome;
