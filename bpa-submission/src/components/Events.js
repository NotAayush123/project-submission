import { EventsList } from "./Events/EventsList";
import Search from "./Events/Search";

const Events = () => {
  return (
    <div style={{ marginLeft: "20px" }}>
      <Search />
      <EventsList />
    </div>
  );
};

export default Events;
