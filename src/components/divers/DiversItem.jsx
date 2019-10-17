import React from "react";
import CardElement from "../common/CardElement";
import { Container } from "react-bootstrap";
const DiversItem = ({ icon, content }) => {
  return (
    <CardElement
      title={icon}
      content={
        <Container
          style={{
            textAlign: "center",
            paddingTop: "1rem"
          }}
        >
          {content}
        </Container>
      }
    ></CardElement>
  );
};

export default DiversItem;
