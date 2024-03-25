import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';
import useRestaurant from '../utils/useRestaurant';


const RestaurentMenu = () => {
  const props = useParams();
  const menus = useRestaurant(props.id);
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
        <div className="restaurant-menu-card" key={x.id}>
        <img src={ IMG_CDN_URL + x.card.info.imageId}></img>
        <h2>{x.card.info.name}</h2>
        <h3>{x.card.info.description}</h3>
      </div>)) ) : 
      <div>No Items Found</div>
    }
    </div>
    </>
   
  )
}

export default RestaurentMenu