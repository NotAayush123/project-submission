import { ThemeIcon, Text, Paper, rem, Button } from "@mantine/core";
import {
  IconClockHeart,
  IconHeartHandshake,
  IconMail,
} from "@tabler/icons-react";
import classes from "./VolunteeringCard.module.css";
import { useNavigate } from "react-router-dom";
export function VolunteeringCard({ last, email, data }) {
  const navigate = useNavigate();
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      {!email ? (
        <>
          {" "}
          <ThemeIcon className={classes.icon} size={60} radius={60}>
            {last ? (
              <IconClockHeart
                style={{ width: rem(32), height: rem(32) }}
                stroke={1.5}
              />
            ) : (
              <IconHeartHandshake
                style={{ width: rem(32), height: rem(32) }}
                stroke={1.5}
              />
            )}
          </ThemeIcon>
          <Text ta="center" fw={700} className={classes.title}>
            <h3>{last ? "Your Last Volunteering" : "Your Volunteer Hours"}</h3>
          </Text>
          <Text ta="center" fz="sm">
            {last ? "was with Charity Crossing!" : "0 hours"}
          </Text>
        </>
      ) : (
        <>
          <ThemeIcon className={classes.icon} size={60} radius={60}>
            <IconMail
              style={{ width: rem(32), height: rem(32) }}
              stroke={1.5}
            />
          </ThemeIcon>

          <Text ta="center" fw={700} className={classes.title}>
            <h3>Email sent!</h3>
          </Text>
          <Text ta="center" fz="sm">
            Just checking with {data.organization} to see if {data.name} really
            is an admin!
          </Text>
          <Text ta="center" fz="sm" className="mt-2">
            You will recieve an email at {data.email} whenever we confirm!
          </Text>

          <Button
            variant="subtle"
            size="md"
            className="mt-3"
            fullWidth
            onClick={() => {
              navigate("/");
            }}
          >
            Take me back to home page
          </Button>
        </>
      )}
    </Paper>
  );
}
