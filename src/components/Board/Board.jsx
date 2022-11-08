import React, { useState } from 'react'
import './Board.scss'

import { Container, Row, Col, Button } from 'react-bootstrap'
import ToDoCard from '../ToDoCard'

const Board = () => {

  const [columns, setColumns] = useState(
    [
      {
        id: 1,
        title: 'To Do',
        tasks: [{id: 1, name: 'Vue JS'}]
      },
      {
        id: 2,
        title: 'Doing',
        tasks: [{id: 1, name: 'React'}, {id: 2, name: 'Svelte'}]
      },
      {
        id: 3,
        title: 'Done',
        tasks: [{id: 1, name: 'Java'}, {id: 2, name: 'Node'}, {id: 3, name: 'Next'}]
      }
    ]
  )

  const [currentColumn, setCurrentColumn] = useState(null)
  const [currentCard, setCurrentCard] = useState(null)

  function dragStartHandler (e, column, card) {
    console.log('drag start')
    e.target.classList.add('selected')
    setCurrentColumn(column)
    setCurrentCard(card)
  }

  function dragOverHandler (e, card, task) {
    e.preventDefault()
    // console.log('e', e)
    const activeElement = document.querySelector('.selected')
    console.log(activeElement)

  }

  function dragEndHandler (e) {
    console.log('drag end')
    e.target.classList.remove('selected')
  }

  function dragLeaveHandler () {}

  function dropHandler (e, column, card) {
    e.preventDefault()
    const currentIndex = currentColumn.tasks.indexOf(currentCard)
    currentColumn.tasks.splice(currentIndex, 1)

    const dropIndex = column.tasks.indexOf(card)
    column.tasks.splice(dropIndex + 1, 0, currentCard)
    setColumns(columns.map(col => {
      if (col.id === column.id) {
        return column
      }
      if (col.id === currentColumn.id) {
        return currentColumn
      }
      return col
    }))
  }

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
        <div className='board__body'>
          {
            columns.map(column => (
              <div
                className="list-tasks"
                key={ column.id }
              >
                <div className="list-tasks__content">
                  <div className="list-tasks__header">
                    <h5>{ column.title }</h5>
                  </div>
                  <div className="list-tasks__cards">
                    {
                      column.tasks.map(card => (
                        <ToDoCard
                          className="list-tasks__card"
                          card={ card }
                          key={ card.id }
                          draggable={ true }
                          onDragStart={ e => dragStartHandler(e, column, card) }
                          onDragEnd={ e => dragEndHandler(e) }
                          onDragLeave={ e => dragLeaveHandler() }
                          onDrop={ e => dropHandler(e, column, card) }
                          onDragOver={ e => dragOverHandler(e) }
                        />
                      ))
                    }
                  </div>
                  <div className="list-tasks__footer">
                    <Button variant="outline-secondary">
                      <span className="list-tasks__button-icon">
                        <i className="bi bi-plus-square"></i>
                      </span>
                      Add card
                    </Button>
                  </div>
                </div>
              </div>
            ))
          }
          <div className="board__new-col">
            <Button variant="outline-info">
              Add another column
            </Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Board
