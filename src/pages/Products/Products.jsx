import React from "react";
import Category from "../../components/Category/Category";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";

function Latest(props) {
  return (
    <div>
      <Header />
      <MainBanner bannerName={"محصولات"} />
      <Category />
      <Footer />
    </div>
  );
}

export default Latest;
