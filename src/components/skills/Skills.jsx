import React from "react";
import { ProgressBar, Row, Col, Container } from "react-bootstrap";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "../../styles/skills/skills.css";
const Skills = ({ id }) => {
  const skilltools = skills.map(skill => {
    return (
      <SkillBar name={skill.name} icon={skill.icon} now={skill.now}></SkillBar>
    );
  });
  const proSkills = pros.map(item => {
    return (
      <li>
        <SkillCircle name={item.name} per={item.per}></SkillCircle>
      </li>
    );
  });
  return (
    <section id={id}>
      <Container>
        <Row>
          <Col md={6}>
            <h1 className="title">Technical Skills </h1>
            {skilltools}
          </Col>
          <Col md={6}>
            <h1 className="title">General Skills </h1>
            <ul className="circular-bars mr-auto ml-auto ">{proSkills}</ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
const SkillCircle = ({ name, per }) => {
  return (
    <div>
      <CircularProgressbar
        value={per}
        maxValue={100}
        text={`${per}%`}
        strokeWidth={4}
      ></CircularProgressbar>
      <p className="textItem">{name}</p>
    </div>
  );
};
const SkillBar = ({ name, now, icon }) => {
  return (
    <div
      style={{
        marginBottom: "1rem"
      }}
    >
      <h4 className="skill">
        <span style={{ marginRight: "1rem", width: 20, height: 20 }}>
          {icon}
        </span>
        {name} <span className="now">{`${now}%`}</span>
      </h4>
      <ProgressBar now={now} className="progressbar" animated></ProgressBar>
    </div>
  );
};

const skills = [
  {
    name: "JavaScript",
    icon: <i class="devicon-javascript-plain colored"></i>,
    now: 70
  },
  {
    name: "React",
    icon: <i className="devicon-react-original colored"></i>,
    now: 77
  },
  {
    name: "Python",
    icon: <i className="devicon-python-plain colored"></i>,
    now: 50
  },
  {
    name: "Java",
    icon: <i className="devicon-java-plain colored"></i>,
    now: 60
  },
  {
    name: "Bootstrap",
    icon: <i className="devicon-bootstrap-plain colored"></i>,
    now: 50
  }
];
const pros = [
  {
    name: "Communication",
    per: 60
  },
  {
    name: "Programming",
    per: 80
  },
  {
    name: "Socializing",
    per: 50
  },
  {
    name: "Problem solving",
    per: 90
  },
  {
    name: "Time management",
    per: 70
  },
  {
    name: "Project conduct",
    per: 75
  }
];

export default Skills;
