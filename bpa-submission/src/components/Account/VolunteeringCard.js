import { ThemeIcon, Text, Paper, rem } from "@mantine/core";
import { IconClockHeart, IconHeartHandshake } from "@tabler/icons-react";
import classes from "./VolunteeringCard.module.css";

export function VolunteeringCard({ last }) {
  return (
    <Paper radius="md" withBorder className={classes.card} mt={20}>
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
    </Paper>
  );
}
