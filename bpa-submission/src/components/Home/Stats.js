import { Text } from "@mantine/core";
import classes from "./Stats.module.css";
import { useState, useEffect } from "react";

export function Stats() {
  const [people, setPeople] = useState(0);
  const [events, setEvents] = useState(0);
  const [parks, setParks] = useState(0);

  const data = [
    {
      title: "People Helped",
      targetValue: 32123,
      description: "Over 32,000 people helped with community service events!",
    },
    {
      title: "Events Served",
      targetValue: 2175,
      description: "Over 2,000 events have been posted and completed!",
    },
    {
      title: "Parks cleaned or replanted",
      targetValue: 1300,
      description:
        "We have planted over 10,000 trees and cleaned up almost 6,000 pieces of pollution!",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          data.forEach((stat) => {
            const incrementValue = Math.ceil(stat.targetValue / 1000);
            let currentValue = 0;

            const interval = setInterval(() => {
              if (currentValue < stat.targetValue) {
                if (stat.title === "People Helped") {
                  setPeople((prevPeople) =>
                    prevPeople + incrementValue <= stat.targetValue
                      ? prevPeople + incrementValue
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                } else if (stat.title === "Events Served") {
                  setEvents((prevEvents) =>
                    prevEvents + incrementValue <= stat.targetValue
                      ? prevEvents + incrementValue
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                } else if (stat.title === "Parks cleaned or replanted") {
                  setParks((prevParks) =>
                    prevParks + incrementValue <= stat.targetValue
                      ? prevParks + incrementValue
                      : stat.targetValue
                  );
                  currentValue += incrementValue;
                }
              } else {
                clearInterval(interval);
              }
            }, 1);
          });
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(document.querySelector(`.${classes.root}`));

    return () => {
      observer.disconnect();
    };
  }, []);

  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>
        {stat.title === "People Helped"
          ? people
          : stat.title === "Events Served"
          ? events
          : parks}
      </Text>
      <Text className={classes.title}>
        {stat.title === "People Helped" ? (
          <div>
            {stat.title} <i className="fa-solid fa-user"></i>
          </div>
        ) : stat.title === "Events Served" ? (
          <div>
            {stat.title} <i className="fa-regular fa-calendar"></i>
          </div>
        ) : (
          <div>
            {stat.title} <i className="fa-solid fa-tree"></i>
          </div>
        )}{" "}
      </Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ));

  return <div className={classes.root}>{stats}</div>;
}
