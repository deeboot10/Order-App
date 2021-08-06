import CartIcon from '../icons/CartIcon'
import { useOrderContext } from '../Contexts/OrderContext'
import React from 'react'

const Cart = props => {

  const { orderStore } = useOrderContext();
  let value = orderStore.orderList.length;

  const cartClickHandler = () => {
    props.openModal()
  }

  return <div className='cart' onClick={cartClickHandler}>
    <CartIcon />
    <h2>Your Cart</h2>
    <span>{value}</span>
  </div>
}

export default Cart