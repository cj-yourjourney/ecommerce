import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import { useNavigate, useLocation } from "react-router-dom";

function SearchBox() {
  const [keyword, setKeyword] = useState("");

  let navigate = useNavigate();
  const location = useLocation();

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword) {
      navigate(`/?keyword=${keyword}&page=1`);
    } else {
      navigate(location.pathname);
    }
  };

  return (
    <Form onSubmit={submitHandler} inline='true'>
      <Row>
        <Col xs="auto">
          <Form.Control
            type="text"
            placeholder="Search"
            className="text-primary"
            onChange={(e) => setKeyword(e.target.value)}
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" variant="outline-success">
            Submit
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default SearchBox;
