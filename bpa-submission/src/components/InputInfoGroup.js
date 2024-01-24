import { useEffect, useState } from "react";
import { Input, Button, Text } from "@mantine/core";
import { IconDownload, IconEdit } from "@tabler/icons-react";
import AlertComponent from "./Alert";
export default function InputInfoGroup({ label }) {
  const unparsedUser = localStorage.getItem("currentUser");
  const user = JSON.parse(unparsedUser);
  const [isEditing, setIsEditing] = useState();
  const [value, setValue] = useState();
  const [error, setError] = useState();
  const [defaultValue, setDefaultValue] = useState();
  useEffect(() => {
    if (label === "Name") {
      if (user) {
        const localname = user.name;
        setValue(localname);
        setDefaultValue(localname);
      }
    } else if (label === "Email") {
      if (user) {
        const localname = user.email;
        setValue(localname);
        setDefaultValue(localname);
      }
    }
  }, []);
  const handleSave = () => {
    if (value === "") {
      setError({ message: "Value can't be empty!" });
      setValue(defaultValue);
      setIsEditing(false);
    } else if (value !== "" && label === "Name") {
      const updatedUser = { ...user, name: value };
      setDefaultValue(value);
      localStorage.setItem("currentUser", JSON.stringify(updatedUser));
      const usersArray = JSON.parse(localStorage.getItem("users"));

      const updatedUsersArray = usersArray.map((u) =>
        u.id === updatedUser.id ? { ...u, name: value } : u
      );
      localStorage.setItem("users", JSON.stringify(updatedUsersArray));
      setIsEditing(false);
    } else if (value !== "" && label === "Email") {
      const usersArray = JSON.parse(localStorage.getItem("users"));
      const duplicateValue = usersArray.find((u) => u.email === value);

      if (!duplicateValue) {
        const updatedUser = { ...user, email: value };
        setDefaultValue(value);
        localStorage.setItem("currentUser", JSON.stringify(updatedUser));

        const updatedUsersArray = usersArray.map((u) =>
          u.id === updatedUser.id ? { ...u, email: value } : u
        );
        localStorage.setItem("users", JSON.stringify(updatedUsersArray));
        setIsEditing(false);
      } else {
        setError({ message: "Duplicate email!" });
        setIsEditing(false);
      }
    }
  };

  return (
    <>
      {error && (
        <AlertComponent
          message={error.message}
          title="Error"
          close={() => {
            setError(false);
          }}
        />
      )}
      <h3 className="mt-1">{label ? `Your ${label}` : "Field"}</h3>
      <Input
        placeholder={`Your ${label}`}
        value={value}
        onChange={(event) => setValue(event.currentTarget.value)}
        rightSectionPointerEvents="all"
        mt="md"
        type={label === "Password" ? "password" : "text"}
        rightSection={
          !isEditing ? (
            <Button
              aria-label="Clear input"
              onClick={() => {
                setIsEditing(true);
              }}
              style={{
                marginRight: "10px",
              }}
            >
              <IconEdit />
            </Button>
          ) : (
            <Button
              style={{
                marginRight: "10px",
              }}
              onClick={handleSave}
            >
              <IconDownload />
            </Button>
          )
        }
        size="xl"
        readOnly={!isEditing}
      />
    </>
  );
}
