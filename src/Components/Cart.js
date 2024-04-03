import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeItem, clearCart } from '../utils/cartSlice';

const Cart = () => {

    var cartItems = useSelector(store => store.cart.items);
    const dispatch = useDispatch();

    const handleRemoveItem = (item) => {
        console.log("remove"+ item);
        dispatch(removeItem(item));
    }

    const handleClearCart = () => {
        dispatch(clearCart());
    }
  return (
    <>
            <button className='bg-green-600 p-1 m-3' onClick={() => {
                handleClearCart();
            }}>Clear Cart</button>
            <div className='flex flex-row flex-wrap'>
        {
        cartItems.length > 0 ?
        cartItems.map(
        x =><div className='border border-black w-1/3 m-3 p-4 flex justify-between'><div className=''>{x}</div><button className='border border-blue-500 p-2' onClick={() => {
            handleRemoveItem(x);
        }}>Remove</button></div>
        ) : <div>No items</div>}
    </div>
    </>
   
  )
}

export default Cart