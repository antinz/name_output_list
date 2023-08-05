import React from "react";
import styles from "./AddUser.module.css";

const AddUser = () => {
  return (
    <div className={styles.container}>
      <form>
        <label htmlFor={styles.username}>
          Username
          <input type="text" id="username" placeholder="Enter your name" />
        </label>
        <label htmlFor="age">
          Age (years)
          <input type="number" id="age" placeholder="Enter your age" />
        </label>
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default AddUser;
