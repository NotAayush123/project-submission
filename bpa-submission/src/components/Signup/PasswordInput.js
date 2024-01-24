import React, { useState } from "react";
import { Box, Progress, Group, Text, Center } from "@mantine/core";
import { useInputState } from "@mantine/hooks";
import { IconCheck, IconX } from "@tabler/icons-react";
import classes from "./PasswordInput.module.css";
import InputComponent from "../Login/Input";
function PasswordRequirement({ meets, label }) {
  return (
    <Text color={meets ? "teal" : "red"} mt={5} size="sm">
      <Center inline>
        {meets ? (
          <IconCheck size="0.9rem" stroke={1.5} />
        ) : (
          <IconX size="0.9rem" stroke={1.5} />
        )}
        <Box ml={7}>{label}</Box>
      </Center>
    </Text>
  );
}

const requirements = [
  { re: /[0-9]/, label: "Includes number" },
  { re: /[a-z]/, label: "Includes lowercase letter" },
  { re: /[A-Z]/, label: "Includes uppercase letter" },
  { re: /[$&+,:;=?@#|'<>.^*()%!-]/, label: "Includes special symbol" },
];

function getStrength(password) {
  let multiplier = password.length > 5 ? 0 : 1;

  requirements.forEach((requirement) => {
    if (!requirement.re.test(password)) {
      multiplier += 1;
    }
  });

  return Math.max(100 - (100 / (requirements.length + 1)) * multiplier, 0);
}

export function PasswordStrength(props) {
  const [value, setValue] = useInputState("");
  const [blur, setBlur] = useState();
  const strength = getStrength(value);
  const checks = requirements.map((requirement, index) => (
    <PasswordRequirement
      key={index}
      label={requirement.label}
      meets={requirement.re.test(value)}
    />
  ));

  const bars = Array(4)
    .fill(0)
    .map((_, index) => (
      <Progress
        styles={{ bar: { transitionDuration: "0ms" } }}
        value={
          value.length > 0 && index === 0
            ? 100
            : strength >= ((index + 1) / 4) * 100
            ? 100
            : 0
        }
        color={strength > 80 ? "teal" : strength > 50 ? "yellow" : "red"}
        key={index}
        size={4}
      />
    ));

  props.onValidationChange(blur && strength >= 80, value);
  const passwordBlur = () => {
    setBlur(true);
  };
  return (
    <div>
      <InputComponent
        value={value}
        onChange={setValue}
        placeholder="Enter your password"
        required
        className={`${classes.passwordInput} ${
          props.isValid ? `${classes.passwordError}` : ""
        }`}
        {...props}
        onBlur={passwordBlur}
        label="Password"
      />

      <Group spacing={5} grow mt="xs" mb="md" className={classes.group}>
        {bars}
      </Group>
      {props.isValid && (
        <p className="text-danger mt-2 mx-2" style={{ fontWeight: "500" }}>
          Invalid password!
        </p>
      )}
      <PasswordRequirement
        label="Has at least 6 characters"
        meets={value.length > 5}
      />
      {checks}
    </div>
  );
}
