import { useEffect, useState } from "react";
import classes from "./Timeline.module.css";
import logo from "../../assets/volunteering.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function TimeEvent() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const isElementInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return rect.top <= window.innerHeight && rect.bottom >= 0;
    };

    const missionSection = document.getElementById("impact");

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

  let timelineElements = [
    {
      id: 1,
      title: "First Founded",
      location: "Middletown, Delaware",
      description:
        "In August 2016, Alcona was established with the goal of creating a positive impact on the world. We started our journey by converting data to a graphical interface, using React, Mantine, and so many other frameworks, to enable users to view and interact with data effectively!",

      date: "August 2016 - present",
      icon: "info",
    },
    {
      id: 2,
      title: "2,000 Volunteers Signed Up",
      location: "Delaware, New Jersey, and Maryland",
      description:
        "We got 2,000 volunteers to sign up and support causes they care about!",

      date: "August 2016 - 2019",
      icon: "person",
    },
    {
      id: 3,
      title: "Biggest Giveaway Ever",
      location: "Glasgow Park",
      description:
        "Our biggest giveaway, where we gave away almost 20,000 items in 6 hours to almost 2,000 people.",

      date: "March 29, 2021",
      icon: "hand",
    },
    {
      id: 4,
      title: "Planting 7,000 Trees",
      location: "Glasgow Park",
      description:
        "Our initiative to plant 7,000 trees in Glasgow Park to support environmental conservation succeeded!",

      date: "May 25, 2022 - June 4, 2022",
      icon: "tree",
    },
    {
      id: 5,
      title: "Cleaning Up Pollution",
      location: "Delaware and Nearby Areas",
      description:
        "We cleaned up 5,000 pieces of pollution, with the help of almost 500 people!",

      date: "July 25, 2022 - August 9, 2022",
      icon: "trash",
    },
    {
      id: 6,
      title: "Ongoing Support",
      location: "Delaware and Nearby Areas",
      description:
        "Continuing our mission to make a positive impact on the world!",
      date: "2022 - present",
      icon: "info",
    },
  ];
  return (
    <div id="impact">
      <h3 className={`${classes.title} ${animate ? `${classes.animate}` : ""}`}>
        Our Impact
      </h3>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let iconClass = "";
          let iconStyle = {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          };

          switch (element.icon) {
            case "trash":
              iconClass = "fa-solid fa-trash";
              iconStyle.backgroundColor = "#34d399";
              break;
            case "hand":
              iconClass = "fa-solid fa-hand-holding-heart";
              iconStyle.backgroundColor = "#fdba74";
              break;
            case "tree":
              iconClass = "fa-solid fa-tree";
              iconStyle.backgroundColor = "#bef264";
              break;
            case "person":
              iconClass = "fa-solid fa-person";
              iconStyle.backgroundColor = "#fef08a";
              break;
            default:
          }

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName={classes.date}
              icon={
                iconClass ? (
                  <i className={`${iconClass} fa-2x `}></i>
                ) : (
                  <img src={logo} className={classes.logo} alt="Company Logo" />
                )
              }
              iconStyle={iconStyle}
            >
              <h3 className={classes.verticalTimelineElementTitle}>
                {element.title}
              </h3>
              <h5 className={classes.verticalTimelineElementSubtitle}>
                {element.location}
              </h5>
              <p className={classes.description}>{element.description}</p>
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}

export default TimeEvent;
