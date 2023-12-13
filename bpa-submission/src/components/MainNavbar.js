import React, { useState, useEffect } from "react";
import { Navbar, Nav, Button, Container } from "react-bootstrap";
import classes from "./MainNavbar.module.css";
import { Outlet } from "react-router-dom";
import logo from "../assets/volunteering.png";
import { useLocation } from "react-router-dom";
function MainNavbar() {
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const handleLinkClick = (linkId) => {
    setActiveLink(linkId);
  };

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
              <Nav.Link href="signup">
                <Button className={classes.signupButton}>Sign up</Button>
              </Nav.Link>
              <Nav.Link href="login" style={{ color: "black" }}>
                <Button className={classes.loginButton}>Log In</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </>
  );
}

export default MainNavbar;
