import React from "react";
import Info from "./Info.jsx";
import Avatar from "./Avatar.jsx";
import { Row, Col, Container } from "react-bootstrap";
import "../../styles/home/home.css";
const Home = () => {
  return (
    <Container
      style={{
        marginTop: "5rem",
        marginBottom: "10rem"
      }}
    >
      <Row>
        <Col>
          <Info></Info>
        </Col>
        <Col>
          <Avatar></Avatar>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
