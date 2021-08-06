import ModalContent from './ModalContent'
import React from 'react'

const Modal = props => {
  return <div className='modal'>
    <ModalContent classNameProp='modal-content' />
    <div className='modal-backdrop' onClick={props.closeModal}></div>
  </div>
}

export default Modal