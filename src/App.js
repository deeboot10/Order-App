import Header from './Components/Header'
import Main from './Components/Main'
import Modal from './Components/Modal'
import React from 'react'
import { useState } from 'react'

function App() {

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModalHandler = () => {
    setModalIsOpen(true);
  }
  const closeModalHandler = () => {
    setModalIsOpen(false);
  }

  return (
    <>
      <Header openModal={openModalHandler}/>
      <Main />
      {modalIsOpen ? <Modal closeModal={closeModalHandler} /> : null}
    </>
  );
}

export default App;
