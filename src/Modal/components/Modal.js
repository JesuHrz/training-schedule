import React from 'react'
import Modal from 'react-modal'

import './styles.css'
import {
  ButtonClose,
  ModalContent
} from './styles'

Modal.setAppElement('#app')

export default props => {
  const { modalIsOpen, closeModal, children } = props
  return (
    <Modal
      isOpen={modalIsOpen}
      className='modal'
      overlayClassName='modal-overlay'
      contentLabel='Example Modal'
    >
      <ButtonClose onClick={closeModal}>X</ButtonClose>
      <ModalContent>
        {
          children
        }
      </ModalContent>
    </Modal>
  )
}
