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
  let pastEvents = user.signedEvents;

  let newEvents = pastEvents.map((item) => {
    item.volunteers.push({
      name: user.name,
      profilePicture: user.img,
    });
    item.past = true;
    return { ...item };
  });

  const empty = pastEvents.length === 0;
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
          {!empty && (
            <h4 className="mt-3" style={{ color: "#f97316" }}>
              Signed Up Events
            </h4>
          )}
          <PastCarousel pastEvents={newEvents} empty={empty} />
        </div>
      </div>
    );
  }

  return <Loading />;
};

export default Dashboard;
