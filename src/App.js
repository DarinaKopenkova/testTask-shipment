import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShipmentList } from "./pages/ShipmentList/ShipmentList";
import { ShipmentDetails } from "./pages/ShipmentDetails/ShipmentDetails";
import axios from "axios";

function App() {
  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(function (response) {
        setList(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <div>
      <ShipmentList list={list} />
      {/* <ShipmentDetails /> */}
    </div>
  );
}

export default App;
