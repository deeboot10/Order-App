import Cart from './Cart'
import React from 'react'

const Header = props => {
  return <div className='header'>
    <h1>React Meals</h1>
    <Cart openModal={props.openModal} />
  </div>
}

export default Header