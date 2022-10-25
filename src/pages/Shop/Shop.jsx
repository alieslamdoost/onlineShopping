import React from "react";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import MainBanner from "../../components/MainBanner/MainBanner";
import ShopCart from "../../components/ShopCart/ShopCart";

function Shop(props) {
  return (
    <div>
      <Header />
      <MainBanner bannerName={"سبد خرید"} />
      <ShopCart />
      <Footer />
    </div>
  );
}

export default Shop;
