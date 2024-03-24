import { CDN_URL } from "../../utils/constant"

const MenuItem = (props) => {
  const {name, price, description, imageId} = props.item
  console.log(props.item)
  return (
    <div className="res-menu-card">
      <div className="menu-item-details">
        <div className="item-info">
          <div className="item-title">{name}</div>
          <div className="item-price">{"Price " + price / 100 + "Rs"}</div>
          <div className="item-description">{description}</div>
        </div>
        <div className="item-img-container">
          <img className="item-img" src={CDN_URL + imageId} />
        </div>
      </div>
    </div>
  )
}

export default MenuItem