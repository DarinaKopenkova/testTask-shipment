import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../ShipmentList.module.css";

export function ShipmentListItem(props) {
  return (
    <tr>
      <td>{props.item.orderNo}</td>
      <td>{props.item.date}</td>
      <td>{props.item.customer}</td>
      <td>{props.item.trackingNo}</td>
      <td>{props.item.status}</td>
      <td>{props.item.consignee}</td>
      <td>
        <Link to={"/" + props.item.orderNo}>
          <Button className={styles.buttonInfo} variant="info">
            🛈
          </Button>
        </Link>
        <Button variant="danger" onClick={props.onDelete}>
          ☓
        </Button>
      </td>
    </tr>
  );
}
