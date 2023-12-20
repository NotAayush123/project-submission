import React from "react";
import LoginForm from "../components/Login/LoginForm";
import classes from "../components/Login/LoginForm.module.css";
const Login = () => {
  return (
    <div className={classes.bg}>
      <LoginForm />
    </div>
  );
};

export default Login;
