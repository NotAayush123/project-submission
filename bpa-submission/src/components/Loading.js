import React from "react";
import { Loader } from "@mantine/core";
const Loading = () => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Loader color="orange" size="xl" type="dots" />
    </div>
  );
};

export default Loading;
