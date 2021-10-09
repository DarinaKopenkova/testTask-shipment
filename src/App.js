import React from "react";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShipmentList } from "./pages/ShipmentList/ShipmentList";
import { ShipmentDetails } from "./pages/ShipmentDetails/ShipmentDetails";
import axios from "axios";
import { Loader } from "./components/Loader/Loader";

function App() {
  const [isLoading, setIsLoading] = React.useState(true);

  const [list, setList] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://my.api.mockaroo.com/shipments.json?key=5e0b62d0")
      .then(function (response) {
        setList(response.data);
        setIsLoading(false);
      })
      .catch(function (error) {
        // handle error
        setIsLoading(false);
        console.log(error);
      });
  }, []);

  return (
    <div className={styles.container}>
      {isLoading ? <Loader /> : <ShipmentList list={list} />}
      <ShipmentDetails />
    </div>
  );
}

export default App;
