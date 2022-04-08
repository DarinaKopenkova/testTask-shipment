import { ReactComponent as ArrowUp } from "./Arrows/UpArrow.svg";
import { ReactComponent as ArrowDown } from "./Arrows/DownArrow.svg";
import styles from "../pages/ShipmentList/ShipmentList.module.css";

export function SortingArrows({ sortKey, onSort }) {
  return (
    <>
      <ArrowUp
        className={styles.arrowUp}
        onClick={() => onSort(sortKey, "ASC")}
      />
      <ArrowDown
        className={styles.arrowDown}
        onClick={() => onSort(sortKey, "DESC")}
      />
    </>
  );
}
