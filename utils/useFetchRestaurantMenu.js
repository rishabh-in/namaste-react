import { useEffect, useState } from "react";
import { Swiggy_Menu_Item_Url } from "./constant";

const useFetchRestaurantMenu= (id) => {
  const [restaurantDetails, setRestaurantsDetails] = useState(null);

  useEffect(() => {
    fetchRestaurantMenuItems();
  }, []);

  const fetchRestaurantMenuItems = async() => {
    const response = await fetch(Swiggy_Menu_Item_Url + id);
    const json = await response.json();
    setRestaurantsDetails(json.data);    
  }
  return restaurantDetails;
}

export default useFetchRestaurantMenu;