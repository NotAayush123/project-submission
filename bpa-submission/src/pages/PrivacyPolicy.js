import React from "react";
import { Container } from "react-bootstrap";
import classes from "./About.module.css";
const PrivacyPolicy = () => {
  return (
    <div className={classes.container}>
      <Container className="mb-5">
        <h1 className="mt-5 text-center">Privacy Policy </h1>
        <p className="text-center">Last updated: January 19, 2024</p>
        <h2 className="my-2">Introduction</h2>
        <p>
          Welcome to Alcona, an online platform dedicated to connecting
          volunteers with meaningful opportunities. This Privacy Policy outlines
          how we collect, use, disclose, and protect your personal information
          when you use our website.
          <h2 className="my-2">Information We Collect</h2> We may collect
          personal information from you when you register on our site, fill out
          a form, or interact with our platform in any way. The information we
          collect may include, but is not limited to:{" "}
          <ul style={{ listStyle: "disc" }}>
            <li>Your Name</li>
            <li>Your Email Address</li>
            <li>Your Profile Description</li>
            <li>Your Profile Picture</li>
          </ul>
          <h2 className="my-2">How We Use Your Information</h2>
          We use the collected information for various purposes, including
          customizing a user profile, and personalizing the platform.
          <h2 className="my-2">Security</h2>We prioritize the security of your
          personal information and employ industry-standard measures to protect
          it from unauthorized access, disclosure, alteration, and destruction.
          <h2 className="my-2">Cookies and Tracking Technologies</h2>Our website
          may use cookies and similar tracking technologies to enhance your
          experience. You can adjust your browser settings to disable cookies,
          but this may affect certain features of the site.
          <h2 className="my-2">Third-Party Links</h2> Our website may contain
          links to third-party websites. We have no control over the content or
          privacy practices of these sites and encourage you to review their
          privacy policies before providing any personal information.
          <h2 className="my-2">Children's Privacy</h2>
          Our services are not directed to individuals under the age of 13. If
          you are a parent or guardian and believe that your child has provided
          us with personal information, please contact us, and we will promptly
          remove such information from our records.
          <h2 className="my-2">Changes to This Privacy Policy</h2>
          We may update our Privacy Policy from time to time. Any changes will
          be posted on this page with the updated date. It is your
          responsibility to review this Privacy Policy periodically.
          <h2 className="my-2">Contact Us</h2> If you have any questions or
          concerns about our Privacy Policy, please contact us on our socials!
          By using the Alcona Volunteering website, you agree to the terms
          outlined in this Privacy Policy. Thank you for being a part of Alcona
          Volunteering!
        </p>
      </Container>
    </div>
  );
};

export default PrivacyPolicy;
