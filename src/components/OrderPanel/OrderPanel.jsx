import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import ReactPaginate from "react-paginate";
import "../../assets/Style/Theme/OrderPanel.css";
import HTTPService from "../../api/HTTPSer";
import ShowOrder from "./ShowOrder";
import GetUserData from "../../api/GetUserData";
function OrderPanel(props) {
  const [pageNumber, setPageNumber] = useState(0);
  const [displayedOrderPage, setDisplayOrderPage] = useState([]);

  const showData = GetUserData();

  const getPageData = (pageNumber) => {
    HTTPService.get(`/usersDetails?_page=${pageNumber}&_limit=5`)
      .then((res) => {
        setDisplayOrderPage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFilteredData = (str) => {
    HTTPService.get(`/usersDetails?deliveryStatus=${str}`)
      .then((res) => {
        setDisplayOrderPage(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getPageData(pageNumber);
  }, [pageNumber]);

  const pageCount = Math.ceil(showData.length / 5);
  const onChange = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleDelivered = () => {
    getFilteredData("fulfilled");
  };
  const handlePending = () => {
    getFilteredData("pending");
  };

  return (
    <div className="d-flex flex-column my-4 justify-content-between align-items-center">
      <div className="d-flex justify-content-between align-items-center">
        <div>سفارش ها:</div>
        <div className="d-flex justify-content-between align-items-center">
          <div className="form-check px-5">
            <input
              class="form-check-input"
              type="radio"
              name="checkbox"
              id="checkboxArrived"
              onClick={handleDelivered}
            />
            <label className="form-check-label " for="checkboxArrived">
              سفارش های تحویلی
            </label>
          </div>
          <div class="form-check px-5">
            <input
              class="form-check-input"
              type="radio"
              name="checkbox"
              id="checkboxProcess"
              onClick={handlePending}
            />
            <label class="form-check-label" for="checkboxProcess">
              سفارش در حال پردازش
            </label>
          </div>
        </div>
      </div>
      <div className="d-flex flex-column justify-content-center align-items-center">
        <Table striped bordered hover className="my-4">
          <thead>
            <tr>
              <th width={"180rem"}>ردیف</th>
              <th width={"180rem"}>نام کاربر</th>
              <th width={"180rem"}> مبلغ کل</th>
              <th width={"180rem"}>زمان سفارش</th>
              <th width={"180rem"}>نمایش</th>
            </tr>
          </thead>
          <tbody>
            {displayedOrderPage.length > 0 &&
              displayedOrderPage.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name + " " + item.family}</td>
                    <td>{item.totalPrice}</td>
                    <td>{item.orderDate}</td>
                    <td>
                      <ShowOrder order={item} />
                    </td>
                  </tr>
                );
              })}
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
    </div>
  );
}

export default OrderPanel;
