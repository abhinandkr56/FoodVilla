import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';
import { addItem } from '../utils/cartSlice';
import { useDispatch } from 'react-redux';


const RestaurentMenu = () => {
  const props = useParams();
  const menus = useRestaurant(props.id);

  const dispatch = useDispatch();

  const handleCart = (item) => {
    console.log(item);
    dispatch(addItem(item));
  } 
  return (
    <>
    <div>
       
    </div>
    <h1>Menu</h1>
    <div className='restarent-menus'>
     {
      menus ? 
        (menus.length == 0 ? (
          Array.from({ length: 8 }, (_, index) => (
            <Shimmer key={index} />
          ))
        ):(
        menus.map(x =>
        <div className="border border-black h-200 w-1/12 px-4 m-2 sm:w-1/2 md:w-1/4 lg:w-1/6" key={x.id}>
        <img src={ IMG_CDN_URL + x.card.info.imageId}></img>
        <h2>{x.card.info.name}</h2>
        <h3>{x.card.info.description}</h3>
        <button className='border border-red-500 px-2 my-2' onClick={()=> {
          handleCart(x.card.info.name);
        }}>Add</button>
      </div>)) ) : 
      <div>No Items Found</div>
    }
    </div>
    </>
   
  )
}

export default RestaurentMenu