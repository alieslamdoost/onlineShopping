import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Icon from "../../components/Icon/Icon";
import "../../assets/Style/Theme/cardProduct.css";
import { BsCart3, BsHeart, BsFillHeartFill } from "react-icons/bs";
import { getProductData, updateData } from "../../api/api";

function CardProduct(props) {
  const [products, setProducts] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getProductData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const selectedProduct = [];

  for (let i = 0; i < 6; i++) {
    selectedProduct.push(products[i]);
  }

  const favorite = (id) => {
    products.map((item) =>
      item.id === id
        ? item.favorite === false
          ? updateData("products", id, { ...item, favorite: true })
          : updateData("products", id, { ...item, favorite: false })
        : null
    );
    setUpdate(!update);
  };

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex container flex-column justify-content-start align-items-start my-5">
        <div className="h3 text-warning my-4">مورد پسند ها</div>
        <div className="display5 w-75 text-end">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز
        </div>
      </div>
      <Row xs={1} md={3} className="w-100 ">
        {products.length > 0 &&
          products.slice(0, 6).map(
            (item) => (
              <Col className="d-flex justify-content-center align-items-center p-0 hiddenDetails">
                <Card
                  style={{ width: "18rem" }}
                  bg="light"
                  className="mb-2 border-warning"
                >
                  <Card.Img variant="top" height={"360px"} src={item.src[0]} />
                  <ListGroup className="list-group-flush ">
                    <ListGroup.Item className="text-warning">
                      {item.name} {item.model}
                      <ListGroup.Item className="showDetails">
                        <div onClick={() => favorite(item.id)}>
                          {item.favorite === true ? (
                            <Icon icon={<BsFillHeartFill />} />
                          ) : (
                            <Icon icon={<BsHeart />} />
                          )}
                        </div>

                        <div>
                          <Icon icon={<BsCart3 />} />
                        </div>
                      </ListGroup.Item>
                    </ListGroup.Item>
                  </ListGroup>
                </Card>
              </Col>
            )
            // console.log(item.src[0])
          )}
      </Row>
    </div>
  );
}

export default CardProduct;
