import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShipmentList } from "./pages/ShipmentList/ShipmentList";
import { ShipmentDetails } from "./pages/ShipmentDetails/ShipmentDetails";

const shipments = [
  {
    orderNo: "wd-188849-82159474-8070250",
    date: "2/17/2019",
    customer: "Wolverine World Wide, Inc.",
    trackingNo: "TP-353069-93442245-9242241",
    status: "'Delivered'",
    consignee: "Comcast Corporation",
  },
  {
    orderNo: "eo-587622-81145661-2433957",
    date: "10/30/2018",
    customer: "Turkcell Iletisim Hizmetleri AS",
    trackingNo: "TP-270097-20971314-9825251",
    status: "'Delivered'",
    consignee: "TE Connectivity Ltd.",
  },
  {
    orderNo: "ms-869145-96178691-3326235",
    date: "9/22/2019",
    customer: "Cimarex Energy Co",
    trackingNo: "TP-512025-02593091-2625679",
    status: "'Delivered'",
    consignee: "Old Second Bancorp, Inc.",
  },
];

function App() {
  return (
    <div>
      <ShipmentList list={shipments} />
      {/* <ShipmentDetails /> */}
    </div>
  );
}

export default App;
