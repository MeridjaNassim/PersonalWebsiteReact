import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../../styles/about/about.css";
import "../../styles/home/home.css";
import Download from "./Download";
import CardElement from "../common/CardElement";
import art from "../../assets/ab-img.png";

const About = () => {
  return (
    <Container>
      <Row className="row">
        <Col md={6}>
          {/**ArtWork */}
          <img
            src={art}
            alt="art"
            className="art"
            style={{
              paddingRight: "2rem"
            }}
          />
        </Col>
        <Col md={6}>
          <AboutInfo />
          <Download></Download>
        </Col>
      </Row>
      <WhatIdo what={whatIdo}></WhatIdo>
    </Container>
  );
};
const WhatIdo = ({ what }) => {
  const cards = what.map(item => {
    return (
      <Col>
        <CardElement
          title={
            <>
              <span>{item.icon}</span>
              <h2 style={{ marginTop: "1rem" }}>{item.title}</h2>
            </>
          }
          content={<Card.Text className="content">{item.content}</Card.Text>}
        ></CardElement>
      </Col>
    );
  });

  return (
    <div className="whatido">
      <h1>What I Do</h1>
      <Row>{cards}</Row>
    </div>
  );
};

const AboutInfo = () => {
  const languages = ["JavaScript", "Java", "C", "C#", "Python", "SQL", "Dart"];
  return (
    <div
      style={{
        paddingLeft: "2rem"
      }}
    >
      <h1 className="name-tag">About Me</h1>
      <p>
        I'm an algerian <i>computer science</i> student ,inspired web/mobile
        developer, <i>machine learning</i> and <i>datascience</i> enthusiast. am
        currently good at .
      </p>

      <Tools tools={languages} />
    </div>
  );
};
const Tools = ({ tools }) => {
  const listItems = tools.map(tool => {
    return (
      <li>
        <p>{tool}</p>
      </li>
    );
  });
  return <ul className="tools">{listItems}</ul>;
};

const whatIdo = [
  {
    title: "Data Scientist",
    icon: <i className="fas fa-database"></i>,
    content: `I thrive to be a data scientist in the future , thats why i research this topic as much as i can and try to build real-life projects`
  },
  {
    title: "Web Developer",
    icon: <i className="fas fa-globe"></i>,
    content: `I like building things , bringing my ideas to reality , and web developement is the tool that made it possible for me , thats why am always up-to-date in this topic`
  },
  {
    title: "Mobile Developer",
    icon: <i class="fas fa-code"></i>,
    content: `Mobiles are a an essential part of our lives ,which is why i aim to make them better with my apps`
  }
];
export default About;
