import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Details from "./components/shipment_details/Details";
import "../src/components/shipment_details/Shipment_details.css";
import { Table } from "./components/shipment_details/table/Table";

function App() {
  return (
    <div>
      <Table />
      <Details />
    </div>
  );
}

export default App;
