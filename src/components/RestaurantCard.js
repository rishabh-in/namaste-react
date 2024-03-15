import { Link } from "react-router-dom";
import { CDN_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  let {resData} = props;
  let {name, avgRating, cuisines, sla, cloudinaryImageId, id} = resData;
  return (
    <div className='res-card'>
      <Link to={"/restaurant/" + id}>
        <div className='restaurant-image-container'>
          <img className='res-img' src={CDN_URL+cloudinaryImageId}></img>
        </div>
        <div className='res-info'>
          <h3 className='res-name'>{name}</h3>
          <h5 className='res-rating'>{"Rating "+avgRating+ "⭐"}</h5>
          <h5 className='res-cuisines'>{cuisines.join(", ")}</h5>
          <h5 className='res-eta'>{"Get it in "+sla.deliveryTime+ " mins"}</h5>
        </div>
      </Link>
    </div>
  )
}

export default RestaurantCard;