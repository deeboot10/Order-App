import { useOrderContext } from "../Contexts/OrderContext"
import ModalItem from './ModalItem'
import React from 'react'

const ModalContent = props => {

  const { orderStore } = useOrderContext();
  const { orderList } = orderStore;



  let orderListRender = [];
  let addedNames = [];
  orderList.forEach(item => {
    if (addedNames.includes(item.name)) {
      orderListRender[addedNames.indexOf(item.name)]['count'] += 1;
    } else {
      orderListRender.push({ ...item, count: 1 });
      addedNames.push(item.name)
    }
  })

  let totalPrice = 0;
  orderListRender.forEach(item => {
    totalPrice += item.count * item.price;
  })

  const orderListRenderRender = orderListRender.map(item => 
    <ModalItem price={item.price} id={item.id} description={item.description} key={item.name} name={item.name} totalPrice={item.price} count={item.count}/>
  )


  return <div className={props.classNameProp}>
    {orderListRenderRender.length ? orderListRenderRender : <h5>No items selected</h5>}
    <div className='total-price'>
      <h2>Total price: ${ Math.floor(totalPrice * 100)/100 }</h2>
    </div>
  </div>
}

export default ModalContent
