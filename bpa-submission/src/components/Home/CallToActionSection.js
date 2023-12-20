import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import heart from "../../assets/Heart3DModel2.png";

import classes from "./HomeHero.module.css";
const CallToActionSection = () => {
  return (
    <Container fluid className={`px-4 py-5 ${classes.root}`}>
      <Row className="justify-content-center align-items-center g-5 py-5">
        <Col lg={6} xl={7}>
          <div className="lc-block mb-3 ml-5">
            <h2 className={`${classes.title2} display-1`}>
              Join millions of volunteers!{" "}
            </h2>
          </div>

          <div className="lc-block d-grid gap-2 d-md-flex justify-content-md-center ml-5 ">
            <Button
              variant="primary"
              className={`${classes.control2} px-4 me-md-2`}
              href="/signup"
              role="button"
              size="lg"
            >
              Get Started Helping!
            </Button>
          </div>
        </Col>
        <Col lg={6} xl={5}>
          <img
            src={heart}
            className={`d-block mx-lg-auto img-fluid ${classes.imageCTA}`}
            alt=""
            loading="lazy"
            draggable="false"
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CallToActionSection;
