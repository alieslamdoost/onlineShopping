import React from "react";
import { Card, Col, Container, ListGroup, Row } from "react-bootstrap/";
import { getProductData } from "../../api/api";
import { useState, useEffect } from "react";

export default function FavoriteProduct() {
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
    <Container>
      <Row className="my-4">
        {products.length > 0 &&
          products.map((item, index) =>
            item.favorite === true ? (
              <Col className="d-flex justify-content-center align-items-center p-0 mx-4">
                <Card
                  style={{ width: "18rem" }}
                  bg="light"
                  className="mb-2 border-warning"
                  key={item.id}
                >
                  <Card.Img variant="top" height={"360px"} src={item.src[0]} />
                  <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>{item.model}</Card.Text>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{item.gender}</ListGroup.Item>
                    <ListGroup.Item>{item.price}</ListGroup.Item>
                    <ListGroup.Item>{item.catagory}</ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            ) : (
              console.log("err")
            )
          )}
      </Row>
    </Container>
  );
}
