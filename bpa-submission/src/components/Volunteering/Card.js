import {
  Card,
  Image,
  Text,
  Group,
  Button,
  AvatarGroup,
  Avatar,
  Tooltip,
  useMantineTheme,
} from "@mantine/core";

import classes from "./Card.module.css";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@mantine/hooks";

export function VolunteeringCard(item) {
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
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <Card withBorder radius="md" className={classes.card}>
      <Card.Section className={classes.imageSection}>
        <Image
          src={item.image}
          alt="Tesla Model S"
          style={{ width: "100%", height: "250px" }}
        />
      </Card.Section>

      <Group justify={`${mobile ? "" : "space-between"}`} mt="md">
        <div>
          <Text fw={500} style={{ width: `${mobile ? "300px" : ""}` }}>
            {item.name || item.eventName}
          </Text>
          <Text fz="xs" c="dimmed">
            {item.day} - {item.time}
          </Text>
        </div>

        <AvatarGroup>{avatars}</AvatarGroup>
      </Group>

      <Card.Section className={classes.section}>
        <Group gap={mobile ? 60 : 30}>
          <div>
            <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
              {item.volunteers.length}/{item.maxSpots} people
            </Text>
          </div>

          <Button
            radius="xl"
            style={{ flex: `${mobile ? 0.5 : 1}` }}
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
              )}&time=${encodeURIComponent(item.time)}&map=${encodeURIComponent(
                item.map
              )}&day=${encodeURIComponent(
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
