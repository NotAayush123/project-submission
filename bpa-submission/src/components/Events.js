import { useState } from "react";
import { EventsList } from "./Events/EventsList";
import Search from "./Events/Search";

const Events = () => {
  const [value, setValue] = useState();
  const [charities, setCharities] = useState();
  const [days, setDays] = useState();
  return (
    <div style={{ marginLeft: "20px" }}>
      <Search
        onEnter={(value) => {
          setValue(value);
        }}
        onFilter={(charities, days) => {
          setCharities(charities);
          setDays(days);
        }}
      />
      <EventsList value={value} charities={charities} days={days} />
    </div>
  );
};

export default Events;
