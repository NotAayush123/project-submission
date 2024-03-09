import { Paper, Title, Text, Container, Button } from "@mantine/core";
import classes from "../components/Login/LoginForm.module.css";
import { Form } from "react-bootstrap";
import useInput from "../hooks/use-input";
import InputComponent from "../components/Login/Input";
import { useEffect, useState } from "react";
import AlertComponent from "../components/Alert";
import bcryptjs from "bcryptjs";
import { useNavigate } from "react-router-dom";
export default function LoginForm() {
  const validateEmail = (value) => {
    return value.trim() !== "" && value.includes("@");
  };
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState();
  const [userExists, setUserExists] = useState();
  const navigate = useNavigate();
  useEffect(() => {
    if (passwordValue !== "") {
      setPasswordIsValid(true);
    } else if (passwordValue === "") {
      setPasswordIsValid(false);
    }
  }, [passwordValue]);
  const {
    value: enteredEmail,
    isValid: emailIsValid,
    hasError: emailhasError,
    inputBlurHandler: emailBlurHandler,
    valueChangeHandler: emailChangeHandler,
  } = useInput(validateEmail);
  const passwordChange = (event) => {
    setPasswordValue(event.target.value);
  };

  const formIsValid = passwordIsValid && emailIsValid;
  const formSumbit = (event) => {
    event.preventDefault();
    const data = {
      email: enteredEmail,
      password: passwordValue,
    };
    if (!formIsValid) {
      setError(true);
    }

    if (data.email === "" || data.password === "") {
      setError(true);
    }
    setUserExists(true);
  };
  return (
    <div className={classes.mainAdmin}>
      {error ? (
        <AlertComponent
          message="Something went wrong with your submission!"
          title="Error"
          close={() => {
            setError(false);
          }}
        />
      ) : (
        " "
      )}
      {userExists ? (
        <AlertComponent
          message="No users were found with that combination!"
          title="Error"
          close={() => {
            setError(false);
          }}
        />
      ) : (
        " "
      )}
      <Container size={1500} my={40} className={classes.container}>
        <Title ta="center" className={classes.title}>
          Login as an<span style={{ color: "#0ea5e9" }}> Admin</span>
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
            href="/signupAdmin"
            className={`${classes.link}`}
          >
            Create Admin Account
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
          <Form onSubmit={formSumbit}>
            <Form.Group className={`mb-4`} controlId="formName">
              <InputComponent
                type="email"
                label="Email"
                required
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                value={enteredEmail}
                className={emailhasError ? classes.error : ""}
                login={true}
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
              value={passwordValue}
              onChange={passwordChange}
            />

            <Button
              fullWidth
              mt="xl"
              className={classes.logIn}
              disabled={!formIsValid}
              type="submit"
            >
              Log in
            </Button>
          </Form>
        </Paper>
      </Container>
    </div>
  );
}
