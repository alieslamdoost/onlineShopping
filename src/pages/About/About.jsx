import React from "react";
import Header from "../../layout/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import Footer from "../../layout/Footer/Footer";
import AboutUs from "../../components/AboutUs/AboutUs";

function About(props) {
  return (
    <div>
      <Header />
      <MainBanner bannerName={"درباره ما"} />
      <AboutUs />
      <Footer />
    </div>
  );
}

export default About;
