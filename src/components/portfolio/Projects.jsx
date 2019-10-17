import React from "react";
import Project from "./Project";
import { Container, Row } from "react-bootstrap";
import github from "../../assets/github.png";
import weatherlab from "../../assets/icon.ico";
import logo from "../../logo.svg";
import CenteredIcon from "../common/CenteredIcon";
const Projects = () => {
  const ps = projects.map(item => (
    <li
      style={{
        padding: "1rem"
      }}
    >
      <Project
        icon={item.icon}
        content={item.content}
        link={item.link}
      ></Project>
    </li>
  ));
  return (
    <Container>
      <h1 className="title">Portfolio</h1>
      <Container
        style={{
          textAlign: "center"
        }}
      >
        <Row>
          <ul className="mr-auto ml-auto ">{ps}</ul>
        </Row>
      </Container>
    </Container>
  );
};

const projects = [
  {
    icon: <CenteredIcon icon={logo}></CenteredIcon>,
    content: <p className="centered-text">Personal Website</p>,
    link: `http://localhost:3000/`
  },
  {
    icon: <CenteredIcon icon={github}></CenteredIcon>,
    content: <p className="centered-text">Github Finder</p>,
    link: `https://github.com/MeridjaNassim/React-Github-Finder`
  },
  {
    icon: <CenteredIcon icon={weatherlab}></CenteredIcon>,
    content: <p className="centered-text">WeatherLab</p>,
    link: `https://github.com/MeridjaNassim/WeatherLab`
  }
];
export default Projects;
