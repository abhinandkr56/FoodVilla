import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { IMG_CDN_URL } from '../constants';
import Shimmer from './Shimmer';


const RestaurentMenu = () => {
  const props = useParams();
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getRestaurentMenu();
  },[]);

  const getRestaurentMenu = async() => {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId=${props.id}`);
     
    var jsonData = await data.json();
    console.log(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
    setMenus(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
   // return jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
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