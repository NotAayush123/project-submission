import { Container, Accordion } from "@mantine/core";
import classes from "./FAQ.module.css";
import { useEffect, useState } from "react";

const placeholder =
  "It can’t help but hear a pin drop from over half a mile away, so it lives deep in the mountains where there aren’t many people or Pokémon.It was born from sludge on the ocean floor. In a sterile environment, the germs within its body can’t multiply, and it dies.It has no eyeballs, so it can’t see. It checks its surroundings via the ultrasonic waves it emits from its mouth.";

export default function FAQ() {
  const [animate, setAnimate] = useState();
  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("faq");

    const handleScroll = () => {
      if (isElementInViewport(missionSection)) {
        setAnimate(true);
      } else {
        setAnimate(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      size="lg"
      className={classes.wrapper}
      id="faq"
      style={{ height: "90vh" }}
    >
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Frequently Asked Questions
      </h3>

      <Accordion variant="separated">
        <Accordion.Item
          className={`${classes.item} ${
            animate ? `${classes.animateItem}` : ""
          }`}
          value="where-to-go"
        >
          <Accordion.Control>How do I know where to go?</Accordion.Control>
          <Accordion.Panel>
            It will say on the website, alongside a map!
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          className={`${classes.item} ${
            animate ? `${classes.animateItem}` : ""
          }`}
          value="how-to-get-hours"
        >
          <Accordion.Control>How can I get hours?</Accordion.Control>
          <Accordion.Panel>
            Hours will be approved by moderators once they see your
            participation.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          className={`${classes.item} ${
            animate ? `${classes.animateItem}` : ""
          }`}
          value="how-many-events"
        >
          <Accordion.Control>
            How many events can I sign up for?
          </Accordion.Control>
          <Accordion.Panel>
            You can sign up for as many events as you believe you can
            effectively help with.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          className={`${classes.item} ${
            animate ? `${classes.animateItem}` : ""
          }`}
          value="age-requirement"
        >
          <Accordion.Control>What age do I have to be?</Accordion.Control>
          <Accordion.Panel>
            You have to be over 13 years old and have access to transportation.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item
          className={`${classes.item} ${
            animate ? `${classes.animateItem}` : ""
          }`}
          value="other-question"
        >
          <Accordion.Control>Have another question?</Accordion.Control>
          <Accordion.Panel>
            Feel free to ask, and we'll be happy to help!
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
}
