import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import classes from "./EventDetail.module.css";
import {
  Avatar,
  AvatarGroup,
  Button,
  Paper,
  Text,
  Tooltip,
} from "@mantine/core";
const EventDetail = () => {
  // Get the current location
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem("currentUser"));
  let events = user.signedEvents;
  // Extract all query parameters from the location object
  const queryParams = new URLSearchParams(location.search);

  // Access individual query parameters
  const eventName = queryParams.get("name");
  const organization = queryParams.get("organization");
  const image = queryParams.get("image");
  const maxSpots = queryParams.get("maxSpots");
  const address = queryParams.get("address");
  const time = queryParams.get("time");
  const day = queryParams.get("day");
  const usersTask = queryParams.get("usersTask");
  const contactPhone = queryParams.get("contactPhone");
  const contactEmail = queryParams.get("contactEmail");
  const signedParam = queryParams.get("signed");
  const pastVal = queryParams.get("past");
  const past = pastVal ? pastVal === "true" : false;
  const signed = signedParam ? signedParam === "true" : false;
  console.log(past);
  const navigate = useNavigate();
  const volunteers = [];
  let index = 1;
  while (queryParams.has(`volunteer${index}Name`)) {
    const volunteerName = queryParams.get(`volunteer${index}Name`);
    const volunteerProfilePicture = queryParams.get(
      `volunteer${index}ProfilePicture`
    );
    volunteers.push({
      name: volunteerName,
      profilePicture: volunteerProfilePicture,
    });
    index++;
  }
  const event = {
    eventName,
    organization,
    image,
    maxSpots,
    address,
    time,
    day,
    usersTask,
    contactPhone,
    contactEmail,
    volunteers,
  };

  let charityUrl = "";
  if (organization === "Charity Crossing") {
    charityUrl =
      "https://charitycrossing.org/wp-content/uploads/2019/11/WhatsApp-Image-2019-04-20-at-11.11.20-AM.jpeg";
  } else if (organization === "Food Bank of Delaware") {
    charityUrl =
      "https://www.fbd.org/wp-content/uploads/2021/01/My-Post-89-1280x960.png";
  } else if (organization === "Delmarva Red Cross") {
    charityUrl =
      "data:image/jpeg;base64,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 ";
  }
  const avatars = volunteers.map((volunteer) => {
    return (
      <>
        <Tooltip label={volunteer.name} withArrow>
          <Avatar src={volunteer.profilePicture} />
        </Tooltip>
      </>
    );
  });
  return (
    <div>
      <div className={classes.imgContainer}>
        <img className={classes.image} src={image} alt="Volunteering" />
      </div>
      <h1 className="mt-5">{eventName}</h1>
      <h3>{address}</h3>
      <AvatarGroup className="mb-3">
        {avatars}
        {"   "}
        <Text fw={700} style={{ fontSize: "1.4rem", marginLeft: "5px" }}>
          {volunteers.length}/{maxSpots} volunteers
        </Text>
      </AvatarGroup>{" "}
      <Paper
        shadow="xl"
        withBorder
        p="xs"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Avatar src={charityUrl} display="inline-block" />
        <p
          style={{ marginLeft: "10px", marginTop: "10px", fontSize: "1.2rem" }}
        >
          Hosted by {organization}
        </p>
      </Paper>
      <Paper shadow="xl" withBorder p="xs" className="mt-3">
        <h3>Details</h3>
        <p>Address: {address}</p>
        <p>Time: {time}</p>
        <p>Hosted on: {day}</p>
        <p>{usersTask}</p>
      </Paper>
      <Paper shadow="xl" withBorder p="xs" className="mt-3 mb-5">
        <h3>Contact</h3>
        <p>Contact Phone: {contactPhone}</p>
        <p>Contact Email: {contactEmail}</p>
      </Paper>
      {!past && (
        <Paper className={classes.overlay} shadow="xl" withBorder p="lg">
          {signed ? (
            <Button className={classes.sign} fullWidth color="gray" disabled>
              You're already signed up!
            </Button>
          ) : (
            <Button
              className={classes.sign}
              color="orange"
              radius="lg"
              fullWidth
              onClick={() => {
                events.push(event);
                const newUser = { ...user, signedEvents: events };
                localStorage.setItem("currentUser", JSON.stringify(newUser));
                const id = user.id;
                const users = JSON.parse(localStorage.getItem("users"));
                const updatedUsersArray = users.map((u) =>
                  u.id === id ? { ...u, signedEvents: events } : u
                );
                console.log(users);
                localStorage.setItem(
                  "users",
                  JSON.stringify(updatedUsersArray)
                );
                navigate("/dashboard");
              }}
            >
              Sign up
            </Button>
          )}
        </Paper>
      )}
    </div>
  );
};

export default EventDetail;
