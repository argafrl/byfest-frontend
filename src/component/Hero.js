import React from "react";
import { Container, Jumbotron, Row, Col } from "react-bootstrap";
import bgImage from "../assets/Jumbotron-Byfest.png";
import logoUtama from "../assets/image/byfest_kuning.png";
import "./Hero.scss";

const Hero = () => {
  return (
    <div className="hero">
      <Container >
        {/* className="container-hero" */}
        <img src={logoUtama} alt="" style={{ height: "265px" }} />
        <Row className="justify-content-md-center">
          <Col md="auto">
            <h1>BRAWIJAYA MOVIE FESTIVAL</h1>
          </Col>
        </Row>
        <p>19 - 20 Oktober 2021</p>
      </Container>
    </div>
  );
};

export default Hero;