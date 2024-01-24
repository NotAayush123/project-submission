import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  rem,
  Popover,
  Text,
  Checkbox,
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import classes from "./Search.module.css";
import { CheckIcon } from "@mantine/core";

const Search = ({ onEnter, onFilter }) => {
  const [charityCrossing, setCharityCrossing] = useState(true);
  const [foodBank, setFoodBank] = useState(true);
  const [redCross, setRedCross] = useState(true);

  // State variables for days
  const [thursday, setThursday] = useState(true);
  const [friday, setFriday] = useState(true);
  const [saturday, setSaturday] = useState(true);
  const [sunday, setSunday] = useState(true);

  let data = [
    "Volunteer At DOJ Community Giveaway",
    "Volunteer at Phoenixville - PACS, Community Giveaway",
    "Volunteer At LJBC Community Giveaway",
    "Volunteer at Interfaith Community Housing Giveaway",
    "Volunteer at Volunteer Delaware Community Giveaway",
    "Volunteer at Glasgow Park Community Giveaway",
    "Volunteer at Smyrna Community Giveaway",
    "Volunteer at Trinity AME Church Community Giveaway",
    "Volunteer at Herlithy, Wilmington Community Giveaway",
    "Volunteer at PCI Front St, Community Giveaway",
    "NEWARK Afternoon Greenhouse/Farm Event",
    "NEWARK Healthy Pantry (Evening)",
    "Wilmington Blood Transportation",
    "Wilmington Blood Drive",
    "NEWARK Volunteer Room (Morning)",
    "WILMINGTON Mobile Pantry at Kingswood CC",
    "MILFORD Healthy Pantry (Morning)",
    "MILFORD Volunteer Room (Morning)",
  ];

  return (
    <div>
      <Autocomplete
        className={classes.search}
        placeholder="Search"
        leftSection={
          <IconSearch
            style={{ width: rem(16), height: rem(16) }}
            stroke={1.5}
          />
        }
        data={data}
        visibleFrom="xs"
        onChange={(value) => {
          onEnter(value);
        }}
      />
      <Popover width={400} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button className={classes.filter} size="sm">
            <IconFilter />
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="lg" className="mb-2">
            Filter Organizations
          </Text>
          <Checkbox
            label="Charity Crossing"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={charityCrossing}
            onClick={() => {
              setCharityCrossing((prev) => !prev);
            }}
            checked={charityCrossing}
          />
          <Checkbox
            label="Food Bank of Delaware"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={foodBank}
            onClick={() => {
              setFoodBank((prev) => !prev);
            }}
            checked={foodBank}
          />
          <Checkbox
            label="Red Cross"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={redCross}
            onClick={() => {
              setRedCross((prev) => !prev);
            }}
            checked={redCross}
          />
          <Text size="lg" className="mb-2">
            Filter Days
          </Text>
          <Checkbox
            checked={thursday}
            label="Thursday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={thursday}
            onClick={() => {
              setThursday((prev) => !prev);
            }}
          />
          <Checkbox
            checked={friday}
            label="Friday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={friday}
            onClick={() => {
              setFriday((prev) => !prev);
            }}
          />
          <Checkbox
            checked={saturday}
            label="Saturday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={saturday}
            onClick={() => {
              setSaturday((prev) => !prev);
            }}
          />
          <Checkbox
            checked={sunday}
            label="Sunday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            value={sunday}
            onClick={() => {
              setSunday((prev) => !prev);
            }}
            className="mb-3"
          />
          <Button
            fullWidth
            onClick={() => {
              const charities = {
                charityCrossing,
                foodBank,
                redCross,
              };

              const days = {
                thursday,
                friday,
                saturday,
                sunday,
              };

              onFilter(charities, days);
            }}
          >
            Save
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default Search;
