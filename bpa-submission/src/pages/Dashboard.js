import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
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
    return (
      <div style={{ height: "900vh" }}>
        <h1>Dashboard</h1>
      </div>
    );
  }

  return <Loading />;
};

export default Dashboard;
