import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import skiHill from "../media/krzysztof-kowalik-t8p9dbMpAzg-unsplash.jpg";

export default function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col lg={4} md={4}>
          <a href="/ParkCity">
            
            <Image src={skiHill} fluid />
          </a>
        </Col>
        <Col lg={4} md={4}>
          <a href="/Keystone">

            <Image src={skiHill} fluid />
          </a>
        </Col>
      </Row>
    </Container>
  );
}
