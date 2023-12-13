import React from "react";
import styles from "./Input.module.css";
import { PasswordInput } from "@mantine/core";

const Input = (props) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.inputData}>
        {props.type === "Password" ? (
          <PasswordInput className={`${styles.input}`} {...props} label="" />
        ) : (
          <input
            required
            className={`${styles.input}`}
            {...props}
            placeholder=""
          />
        )}
        <div className={styles.underline}></div>
        <label className={styles.label}>{props.label}</label>
      </div>
    </div>
  );
};

export default Input;
