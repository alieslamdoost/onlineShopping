import React from "react";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../assets/Style/Theme/ManagementHeader.css";
import { Link } from "react-router-dom";

function ManagementHeaderLinks(props) {
  return (
    <Nav>
      <Container className="pl-6 d-flex fs-4">
        <Nav.Link className="header" as={Link} to="/ManagementProducts">
          کالا ها
        </Nav.Link>
        <Nav.Link className="header" as={Link} to="/ManageMentPriceAndExist">
          ویرایش کالا
        </Nav.Link>
        <Nav.Link className="header" as={Link} to="/ManagementOrder">
          سفارش ها
        </Nav.Link>
      </Container>
    </Nav>
  );
}

export default ManagementHeaderLinks;
