import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LoginForm from "../components/Login/LoginForm";
import classes from "../components/Login/LoginForm.module.css";
const Login = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (signedIn) {
      navigate("/dashboard");
    }
  }, [signedIn, navigate]);

  if (signedIn) {
    return null;
  } else {
    return (
      <div className={classes.bg}>
        <LoginForm />
      </div>
    );
  }
};

export default Login;
