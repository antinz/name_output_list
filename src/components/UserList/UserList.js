import React from "react";
import styles from "./UserList.module.css";

const UserList = () => {
  return (
    <ul className={styles["result-items"]}>
      <li>Max (31 years old)</li>
      <li>Jacob (15 years old)</li>
      <li>Tony (30 years old)</li>
    </ul>
  );
};

export default UserList;
