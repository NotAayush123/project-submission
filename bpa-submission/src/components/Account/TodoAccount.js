import React, { useState } from "react";
import classes from "./TodoAccount.module.css";
import { Checkbox } from "@mantine/core";
const TodoAccount = () => {
  const removeItem = (taskRemove) => {
    const newArray = data.filter((task) => task.task !== taskRemove);

    localStorage.setItem("tasks", JSON.stringify(newArray));
    window.location.reload();
  };
  const data = JSON.parse(localStorage.getItem("tasks"));
  if (!data) {
    localStorage.setItem(
      "tasks",
      JSON.stringify([
        { task: "Set a profile picture" },
        { task: "Set a profile description" },
        { task: "Signup for your first event!" },
      ])
    );
  }
  return (
    <div>
      {data && data.length !== 0 && (
        <h2 className="mb-3">Finish Setting Up Your Account</h2>
      )}
      {data.map((item) => {
        return (
          <TodoItem task={item.task} removeItem={removeItem} key={item.task} />
        );
      })}
    </div>
  );
};
const TodoItem = ({ task, removeItem }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [display, setDisplay] = useState();
  const [done, setDone] = useState();
  const check = () => {
    setIsChecked((prev) => !prev);
    setTimeout(() => {
      setDisplay(true);
      removeItem(task);
    }, 2000);
    setTimeout(() => {
      setDone(true);
    }, 3000);
  };
  return (
    <div
      className={`${classes.item} ${isChecked ? classes.strike : ""} ${
        display ? classes.remove : ""
      } ${done ? classes.done : ""}`}
    >
      <p style={{ display: "inline", margin: "0" }}>{task}</p>
      <Checkbox style={{ marginLeft: "auto" }} color="green" onClick={check} />
    </div>
  );
};

export default TodoAccount;
