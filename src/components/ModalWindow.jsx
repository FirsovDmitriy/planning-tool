import React, { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { Modal } from 'react-bootstrap'
import './ModalWindow.scss'

const modalRoot = document.querySelector('#modal-windows')

const ModalWindow = props => {
  const { marker } = props
  const element = document.createElement('div')
  element.dataset.marker = marker

  useEffect(() => {
    modalRoot.append(element)
    return () => element.remove()
  })

  return createPortal(
    <Modal.Dialog>
      <Modal.Body>
        { props.children }
      </Modal.Body>
    </Modal.Dialog>,
    element
  )
}

export default ModalWindow
