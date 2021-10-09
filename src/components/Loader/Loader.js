import React from "react";
import { Spinner } from "react-bootstrap";
import styles from "./Loader.module.css";

export function Loader() {
  return (
    <div className={styles.spinnerWrapper}>
      <Spinner className={styles.spinner} animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>
  );
}
