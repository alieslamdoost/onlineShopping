import React, { useEffect, useState } from "react";
import { getProductData } from "../../api/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function ExplainProduct() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProductData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <>
      {products.length > 0 && (
        <Container className="my-5">
          <Row className="my-5">
            <Col>
              <img
                src={products[4].src[1]}
                alt="imge of explain"
                height={"280px"}
                className="border border-warning rounded-3"
              />
            </Col>
            <Col></Col>
            <Col className="d-flex flex-column justify-content-center align-items-start">
              <div className="h3 text-warning ">آنچه شما می خواهید</div>
              <div className="text-end my-5">{products[4].description}</div>
            </Col>
          </Row>
          <Row className="my-5">
            <Col className="d-flex flex-column justify-content-center align-items-start">
              <div className="h3 text-warning ">آنچه شما می پوشید</div>
              <div className="text-end my-5">{products[12].description}</div>
            </Col>
            <Col></Col>
            <Col>
              <img
                src={products[12].src[1]}
                alt="imge of explain"
                height={"280px"}
                className="border border-warning rounded-3"
              />
            </Col>
          </Row>
        </Container>
      )}
    </>
  );
}
