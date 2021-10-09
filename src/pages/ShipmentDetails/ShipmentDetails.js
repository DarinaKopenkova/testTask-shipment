import React from "react";
import { Form, Row, Col } from "react-bootstrap";
import { useParams } from "react-router";
import styles from "./ShipmentDetails.module.css";

export function ShipmentDetails(props) {
  let { id } = useParams();
  const item = props.list.find((item) => {
    return item.orderNo === id;
  });
  if (!item) {
    return "Not found";
  }
  return (
    <div>
      <h5 className={styles.title}>shipment details</h5>
      <Form className="m-4">
        <Row>
          <Col>
            <Form.Label className={styles.form}>orderNo</Form.Label>
            <Form.Control placeholder={item.orderNo} disabled />
          </Col>
          <Col>
            <Form.Label className={styles.form}>date</Form.Label>
            <Form.Control placeholder={item.date} disabled />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Form.Label className={styles.form}>customer</Form.Label>
            <Form.Control placeholder={item.customer} disabled />
          </Col>
          <Col>
            <Form.Label className={styles.form}>trackingNo</Form.Label>
            <Form.Control placeholder={item.trackingNo} disabled />
          </Col>
        </Row>
        <Row className="pt-3">
          <Col>
            <Form.Label className={styles.form}>consignee</Form.Label>
            <Form.Control placeholder={item.consignee} disabled />
          </Col>
          <Col>
            <Form.Label className={styles.form}>status</Form.Label>
            <Form.Control placeholder={item.status} disabled />
          </Col>
        </Row>
      </Form>
    </div>
  );
}
