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
import { useNavigate } from "react-router-dom";

export function VolunteeringCard(item) {
  console.log(item.past);
  let avatars = item.volunteers.map((volunteer) => {
    return (
      <>
        <Tooltip label={volunteer.name} withArrow>
          <Avatar src={volunteer.profilePicture} />
        </Tooltip>
      </>
    );
  });

  const navigate = useNavigate();

  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={item.image}
          alt="Tesla Model S"
          style={{ width: "100%", height: "250px" }}
        />
      </Card.Section>

      <Group justify="space-between" mt="md">
        <div>
          <Text fw={500}>{item.name || item.eventName}</Text>
          <Text fz="xs" c="dimmed">
            {item.day} - {item.time}
          </Text>
        </div>

        <AvatarGroup>{avatars}</AvatarGroup>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {item.volunteers.length}/{item.maxSpots} people
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: 1 }}
            color="orange"
            onClick={() => {
              let queryParams = `name=${encodeURIComponent(
                item.name || item.eventName
              )}&organization=${encodeURIComponent(
                item.organization
              )}&image=${encodeURIComponent(
                item.image
              )}&maxSpots=${encodeURIComponent(
                item.maxSpots
              )}&address=${encodeURIComponent(
                item.address
              )}&time=${encodeURIComponent(item.time)}&day=${encodeURIComponent(
                item.day
              )}&usersTask=${encodeURIComponent(
                item.usersTask
              )}&contactPhone=${encodeURIComponent(
                item.contactPhone
              )}&signed=${encodeURIComponent(
                item.signed
              )}&past=${encodeURIComponent(
                item.past
              )}&contactEmail=${encodeURIComponent(item.contactEmail)}`;

              // Add volunteer details to queryParams
              item.volunteers.forEach((volunteer, index) => {
                queryParams += `&volunteer${index + 1}Name=${encodeURIComponent(
                  volunteer.name
                )}&volunteer${index + 1}ProfilePicture=${encodeURIComponent(
                  volunteer.profilePicture
                )}`;
              });

              navigate(`/dashboard/detail?${queryParams}`);
            }}
          >
            View details
          </Button>
        </Group>
      </Card.Section>
    </Card>
  );
}
