import {
  Autocomplete,
  Button,
  rem,
  Popover,
  Text,
  Checkbox,
} from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";
import React from "react";
import classes from "./Search.module.css";
import { Radio, CheckIcon } from "@mantine/core";

const Search = () => {
  const data = [
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
  ];
  return (
    <div>
      {" "}
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
      />
      <Popover width={400} position="bottom" withArrow shadow="md">
        <Popover.Target>
          <Button className={classes.filter} size="sm">
            <IconFilter />
          </Button>
        </Popover.Target>
        <Popover.Dropdown>
          <Text size="lg">Filter Organizations</Text>
          <Checkbox
            defaultChecked
            label="Charity Crossing"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
          />
          <Checkbox
            defaultChecked
            label="Food Bank of Delaware"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
          />
          <Checkbox
            defaultChecked
            label="Red Cross"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
          />
          <Text size="lg">Filter Days</Text>
          <Checkbox
            defaultChecked
            label="Friday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
          />
          <Checkbox
            defaultChecked
            label="Saturday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
          />

          <Checkbox
            defaultChecked
            label="Sunday"
            icon={CheckIcon}
            style={{ marginBottom: "5px" }}
            color="orange"
            className="mb-3"
          />
          <Button fullWidth>Save</Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
};

export default Search;
