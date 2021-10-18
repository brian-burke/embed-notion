import React from "react";
import { Accordion } from "react-bootstrap";
import { Form } from "react-bootstrap";
import { Container, Row, Col } from "react-bootstrap";

function CustomAccordianItem(props) {
  const optionItems = props.options.map((option, index) => (
    <Row key={index}>
      <Col xs={6} md={6}>
        <a href="https://google.com">{option}</a>

      </Col>

      <Col xs={6} md={6}>
        <Form>
          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Select"
              checked={props.checkState[index]}
              id={[props.optionIndex, index]}
              onChange={(e) => {
                props.updateCheckState(e);
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
