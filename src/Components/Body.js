import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL } from "../constants"
import { useEffect, useState } from "react";
import { filter } from "../utils/helper";
import useOnline from "../utils/useOnline";
import { UseMemoDemo } from "./UseMemoDemo";
import UseRefDemo from "./UseRefDemo";

const Body = () => {

  const [searchText, setSearchText] = useState();
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);


  const filterData =() => {
    var newRestaurants = filter(searchText, restaurants);
    setFilteredRestaurants(newRestaurants);
  }


  useEffect(() => {
    getRestaurent();
  },[])

  const getRestaurent = async () => {
    var data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
    var json =  await data.json();
    var restaurantsData = json.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurants(restaurantsData);
    setFilteredRestaurants(restaurantsData);
  }
  const online = useOnline();

  if(!online){
    return <div className="offline-body"><h1>Offline, please check your internet connection</h1></div>
  }
  return (
    <>
    <div className="search-container flex justify-center items-center p-2">
      <input type="text" placeholder="Search" value={searchText} className="search-input p-2.5 mr-1 border border-blue-900 rounded w-80 focus:bg-orange-100" onChange={(e) => setSearchText(e.target.value)} 
       onKeyDown={(e) => {
        if (e.key === 'Enter') {
          filterData();
        }
      }}></input>
      <button className="search-button bg-orange-500 cursor-pointer px-5 py-2.5 text-white rounded transition-colors duration-300" onClick={() => filterData()}>Search</button>
    </div>
      <div className="body flex flex-col sm:flex-row flex-wrap gap-3 justify-center">
        {restaurants.length === 0 ? (
       
          Array.from({ length: 10 }, (_, index) => (
            <Shimmer key={index} />
          ))
    ): (filteredRestaurants.length === 0 ? <div className="no-rest-found-body">No restaurants found</div> : filteredRestaurants?.map((rest) => (
          <RestaurantCard
            key = {rest.info.id}
            restaurentid = {rest?.info?.id}
            image={ IMG_CDN_URL + rest.info.cloudinaryImageId}
            name={rest.info.name}
            location={rest.info.locality}
            rating={rest.info.avgRating}
          />
        )))}
      </div>

      <UseMemoDemo/>

      <UseRefDemo/>
    </>
  );
};

export default Body;
