import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loading from "../components/Loading";
import { CardsCarousel } from "../components/Volunteering/Carousel";
import { PastCarousel } from "../components/Volunteering/PastCarousel";
const Dashboard = () => {
  const navigate = useNavigate();
  const signedIn = localStorage.getItem("signedIn");

  useEffect(() => {
    if (!signedIn) {
      console.log("User not signed in, redirecting to /signup");
      navigate("/signup");
    }
  }, []);
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const date =
    new Date(user.date).toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    }) +
    ", " +
    new Date(user.date).toLocaleDateString("en-US", { weekday: "long" });
  const pastEvents = user.signedEvents;
  console.log(pastEvents);
  if (signedIn) {
    return (
      <div style={{ marginLeft: "2rem" }}>
        <h1 className="mt-3">Welcome back, {user.name}</h1>
        <h3>It's {date}</h3>
        <div className="mt-5">
          <h4 className="mt-3" style={{ color: "#f97316" }}>
            Events for you
          </h4>
          <CardsCarousel
            date={user.date}
            pastEvents={pastEvents}
            username={user.name}
            profile={user.img}
          />
          <h4 className="mt-3" style={{ color: "#f97316" }}>
            Past Events
          </h4>
          <PastCarousel pastEvents={pastEvents} />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Dashboard;
