import React from 'react'
import './Board.scss'

import { Container, Row, Col } from 'react-bootstrap'

const Board = () => {
  return (
    <div className='board'>
      <div className="board__overlay"></div>
      <Container className='board__content' fluid>
        <div className="board__header">
          <Row>
            <Col>
              <h1>Vue</h1>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  )
}

export default Board
