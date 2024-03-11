import React, { useState } from "react";
import { Container } from "react-bootstrap";
import InputInfoGroup from "../components/InputInfoGroup";
import { DropzoneButton } from "../components/Account/Dropzone";
import { ProfileDesc } from "../components/Account/ProfileDesc";
import { Button, Modal } from "@mantine/core";
import { useNavigate } from "react-router-dom";
const Settings = () => {
  const [profile, setProfile] = useState();
  const [modal, setModal] = useState();
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const description = user.description;
  const navigate = useNavigate();
  const handleDeleteAccount = () => {
    let users = JSON.parse(localStorage.getItem("users"));
    const currentUserID = user.id;

    const currentUserIndex = users.findIndex((u) => u.id === currentUserID);

    if (currentUserIndex !== -1) {
      users.splice(currentUserIndex, 1);

      localStorage.setItem("users", JSON.stringify(users));

      localStorage.removeItem("currentUser");

      localStorage.removeItem("signedIn");

      console.log("User has been deleted successfully.");
      navigate("/");
    } else {
      console.log("User not found in the users array.");
    }
  };

  return (
    <Container className="mb-5">
      <h1 className="mb-5">Account Settings</h1>
      <div>
        <InputInfoGroup label="Name" />
        <InputInfoGroup label="Email" />
        <DropzoneButton />
        <h3 className="mt-3">
          {description ? "Your Description" : "Create a description"}
        </h3>
        {description && !profile ? (
          <ProfileDesc read={true} value={description} />
        ) : (
          ""
        )}
        {profile ? (
          <ProfileDesc
            onCancel={() => {
              setProfile(false);
            }}
            onSave={(content) => {
              const newUser = { ...user, description: content };
              localStorage.setItem("currentUser", JSON.stringify(newUser));
              const id = user.id;
              const users = JSON.parse(localStorage.getItem("users"));
              const updatedUsersArray = users.map((u) =>
                u.id === id ? { ...u, description: content } : u
              );
              localStorage.setItem("users", JSON.stringify(updatedUsersArray));
              window.location.reload();
            }}
          />
        ) : (
          <Button
            className="mt-3"
            fullWidth
            onClick={() => {
              setProfile(true);
            }}
          >
            {description ? "Edit your description" : "Create a description"}
          </Button>
        )}
      </div>
      <div
        style={{
          backgroundColor: "red",
          padding: "15px",
          borderRadius: "15px",
        }}
        className="mt-5"
      >
        <h3 style={{ color: "white", textAlign: "center" }}>Danger Zone</h3>
        <Button
          className="mt-3"
          fullWidth
          color="red"
          onClick={() => {
            setModal(true);
          }}
        >
          Delete your account
        </Button>
      </div>
      {modal && (
        <Modal
          title="Warning!"
          opened={modal}
          onClose={() => {
            setModal(false);
          }}
          size="sm"
        >
          <p>This action cannot be undone. Are you sure you want to proceed?</p>

          <Button
            onClick={() => {
              setModal(false);
            }}
            style={{ marginTop: 15 }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteAccount}
            color="red"
            style={{ marginLeft: 10 }}
          >
            Delete
          </Button>
        </Modal>
      )}
    </Container>
  );
};

export default Settings;
