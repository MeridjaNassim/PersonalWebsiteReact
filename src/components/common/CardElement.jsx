import React from "react";
import { Card } from "react-bootstrap";
import "../../styles/common.css";
const CardElement = ({ title, content }) => {
  return (
    <div>
      <Card text="white" className="card">
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          {content}
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardElement;
