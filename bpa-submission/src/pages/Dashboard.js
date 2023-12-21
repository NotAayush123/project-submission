import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Loader } from "@mantine/core";
const Dashboard = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (!signedIn) {
      console.log("User not signed in, redirecting to /signup");
      navigate("/signup");
    }
  }, [signedIn, navigate]);

  if (signedIn) {
    return <div>Dashboard</div>;
  }

  return <Loader color="orange" size="xl" type="dots" />;
};

export default Dashboard;
