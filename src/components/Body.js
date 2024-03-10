import loopData from '../../utils/MOCK_DATA.json'
import RestaurantCard from './Footer.js/RestaurantCard';

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

export default BodyContainer;