import {NavLink} from "react-router-dom";
// import { useDispatch } from "react-redux";

import "./assets/Navbar.css";

import logo from "../../assets/shared/desktop/logo.svg";
import cart from "./assets/icon-cart.svg";

const Navbar = ({toggleCart}) => {
  return (
    <>
      <nav className="navbar">
        <div className="container">
          <img src={logo} alt="logo" className="logo"/>
          <div className="nav--links">
              <NavLink
                to="/"
                className={({isActive}) => isActive ?  'link active' : 'link'}
              >
                Home
              </NavLink>
              <NavLink
                to="/headphones"
                className={({isActive}) => isActive ? 'link active' : 'link'}
              >
                Headphones
              </NavLink>
              <NavLink
                to="/speakers"
                className={({isActive}) => isActive ? 'link active' : 'link'}
              >
                Speakers
              </NavLink>
              <NavLink
                to="/earphones"
                className={({isActive}) => isActive ? 'link active' : 'link'}
              >
                Earphones
              </NavLink>
          </div>
          <div className="cart-img" onClick={() => toggleCart()}>
              <img src={cart} alt="cart" />
          </div>
        </div>
        <div className="line"></div>
      </nav>
    </>
  )
}

export default Navbar