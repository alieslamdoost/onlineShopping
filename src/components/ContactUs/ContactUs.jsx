import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import Icon from "../../components/Icon/Icon";
import { BsHouseDoor, BsTablet, BsEnvelope } from "react-icons/bs";

export default function ContactUs() {
  return (
    <Container className="my-5">
      <Row>
        <Col>
          <div className="d-flex justify-content-baseline align-items-center gap-4 my-4">
            <div>
              <Icon icon={<BsHouseDoor />} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className="h4 text-warning">ایران، البرز</div>
              <div className="h5 text-secondary">کرج، گوهردشت</div>
            </div>
          </div>
          <div className="d-flex justify-content-baseline align-items-center gap-4 my-4">
            <div>
              <Icon icon={<BsTablet />} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className="h4 text-warning">4444 3444 26 98+</div>
              <div className="h5 text-secondary">
                از شنبه تا چهارشنبه ساعت 9 الی 16
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-baseline align-items-center gap-4 my-4">
            <div>
              <Icon icon={<BsEnvelope />} />
            </div>
            <div className="d-flex flex-column justify-content-center align-items-start">
              <div className="h4 text-warning">Supported@saaat.com</div>
              <div className="h5 text-secondary">با ما در ارتباط باشید</div>
            </div>
          </div>
        </Col>
        <Col>
          <Form>
            <Row className="my-3">
              <Col className="d-flex flex-column justify-content-center align-items-start">
                <Form.Label>نام</Form.Label>
                <Form.Control placeholder="علی" />
              </Col>
              <Col className="d-flex flex-column justify-content-center align-items-start">
                <Form.Label>نام خانوادگی</Form.Label>
                <Form.Control placeholder="اسلام دوست" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="d-flex flex-column justify-content-center align-items-start">
                <Form.Label>ایمیل</Form.Label>
                <Form.Control placeholder="supported@saaat.com" />
              </Col>
            </Row>
            <Row className="my-3">
              <Col className="d-flex flex-column justify-content-center align-items-start">
                <Form.Label>نظرات</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Col>
            </Row>
          </Form>
        </Col>
      </Row>
    </Container>
  );
}
