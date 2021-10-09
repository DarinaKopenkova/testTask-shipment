import React from "react";
import { Button } from "react-bootstrap";

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
        <Button variant="info">Info</Button>
        <Button variant="danger">Delete</Button>
      </td>
    </tr>
  );
}
