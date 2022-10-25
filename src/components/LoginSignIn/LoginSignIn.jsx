import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import "../../assets/Style/Theme/Login.css";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import HTTPService from "../../api/HTTPSer";

function LoginSignIn(props) {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const authentication = async (obj) => {
    const res = await HTTPService.post("/auth/login", JSON.stringify(obj))
      .then((res) => {
        localStorage.setItem("TOKEN", res.data.token);
        setTimeout(() => {
          navigate("/ManagementProducts");
        }, 1000);
        notifyTrue();
      })
      .catch((err) => {
        localStorage.clear();
        notifyFasle();
      });
  };

  const notifyFasle = () =>
    toast.error("نام کاربری یا رمز عبور اشتباه است", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyTrue = () =>
    toast.success("خوش آمدید", {
      position: "bottom-left",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  return (
    <div className="loginsignin">
      <div className="d-flex flex-column justify-content-start align-items-start">
        <div className="d-flex flex-column justify-content-center align-items-center py-5">
          <div className="fs-3 py-2"> خوش آمدید!</div>
          <div className="fs-6 py-2">
            از اینکه شما را دوباره ملاقات می کنیم خرسندیم
          </div>
        </div>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <Row className="mb-3 d-flex flex-column">
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="py-2 text-start">نام کاربری</Form.Label>
              <Form.Control
                type="text"
                placeholder="example@port.com"
                name="username"
                onChange={(e) => setUser({ ...user, username: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group as={Col} controlId="formGridPassword">
              <Form.Label className="py-2 text-start">کلمه عبور</Form.Label>
              <Form.Control
                type="text"
                placeholder="*******"
                name="password"
                onChange={(e) => setUser({ ...user, password: e.target.value })}
                required
              />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="مرا به خاطر بسپار" />
          </Form.Group>
          <Button
            variant="outline-warning"
            type="submit"
            onClick={() => {
              // authentication(user);
              navigate("/ManagementProducts");
            }}
          >
            ورود
          </Button>
        </Form>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </div>
  );
}

export default LoginSignIn;
