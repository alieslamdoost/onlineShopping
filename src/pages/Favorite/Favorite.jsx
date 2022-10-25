import React from "react";
import Header from "../../layout/Header/Header";
import Footer from "../../layout/Footer/Footer";
import FavoriteProduct from "../../components/FavoriteProduct/FavoriteProduct";
import MainBanner from "../../components/MainBanner/MainBanner";
export default function Favorite() {
  
  return (
    <div>
      <Header />
      <MainBanner bannerName={"علاقه مندی ها"} />
      <FavoriteProduct />
      <Footer />
    </div>
  );
}
