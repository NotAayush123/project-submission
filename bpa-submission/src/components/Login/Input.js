import React from "react";
import styles from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputData}>
        <input
          required
          className={`${styles.input}`}
          {...props}
          placeholder=""
        />
        <div
          className={
            props.mode === "Signup" ? styles.underline2 : styles.underline
          }
        ></div>
        <label className={styles.label}>{props.label}</label>
      </div>
    </div>
  );
};

export default Input;
