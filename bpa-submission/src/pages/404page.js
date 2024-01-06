import { Title, Text, Button, Group } from "@mantine/core";
import classes from "./404page.module.css";
import { useNavigate } from "react-router-dom";
const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div className={`${classes.root} mb-5`}>
      <div className={classes.label}>404</div>
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text c="dimmed" size="lg" ta="center" className={classes.description}>
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group justify="center">
        <Button
          variant="subtle"
          size="md"
          onClick={() => {
            navigate("/");
          }}
        >
          Take me back to home page
        </Button>
      </Group>
    </div>
  );
};

export default ErrorPage;
