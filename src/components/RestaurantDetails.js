import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import MenuItem from "./MenuItem";
import useFetchRestaurantMenu from "../../utils/useFetchRestaurantMenu";

const RestaurantDetails = () => {
  const {id} = useParams();
  let restaurantDetails = useFetchRestaurantMenu(id);

  if(!restaurantDetails) return (<Shimmer />)

  const {name, avgRating, cuisines, sla, cloudinaryImageId, locality, totalRatingsString} = restaurantDetails.cards[0]?.card?.card?.info;
  const menuItems = restaurantDetails?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
  console.log(restaurantDetails, menuItems)

  return(
    <div className="parent-res-detail-container">
      <div className="main-res-info">
        <div className="res-details">
          <h2>{name}</h2>
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
        {menuItems && menuItems.length > 0 && menuItems.map((item) => (
          <MenuItem key={item.id} item={item.card.info} />
        ))}
      </div>
    </div>
  )
}

export default RestaurantDetails;