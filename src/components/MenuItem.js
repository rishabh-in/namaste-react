import { Fragment } from "react"
import { CDN_URL } from "../../utils/constant"
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/appSlices/cartSlice";

const MenuItem = (props) => {
  const dispatch = useDispatch();
  const {name, price, description, imageId} = props?.item?.card?.info;

  const handleAddItems = (item) => {
    dispatch(addItem(item))
  }
  return (
    <Fragment>
      <div className="flex justify-between px-4 mb-8 border-b-2">
        <div className="w-[80%]">
          <p className="font-bold text-xl">{name}</p>
          <p>{description}</p>
          <p>Price: {price / 100} Rs</p>
        </div>
        <div className="relative w-[20%] p-2">
          <div className="absolute bg-white text-black rounded-md p-1">
            <button onClick={() => handleAddItems(props?.item)}>Add +</button>
          </div>
          <img className="rounded-md" src={CDN_URL + imageId}/>
        </div>
      </div>
    </Fragment>
  )
}

export default MenuItem