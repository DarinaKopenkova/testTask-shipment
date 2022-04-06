import React from "react";
import { Table } from "react-bootstrap";
import styles from "./ShipmentList.module.css";
import { ShipmentListItem } from "./components/ShipmentListItem";
import { ReactComponent as ArrowUp } from "../../components/Arrows/UpArrow.svg";
import { ReactComponent as ArrowDown } from "../../components/Arrows/DownArrow.svg";

export function ShipmentList(props) {
  return (
    <Table table-primary variant>
      <thead>
        <tr className={styles.header}>
          <th>orderNo</th>
          <th>delivery date</th>
          <th>
            <div className={styles.title}>
              <div className={styles.title__name}>customer</div>
              <div className={styles.title__arrows}>
                <ArrowUp className={styles.arrowUp} />
                <ArrowDown className={styles.arrowDown} />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.title}>
              <div className={styles.title__name}>trackingNo</div>
              <div>
                <ArrowUp className={styles.arrowUp} />
                <ArrowDown className={styles.arrowDown} />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.title}>
              <div className={styles.title__name}>status</div>
              <div>
                <ArrowUp className={styles.arrowUp} />
                <ArrowDown className={styles.arrowDown} />
              </div>
            </div>
          </th>
          <th>
            <div className={styles.title}>
              <div className={styles.title__name}>consignee</div>
              <div>
                <ArrowUp className={styles.arrowUp} />
                <ArrowDown className={styles.arrowDown} />
              </div>
            </div>
          </th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {props.list.map((item) => {
          return (
            <ShipmentListItem
              item={item}
              key={item.orderNo}
              onDelete={() => props.onDelete(item.orderNo)}
            />
          );
        })}
      </tbody>
    </Table>
  );
}
