import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

import Navbar from '../components/Navbar/Navbar'
import Cart from '../features/cart/Cart'

const SharedLayout = () => {

  const [displayCart, setDisplayCart] = useState(false);

  const toggleCart = () => {
    setDisplayCart(!displayCart)
    console.log("getting here")
  }

  return (
    <>
      <Navbar toggleCart={toggleCart} />
      {displayCart && <Cart toggleCart={toggleCart} />}
      <Outlet context={[displayCart, setDisplayCart]} />
      <Footer />
    </>
  )
}

export default SharedLayout