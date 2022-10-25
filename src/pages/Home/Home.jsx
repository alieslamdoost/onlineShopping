import React from "react";
import BannerHome from "./BannerHome";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import ExpressDetails from "../../layout/ExpressDetails/ExpressDetails";
import ProductsBanner from "../../components/ProductsBanner/ProductsBanner";
import HomeProducts from "../../components/HomeProducts/HomeProducts";
import ExplainProduct from "../../components/ExplainProduct/ExplainProduct";

function Home(props) {
  return (
    <div>
      <Header />
      <BannerHome />
      <ProductsBanner />
      <HomeProducts />
      <ExplainProduct />
      <ExpressDetails />
      <Footer />
    </div>
  );
}

export default Home;
