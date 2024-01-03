import { Button, Divider } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import { VolunteeringCard } from "../components/Account/VolunteeringCard";
import TodoAccount from "../components/Account/TodoAccount";
const Account = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const name = user.name;
  const navigate = useNavigate();
  return (
    <Container>
      <div style={{ width: "100wh", marginTop: "15px" }}>
        <h1>{name}'s Account</h1>
      </div>
      <Divider size={4} />
      <div className="infoGroup mt-5">
        <TodoAccount />
        <Row>
          <Col sm={6}>
            <VolunteeringCard />
          </Col>
          <Col sm={6}>
            <VolunteeringCard last={true} />
          </Col>
        </Row>
        <Button
          fullWidth
          className="mt-5"
          color="gray"
          leftSection={<i class="fa-solid fa-gear"></i>}
          onClick={() => {
            navigate("/dashboard/settings");
          }}
        >
          Configure your account
        </Button>
      </div>
    </Container>
  );
};

export default Account;
