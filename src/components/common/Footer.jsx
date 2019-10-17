import React from "react";
import ContactForm from "../contact/ContactForm";
import AppInfo from "../contact/AppInfo";
import { Container, Row, Col } from "react-bootstrap";
import { SocialMedia } from "../home/Info";
const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <ContactForm />
          </Col>
          <Col>
            <p>Or contact me at</p>
            <SocialMedia />
            <AppInfo></AppInfo>
          </Col>
        </Row>
      </Container>
      <div
        style={{
          minHeight: "4rem"
        }}
      ></div>
    </footer>
  );
};

export default Footer;
