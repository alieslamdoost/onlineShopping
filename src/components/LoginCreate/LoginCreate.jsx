import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import "../../assets/Style/Theme/Login.css";
import lottie from "lottie-web";
import Lottiepassword from "../../assets/Lottie/SignIn.json";

function LoginCreate(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    const instance = lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: Lottiepassword,
      renderer: "svg",
      loop: true,
      autoplay: true,
    });
    return () => instance.destroy();
  });

  return (
    <div className="logincreate">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <div className="py-3">ورود شما را به ساعت صفر خوش آمد می گوییم</div>
        <div className="py-3">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است
        </div>
        <div className="py-3">
          <Button variant="outline-warning" onClick={handleShow}>
            ثبت نام کنید
          </Button>
          <Modal show={show} onHide={handleClose} className="modal">
            <Modal.Header closeButton>
              <Modal.Title>فرم ثبت نام</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <Form>
                <Form.Group className="mb-3" controlId="َFormId">
                  <Form.Label>نام </Form.Label>
                  <Form.Control type="name" placeholder="علی" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="َFormId">
                  <Form.Label>نام خانوادگی </Form.Label>
                  <Form.Control type="name" placeholder="علی" autoFocus />
                </Form.Group>
                <Form.Group className="mb-3" controlId="َFormId">
                  <Form.Label>ایمیل</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="example@port.com"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="َFormId">
                  <Form.Label>شماره تماس</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="+98 9*********"
                    autoFocus
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="َFormId">
                  <Form.Label>آدرس</Form.Label>
                  <Form.Control
                    type="name"
                    placeholder="کرج گوهردشت"
                    autoFocus
                  />
                </Form.Group>
              </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="outline-danger" onClick={handleClose}>
                بستن
              </Button>
              <Button variant="outline-warning" onClick={handleClose}>
                ثبت
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        <div id="react-logo"></div>
      </div>
    </div>
  );
}

export default LoginCreate;
