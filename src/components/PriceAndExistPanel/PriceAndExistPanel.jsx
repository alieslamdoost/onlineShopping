// import axios from "axios";
import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import "../../assets/Style/Theme/PriceAndExistPanel.css";
import HTTPService from "../../api/HTTPSer";
import { getProductData } from "../../api/api";

function PriceAndExistPanel(props) {
  const [products, setProducts] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [displayedProductPage, setDisplayProductPage] = useState([]);
  const [codeChangedPrice, setCodeChangedPrice] = useState([]);
  const [codeChangedStock, setCodeChangedStock] = useState([]);

  useEffect(() => {
    getProductData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  //// dirty code
  let showData = products;

  const getPageData = (pageNumber) => {
    HTTPService.get(`/products?_page=${pageNumber + 1}&_limit=10`)
      .then((res) => {
        setDisplayProductPage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPageData(pageNumber);
  }, [pageNumber]);

  const pageCount = Math.ceil(showData.length / 10);
  const onChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const patchData = async (products, id, data) => {
    const response = await HTTPService.patch(`/${products}/${id}`, data);
    return response.data;
  };

  const saveEditedData = () => {
    const hash = new Map();
    codeChangedPrice.concat(codeChangedStock).forEach(function (obj) {
      hash.set(obj.id, Object.assign(hash.get(obj.id) || {}, obj));
    });
    const codes = Array.from(hash.values());

    codes.map(async (item) => {
      await patchData("products", item.id, item);
    });
  };

  return (
    <div className="d-flex flex-column justify-content-around align-items-center">
      <button
        className="btn btn-warning my-4 "
        disabled={
          codeChangedPrice.length > 0 || codeChangedStock.length > 0
            ? false
            : true
        }
        onClick={() => saveEditedData()}
      >
        ذخیره
      </button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>ردیف</th>
            <th>نام کالا</th>
            <th>قیمت</th>
            <th>موجودی</th>
          </tr>
        </thead>
        <tbody>
          {displayedProductPage.map((ent, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{ent.name}</td>
              <td>
                <input
                  type={"number"}
                  defaultValue={ent.price}
                  className="text-center"
                  onDoubleClick={(e) => {
                    e.target.readOnly = false;
                    e.target.style.backgroundColor = "light";
                  }}
                  readOnly
                  onBlur={(e) => {
                    e.target.readOnly = true;

                    if (e.target.value !== e.target.defaultValue) {
                      e.target.style.backgroundColor = "light";
                      codeChangedPrice.length > 0
                        ? codeChangedPrice.map((item) => {
                            if (item.id !== ent.id) {
                              setCodeChangedPrice([
                                ...codeChangedPrice,
                                { id: ent.id, price: e.target.value },
                              ]);
                            }
                          })
                        : setCodeChangedPrice([
                            ...codeChangedPrice,
                            { id: ent.id, price: e.target.value },
                          ]);
                    } else {
                      e.target.style.backgroundColor = "transparent";
                      const filterData = codeChangedPrice.filter(
                        (item) => item.id !== ent.id
                      );
                      setCodeChangedPrice(filterData);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.target.readOnly = true;
                      e.target.value = e.target.defaultValue;
                      e.target.style.backgroundColor = "transparent";
                    }
                  }}
                />
              </td>
              <td>
                <input
                  type={"number"}
                  className="text-center"
                  defaultValue={ent.exist}
                  onDoubleClick={(e) => {
                    e.target.readOnly = false;
                    e.target.style.backgroundColor = "whitesmoke";
                  }}
                  readOnly
                  onBlur={(e) => {
                    e.target.readOnly = true;

                    if (e.target.value !== e.target.defaultValue) {
                      e.target.style.backgroundColor = "whitesmoke";
                      codeChangedStock.length > 0
                        ? codeChangedStock.map((item) => {
                            if (item.id !== ent.id) {
                              setCodeChangedStock([
                                ...codeChangedStock,

                                {
                                  id: ent.id,
                                  exist: e.target.value,
                                },
                              ]);
                            }
                          })
                        : setCodeChangedStock([
                            ...codeChangedStock,

                            {
                              id: ent.id,
                              exist: e.target.value,
                            },
                          ]);
                    } else {
                      e.target.style.backgroundColor = "transparent";
                      const filterData = codeChangedStock.filter(
                        (item) => item.id !== ent.id
                      );
                      setCodeChangedStock(filterData);
                    }
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") {
                      e.target.readOnly = true;
                      e.target.value = e.target.defaultValue;
                      e.target.style.backgroundColor = "transparent";
                    }
                  }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <ReactPaginate
        previousLabel={"<<"}
        nextLabel={">>"}
        pageCount={pageCount}
        onPageChange={onChange}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttns"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
    </div>
  );
}

export default PriceAndExistPanel;
