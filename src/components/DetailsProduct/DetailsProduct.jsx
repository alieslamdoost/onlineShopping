import React, { useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import ListGroup from "react-bootstrap/ListGroup";
import { useState } from "react";
import { Button, InputGroup } from "react-bootstrap";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function DetailsProduct({ props }) {
  const [count, setCount] = useState(1);
  const [cart, setCart] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    let data = JSON.parse(localStorage.getItem("cart"));
    data && setCart(data);

    if (data) {
      let counter = data.find((item) => +item.id === +props.id);
      counter && setCount(counter.inCart);
    }
  }, [update]);

  const addToCart = () => {
    if (cart.length > 0) {
      props.exist > 0 &&
        localStorage.setItem(
          "cart",
          JSON.stringify([
            ...cart,
            {
              id: props.id,
              name: props.name,
              price: props.price,
              img: props.src[0],
              exist: props.exist - 1,
              inCart: 1,
            },
          ])
        );
      setUpdate(!update);
    } else {
      if (props.exist > 0) {
        localStorage.setItem(
          "cart",
          JSON.stringify([
            {
              id: props.id,
              name: props.name,
              price: props.price,
              img: props.src[0],
              exist: props.exist - 1,
              inCart: 1,
            },
          ])
        );
        setUpdate(!update);
      } else {
        toast.error("سقف موجودی کالا", {
          position: "bottom-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    }
  };

  const increment = () => {
    const addedProduct = cart.find((item) => +item.id === +props.id);

    if (addedProduct.exist > 0) {
      let editedCart = [];
      cart.forEach((item) => {
        if (+item.id !== +addedProduct.id) {
          editedCart.push(item);
        } else {
          editedCart.push({
            ...item,
            inCart: item.inCart + 1,
            exist: item.exist - 1,
          });
        }
      });

      localStorage.setItem("cart", JSON.stringify(editedCart));
      setUpdate(!update);
    } else {
      toast.error("سقف موجودی کالا");
    }
  };

  const decrement = () => {
    const addedProduct = cart.find((item) => +item.id === +props.id);

    if (addedProduct.inCart > 1) {
      let editedCart = [];
      cart.forEach((item) => {
        if (+item.id !== +addedProduct.id) {
          editedCart.push(item);
        } else {
          editedCart.push({
            ...item,
            inCart: item.inCart - 1,
            exist: item.exist + 1,
          });
        }
      });

      localStorage.setItem("cart", JSON.stringify(editedCart));
      setUpdate(!update);
    } else if (addedProduct.inCart === 1) {
      let filteredCart = cart.filter((item) => +item.id !== +props.id);
      localStorage.setItem("cart", JSON.stringify(filteredCart));
      setUpdate(!update);
    }
  };

  return (
    <Container>
      <Row className="my-4">
        <Col>
          <Carousel className="bg-warning rounded">
            <Carousel.Item interval={4000} className="">
              <img
                className=" w-25 "
                src={props.src[0]}
                alt="First slide"
                height={"360px"}
              />
            </Carousel.Item>
            <Carousel.Item interval={4000} className="">
              <img
                className=" w-25"
                src={props.src[1]}
                alt="second slide"
                height={"360px"}
              />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
      <Row className="my-4">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item>
              {props.name}
              {props.model}
            </ListGroup.Item>
            <ListGroup.Item>دسته بندی: {props.catagory} </ListGroup.Item>
            <ListGroup.Item> جنسیت: {props.gender}</ListGroup.Item>
            <ListGroup.Item> کد محصول: {props.codeNumber}</ListGroup.Item>
            <ListGroup.Item>قیمت: {props.price} </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>

      <Row className="my-4">
        <Col>{props.description}</Col>
      </Row>
      <Row>
        {cart.length > 0 && cart.find((item) => +item.id === +props.id) ? (
          <InputGroup className="d-flex justify-content-center align-items-center my-4">
            <Button
              onClick={increment}
              className="mx-3 btn-warning rounded-circle"
            >
              +
            </Button>
            <div>{count}</div>
            <Button
              onClick={decrement}
              className="mx-3 btn-warning rounded-circle"
            >
              -
            </Button>
            <Button className="btn-warning rounded">تایید سبد </Button>
          </InputGroup>
        ) : props.exist > 0 ? (
          <Button onClick={addToCart} className="btn-warning rounded ">
            اضافه کردن به سبد خرید
          </Button>
        ) : (
          <h1>ناموجود است</h1>
        )}
      </Row>
    </Container>
  );
}

export default DetailsProduct;
