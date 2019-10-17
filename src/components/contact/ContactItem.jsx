import React from "react";
import CardElement from "../common/CardElement";
import { Container } from "react-bootstrap";
import "../../styles/contact/contact.css";
const ContactItem = ({ icon, content }) => {
  return (
    <CardElement
      title={<ContactIcon icon={icon}></ContactIcon>}
      content={
        <Container
          style={{
            paddingTop: "1rem"
          }}
          className="centered-text"
        >
          {content}
        </Container>
      }
    ></CardElement>
  );
};
const ContactIcon = ({ icon }) => {
  return <div className="contact-icon">{icon}</div>;
};
export default ContactItem;
