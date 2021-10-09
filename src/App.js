import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShipmentList } from "./pages/ShipmentList/ShipmentList";
import { ShipmentDetails } from "./pages/ShipmentDetails/ShipmentDetails";

function App() {
  return (
    <div>
      <ShipmentList />
      <ShipmentDetails />
    </div>
  );
}

export default App;
