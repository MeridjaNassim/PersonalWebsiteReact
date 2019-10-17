import React from "react";
import CardElement from "../common/CardElement";
import { Row, Col, Container } from "react-bootstrap";
const Academic = ({ id }) => {
  return (
    <section id={id}>
      <Container>
        <h1 className="title">Academic Profile</h1>
        <Row>
          <Col>
            <CardElement
              title={
                <>
                  Baccalaureat <i>2017</i>
                </>
              }
              content={
                <div>
                  <p>
                    <i>High school :</i> Mohammed Hadjress
                  </p>
                  <p>
                    <i>Branch :</i> Mathematics
                  </p>
                  <p>
                    <i>Grade :</i> 17.83
                  </p>
                  <p>
                    <i>Observation :</i> Excellent
                  </p>
                </div>
              }
            ></CardElement>
          </Col>
          <Col>
            <CardElement
              title={
                <>
                  Computer Science Major <i>2017-2022</i>
                </>
              }
              content={
                <div>
                  <p>
                    <i>College :</i>{" "}
                    <a
                      href="http://www.esi.dz/"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Ecole Nationale supérieure d'informatique
                    </a>
                  </p>
                  <p>
                    <i>1st year :</i> Top 20
                  </p>
                  <p>
                    <i>2nd year:</i> Top 10
                  </p>
                </div>
              }
            ></CardElement>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Academic;
