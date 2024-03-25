export const filter =(searchText, restaurants) => {
    if(searchText == ""){
      return restaurants;
    }
    else{
      var newRestaurants = restaurants?.filter(x => x.info.name.toLowerCase().includes(searchText.toLowerCase()));
      return newRestaurants;
    }
  }