import React, { useState, useEffect } from "react";
import {
  Navbar,
  Nav,
  Button,
  Container,
  Popover,
  OverlayTrigger,
} from "react-bootstrap";
import classes from "./MainNavbar.module.css";
import { Outlet, useNavigate } from "react-router-dom";
import logo from "../assets/volunteering.png";
import { useLocation } from "react-router-dom";
import { IconHome2, IconLogout } from "@tabler/icons-react";
function MainNavbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const signedIn = localStorage.getItem("signedIn");
  const [name, setName] = useState();
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navbarClasses = `${classes.mainNavbar} ${
    scrolled ? classes.scrolledNavbar : ""
  }`;
  useEffect(() => {
    const user = localStorage.getItem("currentUser");
    if (user) {
      const localname = JSON.parse(user).name;
      setName(localname);
    }
  }, []);
  const logout = () => {
    localStorage.removeItem("signedIn");
    localStorage.removeItem("currentUser");
    window.location.reload();
  };
  console.log(open);
  const popover = (
    <Popover id="popover-basic">
      <Popover.Body>
        <Button
          style={{ width: "100%" }}
          variant="outline-secondary"
          onClick={() => {
            navigate("/dashboard");
          }}
        >
          <IconHome2 /> {"  "}Dashboard
        </Button>
        <Button
          variant="outline-danger"
          style={{ display: "block", width: "100%" }}
          className="mt-2"
          onClick={logout}
        >
          <IconLogout /> {"  "} Logout
        </Button>
      </Popover.Body>
    </Popover>
  );
  return (
    <>
      <Navbar variant="dark" expand="lg" sticky="top" className={navbarClasses}>
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logo} alt="" className={classes.icon} />
            <span className={`ms-2 ${classes.heroText}`}>Alcona</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <div className={classes.centerLinks}>
                {location.pathname === "/" && ( // Only render these links on the home page
                  <>
                    <Nav.Link
                      className={`${classes.sectionLink} ${
                        activeLink === "mission"
                          ? `${classes.activeLink} ${classes.selectedLink}`
                          : ""
                      }`}
                      href="#mission"
                      onClick={() => handleLinkClick("mission")}
                    >
                      Our Mission
                    </Nav.Link>
                    <Nav.Link
                      className={`${classes.sectionLink} ${
                        activeLink === "impact"
                          ? `${classes.activeLink} ${classes.selectedLink}`
                          : ""
                      }`}
                      href="#impact"
                      onClick={() => handleLinkClick("impact")}
                    >
                      Our Impact
                    </Nav.Link>
                    <Nav.Link
                      className={`${classes.sectionLink} ${
                        activeLink === "faq"
                          ? `${classes.activeLink} ${classes.selectedLink}`
                          : ""
                      }`}
                      href="#faq"
                      onClick={() => handleLinkClick("faq")}
                    >
                      FAQ
                    </Nav.Link>
                  </>
                )}
              </div>
            </Nav>
            <Nav className="ms-auto">
              {name && signedIn ? (
                <OverlayTrigger
                  trigger="click"
                  placement="bottom"
                  overlay={popover}
                >
                  <Button
                    variant="success"
                    className={classes.popover}
                    onClick={() => {
                      setOpen((prev) => {
                        return !prev;
                      });
                    }}
                  >
                    {name}
                    <div
                      className={`${classes.arrow} ${open ? classes.open : ""}`}
                    >
                      <i
                        className={`fa-solid fa-caret-right fa-lg ${
                          open ? "fa-rotate-90" : ""
                        }`}
                      ></i>
                    </div>
                  </Button>
                </OverlayTrigger>
              ) : (
                <>
                  <Nav.Link href="signup">
                    <Button className={classes.signupButton}>Sign up</Button>
                  </Nav.Link>
                  <Nav.Link href="login" style={{ color: "black" }}>
                    <Button className={classes.loginButton}>Log In</Button>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MainNavbar;
