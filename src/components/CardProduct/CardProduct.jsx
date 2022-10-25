import React, { useState, useEffect } from "react";
import Icon from "../../components/Icon/Icon";
import "../../assets/Style/Theme/cardProduct.css";
import {
  BsCart3,
  BsHeart,
  BsArrowsFullscreen,
  BsFillHeartFill,
} from "react-icons/bs";
import { getProductData, filterData, updateData } from "../../api/api";
import {
  DropdownButton,
  Card,
  Col,
  Row,
  ListGroup,
  Modal,
  Button,
  Dropdown,
  Container,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function CardProduct(props) {
  const [products, setProducts] = useState([]);
  const [show, setShow] = useState(false);
  const [modal, setModal] = useState([]);
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    getProductData()
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        alert(err);
      });
  }, [update]);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleModal = (id, favorite, img, price, catagory, gender) => {
    setModal([id, favorite, img, price, catagory, gender]);
  };

  const handleFilter = (feildset, filterBy, filter) => {
    filterData(feildset, filterBy, filter)
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const navigate = useNavigate();

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
    <Container className="d-flex flex-column justify-content-center align-items-start ">
      <Row xs={1} md={3} className="my-5 container">
        <DropdownButton variant="warning" drop="start" title="دسته بندی">
          <Dropdown.Item
            as="button"
            onClick={() => {
              handleFilter("products", "", "");
            }}
          >
            همه
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              handleFilter("products", "gender", "men");
            }}
          >
            مردانه
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              handleFilter("products", "gender", "women");
            }}
          >
            زنانه
          </Dropdown.Item>
          <Dropdown.Item
            as="button"
            onClick={() => {
              handleFilter("products", "gender", "accessory");
            }}
          >
            اکسسوری
          </Dropdown.Item>
        </DropdownButton>
      </Row>
      <Row xs={1} md={3} className="w-100 my-5 ">
        {products.length > 0 &&
          products.map((item, index) => (
            <Col className="d-flex justify-content-center align-items-center p-0 hiddenDetails">
              <Card
                style={{ width: "18rem" }}
                bg="light"
                className="mb-2 border-warning"
                key={item.id}
              >
                <Card.Img variant="top" height={"360px"} src={item.src[0]} />
                <Card.Body>
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

                        <div onClick={() => navigate(`/Details/${item.id}`)}>
                          <Icon icon={<BsCart3 />} />
                        </div>
                        <div
                          onClick={() =>
                            handleModal(
                              item.src[1],
                              item.price,
                              item.catagory,
                              item.gender
                            )
                          }
                        >
                          <div onClick={handleShow}>
                            <Icon icon={<BsArrowsFullscreen />} />
                          </div>
                        </div>
                      </ListGroup.Item>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
              <Modal show={show} onHide={handleClose}>
                <Modal.Header className="px-4" closeButton>
                  <Modal.Title className="mx-2">جزییات</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  <Card className="border-warning">
                    <Card.Img variant="top" width={"18rem"} src={modal[0]} />
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>قیمت:{modal[1]}</ListGroup.Item>
                      <ListGroup.Item>دسته بندی:{modal[2]}</ListGroup.Item>
                      <ListGroup.Item>جنسیت:{modal[3]}</ListGroup.Item>
                    </ListGroup>
                  </Card>
                </Modal.Body>
                <Button variant="warning" onClick={handleClose}>
                  بستن
                </Button>
              </Modal>
            </Col>
          ))}
      </Row>
    </Container>
  );
}

export default CardProduct;
