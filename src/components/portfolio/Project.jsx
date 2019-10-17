import React from "react";
import CardElement from "../common/CardElement";
import { Button, Container } from "react-bootstrap";
const Project = ({ icon, content, link }) => {
  return (
    <CardElement
      title={icon}
      content={
        <Container
          style={{
            textAlign: "center"
          }}
        >
          {content}
          <Button
            href={link}
            className="btn"
            style={{
              padding: "0.5rem",
              marginLeft: 0
            }}
          >
            See More
          </Button>
        </Container>
      }
    ></CardElement>
  );
};

export default Project;
