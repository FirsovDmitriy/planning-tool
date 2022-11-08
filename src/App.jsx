import React, { useState } from 'react'
import ToDoCard from './components/ToDoCard'
import TheHeader from './components/TheHeader'
import Board from './components/Board/Board'
import { Row, Col } from 'react-bootstrap'

function App() {

  const [list, setList] = useState([
    {
      _id: 1,
      title: 'Title 1',
      checklist: [{text: 'task 1', flag: true}, {text: 'task 2', flag: true}, {text: 'task 3', flag: false}, {text: 'task 4', flag: false}]
    },
    {
      _id: 2,
      title: 'Title 2',
      checklist: [{text: 'task 1', flag: false}, {text: 'task 2', flag: false}, {text: 'task 3', flag: false}, {text: 'task 4', flag: false}]
    },
    {
      _id: 3,
      title: 'Title 3',
      checklist: [{text: 'task 1', flag: false}, {text: 'task 2', flag: false}, {text: 'task 3', flag: false}, {text: 'task 4', flag: false}]
    }
  ])

  return (
    <React.Fragment>
      <TheHeader />
      <main className="page-content">
        <Board>
          <Row>
            {
              list.map(
                card => (
                  <Col key={card._id} >
                    <ToDoCard card={ card } />
                  </Col>
                )
              )
            }
          </Row>
        </Board>
      </main>
    </React.Fragment>
  )
}

export default App
