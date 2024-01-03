import { useState } from "react";
import { Tooltip, UnstyledButton, Stack, rem, Avatar } from "@mantine/core";
import {
  IconHome2,
  IconCalendarStats,
  IconSettings,
  IconLogout,
} from "@tabler/icons-react";
import classes from "./DashboardNavbar.module.css";
import { Outlet, useNavigate } from "react-router-dom";

function NavbarLink({
  icon: Icon,
  label,
  active,
  src,
  profile,
  logout,
  onClick,
}) {
  const user = JSON.parse(localStorage.getItem("currentUser"));
  const navigate = useNavigate();
  return (
    <Tooltip label={label} position="right" transitionProps={{ duration: 0 }}>
      <UnstyledButton
        onClick={() => {
          if (!logout) {
            navigate(src);
            onClick();
          } else if (logout) {
            localStorage.removeItem("signedIn");
            localStorage.removeItem("currentUser");
            navigate("/");
            window.location.reload();
          }
        }}
        className={logout ? classes.logout : classes.link}
        data-active={active || undefined}
      >
        {profile ? (
          <Avatar src={user ? user.img : ""} />
        ) : (
          <Icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
        )}
      </UnstyledButton>
    </Tooltip>
  );
}

const mockdata = [
  { label: "Account", profile: true, src: "/dashboard/account" },
  { icon: IconHome2, label: "Dashboard", src: "/dashboard" },
  { icon: IconCalendarStats, label: "Events", src: "/dashboard/events" },
  { icon: IconSettings, label: "Account Settings", src: "/dashboard/settings" },
];

export default function DashboardNavbar() {
  const [active, setActive] = useState(1);

  const links = mockdata.map((link, index) => (
    <NavbarLink
      {...link}
      key={link.label}
      active={index === active}
      onClick={() => setActive(index)}
    />
  ));

  return (
    <div className={classes.content}>
      <div className={classes.navbarContainer}>
        <nav className={classes.navbar}>
          <div className={classes.navbarMain}>
            <Stack justify="center" gap={0}>
              {links}
            </Stack>
          </div>

          <Stack justify="center" gap={0}>
            <NavbarLink icon={IconLogout} label="Logout" logout={true} />
          </Stack>
        </nav>
      </div>
      <div className={classes.outletcontent}>
        <Outlet />
      </div>
    </div>
  );
}
