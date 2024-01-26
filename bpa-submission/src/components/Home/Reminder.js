import React, { useState } from "react";
import classes from "./Reminder.module.css";

const Reminder = () => {
  const confirm = localStorage.getItem("confirmed");
  const [show, setShow] = useState(confirm);
  const confirmation = () => {
    setShow(true);
    localStorage.setItem("confirmed", true);
  };
  return (
    <div>
      {!show && (
        <div className={classes.cookies}>
          <h3 className="text-center">
            <i class="fa-solid fa-cookie" style={{ color: "#854d0e" }}></i>
            <h3 style={{ display: "inline-block" }} className="mx-3">
              Cookies
            </h3>
            <i class="fa-solid fa-cookie" style={{ color: "#854d0e" }}></i>
          </h3>
          Hello volunteer! By continuing to use this website and by signing in,
          you accept our use of cookies and local storage. You also accept our{" "}
          <a href="/privacy">Privacy Policy</a>
          <button className={classes.button} onClick={confirmation}>
            Ok!
          </button>
        </div>
      )}
    </div>
  );
};

export default Reminder;
