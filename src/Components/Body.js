import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants"
import { useEffect, useState } from "react";

const Body = () => {

  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const filterData =() => {
    if(searchText == ""){
      setFilteredRestaurants(restaurants);
    }
    else{
      var newRestaurants = restaurants?.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()));
      setFilteredRestaurants(newRestaurants);
    }
  }

  useEffect(async () => {
    getRestaurent();
  }, [])

  const getRestaurent = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    var json =  await data.json();
    var restaurantsData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  }

  return (
    <>
    <div className="search-container">
      <input type="text" placeholder="Search" value={searchText} className="search-input" onChange={(e) => setSearchText(e.target.value)} 
       onKeyDown={(e) => {
        if (e.key === 'Enter') {
          filterData();
        }
      }}></input>
      <button className="search-button" onClick={() => filterData()}>Search</button>
    </div>
      <div className="body">
        {restaurants.length === 0 ? (
       
          Array.from({ length: 10 }, (_, index) => (
            <Shimmer key={index} />
          ))
    ): (filteredRestaurants.length === 0 ? <div className="no-rest-found-body">No restaurants found</div> : filteredRestaurants?.map((rest) => (
          <RestaurantCard
            key = {rest.info.id}
            image={ IMG_CDN_URL + rest.info.cloudinaryImageId}
            name={rest.info.name}
            location={rest.info.locality}
            rating={rest.info.avgRating}
          />
        )))}
      </div>
    </>
  );
};

export default Body;
