import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SignupForm from "../components/Signup/SignupForm";

const Signup = () => {
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
    return <SignupForm />;
  }
};

export default Signup;
