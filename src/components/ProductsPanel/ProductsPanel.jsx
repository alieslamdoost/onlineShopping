import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import "../../assets/Style/Theme/ProductsPanel.css";
import EditProducts from "./EditProducts";
import Form from "react-bootstrap/Form";
import AddProducts from "./AddProducts";
import PaginationDivide from "../PaginationDivide/PaginationDivide";
import { Navigate } from "react-router-dom";
import { paginateData, serachProduct } from "../../api/api";

function ProductsPanel(props) {
  let timeOut;

  const [products, setProducts] = useState([]);

  const [currentPage, setCurrentPage] = useState(0);

  const [totalPage, setTotalPage] = useState("");

  const [changes, setChanges] = useState(false);

  //<<-- get Products -- >>

  useEffect(() => {
    paginateData("products", currentPage, )
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  // <<-- serarch -->>

  const handleSearch = (e) => {
    clearTimeout(timeOut);
    let searchedItem = e.target.value;
    let filteredData;
    serachProduct("products", searchedItem, currentPage, 5).then((data) => {
      filteredData = data;
    });
    timeOut = setTimeout(() => {
      searchedItem.length === 0
        ? paginateData("Products", currentPage, 5).then((data) => {
            setProducts(data.data);
            setTotalPage(data.count);
          })
        : setProducts(filteredData);
    });
  };

  // <<-- paginate -->>

  const back = () => {
    currentPage < Math.ceil(+totalPage / 5) && setCurrentPage(currentPage + 1);
    setChanges(!changes);
    Navigate(
      `ManagementProducts/${
        currentPage < Math.ceil(+totalPage / 5) ? currentPage + 1 : currentPage
      }`
    );
  };

  const forward = () => {
    currentPage > 1 && setCurrentPage(currentPage - 1);
    setChanges(!changes);
    Navigate(
      `ManagementProducts/${currentPage > 1 ? currentPage - 1 : currentPage}`
    );
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center container my-4">
      <div className="d-flex justify-content-between align-items-baseline container my-4">
        <AddProducts />
        <Form className="d-flex justify-content-around align-items-center">
          <Form.Control
            type="text"
            placeholder="جستجو ..."
            onChange={(e) => handleSearch(e)}
          />
        </Form>
      </div>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام کالا</th>
            <th>دسته بندی</th>
            <th>تصویر</th>
            <th colSpan={2}>تغیرات</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => {
            return (
              <tr key={index}>
                <td className="text-center">{index + 1}</td>
                <td className="text-center">{item.name}</td>
                <td className="text-center">{item.catagory}</td>
                <td className="text-center">
                  {
                    <img
                      width={"45px"}
                      height={"auto"}
                      src={item.src[0]}
                      alt="pic of product"
                    />
                  }
                </td>
                <td className="text-center">
                  <EditProducts product={item} />
                </td>
                <td className="text-center">
                  <button
                    className="btn btn-danger"
                    // onClick={() => {
                    //   handleDelete(item.id);
                    // }}
                  >
                    حذف
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <PaginationDivide
        totalPage={totalPage}
        perPage={6}
        currentPage={currentPage}
        back={back}
        forward={forward}
      />
    </div>
  );
}

export default ProductsPanel;