import React, { useState } from 'react'
import { Card, Button, Modal, Row, Form, Col } from 'react-bootstrap'
// import ModalWindow from './ModalWindow'
import './ModalWindow'
import ProgressBar from './ProgressBar'

import Editor from './Editor'

import './UI/Checkbox.scss'

import './Checklist.scss'
import IconX from './icons/IconX'
import SidebarCard from './SidebarCard/SidebarCard'

const ToDoCard = ({ card, ...props })  => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const control = (id, isChecked) => {

    let line = 100 / size

    if (isChecked) {
      setProgress(prev => prev -= line)
    } else {
      setProgress(prev => prev += line)
    }

    setChecklist(checklist.map(
      checkbox => checkbox._id === id
      ? {...checkbox, flag: !checkbox.flag}
      : checkbox
    ))
  }

  const [checklist, setChecklist] = useState([
    {
      _id: 1,
      text: 'item 1',
      flag: false
    },
    {
      _id: 2,
      text: 'item 2',
      flag: false
    },
    {
      _id: 3,
      text: 'item 3',
      flag: false
    },
    {
      _id: 4,
      text: 'item 4',
      flag: false
    },
  ])

  const checked = () => {
    const c = checklist.filter(
      item => item.flag
    )

    return c.length
  }

  let size = checklist.length
  // console.log('size', 100 / size)

  let [progress, setProgress] = useState(0)

  let [editor, setEditor] = useState(true)

  function editItem () {
    console.log('edit')
    setEditor(editor = false)
  }

  function closeEditor(event) {
    event.stopPropagation()
    setEditor(editor = true)
  }

  const [value, setValue] = useState('item 1')

  const [date, setDate] = useState('')

  const time = (t) => {
    setDate(t)
  } 

  return (
    <>
      
      <Card { ...props } >
        <Card.Body>
        <p>
          { card.name }
        </p>
        <Card.Text>
          <span>
            <i className='bi bi-check2-square'></i>
          </span>
          <span>
          { checked() } / { checklist.length }
          </span>
        </Card.Text>
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button>
      </Card.Body>
      </Card>

      <Modal size="lg" show={show} centered="true" onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title> { card.title } </Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-main-col'>
          <div>
            <span className="time"> { date } </span>
            <div className="modal-desc">
              <Row className="align-items-md-center">
                <Col md="auto">
                  <i className="bi bi-body-text"></i>
                </Col>
                <Col>
                  <h3>Description</h3>
                </Col>
              </Row>
              <Row>
                <Col>
                  <p className="modal-desc__fake-textarea">
                    <button className='modal-desc__button' >Add a more detailed description…</button>
                  </p>
                  <div className="modal-desc__editor">
                    <Editor />
                  </div>
                </Col>
              </Row>
              {/* <div className="modal-desc__row">
                <span className='modal-icon'>
                  <i class="bi bi-body-text"></i>
                </span>
                <h3>Description</h3>
              </div> */}
              {/* <div className="modal-desc__row">
                <p className="modal-desc__fake-textarea">
                  <button className='modal-desc__button' >Add a more detailed description…</button>
                </p>
              </div> */}
            </div>
            {/* <ProgressBar now={40} /> */}

            <div className="checklist">
              <div className="checklist__header">
                <span className="checklist__icon">
                  <i className='bi bi-check2-square'></i>
                </span>
                <div className="checklist__header-row">
                  <h3 className='checklist__title'>Checklist name</h3>
                  <Button variant="outline-secondary">Delete</Button>
                </div>
              </div>
              <ProgressBar currentWidth={progress} className="checklist__progressbar" />
              {
                checklist.map(
                  item => (
                    <div className="checklist__item" key={ item._id }>
                      <div className="checklist__checkbox">
                      <label className='check'>
                        <input className='check__input' type="checkbox" name="" id="" checked={ item.flag } onChange={ () => control(item._id, item.flag) } />
                        <span className="check__box"></span>
                      </label>
                      </div>
                      <div className="checklist__text" onClick={ editItem }>
                        {
                          editor
                          ? <p> { value } </p>
                          : <div className='checklist__editor'>
                              <Form.Control
                                as="textarea"
                                rows={2}
                                defaultValue={ value }
                                onChange={ event => setValue(event.target.value) }
                              />
                              <div className="checklist__editor-controls">
                                <Button
                                  variant="outline-secondary"
                                  onClick={ event => closeEditor(event) }
                                >
                                  Save
                                </Button>
                                <button className='checklist__icon-close' onClick={ event => closeEditor(event) }>
                                  <IconX />
                                </button>
                              </div>
                            </div>
                        }
                      </div>
                    </div>
                  )
                )
              }
            </div>
          </div>
          <div className='sidebar'>
            <SidebarCard callback={ time } />
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default ToDoCard
