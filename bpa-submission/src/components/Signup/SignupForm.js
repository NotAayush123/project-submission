import React, { useState } from "react";
import { Col, Container, Form, Row } from "react-bootstrap";
import useInput from "../../hooks/use-input";
import classes from "./SignupForm.module.css";
import { PasswordStrength } from "./PasswordInput";
import { Button } from "@mantine/core";
import InputComponent from "../Login/Input";
const SignupForm = () => {
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [passwordValue, setPasswordValue] = useState("");
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
  const validateConfirmPassword = (value) => {
    return value.trim() === passwordValue.trim() && value.trim() !== "";
  };
  const {
    value: enteredConfirmPassword,
    isValid: confirmPasswordIsValid,
    hasError: confirmPasswordHasError,
    valueChangeHandler: passwordConfirmChangeHandler,
    inputBlurHandler: passwordConfirmBlurHandler,
  } = useInput(validateConfirmPassword);

  let formIsValid = false;
  if (
    nameIsValid &&
    emailIsValid &&
    passwordIsValid &&
    confirmPasswordIsValid
  ) {
    formIsValid = true;
  }
  const handlePasswordValidationChange = (isValid, value) => {
    console.log(isValid);
    console.log(value);
    if (isValid === undefined) {
      setPasswordIsValid(true);
    } else {
      setPasswordIsValid(isValid);
      setPasswordValue(value); // Set the password value in the state
    }
  };

  return (
    <div className={classes.main}>
      <Row>
        <Col
          xs={12}
          md={8}
          className="d-xs-flex justify-content-xs-center align-items-xs-center align-items-xs-start"
        >
          <Form className={classes.form}>
            <Container>
              <h1 className={classes.title}>
                Signup for{" "}
                <span style={{ color: "#f97316", fontWeight: "700" }}>
                  Alcona
                </span>
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
              </Form.Group>
              <Form.Group className={`mb-3`} controlId="formPassword">
                <PasswordStrength
                  onValidationChange={handlePasswordValidationChange}
                  isValid={!passwordIsValid}
                  mode="Signup"
                  type="Password"
                />
              </Form.Group>
              <Form.Group
                className={`mb-3 ${confirmPasswordHasError ? "error" : ""}`}
                controlId="formConfirmPassword"
              >
                <InputComponent
                  type="password"
                  placeholder="Confirm Password"
                  required
                  label="Confirm Password"
                  value={enteredConfirmPassword}
                  onChange={passwordConfirmChangeHandler}
                  onBlur={passwordConfirmBlurHandler}
                  className={`${confirmPasswordHasError ? classes.error : ""} ${
                    classes.input
                  }`}
                  mode="Signup"
                />
                {confirmPasswordHasError && (
                  <p
                    className="text-danger mt-2 mx-2"
                    style={{ fontWeight: "500" }}
                  >
                    Passwords don't match, or this is empty.
                  </p>
                )}
              </Form.Group>
              <div className={`mb-2 ${classes.linkContainer}`}>
                Already have an account?{" "}
                <a href="/login" className={classes.link}>
                  Login
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
        </Col>
        <Col xs={0} md={4} className="ml-auto d-none d-md-block">
          <img
            src="https://st3.depositphotos.com/5479794/15306/i/450/depositphotos_153064450-stock-photo-delivering-groceries-to-the-elderly.jpg"
            alt=""
            className={classes.image}
            style={{
              clipPath: "polygon(25% 0%, 100% 0%, 100% 99%, 0% 100%)",
            }}
          />
        </Col>
      </Row>
    </div>
  );
};

export default SignupForm;
