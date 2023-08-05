import React from "react";
import styles from "./ErrorModal.module.css";

const ErrorModal = () => {
  return (
    <div className={styles["modal-container"]}>
      <div className={styles["modal-content"]}>
        <h2>Invalid Input</h2>
        <p>Error message</p>
        <button type="button" className={styles["modal-btn"]}>
          Okay
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
