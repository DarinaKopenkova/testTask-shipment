import React from "react";
import { Button } from "react-bootstrap";
import { ShipmentList } from "../ShipmentList";
import { Link } from "react-router-dom";

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
          <Button variant="info">Info</Button>
        </Link>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
}
