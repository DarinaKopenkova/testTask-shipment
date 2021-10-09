import React from "react";
import { Table, Button } from "react-bootstrap";
import "./ShipmentList.css";

export function ShipmentList() {
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
        <tr>
          <td>13456789098765432345</td>
          <td>5/2/2019</td>
          <td>Otto</td>
          <td>@mdo-45678-45678</td>
          <td>shipped</td>
          <td>Royal Bank Of Canada</td>
        </tr>
        <Button variant="info">Info</Button>
        <Button variant="danger">Delete</Button>
      </tbody>
    </Table>
  );
}
