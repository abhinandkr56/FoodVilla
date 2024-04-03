import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {

    var cartItems = useSelector(store => store.cart.items);
  return (
    <div className='flex flex-row'>{cartItems.map(
        x => <div className='border border-black w-1/3 m-3 p-4'>{x}</div>
        )}
    </div>
  )
}

export default Cart