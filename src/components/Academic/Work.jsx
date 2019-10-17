import React from "react";
import CardElement from "../common/CardElement";
import { Row, Col, Container } from "react-bootstrap";
import gdg from "../../assets/gdg-google-developer-group-logo.svg";
import cse from "../../assets/cse.png";
const Work = () => {
  return (
    <div>
      <Container>
        <h1 className="title">Work Experience</h1>
        <Row>
          <Col>
            <CardElement
              title={
                <>
                  <img src={cse} alt="CSE logo" width="50%" height="50%" />
                </>
              }
              content={
                <div>
                  <p>
                    <i>2018 :</i> Event planning member
                  </p>
                  <p>
                    <i>2019 :</i> Dev Team member
                  </p>
                </div>
              }
            ></CardElement>
          </Col>
          <Col>
            <CardElement
              title={
                <>
                  <img
                    src={gdg}
                    alt="GDG logo"
                    width="50%"
                    height="50%"
                    style={{
                      padding: "1rem"
                    }}
                  />
                </>
              }
              content={
                <div>
                  <p>
                    <i>2018 :</i> Marketing and External Relations
                  </p>
                  <p>
                    <i>2019 :</i> Logistics and Event planning
                  </p>
                </div>
              }
            ></CardElement>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Work;
