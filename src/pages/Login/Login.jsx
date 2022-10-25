import React from "react";
import MainBanner from "../../components/MainBanner/MainBanner";
import LoginCreate from "../../components/LoginCreate/LoginCreate";
import LoginSignIn from "../../components/LoginSignIn/LoginSignIn";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";

function Login(props) {
  return (
    <div className="d-flex flex-column">
      <Header />
      <MainBanner bannerName={"کاربر"} />
      <div className="d-flex justify-content-evenly align-items-center">
        <LoginSignIn />
        <LoginCreate />
      </div>
      <Footer />
    </div>
  );
}

export default Login;
