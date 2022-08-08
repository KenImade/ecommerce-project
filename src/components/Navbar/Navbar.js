import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
        <div>
            <img src="#" alt="logo" />
        </div>

        <div>
            <NavLink to="#">Home</NavLink>
            <NavLink to="#">Headphones</NavLink>
            <NavLink to="#">Speakers</NavLink>
            <NavLink to="#">Earphones</NavLink>
        </div>

        <div>
            Cart
        </div>
    </nav>
  )
}

export default Navbar