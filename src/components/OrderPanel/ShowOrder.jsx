import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import ListGroup from "react-bootstrap/ListGroup";

function ShowOrder({ order }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);




  return (
    <div>
      <Button variant="warning" onClick={handleShow}>
        نمایش
      </Button>
      <Modal show={show} onHide={handleClose} className="my-4" size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="px-4">سفارش</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Card >
            <Card.Body>
              <Card.Subtitle className="mb-2 text-muted">
                {order.username}
              </Card.Subtitle>
              <Card.Text>
                نام و نام خانوادگی : {order.name} {order.family}
              </Card.Text>
              <Card.Text>آدرس : {order.address}</Card.Text>
              <Card.Text>تلفن: {order.phone}</Card.Text>
              <Card.Text>تاریخ ثبت سفارش: {order.orderDate}</Card.Text>
              <Card.Text>تاریخ تحویل سفارش: {order.deliveryDate}</Card.Text>
              <ListGroup variant="flush">
                <Table>
                  <thead>
                    <tr>
                      <th>ردیف</th>
                      <th>نام کالا</th>
                      <th>قیمت</th>
                      <th>تعداد</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orders.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{1}</td>
                          <td>{item.productsName}</td>
                          <td>{item.price}</td>
                          <td>{item.orderNumber}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </Table>
              </ListGroup>
            </Card.Body>
          </Card>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleClose}>
            بستن
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ShowOrder;
