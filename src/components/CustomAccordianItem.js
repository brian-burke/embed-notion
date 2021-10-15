import React, { useState } from "react";
import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function CustomAccordianItem(props) {
  const optionItems = props.options.map((option) => (
    <Row>
      <Col xs={6} md={4}>
        {option}
      </Col>
      <Col xs={6} md={4}>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check
              type="checkbox"
              label="Select"
              checked={true}
              onClick={(e) => {
                props.sendDataToParent(e);
              }}
            />
          </Form.Group>
        </Form>
      </Col>
    </Row>
  ));

  return (
    <Accordion.Item eventKey={props.eventKey}>
      <Accordion.Header>{props.header}</Accordion.Header>
      <Accordion.Body>
        {optionItems}
        <Container fluid></Container>
      </Accordion.Body>
    </Accordion.Item>
  );
}

export default CustomAccordianItem;
