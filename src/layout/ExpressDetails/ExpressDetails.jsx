import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsBoxSeam, BsLock, BsArrowRepeat } from "react-icons/bs";
import Icon from "../../components/Icon/Icon";

function ExpressDetails(props) {
  return (
    <Container className="my-5 text-white">
      <Row className="bg-warning rounded-4">
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center flex-column p-4"
        >
          <Icon icon={<BsBoxSeam className="fs-1" />} />
          <div className="text-end">
            <div className="text-muted text-bold my-3 ">لورم ایپسون</div>
            <div>لورم ایپسون یک متن نگار هست که استفاده می شود</div>
          </div>
        </Col>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center flex-column p-4 "
        >
          <Icon icon={<BsLock className="fs-1" />} />
          <div className="text-end">
            <div className="text-muted  text-bold my-3 ">لورم ایپسون</div>
            <div>لورم ایپسون یک متن نگار هست که استفاده می شود</div>
          </div>
        </Col>
        <Col
          xs={4}
          className="d-flex justify-content-center align-items-center flex-column p-4 "
        >
          <Icon icon={<BsArrowRepeat className="fs-1" />} />
          <div className="text-end">
            <div className="text-muted  text-bold my-3 ">لورم ایپسون</div>
            <div>لورم ایپسون یک متن نگار هست که استفاده می شود</div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default ExpressDetails;
