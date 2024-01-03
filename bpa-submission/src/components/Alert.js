import { Alert } from "@mantine/core";
import { IconInfoCircle } from "@tabler/icons-react";

export default function AlertComponent(props) {
  const icon = <IconInfoCircle />;
  return (
    <Alert
      variant="filled"
      color="red"
      radius="sm"
      withCloseButton
      onClose={props.close}
      title={`${props.title}`}
      icon={icon}
      style={{ zIndex: "99", margin: "15px" }}
    >
      {props.message}
    </Alert>
  );
}
