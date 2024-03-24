import { useState } from "react";
import MenuItem from "./MenuItem";

const RestaurantCategory = (props) => {
  const {category, showIndex, setShowIndex, index} = props;
  
  const handleShowItemList = () => {
    showIndex ? setShowIndex(null) : setShowIndex(index);
  }
  console.log(index, showIndex)
  return(
    <div className="shadow-lg rounded-lg bg-slate-100" >
      <div className="flex justify-between h-15 p-2 cursor-pointer" onClick={() => handleShowItemList()}>
       <span className="font-bold text-lg">{category.title} ({category.itemCards.length})</span>
       <span>🔽</span>
      </div>
      <div className="h-15 p-1 my-6">
        {showIndex && category && category.itemCards.map((item, index) => (
          <MenuItem key={item.card.info.id} 
            item={item} 
          />
        ))}
      </div>
    </div>
  )
}

export default RestaurantCategory;