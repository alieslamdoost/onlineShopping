import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import "../../assets/Style/Theme/Header.css";
import { Link } from "react-router-dom";

function HeaderLinks(props) {
  return (
    <Nav>
      <Container className="pl-6 d-flex fs-4">
        <Nav.Link className="link" as={Link} to="/">
          خانه
        </Nav.Link>

        <Nav.Link className="link" as={Link} to="/Products">
          محصولات
        </Nav.Link>
        <Nav.Link className="link" as={Link} to="/About">
          درباره ساعت صفر
        </Nav.Link>
        <Nav.Link className="link" as={Link} to="/Contact">
          تماس
        </Nav.Link>
      </Container>
    </Nav>
  );
}

export default HeaderLinks;
