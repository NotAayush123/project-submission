import {
  Card,
  Image,
  Text,
  Group,
  Button,
  AvatarGroup,
  Avatar,
  Tooltip,
} from "@mantine/core";

import classes from "./Card.module.css";

export function VolunteeringCard({
  name,
  maxSpots,
  time,
  image,
  volunteers,
  day,
}) {
  console.log(volunteers);
  const avatars = volunteers.map((volunteer) => {
    return (
      <>
        <Tooltip label={volunteer.name} withArrow>
          <Avatar src={volunteer.profilePicture} />
        </Tooltip>
      </>
    );
  });
  console.log(avatars);
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={image}
          alt="Tesla Model S"
          style={{ width: "100%", height: "250px" }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{name}</Text>
          <Text fz="xs" c="dimmed">
            {day} - {time}
          </Text>
        </div>

        <AvatarGroup>{avatars}</AvatarGroup>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {volunteers.length}/{maxSpots} people
            </Text>
          </div>

          <Button radius="xl" style={{ flex: 1 }} color="orange">
            Sign up
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
