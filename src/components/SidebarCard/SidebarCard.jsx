import React, { useState } from 'react'
import { Modal } from 'react-bootstrap'
import Calendar from './Calendar'
import './SidebarCard.scss'

const SidebaeCard = props => {

  console.log(props.callback)

  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false);

  return (
    <React.Fragment>
      <div className='sidebar-card'>

        <div className='sidebar-card__item'>
          <button  className='sidebar-card__button' onClick={ () => setShow(true) }>
            <i className='bi bi-person'></i>
            <span className="sidebar-card__text">
              Members
            </span>
          </button>
        </div>

        <div className='sidebar-card__item'>
          <button  className='sidebar-card__button' >
            <i className='bi bi-tag'></i>
            <span className="sidebar-card__text">
              Labels
            </span>
          </button>
        </div>

        <div className='sidebar-card__item'>
          <button  className='sidebar-card__button'>
            <i className='bi bi-check-square'></i>
            <span className="sidebar-card__text">
              Checklist
            </span>
          </button>
        </div>

        <div className='sidebar-card__item'>
          <button  className='sidebar-card__button' onClick={ () => setShow(true) }>
            <i className='bi bi-clock'></i>
            <span className="sidebar-card__text">
              Dates
            </span>
          </button>
        </div>
        
      </div>

      <Modal show={ show } size="sm" className='popup' onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>calendar</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <Calendar time={ props.callback } />
          </div>
        </Modal.Body>
      </Modal>

    </React.Fragment>
  )
}

export default SidebaeCard
