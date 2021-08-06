import {useOrderContext} from '../Contexts/OrderContext'
import React from 'react'


const Item = props => {

  const { orderDispatch } = useOrderContext();

  let multiply;

  const inputChangeHandler = event => {
    multiply = event.target.value;
  }


  const addToCart = event => {
    if (multiply === undefined) {
      multiply = 1;
    }

    event.target.parentElement.querySelector('input').value = '';

    for (let i = 0; i < multiply; i++){
      const orderProperties = {
        type: 'add',
        addedItem: {
          name: props.name,
          description: props.description,
          price: props.price,
          id: props.id
        }
      }
      orderDispatch(orderProperties)
    }
  }


  return <div className='item'>
    <div className='item-description-container'>
      <b>{props.name}</b>
      <i>{props.description}</i>
      <b className='price'>${props.price}</b>
    </div>
    <div className='item-order-container'>
      <div>
        <label htmlFor={props.id}>Amount: </label>
        <input onChange={inputChangeHandler} type="number" min='1' id={props.id}/>
      </div>
      <button onClick={addToCart}>+ Add</button>
    </div>
  </div>
}

export default Item