import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";
import useInput from "../hooks/use-input";
import classes from "../components/Signup/SignupForm.module.css";
import { PasswordStrength } from "../components/Signup/PasswordInput";
import { Button } from "@mantine/core";
import InputComponent from "../components/Login/Input";
import AlertComponent from "../components/Alert";
import { Select } from "@mantine/core";
import { VolunteeringCard } from "../components/Account/VolunteeringCard";
const AdminSignup = () => {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
  const [error, setError] = useState();
  const [emailUsed] = useState(false);
  const [organization, setOrganization] = useState();
  const [content, setContent] = useState();
  const {
    value: enteredName,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");
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

  let formIsValid = false;
  if (nameIsValid && emailIsValid && passwordIsValid && passwordValue !== "") {
    formIsValid = true;
  }
  const handlePasswordValidationChange = (isValid, value) => {
    if (isValid === undefined) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(isValid);
      setPasswordValue(value); // Set the password value in the state
    }
  };

  const submitFunction = async (event) => {
    event.preventDefault();
    const data = {
      name: enteredName,
      email: enteredEmail,
      password: passwordValue,
    };

    if (data.name === "" || data.email === "" || data.password === "") {
      setError(true);
    } else if (formIsValid === false) {
      setError(true);
    } else {
      setContent(data.name);
    }
  };
  const data = {
    name: enteredName,
    email: enteredEmail,
    organization,
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

      {!content ? (
        <Form className={classes.form2} onSubmit={submitFunction}>
          <Container>
            <h1 className={classes.title}>
              Signup as an{" "}
              <span style={{ color: "#f97316", fontWeight: "700" }}>Admin</span>
            </h1>
            <Form.Group className="mb-3" controlId="formName">
              <InputComponent
                type="text"
                placeholder="Enter your full name"
                required
                value={enteredName}
                onChange={nameChangedHandler}
                onBlur={nameBlurHandler}
                label="Name"
                className={`${nameInputHasError ? classes.error : ""} ${
                  classes.input
                }`}
                mode="Signup"
              />
              {nameInputHasError && (
                <p
                  className="text-danger mt-2 mx-2"
                  style={{ fontWeight: "500" }}
                >
                  Name can't be empty!
                </p>
              )}
            </Form.Group>
            <Form.Group className="mb-3" controlId="formEmail">
              <InputComponent
                type="email"
                placeholder="Enter email"
                label="Email"
                required
                onBlur={emailBlurHandler}
                onChange={emailChangeHandler}
                value={enteredEmail}
                className={`${emailhasError ? classes.error : ""}  ${
                  classes.input
                }`}
                mode="Signup"
              />
              {emailhasError && (
                <p
                  className="text-danger mt-2 mx-2"
                  style={{ fontWeight: "500" }}
                >
                  Invalid email address!
                </p>
              )}
              {emailUsed && (
                <p
                  className="text-danger mt-2 mx-2"
                  style={{ fontWeight: "500" }}
                >
                  Already taken!
                </p>
              )}
            </Form.Group>
            <Select
              label="Organization"
              placeholder="Pick value"
              data={["Charity Crossing", "Red Cross", "Food Bank Of Delaware"]}
              comboboxProps={{
                transitionProps: { transition: "pop", duration: 200 },
              }}
              value={organization}
              onChange={(event) => {
                setOrganization(event);
              }}
              className={`${classes.select} mb-3`}
            />
            <Form.Group className={`mb-3`} controlId="formPassword">
              <PasswordStrength
                onValidationChange={handlePasswordValidationChange}
                isValid={!passwordIsValid}
                mode="Signup"
                type="Password"
              />
            </Form.Group>

            <div className={`mb-2 ${classes.linkContainer}`}>
              Already have an account?{" "}
              <a href="/loginAdmin" className={classes.link}>
                Login as an Admin
              </a>{" "}
              or{" "}
              <a href="/" className={classes.link}>
                Go home
              </a>
            </div>

            <Button
              variant="primary"
              type="submit"
              disabled={!formIsValid}
              mt="lg"
              className={classes.signup}
            >
              Submit
            </Button>
          </Container>
        </Form>
      ) : (
        <div
          style={{
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <VolunteeringCard email={true} data={data} />
        </div>
      )}
    </div>
  );
};

export default AdminSignup;
