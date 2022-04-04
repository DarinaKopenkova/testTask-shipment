import React from "react";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ShipmentList } from "./pages/ShipmentList/ShipmentList";
import { ShipmentDetails } from "./pages/ShipmentDetails/ShipmentDetails";
import axios from "axios";
import { Loader } from "./components/Loader/Loader";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

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
        setIsLoading(false);
        console.log(error);
      });
  }, []);
  function deleteItem(orderNo) {
    const newList = list.filter((item) => {
      return item.orderNo !== orderNo;
    });
    setList(newList);
  }
  return (
    <div className={styles.container}>
      {isLoading && <Loader />}
      <Router>
        <Switch>
          <Route path="/:id">
            <ShipmentDetails list={list} />
          </Route>
          <Route path="/">
            <ShipmentList list={list} onDelete={deleteItem} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
