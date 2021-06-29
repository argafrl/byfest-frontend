import React from "react";
import { Container, Jumbotron, Row, Col, Card } from "react-bootstrap";
import judges1 from "../assets/image/judges_1.jpg";
import "./Judges.scss";

const judges = () => {
  return (
    <div className="judges">
      <Container>
        <Row className="justify-content-md-center">
          <h1>B Y F E S T</h1>
        </Row>
        <Row className="justify-content-md-center">
          <h2>J U D G E S</h2>
        </Row>
        <Row className="justify-content-md-center">
          <Col md={6}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={judges1} />
              <Card.Body>
                <Card.Title>STEVE AOKI</Card.Title>
                <Card.Text>Film Enthusiast</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={judges1} />
              <Card.Body>
                <Card.Title>STEVE AOKI</Card.Title>
                <Card.Text>Film Enthusiast</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src={judges1} />
              <Card.Body>
                <Card.Title>STEVE AOKI</Card.Title>
                <Card.Text>Film Enthusiast</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default judges;
