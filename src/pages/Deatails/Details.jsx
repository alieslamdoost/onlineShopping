import React from "react";
import { useState, useEffect } from "react";
import DetailsProduct from "../../components/DetailsProduct/DetailsProduct";
import MainBanner from "../../components/MainBanner/MainBanner";
import ExpressDetails from "../../layout/ExpressDetails/ExpressDetails";
import Footer from "../../layout/Footer/Footer";
import Header from "../../layout/Header/Header";
import { useParams } from "react-router-dom";
import { filterData } from "../../api/api";

export default function Details() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    filterData("products", "id", id)
      .then((res) => {
        setProduct(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [id]);

  return (
    <div>
      <Header />
      <MainBanner bannerName={"معرفی محصول"} />
      {product.length > 0 && <DetailsProduct props={product[0]} />}
      <ExpressDetails />
      <Footer />
    </div>
  );
}
