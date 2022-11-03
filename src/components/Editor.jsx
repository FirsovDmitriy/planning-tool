import React from 'react'
import { Row, Form, Col, Button } from 'react-bootstrap'

const Editor = () => {
  return (
    <div>
      <Row>
        <Col>
          <Form.Control
            as="textarea"
            rows={2}
          />
        </Col>
      </Row>
      <Row>
        <Col md="auto">
        <Button variant="outline-secondary" size="md">
          Save
        </Button>
        </Col>
        <Col>
          <Button variant="outline-danger" size="md">
          <i className="bi bi-x-lg"></i>
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Editor
