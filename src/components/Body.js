import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import loopData from '../../utils/MOCK_DATA.json'
import RestaurantCard from './RestaurantCard';
import Loading from './Loading';
import Shimmer from './Shimmer';
import { Swiggy_Url } from '../../utils/constant';
import useInternetStatusFinder from '../../utils/useInternetStatusFinder';

const BodyContainer = () => {
  let [restaurantsData, setRestaurantsData] = useState([]);
  let [isChecked, setIsChecked] = useState(false);
  let [search, setSearch] = useState("");
  let [loading, setLoading] = useState(true)

    // check internet connection
    const online = useInternetStatusFinder()

  useEffect(() => {
    //make api call

    // fetchData().then((res) => setLoading(false))

    //make swiggy apicall
    fetchData()
    
  }, []);
  

  const fetchData = async () => {
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {
    //     setRestaurantsData(loopData)
    //     resolve();
    //   }, 3000);
    // })

    let response = await fetch(Swiggy_Url);
    let data = await response.json();
    let parsedData = data?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    setRestaurantsData(parsedData);
  }


  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);

  }

  const handleRestaurantSearch = (e) => {
    setSearch(e.target.value)
  }

  let filterData = restaurantsData.length > 0 && restaurantsData.filter((res) => {
    return (
      (
        (!isChecked || (isChecked && res.info.avgRating > 4.5)) && 
        res.info.name.toLowerCase().includes(search)
      )
    )
  })

  if(!online) {
    return (<h1>Looks like you are offline. Please check you internet connection</h1>)
  }
  
  console.log(restaurantsData)
  return restaurantsData.length === 0 ? <Shimmer /> : (
    <div className='body-container'>
      <div className='action-container'>
        <div className='search-container'>
          <input className="search" type='text' value={search} placeholder='Search Restaurants' onChange={(e) => handleRestaurantSearch(e)}/>
        </div>
        <div className='filter-container'>
          <label htmlFor="restaurants">Top Rated Restaurants</label>
          <input 
            name='restaurants' 
            className='filter' 
            type='checkbox' 
            checked={isChecked}
            onChange={handleToggleCheckbox}/>
        </div>
      </div>
      <div className='parent-res-container'>
        <div className='res-container'>
          {filterData && filterData.length > 0 && filterData.map((res, index) => (
             <RestaurantCard key={res.info.id} resData={res.info} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default BodyContainer;