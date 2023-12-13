import React from "react";
import classes from "./Chatbot.module.css";
const Chatbot = () => {
  return (
    <button className={classes.container}>
      <div className={classes.icon}>
        <i class="fa-solid fa-comment fa-2xl" style={{ color: "white" }}></i>
      </div>
    </button>
  );
};

export default Chatbot;
