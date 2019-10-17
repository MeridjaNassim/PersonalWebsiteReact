import React from "react";
import { Container } from "react-bootstrap";
const CenteredIcon = ({ icon }) => {
  return (
    <Container
      style={{
        textAlign: "center"
      }}
    >
      <img src={icon} alt="alternative" width="100px" height="100px" />
    </Container>
  );
};

export default CenteredIcon;
