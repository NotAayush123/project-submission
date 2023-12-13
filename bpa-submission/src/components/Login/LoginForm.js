import {
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import classes from "./LoginForm.module.css";
import { Form } from "react-bootstrap";
import useInput from "../../hooks/use-input";
import InputComponent from "./Input";
export default function LoginForm() {
  const validateEmail = (value) => {
    return value.trim() !== "" && value.includes("@");
  };
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailhasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(validateEmail);
  return (
    <div className={classes.bg}>
      <Container size={1500} my={40} className={classes.container}>
        <Title ta="center" className={classes.title}>
          Welcome back to <span style={{ color: "#fdba74" }}>Alcona!</span>
        </Title>
        <Text
          c="dimmed"
          size="sm"
          ta="center"
          mt={8}
          style={{ fontSize: "1.1rem" }}
        >
          <a
            size="sm"
            component="button"
            href="/signup"
            className={`${classes.link}`}
          >
            Create account
          </a>{" "}
          or{" "}
          <a
            size="sm"
            component="button"
            href="/"
            className={`${classes.link}`}
          >
            Go home
          </a>
        </Text>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <Form.Group className={`mb-4`} controlId="formName">
            <InputComponent
              type="email"
              label="Email"
              required
              onBlur={emailBlurHandler}
              onChange={emailChangeHandler}
              value={enteredEmail}
            />

            {emailhasError && (
              <p
                className="text-danger mt-2 text-center"
                style={{ fontWeight: "500" }}
              >
                Invalid email address!
              </p>
            )}
          </Form.Group>

          <InputComponent
            label="Password"
            required
            mt="md"
            type="Password"
            withAsterisk={false}
          />
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
            <Anchor component="button" size="sm">
              Forgot password?
            </Anchor>
          </Group>
          <Button fullWidth mt="xl" className={classes.logIn} disabled>
            Log in
          </Button>
        </Paper>
      </Container>
    </div>
  );
}
