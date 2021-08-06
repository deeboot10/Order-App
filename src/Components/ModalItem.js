import { useOrderContext } from "../Contexts/OrderContext"
import React from 'react'

const ModalItem = props => {
  
  const { orderDispatch } = useOrderContext();

  const minusOneHandler = () => {
    orderDispatch({
      type: 'minus',
      name: props.name
    })
  }

  const plusOneHandler = () => {
    orderDispatch({
      type: 'add',
      addedItem: {
        name: props.name,
        description: props.description,
        price: props.price,
        id: props.id
      }
    })
  }

  return <div className='modal-item'>
    <div className='modal-item-names'>
      <b>{props.name}</b>
      <b>${props.totalPrice}</b>
    </div>
    <div className='modal-item-count'>
      <i>x{props.count}</i>
      <button onClick={ minusOneHandler }>-</button>
      <button onClick={ plusOneHandler  }>+</button>
    </div>
  </div>
}

export default ModalItem