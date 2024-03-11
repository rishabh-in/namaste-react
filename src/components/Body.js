import { useEffect, useState } from 'react';
import loopData from '../../utils/MOCK_DATA.json'
import RestaurantCard from './RestaurantCard';

const BodyContainer = () => {
  let [restaurantsData, setRestaurantsData] = useState(loopData);
  let [isChecked, setIsChecked] = useState(false)
  
  useEffect(() => {
    if(isChecked) {
      let filterRestaurantData = restaurantsData.filter((res) => {
        return res.info.avgRatingString > 4.5;
      })
      setRestaurantsData(filterRestaurantData)
    } else {
      setRestaurantsData(loopData)
    }
  }, [isChecked])


  const handleToggleCheckbox = () => {
    setIsChecked(!isChecked);

  }

  console.log(restaurantsData)
  return(
    <div className='body-container'>
      <div className='action-container'>
        <div className='search-container'>
          <input className="search" type='text' placeholder='Search Restaurants' />
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
      <div className='res-container'>
        {restaurantsData && restaurantsData.length > 0 && restaurantsData.map((res, index) => (
          <RestaurantCard key={res.info.id} resData={res.info} />
        ))}

      </div>
    </div>
  )
}

export default BodyContainer;