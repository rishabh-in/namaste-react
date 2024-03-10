import React from 'react';
import ReactDom from 'react-dom/client';
import resData from './temp/MOCK_DATA.json'

let loopData = resData.splice(0, 30);
console.log(loopData)
const root = ReactDom.createRoot(document.getElementById("root"));

/** 
 * Header
 *  -logo
 *  -Menu Items
 * 
 * Body
 *  -Search bar
 *    -Input
 *    -Search Button
 *  -RestaurantCard Card container
 *    -Res Card
 *      -Img
 *      -RestaurantCard Name, start rating, ETA
 * 
 * 
*/

const Header = () => {
  return (
    <div className='header'>
      <div className='logo-container'>
        <img className="logo" src='https://www.creativefabrica.com/wp-content/uploads/2020/02/11/Food-Logo-Graphics-1-70.jpg' />
      </div>
      <div className='nav-items'>
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

const RestaurantCard = (props) => {
  let {resData} = props;
  let {name, avgRating, cuisines, sla, cloudinaryImageId} = resData;
  return (
    <div className='res-card'>
      <div className='restaurant-image-container'>
        <img className='res-img' src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId}></img>
      </div>
      <div className='res-info'>
        <h3 className='res-name'>{name}</h3>
        <h5 className='res-rating'>{"Rating "+avgRating+ "⭐"}</h5>
        <h5 className='res-cuisines'>{cuisines.join(", ")}</h5>
        <h5 className='res-eta'>{"Get it in "+sla.deliveryTime+ " mins"}</h5>
      </div>
    </div>
  )
}

const BodyContainer = () => {
  return(
    <div className='body-container'>
      <div className='search-container'>Search</div>
      <div className='res-container'>
        {loopData && loopData.length > 0 && loopData.map((res, index) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}

      </div>
    </div>
  )
}

const App = () => {
  return (
    <div className='app'>
      <Header />
      <BodyContainer />
    </div>
  )
}

root.render(<App/>)