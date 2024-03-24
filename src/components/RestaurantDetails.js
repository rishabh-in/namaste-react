import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { useState } from "react";
import MenuItem from "./MenuItem";
import useFetchRestaurantMenu from "../../utils/useFetchRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantDetails = () => {
  const [showIndex, setShowIndex] = useState(null);
  const {id} = useParams();
  let restaurantDetails = useFetchRestaurantMenu(id);

  if(!restaurantDetails) return (<Shimmer />)

  const {name, avgRating, cuisines, sla, cloudinaryImageId, locality, totalRatingsString} = restaurantDetails.cards[0]?.card?.card?.info;
  const menuItems = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
  const categories = menuItems.filter((c) => {
    return c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  })
  return(
    <div className="parent-res-detail-container">
      <div className="main-res-info ">
        <div className="res-details">
          <h2 className="font-bold text-2xl">{name}</h2>
          <p>{cuisines.join(", ")}</p>
          <p>{locality}</p>
        </div>
        <div className="main-res-rating">
          <h4>{avgRating + "⭐"}</h4>
          <p>{totalRatingsString}</p>
        </div>
      </div>
      {/* Menu Items */}
      <div className="res-menu-container">
        {categories && categories.length > 0 && categories.map((category, index) => (
          <RestaurantCategory 
            key={category.card.card.title} 
            category={category.card.card}             
            index={index} 
            showIndex={index == showIndex} 
            setShowIndex={setShowIndex}/>
        ))}
      </div>
    </div>
  )
}

export default RestaurantDetails;