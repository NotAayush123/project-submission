import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { CardsCarousel } from "../components/Volunteering/Carousel";
const Dashboard = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (!signedIn) {
      console.log("User not signed in, redirecting to /signup");
      navigate("/signup");
    }
  }, [signedIn, navigate]);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const date =
    new Date(user.date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    ", " +
    new Date(user.date).toLocaleDateString("en-US", { weekday: "long" });
  console.log(user.date);
  if (signedIn) {
    return (
      <div style={{ height: "900vh", marginLeft: "2rem" }}>
        <h1 className="mt-3">Welcome back, {user.name}</h1>
        <h3>It's {date}</h3>
        <div className="mt-5">
          <h4 className="mt-3" style={{ color: "#f97316" }}>
            Events for you
          </h4>
          <CardsCarousel date={user.date} />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Dashboard;
