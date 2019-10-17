import React from "react";
import DiversItem from "./DiversItem";
import { Container, Row } from "react-bootstrap";
import CenteredIcon from "../common/CenteredIcon";
import dumbell2 from "../../assets/dumbell2.png";
import pad from "../../assets/gamepad.png";
import book from "../../assets/book.png";
const Divers = ({ id }) => {
  const items = divers.map(item => {
    return (
      <li
        style={{
          padding: "1rem"
        }}
      >
        <DiversItem icon={item.icon} content={item.content} />
      </li>
    );
  });
  return (
    <section id={id}>
      <h1 className="title">Intrests</h1>
      <Container
        style={{
          textAlign: "center"
        }}
      >
        <Row>
          <ul className="mr-auto ml-auto ">{items}</ul>
        </Row>
      </Container>
    </section>
  );
};

export default Divers;

const divers = [
  {
    icon: <CenteredIcon icon={book}></CenteredIcon>,
    content: <p className="centered-text">Reading books</p>
  },

  {
    icon: <CenteredIcon icon={pad}></CenteredIcon>,
    content: <p className="centered-text">Playing videos games with friends</p>
  },

  {
    icon: <CenteredIcon icon={dumbell2}></CenteredIcon>,
    content: <p className="centered-text">Going to the gym</p>
  }
];
