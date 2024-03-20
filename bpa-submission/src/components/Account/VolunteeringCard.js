import {
  ThemeIcon,
  Text,
  Paper,
  rem,
  Button,
  Popover,
  Anchor,
} from "@mantine/core";
import {
  IconClockHeart,
  IconHeartHandshake,
  IconInfoCircle,
  IconMail,
} from "@tabler/icons-react";
import classes from "./VolunteeringCard.module.css";
import { useNavigate } from "react-router-dom";
export function VolunteeringCard({ last, email, data }) {
  const navigate = useNavigate();
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
      <Popover
        width={200}
        position="bottom"
        withArrow
        shadow="md"
        zIndex={99999999}
      >
        <Popover.Target>
          <IconInfoCircle
            style={{ position: "absolute", top: "5", right: "10" }}
          />
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="md">Your event must be approved by an admin first!</Text>
          <Anchor href="/dashboard/events">Take me to some!</Anchor>
        </Popover.Dropdown>
      </Popover>

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
            {last ? "wasn't at any organization." : "0 hours"}
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
