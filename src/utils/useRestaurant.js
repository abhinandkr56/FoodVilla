import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";


const useRestaurant = (restarentId) => {
    const [menus, setMenus] = useState([]);

    useEffect(() => {
        getRestaurentMenu();
    },[]);

    const getRestaurentMenu = async() => {
        const data = await fetch(FETCH_MENU_URL + restarentId);
        
        var jsonData = await data.json();
        console.log(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setMenus(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    // return jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    }

    return menus;
}

export default useRestaurant;