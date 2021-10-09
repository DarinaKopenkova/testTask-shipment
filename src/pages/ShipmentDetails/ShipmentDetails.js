import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import styles from "./ShipmentDetails.module.css";

export function ShipmentDetails() {
  return (
    <div>
      <h5 className={styles.title}>shipment details</h5>
      <Form className={"m-4 " + styles.form}>
        <Row>
          <Col>
            <Form.Label>orderNo</Form.Label>
            <Form.Control placeholder="orderNo" disabled />
          </Col>
          <Col>
            <Form.Label>date</Form.Label>
            <Form.Control placeholder="date" disabled />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Form.Label>customer</Form.Label>
            <Form.Control placeholder="customer" disabled />
          </Col>
          <Col>
            <Form.Label>trackingNo</Form.Label>
            <Form.Control placeholder="trackingNo" disabled />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Form.Label>consignee</Form.Label>
            <Form.Control placeholder="consignee" disabled />
          </Col>
          <Col>
            <Form.Label>status</Form.Label>
            <Form.Control placeholder="status" disabled />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
