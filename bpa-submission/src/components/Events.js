import React, { useState } from "react";
import { EventsList } from "./Events/EventsList";
import Search from "./Events/Search";
import { useMantineTheme } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";

const Events = () => {
  const [value, setValue] = useState();
  const [charities, setCharities] = useState();
  const [days, setDays] = useState();
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  const divStyle = {
    marginLeft: mobile ? "0" : "20px",
    overflowY: mobile && "scroll",
  };

  return (
    <div style={divStyle}>
      {!mobile && (
        <Search
          onEnter={(value) => {
            setValue(value);
          }}
          onFilter={(charities, days) => {
            setCharities(charities);
            setDays(days);
          }}
        />
      )}

      <EventsList value={value} charities={charities} days={days} />
    </div>
  );
};

export default Events;
