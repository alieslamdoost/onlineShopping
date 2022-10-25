import { useEffect, useState } from "react";
import HTTPService from "./HTTPSer";

export default function GetData() {
  const [product, setProduct] = useState([]);

  const getData = () => {
    HTTPService.get("/userDetails")
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => alert(err));
  };

  useEffect(() => {
    getData();
  }, []);
  return product;
}
