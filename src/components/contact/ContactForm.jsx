import React from "react";
import { Form, Container, Button, Row, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";
import { useState } from "react";
const ContactForm = () => {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    /// sending email.

    let templateParams = {
      from_name: `${fname + " " + lname + " " + email}`,
      to_name: "Abdellah Meridja",
      subject: "Personal Website Contact",
      message_html: message
    };
    emailjs.send(
      "gmail",
      "template_ImftiFgW",
      templateParams,
      "user_X9yvYwTOP0XDf0K1EyFwE"
    );

    resetForm();
  };
  const resetForm = () => {
    setEmail("");
    setFname("");
    setLname("");
    setMessage("");
  };
  const onChange = e => {
    switch (e.target.name) {
      case "fname":
        setFname(e.target.value);
        break;
      case "lname":
        setLname(e.target.value);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "message":
        setMessage(e.target.value);
        break;
      default:
        break;
    }
  };
  return (
    <Container>
      <Form onSubmit={onSubmit}>
        <Row
          style={{
            paddingBottom: 0,
            marginBottom: 10
          }}
        >
          <Col md={6}>
            <Form.Control
              placeholder="First name"
              type="text"
              required
              onChange={onChange}
              name="fname"
              value={fname}
              className="custom-input"
            />
          </Col>
          <Col md={6}>
            <Form.Control
              type="text"
              placeholder="Last name"
              name="lname"
              required
              value={lname}
              onChange={onChange}
              className="custom-input"
            />
          </Col>
        </Row>

        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Control
            type="email"
            name="email"
            placeholder="name@example.com"
            required
            value={email}
            onChange={onChange}
            className="custom-input"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            as="textarea"
            type="text"
            rows="3"
            className="custom-input"
            name="message"
            value={message}
            placeholder="Your Message"
            onChange={onChange}
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
