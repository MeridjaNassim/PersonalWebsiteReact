import React from "react";
import ContactItem from "./ContactItem";
import { icons, other } from "../home/Info";
import { Container, Row } from "react-bootstrap";

import "../../styles/contact/contact.css";
const Contact = () => {
  return (
    <div className="contact">
      <h1 className="title">Contacts</h1>
      <Container
        style={{
          textAlign: "center"
        }}
      >
        <Row>
          <ul className="mr-auto ml-auto ">
            <li>
              <ContactItem
                icon={icons.adress}
                content={
                  <p>
                    <a
                      href={other.adress}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Cité Les Rosiers , Mohammadia Algiers
                    </a>
                  </p>
                }
              ></ContactItem>
            </li>
            <li>
              <ContactItem
                icon={icons.email}
                content={<p>{other.email}</p>}
              ></ContactItem>
            </li>
            <li>
              <ContactItem
                icon={icons.phone}
                content={<p>{other.phone}</p>}
              ></ContactItem>
            </li>
          </ul>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
