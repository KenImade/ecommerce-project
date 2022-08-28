import { useDispatch, useSelector } from "react-redux";
import {useEffect} from "react";
import { Link } from "react-router-dom";

import formatter from "../../utils/currencyFormatter";

import "./assets/Cart.css";
import { getCart, removeAllItems } from "./cartSlice";
import CartCard from "./components/CartCard";

const Cart = ({toggleCart}) => {
  const dispatch = useDispatch();

  const cartItems = useSelector(getCart)

  const itemCards = cartItems.map(item => {
    return <CartCard  key={item.id} product={item} />
  })

  const getSum = (total, item) => {
    return total + (item.price * item.quantity);
  }

  const total = cartItems.reduce(getSum, 0);

  useEffect(() => {
    document.body.style.overflowY = "hidden";
   
    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, []);

  return (
    <section className="cart">
      <div className="container">
        <div className="row cart-header">
          <h6>
            Cart 
            {cartItems.length > 0 ? <span>{`(${cartItems.length})`}</span> : ""}
          </h6>
          <button
            className="clear-cart-btn"
            onClick={() => dispatch(removeAllItems())}
          >
            Remove all
          </button>
        </div>
        <div 
          className="items" 
          style={{overflowY: cartItems.length === 0 ? "hidden" : "auto"}}
        >
          {itemCards}
        </div>
        <div className="cart-actions">
          <div className="cart-total row">
            <p className="body">Total</p>
            <div>{formatter.format(total)}</div>
          </div>
          <Link className="cart-checkout-btn" to={"checkout"}>checkout</Link>
        </div>
      </div>
    </section>
  )
}

export default Cart