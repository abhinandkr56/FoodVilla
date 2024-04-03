import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../constants";


const useRestaurant = (restarentId) => {
    const [menus, setMenus] = useState([
        {
            card:{
                info:{
                    name : "Item1",
                    description:"item 1 is good",
                    id : 1,
                    IMG_CDN_URL : "nnz4fwtwbgwkscikeqiv"
                }
            }
        },{
            card:{
                info:{
                    name : "Item2",
                    description:"item 2 is good",
                    id : 2,
                    IMG_CDN_URL : "nnz4fwtwbgwkscikeqiv"
                }
            },},
            {
            card:{
                info:{
                    name : "Item3",
                    description:"item 3 is good",
                    id : 3,
                    IMG_CDN_URL : "nnz4fwtwbgwkscikeqiv"
                }
            },},
            {
            card:{
                info:{
                    name : "Item4",
                    description:"item 4 is good",
                    id : 4,
                    IMG_CDN_URL : "nnz4fwtwbgwkscikeqiv"
                }
            }}
        
    ]);

    useEffect(() => {
        getRestaurentMenu();
    },[]);

    const getRestaurentMenu = async() => {
        const data = await fetch(FETCH_MENU_URL + restarentId);
        
        var jsonData = await data.json();
        console.log(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        if(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards.length > 0){
            setMenus(jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
        }
    // return jsonData.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    }

    return menus;
}

export default useRestaurant;