import React, { useState } from "react";
import {
  Container,
  Form,
  Button,
  Row,
  Col,
  Image,
  //  FormGroup,
} from "react-bootstrap";


const Serch = ({callback}) => {
  const [dstName, setDstName] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    callback(dstName);
}

  return (
    <Container className="border border-primary border-2 rounded-3 m-3">
      <Form onSubmit={handleSubmit}>
        <Row className="m-3">
          <Form.Group controlId="desistSerchText">
            <Form.Label column xs={3} className="ml-1">
              חיפוש לפי שם הנפטר
            </Form.Label>
            <Col xs={6}>
              <Form.Control
                type="text"
                placeholder="שם הנפטר"
                value={dstName}
                onChange={(e) => setDstName(e.target.value)}
              />
            </Col>
          </Form.Group>
          <Col>
            <Button type="submit">
              <Image src="serchicon.png" alt="serch" width="20px" /> חפש
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};
export default Serch;
