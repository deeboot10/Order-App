import Item from './Item'
import React from 'react'

const ItemsList = () => {

  const allItems = [
    {
      id: 1,
      price: 10.21,
      name: 'Sushi',
      description: 'Finest fish slices in the universe!'
    },
    {
      id: 2,
      price: 1.99,
      name: 'Peanuts',
      description: 'Best peanut butter is made from elephant meat!'
    },
    {
      id: 3,
      price: 0.5,
      name: 'La Baguette',
      description: 'Bread Bead dra bread!'
    },
    {
      id: 4,
      price: 22.22,
      name: 'Bananas',
      description: 'Healthy snack for every time of the day!'
    }
  ]

  const allItemsRender = allItems.map(item => 
    <Item key={item.name} name={item.name} description={item.description} price={item.price} />
  )

  return <div className='items-list'>
    <h2>ItemsList</h2>
    {allItemsRender}
  </div>
}

export default ItemsList