import React from "react";
import { Table } from "react-bootstrap";
import styles from "./ShipmentList.module.css";
import { ShipmentListItem } from "./components/ShipmentListItem";

export function ShipmentList(props) {
  return (
    <Table striped bordered>
      <thead>
        <tr>
          <th>orderNo</th>
          <th>delivery date</th>
          <th>customer</th>
          <th>trackingNo</th>
          <th>status</th>
          <th>consignee</th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => {
          return <ShipmentListItem item={item} key={item.orderNo} />;
        })}
      </tbody>
    </Table>
  );
}
