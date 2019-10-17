import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
const ContactForm = () => {
  return (
    <Container>
      <Form>
        <Row
          style={{
            paddingBottom: 0,
            marginBottom: 10
          }}
        >
          <Col>
            <Form.Control placeholder="First name" required />
          </Col>
          <Col>
            <Form.Control placeholder="Last name" required />
          </Col>
        </Row>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="name@example.com" required />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            rows="3"
            placeholder="Your Message"
            required
          />
        </Form.Group>
        <Button
          variant="btn"
          type="submit"
          style={{
            color: "white",
            marginLeft: 0
          }}
        >
          <span>
            <i className="fas fa-paper-plane"></i>
          </span>{" "}
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default ContactForm;
