import React from "react";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import { Button, Modal, Table } from "react-bootstrap";

export default function ShopCart() {
  const [shop, setShop] = useState([]);
  const [show, setShow] = useState(false);
  const [update, setUpdate] = useState(false);
  ///get data
  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart"));
    data && setShop(data);
  }, [update]);

  /// total price
  let totalPrice = [];

  shop.map((item) => {
    let price = Math.imul(`${item.price}`, `${item.inCart}`);
    totalPrice.push(price);
  });

  let shopPrice = 0;
  totalPrice.map((item) => (shopPrice += item));

  /// payment

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handlePayment = () => {
    notifyTrue();
    localStorage.clear();
    handleClose();
    setUpdate(!update);
  };

  const notifyTrue = () =>
    toast.success("پرداخت با موفقیت انجام شد", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <>
      <Table className="my-4">
        <thead>
          <tr>
            <th colSpan={3} className="text-center text-warning">
              تصویر
            </th>
            <th className="text-center text-warning">اسم</th>
            <th className="text-center text-warning">قیمت</th>
            <th className="text-center text-warning">تعداد</th>
            <th className="text-center text-warning">قیمت کل</th>
          </tr>
        </thead>
        <tbody>
          {shop.length > 0 &&
            shop.map((item, index) => {
              return (
                <tr key={index}>
                  <td colSpan={3} className="text-center align-baseline">
                    <img src={item.img} alt="imageProduct" height={"120px"} />
                  </td>
                  <td className="text-center align-baseline">{item.name}</td>
                  <td className="text-center align-baseline">{item.price}</td>
                  <td className="text-center align-baseline">{item.inCart}</td>
                  <td className="text-center align-baseline">
                    {Math.imul(`${item.price}`, `${item.inCart}`)}
                  </td>
                </tr>
              );
            })}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={6} className="text-warning">
              قیمت کل:
            </td>
            <td className="text-warning">{shopPrice}</td>
          </tr>
        </tfoot>
      </Table>
      <Button variant="warning" onClick={handleShow}>
        پرداخت
      </Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="mx-3">پرداخت</Modal.Title>
        </Modal.Header>
        <Modal.Body>از پرداخت مطمئن هستید؟</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            پرداخت نگردد
          </Button>
          <Button variant="success" onClick={handlePayment}>
            پرداخت گردد
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}
