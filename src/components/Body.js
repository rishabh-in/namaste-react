import { useEffect, useState } from 'react';
import loopData from '../../utils/MOCK_DATA.json'
import RestaurantCard from './RestaurantCard';
import Loading from './Loading';
import Shimmer from './Shimmer';

const BodyContainer = () => {
  let [restaurantsData, setRestaurantsData] = useState([]);
  let [isChecked, setIsChecked] = useState(false);
  let [search, setSearch] = useState("");
  let [loading, setLoading] = useState(true)

  useEffect(() => {
    //make api call
    fetchData().then((res) => setLoading(false))
    
  }, []);
  

  const fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        setRestaurantsData(loopData)
        resolve();
      }, 3000);
    })
  }


  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);

  }

  const handleRestaurantSearch = (e) => {
    setSearch(e.target.value)
  }

  let filterData = restaurantsData.filter((res) => {
    return (
      (
        (!isChecked || (isChecked && res.info.avgRating > 4.5)) && 
        res.info.name.toLowerCase().includes(search)
      )
    )
  })

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