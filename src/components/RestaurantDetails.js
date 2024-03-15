import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CDN_URL, Swiggy_Menu_Item_Url } from "../../utils/constant";
import Shimmer from "./Shimmer";

const RestaurantDetails = () => {
  const {id} = useParams();
  const [restaurantDetails, setRestaurantsDetails] = useState(null);
  useEffect(() => {
    fetchRestaurantMenuItems();
  }, []);

  const fetchRestaurantMenuItems = async() => {
    const response = await fetch(Swiggy_Menu_Item_Url + id);
    const json = await response.json();
    setRestaurantsDetails(json.data);    
  }

  if(!restaurantDetails) return (<Shimmer />)

  console.log(restaurantDetails)
  const {name, avgRating, cuisines, sla, cloudinaryImageId, locality, totalRatingsString} = restaurantDetails.cards[0]?.card?.card?.info;
  const menuItems = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(name, avgRating, cuisines, sla, cloudinaryImageId, menuItems);

  return(
    <div className="parent-res-detail-container">
      <div className="main-res-info">
        <div className="res-details">
          <h3>{name}</h3>
          <p>{cuisines.join(", ")}</p>
          <p>{locality}</p>
        </div>
        <div className="main-res-rating">
          <h4>{avgRating + "⭐"}</h4>
          <p>{totalRatingsString}</p>
        </div>
        <img className="main-res-image" src={CDN_URL + cloudinaryImageId} />
      </div>
    </div>
  )
}

export default RestaurantDetails;