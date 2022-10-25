import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { getProductData } from "../../api/api";
import SortProductData from "../../api/SortProductData";
import CardProduct from "../../components/CardProduct/CardProduct";
function Category(props) {
  const categoryNames = ["مردانه", "زنامه", "اکسسوری"];
  const [sortData, setSortData] = useState("");

  const handleSort = async (e) => {
    const data = e.target.value;
    setSortData(data);
    return SortProductData(data)
      .then((res) => {
        getProductData(res.data);
      })
      .catch((err) => alert(err));
    console.log(SortProductData(data));
  };

  const showData = getProductData();

  return (
    <div>
      <CardProduct />
      <Dropdown>
        <Dropdown.Toggle
          variant="warning"
          onChange={handleSort}
          value={sortData}
        >
          دسته بندی
        </Dropdown.Toggle>

        <Dropdown.Menu>
          {categoryNames.map((item, index) => (
            <Dropdown.Item value={item} key={index}>
              {item}
            </Dropdown.Item>
          ))}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Category;
