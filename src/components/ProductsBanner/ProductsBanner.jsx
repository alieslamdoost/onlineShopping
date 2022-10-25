import { useState, useEffect } from "react";
import { newProduct } from "../../api/api";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../../assets/Style/Theme/ProductsBanner.css";

function ProductsBanner(props) {
  const [showData, setShowData] = useState([]);

  useEffect(() => {
    newProduct()
      .then((res) => {
        setShowData(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return (
    <Container className="my-5">
      <Container className="my-5">
        <Row xs="auto" className="g-4">
          <Col xs={3}>
            <img
              src={showData[0]}
              alt="new product img"
              height={"420px"}
              className="effect"
            />
          </Col>
          <Col xs={3}>
            <img
              src={showData[1]}
              alt="new product img"
              height={"420px"}
              className="effect"
            />
          </Col>
          <Col xs={3}>
            <img
              src={showData[2]}
              alt="new product img"
              height={"420px"}
              className="effect"
            />
          </Col>
          <Col xs={3}>
            <img
              src={showData[3]}
              alt="new product img"
              height={"420px"}
              className="effect"
            />
          </Col>
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="d-flex g-4" xs="auto">
          <Col xs={6}>
            <img
              src={showData[6]}
              alt="new brands"
              width={"520px"}
              className="scaleHover"
            />
          </Col>
          <Col xs={2}>
            <img
              src={showData[8]}
              alt="new brands"
              width={"190px"}
              className="scaleHover"
            />
          </Col>
          <Col xs={2}>
            <img
              src={showData[7]}
              alt="new brands"
              width={"190px"}
              className="scaleHover"
            />
          </Col>
          <Col xs={2}>
            <img
              src={showData[5]}
              alt="new brands"
              width={"190px"}
              className="scaleHover"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ProductsBanner;
