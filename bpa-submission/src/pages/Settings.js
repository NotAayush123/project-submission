import React from "react";
import { Container } from "react-bootstrap";
import InputInfoGroup from "../components/InputInfoGroup";
import { DropzoneButton } from "../components/Account/Dropzone";
import { ProfileDesc } from "../components/Account/ProfileDesc";
const Settings = () => {
  return (
    <Container>
      <h1 className="mb-5">Account Settings</h1>
      <div>
        <InputInfoGroup label="Name" />
        <InputInfoGroup label="Email" />
        <DropzoneButton />
        <h3 className="mt-3">Create a description</h3>
        <ProfileDesc />
      </div>
    </Container>
  );
};

export default Settings;
