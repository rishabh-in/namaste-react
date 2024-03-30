import { clearCart } from "../../redux/appSlices/cartSlice";
import MenuItem from "./MenuItem";
import { Selector, useDispatch, useSelector } from "react-redux";
const Cart = (props) => {
  console.log(props)
  const cartItems = useSelector((store) => store.cart.cartItems);

  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart())
  }
  return(
    <div className="flex flex-col justify-center items-center text-3xl p-3 m-3">
      <div className="flex justify-between p-5 m-5 w-6/12">
        <h1>Cart</h1>
        <button onClick={handleClearCart} className="text-md border border-black rounded-lg text-lg bg-black text-white">Clear Cart</button>
      </div>
      <div className="p-3 m-5 text-xl w-6/12">
        {cartItems.map((item, index) => (
          <MenuItem key={item.card.info.id} 
            item={item} 
          />
        ))}
      </div>
    </div>
  )
}

export default Cart;